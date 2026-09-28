import Link from "next/link";
import { Shield, Twitter, Github, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Shieldify</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Decentralized insurance for crypto lending protocols. Protect your loans, not your worries.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#how-it-works" className="hover:text-foreground">How it works</Link></li>
              <li><Link href="/#protocols" className="hover:text-foreground">Supported protocols</Link></li>
              <li><Link href="/#pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link href="/dashboard" className="hover:text-foreground">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Documentation</Link></li>
              <li><Link href="#" className="hover:text-foreground">Audit reports</Link></li>
              <li><Link href="#" className="hover:text-foreground">Risk framework</Link></li>
              <li><Link href="#" className="hover:text-foreground">Terms of service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="flex items-center gap-2 hover:text-foreground"><Twitter className="h-4 w-4" /> Twitter</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-foreground"><Github className="h-4 w-4" /> GitHub</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:text-foreground"><MessageCircle className="h-4 w-4" /> Discord</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Shieldify Insurance. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
