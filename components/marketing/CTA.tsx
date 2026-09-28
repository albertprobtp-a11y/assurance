"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 p-12 text-center text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Shield className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to protect your crypto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Join thousands of users who trust Shieldify to protect their DeFi positions.
              Get covered in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
                  Get Covered Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
