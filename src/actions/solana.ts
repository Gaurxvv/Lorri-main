"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "~/lib/auth";
import { db } from "~/server/db";

export async function updateUserWalletAddress(walletAddress: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  await db.user.update({
    where: { id: session.user.id },
    data: { walletAddress },
  });
}

export async function mintSongAsNFT(songId: string, collectionName?: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  const song = await db.song.findUnique({
    where: { 
      id: songId,
      userId: session.user.id,
    },
    select: {
      id: true,
      title: true,
      prompt: true,
      s3Key: true,
      thumbnailS3Key: true,
      audioDuration: true,
      instrumental: true,
    },
  });

  if (!song) {
    throw new Error("Song not found");
  }

  if (!song.s3Key) {
    throw new Error("Song audio not ready yet");
  }

  // For now, we'll just mark the song as an NFT
  // In a real implementation, you'd call the Solana program to mint the NFT
  // and then update the database with the mint address
  
  const nftMetadata = {
    name: song.title,
    symbol: "MUSIC",
    description: song.prompt || "AI-generated music track",
    image: song.thumbnailS3Key ? `https://your-s3-bucket.s3.amazonaws.com/${song.thumbnailS3Key}` : "",
    attributes: [
      {
        trait_type: "Duration",
        value: song.audioDuration ? `${Math.round(song.audioDuration)}s` : "Unknown",
      },
      {
        trait_type: "Instrumental",
        value: song.instrumental ? "Yes" : "No",
      },
      {
        trait_type: "Type",
        value: "AI Generated Music",
      },
      {
        trait_type: "Collection",
        value: collectionName || "Lorri Music",
      },
    ],
    properties: {
      files: [
        {
          type: "audio/mpeg",
          uri: `https://your-s3-bucket.s3.amazonaws.com/${song.s3Key}`,
        },
      ],
      category: "audio",
    },
  };

  await db.song.update({
    where: { id: songId },
    data: {
      isNFT: true,
      nftCollection: collectionName || "Lorri Music",
      nftMetadata: JSON.stringify(nftMetadata),
      nftOwner: session.user.id, // For now, using user ID. In real implementation, this would be the wallet address
      nftRoyalty: 5.0, // 5% royalty
    },
  });

  return { success: true, metadata: nftMetadata };
}

export async function getNFTMetadata(songId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  const song = await db.song.findUnique({
    where: { 
      id: songId,
      OR: [
        { userId: session.user.id },
        { published: true }
      ],
    },
    select: {
      id: true,
      title: true,
      isNFT: true,
      nftMetadata: true,
      nftOwner: true,
      nftCollection: true,
      nftRoyalty: true,
      user: {
        select: {
          name: true,
          walletAddress: true,
        },
      },
    },
  });

  if (!song) {
    throw new Error("Song not found");
  }

  return song;
}
