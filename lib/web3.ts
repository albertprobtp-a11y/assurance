import { createConfig, http } from "wagmi";
import { mainnet, polygon, arbitrum } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

// USDC Contract Addresses
export const USDC_ADDRESSES: Record<number, string> = {
  1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // Ethereum mainnet
  137: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // Polygon
  42161: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", // Arbitrum
};

export const USDC_ABI = [
  {
    "constant": true,
    "inputs": [{ "name": "_owner", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "name": "balance", "type": "uint256" }],
    "type": "function",
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "name": "", "type": "uint8" }],
    "type": "function",
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "name": "", "type": "string" }],
    "type": "function",
  },
] as const;

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "demo_project_id";

export const wagmiConfig = createConfig({
  chains: [mainnet, polygon, arbitrum],
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
  transports: {
    [mainnet.id]: http(process.env.NEXT_PUBLIC_RPC_URL || "https://eth-mainnet.g.alchemy.com/v2/demo"),
    [polygon.id]: http("https://polygon-rpc.com"),
    [arbitrum.id]: http("https://arb1.arbitrum.io/rpc"),
  },
});

export const SUPPORTED_CHAINS = [
  { id: 1, name: "Ethereum", symbol: "ETH", logo: "🟣" },
  { id: 137, name: "Polygon", symbol: "MATIC", logo: "🟪" },
  { id: 42161, name: "Arbitrum", symbol: "ARB", logo: "🔵" },
];
