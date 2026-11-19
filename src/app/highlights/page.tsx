import type { Metadata } from "next";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { HighlightsClient } from "@/components/sections/HighlightsClient";
import { Flame } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Gaming Highlights | BitWizards Clips",
  description:
    "Curated cinematic captures, epic gameplay, viral moments, and gaming discoveries from across the BitWizards Clips media network.",
  path: "/highlights",
  keywords: [
    "gaming highlights",
    "GTA VI clips",
    "epic gameplay moments",
    "viral gaming clips",
    "cinematic gameplay",
  ],
});

export default function HighlightsPage() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" aria-label="Highlights page hero">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0520] via-space-950 to-[#051020] z-0" />
        
        {/* Background AI-Generated Gaming Visual */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none z-0">
          <Image
            src="/images/gta6-neon-drift.webp"
            alt="Neon Highway Night Drift Highlight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/70 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(55,223,255,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono uppercase tracking-widest mb-8">
            <Flame className="w-3.5 h-3.5" />
            Gaming Highlights Archive
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-6">
            <span className="text-gradient-neon">THE WORLD&apos;S BEST</span>
            <br />
            <span className="text-soft-white">GAMING HIGHLIGHTS.</span>
          </h1>
          <p className="text-chrome-silver text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Curated cinematic captures, epic plays, viral moments, and gaming discoveries — all with verified creator attribution.
          </p>
        </div>
      </section>

      {/* Interactive Highlights Filter & Grid */}
      <HighlightsClient />
    </main>
  );
}
