"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Standard",
    description: "Essential coverage for individual lenders",
    rate: "0.5%",
    coverage: "$50,000",
    features: [
      "Coverage up to $50K",
      "Smart contract hacks",
      "Oracle manipulation",
      "Liquidation protection",
      "Standard claims processing",
    ],
  },
  {
    name: "Premium",
    description: "Enhanced coverage for active DeFi users",
    rate: "0.8%",
    coverage: "$250,000",
    popular: true,
    features: [
      "Coverage up to $250K",
      "Everything in Standard",
      "Governance risk coverage",
      "Priority claims (48h)",
      "Multi-protocol coverage",
      "Dedicated support",
    ],
  },
  {
    name: "Institutional",
    description: "Full protection for funds and DAOs",
    rate: "Custom",
    coverage: "Unlimited",
    features: [
      "Unlimited coverage",
      "Everything in Premium",
      "Custom risk parameters",
      "Real-time monitoring",
      "Dedicated risk team",
      "Instant claims payout",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pay only for the coverage you need. Premiums are calculated based on protocol risk and coverage amount.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl border bg-card p-6 transition-all",
                tier.popular
                  ? "border-primary shadow-xl shadow-primary/10 lg:scale-105"
                  : "hover:border-primary/50"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{tier.rate}</span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Coverage up to <span className="font-medium text-foreground">{tier.coverage}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/dashboard" className="mt-8 block">
                <Button
                  variant={tier.popular ? "gradient" : "outline"}
                  className="w-full"
                >
                  Get {tier.name}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
