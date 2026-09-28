"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

const allPolicies = [
  {
    id: "POL-2024-001",
    protocol: "Aave",
    logo: "🔷",
    coverage: 25000,
    premium: 125,
    status: "Active",
    startDate: "Mar 15, 2026",
    endDate: "Dec 15, 2026",
    risk: "Low",
  },
  {
    id: "POL-2024-002",
    protocol: "Compound",
    logo: "🟢",
    coverage: 10000,
    premium: 80,
    status: "Active",
    startDate: "Apr 01, 2026",
    endDate: "Nov 30, 2026",
    risk: "Low",
  },
  {
    id: "POL-2024-003",
    protocol: "Radiant",
    logo: "🟡",
    coverage: 5000,
    premium: 45,
    status: "Expired",
    startDate: "Jan 15, 2026",
    endDate: "Jul 15, 2026",
    risk: "High",
  },
];

const statusColor = (status: string) => {
  switch (status) {
    case "Active": return "success";
    case "Expired": return "secondary";
    case "Pending": return "warning";
    default: return "default";
  }
};

export default function PoliciesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Policies</h1>
          <p className="mt-1 text-muted-foreground">Manage your insurance policies</p>
        </div>
        <Link href="/dashboard/verify">
          <Button variant="gradient" className="gap-2">
            <Plus className="h-4 w-4" />
            New Policy
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          {allPolicies.filter(p => p.status === "Active").map((policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))}
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          {allPolicies.map((policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))}
        </TabsContent>
        <TabsContent value="expired" className="space-y-4">
          {allPolicies.filter(p => p.status === "Expired").map((policy) => (
            <PolicyCard key={policy.id} policy={policy} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PolicyCard({ policy }: { policy: any }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
              {policy.logo}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{policy.protocol}</span>
                <Badge variant={statusColor(policy.status) as any}>{policy.status}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">{policy.id}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <div className="text-sm text-muted-foreground">Coverage</div>
              <div className="font-medium">${policy.coverage.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Premium</div>
              <div className="font-medium">${policy.premium}/mo</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Risk Level</div>
              <Badge variant={policy.risk === "Low" ? "success" : policy.risk === "Medium" ? "warning" : "destructive"}>
                {policy.risk}
              </Badge>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Expires</div>
              <div className="font-medium">{policy.endDate}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Details
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
