"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, FileText } from "lucide-react";

const mockClaims = [
  {
    id: "CLM-2026-001",
    policyId: "POL-2024-001",
    protocol: "Aave",
    amount: 25000,
    reason: "Smart contract exploit",
    status: "Under Review",
    date: "Sep 20, 2026",
  },
  {
    id: "CLM-2026-002",
    policyId: "POL-2024-002",
    protocol: "Compound",
    amount: 8000,
    reason: "Oracle manipulation",
    status: "Approved",
    date: "Aug 15, 2026",
  },
];

const statusColor = (status: string) => {
  switch (status) {
    case "Approved": return "success";
    case "Under Review": return "warning";
    case "Rejected": return "destructive";
    case "Submitted": return "info";
    default: return "secondary";
  }
};

export default function ClaimsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Claims</h1>
          <p className="mt-1 text-muted-foreground">Track and file insurance claims</p>
        </div>
        <Button variant="gradient" className="gap-2">
          <Plus className="h-4 w-4" />
          File a Claim
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Claim History
          </CardTitle>
          <CardDescription>All your submitted claims</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockClaims.map((claim) => (
              <div
                key={claim.id}
                className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-xl">
                    {claim.protocol === "Aave" ? "🔷" : "🟢"}
                  </div>
                  <div>
                    <div className="font-medium">{claim.reason}</div>
                    <div className="text-sm text-muted-foreground">
                      {claim.id} · {claim.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Amount</div>
                    <div className="font-medium">${claim.amount.toLocaleString()}</div>
                  </div>
                  <Badge variant={statusColor(claim.status) as any}>{claim.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
