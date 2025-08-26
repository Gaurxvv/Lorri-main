import { ArrowRight, Music, Sparkles, Crown, Zap, Users, Globe, Shield, Play, Download, Wallet, Brain, Star, TrendingUp, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 text-white">
        <div className="flex items-center gap-2 animate-fade-in-scale">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse-glow">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">Lorri</span>
        </div>
        <div className="flex items-center gap-4 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
          <Link href="/auth/sign-in">
            <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6 animate-slide-up">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-medium bg-yellow-400/10 px-4 py-2 rounded-full backdrop-blur-sm">
              AI-Powered Music Generation
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Create Music with
            <span className="block animate-gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Transform your ideas into unique music tracks using cutting-edge AI, then mint them as NFTs on Solana blockchain. 
            Own, trade, and earn royalties from your digital music creations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <Link href="/auth/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 animate-pulse-glow">
                Start Creating Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 glass">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400 animate-fade-in-scale" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure on Solana</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>5K+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 animate-fade-in-scale">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Lorri</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Generation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover-lift animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Creation</h3>
              <p className="text-gray-300">
                Generate unique music tracks from simple text descriptions. Our advanced AI understands your vision and creates professional-quality music.
              </p>
            </div>

            {/* Solana NFTs */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover-lift animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Solana NFTs</h3>
              <p className="text-gray-300">
                Mint your music as NFTs on Solana blockchain. Low fees, fast transactions, and automatic royalty distribution on every sale.
              </p>
            </div>

            {/* Instant Results */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover-lift animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Get your music in seconds, not hours. Our optimized AI generates high-quality tracks faster than traditional music production.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover-lift animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Community</h3>
              <p className="text-gray-300">
                Connect with music creators worldwide. Share, collaborate, and discover unique AI-generated music from our growing community.
              </p>
            </div>

            {/* Royalties */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover-lift animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Earn Royalties</h3>
              <p className="text-gray-300">
                Set up to 10% royalties on your music NFTs. Earn passive income every time your music is traded on the marketplace.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover-lift animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Transparent</h3>
              <p className="text-gray-300">
                Built on Solana blockchain for maximum security. All transactions are transparent and verifiable on the public ledger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 animate-fade-in-scale">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Works</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white animate-pulse-glow">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Describe Your Music</h3>
              <p className="text-gray-300">
                Simply describe the music you want to create. Our AI understands your vision and generates the perfect track.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white animate-pulse-glow" style={{ animationDelay: '1s' }}>
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Generates</h3>
              <p className="text-gray-300">
                Our advanced AI creates unique, high-quality music based on your description. Get results in seconds.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white animate-pulse-glow" style={{ animationDelay: '2s' }}>
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mint as NFT</h3>
              <p className="text-gray-300">
                Transform your music into a unique NFT on Solana. Own, trade, and earn royalties from your creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-gradient-text">10K+</div>
              <div className="text-gray-300">Songs Created</div>
            </div>
            <div className="animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-gradient-text">5K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-gradient-text">1K+</div>
              <div className="text-gray-300">NFTs Minted</div>
            </div>
            <div className="animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-gradient-text">$50K+</div>
              <div className="text-gray-300">Royalties Paid</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-scale">
            Ready to Create Your First AI Music NFT?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            Join thousands of creators who are already earning from their AI-generated music on Solana blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
            <Link href="/auth/sign-up">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 animate-pulse-glow">
                <Music className="mr-2 w-5 h-5" />
                Start Creating Now
              </Button>
            </Link>
            <Link href="/auth/sign-in">
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 hover:scale-105 transition-all duration-300 glass">
                <Wallet className="mr-2 w-5 h-5" />
                Connect Wallet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Lorri</span>
          </div>
          <p className="text-gray-400 mb-4">
            The future of AI-generated music on Solana blockchain
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <span>© 2025 Lorri. All rights reserved.</span>
            <span>•</span>
            <span>Built on Solana</span>
            <span>•</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
