"use client";

import { useState } from "react";
import { Search, Filter, Crown, Music, ExternalLink } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { usePlayerStore } from "~/stores/use-player-store";
import { getPlayUrl } from "~/actions/generation";

interface NFTSong {
  id: string;
  title: string;
  prompt: string | null;
  thumbnailUrl: string | null;
  nftCollection: string | null;
  nftRoyalty: number | null;
  createdAt: Date;
  user: {
    name: string | null;
    walletAddress: string | null;
  };
  _count: {
    likes: number;
  };
  categories: Array<{ name: string }>;
}

interface NFTMarketplaceClientProps {
  songs: NFTSong[];
}

export function NFTMarketplaceClient({ songs }: NFTMarketplaceClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const { setTrack } = usePlayerStore();

  // Get unique collections
  const collections = ["all", ...Array.from(new Set(songs.map(song => song.nftCollection).filter(Boolean))) as string[]];

  // Filter songs based on search and collection
  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.prompt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCollection = selectedCollection === "all" || song.nftCollection === selectedCollection;
    return matchesSearch && matchesCollection;
  });

  const handlePlay = async (song: NFTSong) => {
    setIsLoading(song.id);
    try {
      const playUrl = await getPlayUrl(song.id);
      setTrack({
        id: song.id,
        title: song.title,
        url: playUrl,
        artwork: song.thumbnailUrl,
        prompt: song.prompt,
        createdByUserName: song.user.name,
      });
    } catch (error) {
      console.error("Failed to get play URL:", error);
    } finally {
      setIsLoading(null);
    }
  };

  const formatWalletAddress = (address: string | null) => {
    if (!address) return "Unknown";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search NFTs by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background text-sm"
          >
            {collections.map(collection => (
              <option key={collection} value={collection}>
                {collection === "all" ? "All Collections" : collection}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total NFTs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{songs.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{collections.length - 1}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {songs.reduce((sum, song) => sum + song._count.likes, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Royalty</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {songs.length > 0 
                ? `${(songs.reduce((sum, song) => sum + (song.nftRoyalty || 0), 0) / songs.length).toFixed(1)}%`
                : "0%"
              }
            </div>
          </CardContent>
        </Card>
      </div>

      {/* NFT Grid */}
      {filteredSongs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSongs.map((song) => (
            <Card key={song.id} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  {song.thumbnailUrl ? (
                    <img
                      src={song.thumbnailUrl}
                      alt={song.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-muted">
                      <Music className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* NFT Badge */}
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      <Crown className="h-3 w-3 mr-1" />
                      NFT
                    </Badge>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      onClick={() => handlePlay(song)}
                      disabled={isLoading === song.id}
                      className="h-12 w-12 rounded-full"
                    >
                      {isLoading === song.id ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <Music className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div>
                  <CardTitle className="text-lg font-semibold line-clamp-1">
                    {song.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {song.prompt || "AI-generated music track"}
                  </CardDescription>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    by {song.user.name || "Unknown Artist"}
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">
                    {song.nftRoyalty}% royalty
                  </span>
                </div>

                {song.nftCollection && (
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {song.nftCollection}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {song._count.likes} likes
                    </span>
                  </div>
                )}

                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Owner: {formatWalletAddress(song.user.walletAddress)}</span>
                    <span>{song.createdAt.toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Music className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No NFTs Found</h3>
          <p className="text-muted-foreground">
            {searchQuery || selectedCollection !== "all"
              ? "Try adjusting your search or filter criteria."
              : "No music NFTs have been minted yet. Be the first to create one!"
            }
          </p>
        </div>
      )}
    </div>
  );
}
