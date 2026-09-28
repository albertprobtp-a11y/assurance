"use client";

import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { formatAddress } from "@/lib/utils";
import { Wallet, LogOut, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const WALLET_OPTIONS = [
  { id: "injected", name: "MetaMask", logo: "🦊", desc: "Connect via browser extension" },
  { id: "walletconnect", name: "WalletConnect", logo: "🔗", desc: "Scan QR code with mobile wallet" },
  { id: "coinbase", name: "Coinbase Wallet", logo: "🔵", desc: "Connect Coinbase wallet" },
];

export function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(false);

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-emerald-500">{formatAddress(address)}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => disconnect()}
          title="Disconnect"
          className="text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="gradient" className="gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Connect your wallet
          </DialogTitle>
          <DialogDescription>
            Connect your wallet to verify your USDC balance and get covered.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {WALLET_OPTIONS.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => {
                const connector = connectors.find((c) => c.id === wallet.id);
                if (connector) {
                  connect({ connector });
                  setOpen(false);
                }
              }}
              disabled={isPending}
              className={cn(
                "group flex items-center gap-4 rounded-xl border p-4 text-left transition-all",
                "hover:border-primary hover:bg-accent/50 active:scale-[0.99]",
                "disabled:opacity-50"
              )}
            >
              <span className="text-3xl">{wallet.logo}</span>
              <div className="flex-1">
                <div className="font-medium">{wallet.name}</div>
                <div className="text-sm text-muted-foreground">{wallet.desc}</div>
              </div>
              {isPending && (
                <span className="text-sm text-muted-foreground">Connecting...</span>
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
          We never store your private keys. Connect securely via your wallet provider.
        </div>
      </DialogContent>
    </Dialog>
  );
}
