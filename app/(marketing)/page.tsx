import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Protocols } from "@/components/marketing/Protocols";
import { Pricing } from "@/components/marketing/Pricing";
import { FAQ } from "@/components/marketing/FAQ";
import { CTA } from "@/components/marketing/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Protocols />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
