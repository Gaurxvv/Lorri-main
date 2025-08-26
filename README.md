# 🎵 Lorri - AI Music Generation + Solana NFTs

<div align="center">

![Lorri Logo](https://img.shields.io/badge/Lorri-AI%20Music%20Generator-purple?style=for-the-badge&logo=music)
![Solana](https://img.shields.io/badge/Solana-NFT%20Platform-green?style=for-the-badge&logo=solana)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)

**Transform your ideas into unique music tracks using cutting-edge AI, then mint them as NFTs on Solana blockchain.**

[🚀 Live Demo](#) • [📖 Documentation](#) • [💬 Discord](#) • [🐛 Report Bug](#)

</div>

---

## ✨ What is Lorri?

**Lorri** is a revolutionary platform that combines the power of artificial intelligence with blockchain technology to democratize music creation. Users can generate unique, professional-quality music tracks from simple text descriptions and transform them into verifiable NFTs on the Solana blockchain.

### 🌟 Key Features

- **🎼 AI-Powered Music Generation** - Create music from text descriptions
- **💎 Solana NFT Minting** - Transform music into tradeable NFTs
- **💰 Royalty System** - Earn passive income from NFT sales
- **⚡ Lightning Fast** - Get results in seconds, not hours
- **🔒 Secure & Transparent** - Built on Solana blockchain
- **🌍 Global Community** - Connect with music creators worldwide

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Solana wallet (Phantom, Solflare, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lorri.git
   cd lorri
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/lorri"
   
   # Authentication
   BETTER_AUTH_SECRET="your-secret-key"
   
   # AWS S3 (for audio storage)
   AWS_ACCESS_KEY_ID="your-aws-key"
   AWS_SECRET_ACCESS_KEY="your-aws-secret"
   AWS_REGION="us-east-1"
   S3_BUCKET_NAME="your-bucket-name"
   
   # Modal AI (for music generation)
   MODAL_KEY="your-modal-key"
   MODAL_SECRET="your-modal-secret"
   GENERATE_FROM_DESCRIPTION="https://your-modal-endpoint"
   GENERATE_FROM_DESCRIBED_LYRICS="https://your-modal-endpoint"
   GENERATE_WITH_LYRICS="https://your-modal-endpoint"
   ```

4. **Set up the database**
   ```bash
   # Start PostgreSQL (if using Docker)
   ./start-database.sh
   
   # Run database migrations
   npm run db:push
   
   # Generate Prisma client
   npx prisma generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎯 How It Works

### 1. **Describe Your Music** 🎵
Simply describe the music you want to create:
- "A dreamy lofi hip hop song, perfect for studying or relaxing"
- "Epic movie score with orchestral elements and driving percussion"
- "80s synth-pop with catchy melodies and retro vibes"

### 2. **AI Generates** 🤖
Our advanced AI creates unique, high-quality music based on your description:
- Professional-grade audio quality
- Multiple generation parameters (guidance scale, duration, etc.)
- Support for instrumental and vocal tracks
- Results in seconds, not hours

### 3. **Mint as NFT** 💎
Transform your music into a unique NFT on Solana:
- Rich metadata with song details and artwork
- Automatic royalty distribution (5% default)
- Verifiable ownership on blockchain
- Tradeable on NFT marketplaces

---

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Lucide React** - Icon library

### **Backend**
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Better Auth** - Authentication system
- **Inngest** - Background job processing

### **Blockchain**
- **Solana** - High-performance blockchain
- **Wallet Adapter** - Multi-wallet support
- **NFT Standards** - Metaplex compatibility

### **AI & Storage**
- **Modal AI** - Music generation endpoints
- **AWS S3** - Audio file storage
- **Presigned URLs** - Secure file access

---

## 🎨 Features

### **Music Creation**
- **Simple Mode** - Text-to-music generation
- **Custom Mode** - Lyrics + style prompts
- **Instrumental Toggle** - Generate with/without vocals
- **Multiple Parameters** - Guidance scale, duration, seed

### **NFT Functionality**
- **Metadata Standards** - Compatible with major marketplaces
- **Collection Management** - Organize NFTs into custom collections
- **Royalty System** - Configurable royalty percentages
- **Ownership Verification** - Clear blockchain proof

### **User Experience**
- **Real-time Generation** - Watch your music being created
- **Search & Filter** - Find tracks by title, prompt, or collection
- **Social Features** - Like, share, and discover music
- **Mobile Responsive** - Works on all devices

---

## 📱 Screenshots

<div align="center">

![Landing Page](https://via.placeholder.com/800x400/6366f1/ffffff?text=Stunning+Landing+Page)
![Music Creation](https://via.placeholder.com/800x400/ec4899/ffffff?text=AI+Music+Generation)
![NFT Marketplace](https://via.placeholder.com/800x400/10b981/ffffff?text=Solana+NFT+Marketplace)

</div>

---

## 🔧 Development

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push schema changes
npm run db:generate  # Generate Prisma client
npm run db:studio    # Open Prisma Studio

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run typecheck    # TypeScript type checking
npm run format:check # Check Prettier formatting
npm run format:write # Format code with Prettier
```

### **Project Structure**

```
lorri/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (main)/            # Protected main app routes
│   │   └── api/               # API endpoints
│   ├── components/             # React components
│   │   ├── create/            # Music creation components
│   │   ├── home/              # Dashboard components
│   │   ├── solana/            # Solana/NFT components
│   │   ├── sidebar/           # Navigation components
│   │   └── ui/                # Reusable UI components
│   ├── actions/                # Server actions
│   ├── lib/                    # Utility functions
│   ├── stores/                 # State management
│   └── styles/                 # Global styles
├── prisma/                     # Database schema
├── public/                     # Static assets
└── docs/                       # Documentation
```

---

## 🌐 Deployment

### **Vercel (Recommended)**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically on push

### **Docker**

```bash
# Build the image
docker build -t lorri .

# Run the container
docker run -p 3000:3000 lorri
```

### **Environment Variables**

Make sure to set all required environment variables in your production environment:

```env
NODE_ENV=production
DATABASE_URL="your-production-database-url"
BETTER_AUTH_SECRET="your-production-secret"
# ... other variables
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### **Development Setup**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Style**

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features

---


## 🙏 Acknowledgments

- **Solana Foundation** - For the amazing blockchain platform
- **Modal AI** - For music generation capabilities
- **Next.js Team** - For the incredible React framework
- **Prisma Team** - For the excellent database ORM
- **shadcn/ui** - For the beautiful component library

---

<div align="center">

**Made with ❤️ by the Lorri Team**

</div>
