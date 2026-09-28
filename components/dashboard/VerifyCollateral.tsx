"use client";

import { useUSDCBalance } from "@/hooks/useUSDCBalance";
import { useWallet } from "@/hooks/useWallet";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { formatAddress, formatBalance } from "@/lib/utils";
import { RefreshCw, ShieldCheck, ShieldAlert, Wallet, AlertTriangle, CheckCircle2 } from "lucide-react";

export function VerifyCollateral() {
  const { balance, isLoading, refetch, isConnected, address, chainId, supported } = useUSDCBalance();
  const { switchToEthereum } = useWallet();

  // Calculate collateral ratio (example: need 150% of a $10K loan)
  const loanAmount = 10000;
  const requiredCollateral = loanAmount * 1.5;
  const currentValue = parseFloat(balance);
  const ratio = requiredCollateral > 0 ? (currentValue / requiredCollateral) * 100 : 0;
  const isVerified = currentValue >= requiredCollateral;

  return (
    <div className="space-y-6">
      {/* Wallet connection status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            Wallet Connection
          </CardTitle>
          <CardDescription>
            Connect your wallet to verify your USDC collateral on-chain
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isConnected ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Wallet className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">Connect your wallet to get started</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We'll verify your USDC balance on the Ethereum network
                </p>
              </div>
              <WalletConnectButton />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <div className="text-sm text-muted-foreground">Connected wallet</div>
                  <div className="mt-1 font-mono font-medium">{formatAddress(address!)}</div>
                </div>
                <Badge variant="success">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Connected
                  </span>
                </Badge>
              </div>

              {!supported && (
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <div>
                      <p className="font-medium text-amber-500">Unsupported network</p>
                      <p className="mt-1 text-sm text-amber-500/80">
                        Please switch to Ethereum mainnet to verify your USDC balance.
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-3"
                        onClick={switchToEthereum}
                      >
                        Switch to Ethereum
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* USDC Balance */}
      {isConnected && supported && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="text-2xl">💵</span>
                USDC Balance
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => refetch()}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              </Button>
            </CardTitle>
            <CardDescription>
              Live on-chain balance from your connected wallet
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold">
                    {formatBalance(balance)}
                    <span className="ml-2 text-2xl text-muted-foreground">USDC</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    ≈ ${formatBalance(balance)} USD
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Collateral ratio</span>
                    <span className={isVerified ? "text-emerald-500" : "text-amber-500"}>
                      {ratio.toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={Math.min(ratio, 100)} className={isVerified ? "bg-emerald-500" : "bg-amber-500"} />
                  <div className="mt-2 text-xs text-muted-foreground">
                    Required: {formatBalance(requiredCollateral)} USDC for a ${formatBalance(loanAmount)} loan
                  </div>
                </div>

                <div className={`flex items-center gap-2 rounded-lg border p-4 ${isVerified ? "border-emerald-500/30 bg-emerald-500/10" : "border-amber-500/30 bg-amber-500/10"}`}>
                  {isVerified ? (
                    <>
                      <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-500" />
                      <div>
                        <p className="font-medium text-emerald-500">Collateral Verified</p>
                        <p className="text-sm text-emerald-500/80">
                          Your USDC balance meets the collateral requirements.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <ShieldAlert className="h-5 w-5 shrink-0 text-amber-500" />
                      <div>
                        <p className="font-medium text-amber-500">Insufficient Collateral</p>
                        <p className="text-sm text-amber-500/80">
                          You need at least {formatBalance(requiredCollateral)} USDC to cover a ${formatBalance(loanAmount)} loan.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
