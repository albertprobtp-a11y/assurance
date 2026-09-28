"use client";

import { motion } from "framer-motion";
import { Wallet, ShieldCheck, FileCheck, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect your wallet",
    description: "Connect your Ethereum wallet securely. We verify your USDC balance on-chain to determine your collateral.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Verify your collateral",
    description: "Our system checks your USDC balance against the required collateral ratio for your loan position.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: FileCheck,
    title: "Choose your coverage",
    description: "Select the coverage amount, duration, and risk level. Get instant premium quotes based on protocol risk.",
    color: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    icon: BadgeCheck,
    title: "Get protected instantly",
    description: "Pay your premium and your policy is active immediately. File claims anytime through your dashboard.",
    color: "from-emerald-500 to-emerald-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get covered in four simple steps. No paperwork, no middlemen, just pure DeFi.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex items-center justify-between">
                  <div className={`inline-flex rounded-lg bg-gradient-to-br ${step.color} p-3 text-white shadow-lg`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-bold text-muted/20">0{i + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-primary/50 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
