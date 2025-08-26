"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Loader2, Sparkles, Crown, Music } from "lucide-react";
import { mintSongAsNFT } from "~/actions/solana";
import { toast } from "sonner";

interface NFTMintButtonProps {
  songId: string;
  songTitle: string;
  isAlreadyNFT: boolean;
  nftCollection?: string | null;
}

export function NFTMintButton({ songId, songTitle, isAlreadyNFT, nftCollection }: NFTMintButtonProps) {
  const { connected, publicKey } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  const [collectionName, setCollectionName] = useState(nftCollection || "Lorri Music");
  const [isMinting, setIsMinting] = useState(false);

  const handleMint = async () => {
    if (!connected || !publicKey) {
      toast.error("Please connect your wallet first");
      return;
    }

    setIsMinting(true);
    try {
      await mintSongAsNFT(songId, collectionName);
      toast.success("Song minted as NFT successfully!");
      setIsOpen(false);
      // You might want to refresh the page or update the UI here
      window.location.reload();
    } catch (error) {
      console.error("Minting failed:", error);
      toast.error("Failed to mint NFT. Please try again.");
    } finally {
      setIsMinting(false);
    }
  };

  if (isAlreadyNFT) {
    return (
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
          <Crown className="h-3 w-3 mr-1" />
          NFT
        </Badge>
        <span className="text-xs text-muted-foreground">
          {nftCollection || "Lorri Music"}
        </span>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={!connected}
          className="flex items-center gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950"
        >
          <Sparkles className="h-4 w-4" />
          Mint as NFT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            Mint Song as NFT
          </DialogTitle>
          <DialogDescription>
            Transform your AI-generated song "{songTitle}" into a unique NFT on Solana blockchain.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="collection" className="text-right">
              Collection
            </Label>
            <Input
              id="collection"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              className="col-span-3"
              placeholder="Enter collection name"
            />
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>What you'll get:</strong>
            </p>
            <ul className="text-sm text-blue-700 dark:text-blue-300 mt-2 space-y-1">
              <li>• Unique NFT with your song metadata</li>
              <li>• 5% royalty on future sales</li>
              <li>• Verifiable ownership on blockchain</li>
              <li>• Tradeable on NFT marketplaces</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleMint}
            disabled={isMinting || !collectionName.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {isMinting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Minting...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Mint NFT
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
