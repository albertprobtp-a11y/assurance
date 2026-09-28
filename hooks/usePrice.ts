"use client";

import { useState, useEffect } from "react";

// Mock price feed - will be replaced by real oracle later
const PRICES: Record<string, number> = {
  USDC: 1.0,
  ETH: 3520,
  WBTC: 67400,
  DAI: 1.0,
  USDT: 1.0,
  ARB: 1.05,
  MATIC: 0.55,
};

export function usePrice(symbol: string): number {
  const [price, setPrice] = useState(PRICES[symbol] || 0);

  useEffect(() => {
    setPrice(PRICES[symbol] || 0);
  }, [symbol]);

  return price;
}
