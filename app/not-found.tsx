import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
        <Shield className="h-10 w-10 text-primary" />
      </div>
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Oops! This page seems to be lost in the blockchain. Let's get you back to safety.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="gradient">Back to Home</Button>
      </Link>
    </div>
  );
}
