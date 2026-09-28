"use client";

import { useAccount } from "wagmi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { formatAddress } from "@/lib/utils";
import { useUSDCBalance } from "@/hooks/useUSDCBalance";
import Link from "next/link";
import { ShieldCheck, FileText, TrendingUp, Wallet, ArrowRight, Plus } from "lucide-react";

const mockPolicies = [
  {
    id: "POL-2024-001",
    protocol: "Aave",
    coverage: "$25,000",
    premium: "$125/mo",
    status: "Active",
    expires: "Dec 15, 2026",
  },
  {
    id: "POL-2024-002",
    protocol: "Compound",
    coverage: "$10,000",
    premium: "$80/mo",
    status: "Active",
    expires: "Nov 30, 2026",
  },
];

export default function DashboardPage() {
  const { address, isConnected, chainId } = useAccount();
  const { balance, isLoading } = useUSDCBalance();

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            {isConnected && address
              ? `Welcome back, ${formatAddress(address)}`
              : "Connect your wallet to manage your coverage"}
          </p>
        </div>
        {!isConnected && <WalletConnectButton />}
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Total Coverage</div>
                <div className="mt-1 text-2xl font-bold">$35,000</div>
              </div>
              <div className="rounded-lg bg-blue-500/10 p-3">
                <ShieldCheck className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="mt-2 text-xs text-emerald-500">↑ 12% from last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Active Policies</div>
                <div className="mt-1 text-2xl font-bold">2</div>
              </div>
              <div className="rounded-lg bg-violet-500/10 p-3">
                <FileText className="h-5 w-5 text-violet-500" />
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">All active</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Monthly Premium</div>
                <div className="mt-1 text-2xl font-bold">$205</div>
              </div>
              <div className="rounded-lg bg-emerald-500/10 p-3">
                <TrendingUp className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Due in 12 days</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">USDC Balance</div>
                <div className="mt-1 text-2xl font-bold">
                  {isLoading ? "..." : balance}
                </div>
              </div>
              <div className="rounded-lg bg-amber-500/10 p-3">
                <Wallet className="h-5 w-5 text-amber-500" />
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              {isConnected ? "On-chain verified" : "Not connected"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Policies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>My Policies</span>
            <Link href="/dashboard/verify">
              <Button size="sm" variant="gradient" className="gap-1">
                <Plus className="h-4 w-4" />
                New Policy
              </Button>
            </Link>
          </CardTitle>
          <CardDescription>Your active insurance policies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockPolicies.map((policy) => (
              <div
                key={policy.id}
                className="flex flex-col gap-4 rounded-lg border p-4 transition-colors hover:bg-accent/50 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-xl">
                    {policy.protocol === "Aave" ? "🔷" : "🟢"}
                  </div>
                  <div>
                    <div className="font-medium">{policy.protocol}</div>
                    <div className="text-sm text-muted-foreground">{policy.id}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Coverage</div>
                    <div className="font-medium">{policy.coverage}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Premium</div>
                    <div className="font-medium">{policy.premium}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Expires</div>
                    <div className="font-medium">{policy.expires}</div>
                  </div>
                  <Badge variant="success">{policy.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              Verify Collateral
            </CardTitle>
            <CardDescription>
              Check your USDC balance to ensure your collateral meets requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/verify">
              <Button className="w-full" variant="outline">
                Go to verification
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-violet-500" />
              File a Claim
            </CardTitle>
            <CardDescription>
              Submit a claim if you've experienced a covered loss
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/dashboard/claims">
              <Button className="w-full" variant="outline">
                File a claim
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
