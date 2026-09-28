"use client";

import { useReadContract, useAccount } from "wagmi";
import { USDC_ADDRESSES, USDC_ABI } from "@/lib/web3";
import { formatUnits } from "viem";

export function useUSDCBalance() {
  const { address, isConnected, chainId } = useAccount();

  const contractAddress = chainId ? USDC_ADDRESSES[chainId] : undefined;

  const { data: rawBalance, isLoading, refetch } = useReadContract({
    address: contractAddress as `0x${string}`,
    abi: USDC_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: isConnected && !!address && !!contractAddress,
    },
  });

  const balance = rawBalance ? formatUnits(rawBalance as bigint, 6) : "0";

  return {
    balance,
    rawBalance: rawBalance as bigint | undefined,
    isLoading,
    refetch,
    isConnected,
    address,
    chainId,
    supported: !!contractAddress,
  };
}
