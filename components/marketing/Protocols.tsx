"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const protocols = [
  { name: "Aave", symbol: "AAVE", logo: "🔷", tvl: "$12.4B", risk: "Low", category: "Lending" },
  { name: "Compound", symbol: "COMP", logo: "🟢", tvl: "$3.1B", risk: "Low", category: "Lending" },
  { name: "Uniswap", symbol: "UNI", logo: "🔴", tvl: "$4.8B", risk: "Low", category: "DEX" },
  { name: "Curve", symbol: "CRV", logo: "🔵", tvl: "$2.2B", risk: "Medium", category: "Liquidity" },
  { name: "Lido", symbol: "LDO", logo: "🟣", tvl: "$28B", risk: "Low", category: "Staking" },
  { name: "GMX", symbol: "GMX", logo: "🟠", tvl: "$1.5B", risk: "Medium", category: "DEX" },
  { name: "Radiant", symbol: "RDNT", logo: "🟡", tvl: "$800M", risk: "High", category: "Lending" },
  { name: "Morpho", symbol: "MORPHO", logo: "🔶", tvl: "$1.2B", risk: "Medium", category: "Lending" },
];

const riskColor = (risk: string) => {
  switch (risk) {
    case "Low": return "success";
    case "Medium": return "warning";
    case "High": return "destructive";
    default: return "secondary";
  }
};

export function Protocols() {
  return (
    <section id="protocols" className="relative py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cover your positions on <span className="gradient-text">top protocols</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We support insurance coverage across the most trusted DeFi lending and yield protocols.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {protocols.map((protocol, i) => (
            <motion.div
              key={protocol.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group cursor-pointer rounded-xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{protocol.logo}</span>
                  <div>
                    <div className="font-semibold">{protocol.name}</div>
                    <div className="text-xs text-muted-foreground">{protocol.category}</div>
                  </div>
                </div>
                <Badge variant={riskColor(protocol.risk) as any}>{protocol.risk} risk</Badge>
              </div>
              <div className="mt-4 flex items-center justify-between border-t pt-4">
                <div>
                  <div className="text-xs text-muted-foreground">TVL</div>
                  <div className="font-medium">{protocol.tvl}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Premium</div>
                  <div className="font-medium text-emerald-500">0.4% APY</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
