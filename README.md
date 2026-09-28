# Shieldify - Crypto Loan Insurance Platform

A fully functional, ultra-design decentralized insurance platform for crypto lending positions.

## 🚀 Features

- **Wallet Connect**: Connect via MetaMask, WalletConnect, or Coinbase Wallet
- **On-chain USDC Verification**: Read USDC balance directly from Ethereum network
- **Collateral Verification**: Automatically verify collateral meets loan requirements
- **Policy Management**: Create, view, and manage insurance policies
- **Claims System**: File and track insurance claims
- **Ultra Design**: Dark mode, glassmorphism, animations, responsive

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, shadcn/ui
- **Web3**: wagmi, viem, ethers.js
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma (optional, mock data used for now)
- **Animations**: Framer Motion
- **Charts**: Recharts

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy env file
cp .env.example .env.local

# Run development server
npm run dev
```

## 🔑 Environment Variables

```env
# Get from https://cloud.reown.com
NEXT_PUBLIC_PROJECT_ID="your_project_id"

# Optional: Alchemy/Infura RPC
NEXT_PUBLIC_RPC_URL="https://eth-mainnet.g.alchemy.com/v2/demo"

# Database (optional for now)
DATABASE_URL="postgresql://user:password@localhost:5432/shieldify"
```

## 🌐 Supported Networks

- Ethereum Mainnet (USDC: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`)
- Polygon
- Arbitrum

## 📁 Project Structure

```
├── app/
│   ├── (marketing)/    # Landing page
│   ├── (dashboard)/    # User dashboard
│   ├── api/           # Backend routes
│   └── layout.tsx     # Root layout
├── components/
│   ├── dashboard/     # Dashboard components
│   ├── layout/        # Navbar, Footer
│   ├── marketing/     # Landing components
│   ├── ui/           # shadcn/ui components
│   └── wallet/       # Wallet connect
├── hooks/            # Custom React hooks
├── lib/              # Utilities & web3 config
├── types/            # TypeScript types
└── prisma/           # Database schema
```

## 🚀 Deployment

Deploy to Vercel:

```bash
npx vercel
```

## 📝 License

MIT
