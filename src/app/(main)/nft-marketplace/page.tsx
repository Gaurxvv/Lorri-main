import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "~/lib/auth";
import { db } from "~/server/db";
import { getPresignedUrl } from "~/actions/generation";
import { NFTMarketplaceClient } from "~/components/solana/nft-marketplace-client";

export default async function NFTMarketplacePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  // Fetch all NFT songs
  const nftSongs = await db.song.findMany({
    where: {
      isNFT: true,
      published: true,
    },
    include: {
      user: {
        select: {
          name: true,
          walletAddress: true,
        },
      },
      _count: {
        select: {
          likes: true,
        },
      },
      categories: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Add thumbnail URLs
  const nftSongsWithUrls = await Promise.all(
    nftSongs.map(async (song) => {
      const thumbnailUrl = song.thumbnailS3Key
        ? await getPresignedUrl(song.thumbnailS3Key)
        : null;

      return {
        ...song,
        thumbnailUrl,
      };
    }),
  );

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">NFT Marketplace</h1>
        <p className="text-muted-foreground mt-2">
          Discover and collect unique AI-generated music NFTs on Solana
        </p>
      </div>

      <NFTMarketplaceClient songs={nftSongsWithUrls} />
    </div>
  );
}
