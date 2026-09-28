import { VerifyCollateral } from "@/components/dashboard/VerifyCollateral";

export default function VerifyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Verify Collateral</h1>
        <p className="mt-1 text-muted-foreground">
          Connect your wallet and verify your USDC balance to get covered
        </p>
      </div>
      <VerifyCollateral />
    </div>
  );
}
