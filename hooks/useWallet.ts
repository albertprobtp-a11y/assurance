"use client";

import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { useCallback } from "react";

export function useWallet() {
  const { address, isConnected, chainId, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();

  const switchToEthereum = useCallback(async () => {
    if (chainId !== 1) {
      try {
        await switchChain({ chainId: 1 });
      } catch (e) {
        console.error("Failed to switch chain", e);
        return false;
      }
    }
    return true;
  }, [chainId, switchChain]);

  return {
    address,
    isConnected,
    chainId,
    isConnecting,
    disconnect,
    switchToEthereum,
  };
}
