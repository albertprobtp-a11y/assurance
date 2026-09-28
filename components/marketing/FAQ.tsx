"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Shieldify?",
    answer: "Shieldify is a decentralized insurance protocol that protects users' lending positions on DeFi protocols. We cover risks like smart contract hacks, oracle manipulation, and liquidation cascades.",
  },
  {
    question: "How does the collateral verification work?",
    answer: "When you connect your wallet, we read your USDC balance directly on-chain using the Ethereum network. This verifies that you have sufficient collateral to back your insured loan position.",
  },
  {
    question: "What risks are covered?",
    answer: "We cover smart contract exploits, oracle manipulation attacks, governance attacks, and liquidation cascades on supported protocols. Each protocol has a specific risk profile.",
  },
  {
    question: "How are claims processed?",
    answer: "Claims are submitted through your dashboard with evidence. They're reviewed by our risk committee and community members. Approved claims are paid out in USDC directly to your wallet.",
  },
  {
    question: "What is the minimum coverage?",
    answer: "The minimum coverage is $1,000 USDC. Premiums start at 0.5% of the coverage amount per month, depending on the protocol's risk level.",
  },
  {
    question: "Do I need to keep my wallet connected?",
    answer: "No. Once your policy is active, it remains active regardless of your wallet connection status. You only need to connect when purchasing or managing your policy.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20">
      <div className="container max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about Shieldify insurance.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
