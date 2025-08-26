"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "~/components/ui/button";
import { Wallet, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { updateUserWalletAddress } from "~/actions/solana";

export function WalletButton() {
  const { publicKey, disconnect, connected } = useWallet();
  const [isUpdating, setIsUpdating] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log("Wallet state:", { connected, publicKey: publicKey?.toString() });
  }, [connected, publicKey]);

  // Update user's wallet address in database when wallet connects
  useEffect(() => {
    if (connected && publicKey) {
      const updateWallet = async () => {
        setIsUpdating(true);
        try {
          await updateUserWalletAddress(publicKey.toString());
        } catch (error) {
          console.error("Failed to update wallet address:", error);
        } finally {
          setIsUpdating(false);
        }
      };
      
      updateWallet();
    }
  }, [connected, publicKey]);

  if (connected) {
    console.log("Rendering connected state with publicKey:", publicKey?.toString());
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-950 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium text-green-700 dark:text-green-300">
            {publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={disconnect}
          disabled={isUpdating}
          className="flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Disconnect
        </Button>
      </div>
    );
  }

  console.log("Rendering disconnected state");
  return (
    <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-blue-600 !text-white !border-0 !px-4 !py-2 !rounded-lg !font-medium hover:!from-purple-700 hover:!to-blue-700 transition-all duration-200 flex items-center gap-2">
      <Wallet className="h-4 w-4" />
      Connect Wallet
    </WalletMultiButton>
  );
}
