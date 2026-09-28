export type RiskLevel = "low" | "medium" | "high";

export type PolicyStatus = "active" | "pending" | "expired" | "cancelled";

export type ClaimStatus = "submitted" | "under_review" | "approved" | "rejected";

export type Network = "ethereum" | "polygon" | "arbitrum";

export interface WalletInfo {
  address: string;
  chainId: number;
  connected: boolean;
  ensName?: string;
}

export interface USDCBalance {
  raw: bigint;
  formatted: string;
  usdValue: number;
  verified: boolean;
}

export interface Policy {
  id: string;
  userId: string;
  protocol: string;
  collateralAmount: number;
  collateralAsset: string;
  coverageAmount: number;
  premium: number;
  durationDays: number;
  riskLevel: RiskLevel;
  status: PolicyStatus;
  createdAt: string;
  expiresAt: string;
  txHash?: string;
}

export interface Claim {
  id: string;
  policyId: string;
  amount: number;
  reason: string;
  description: string;
  evidence: string[];
  status: ClaimStatus;
  createdAt: string;
  resolvedAt?: string;
}
