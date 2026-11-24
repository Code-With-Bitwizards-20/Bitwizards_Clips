import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Rocket, Zap, Globe, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import { PlatformCard } from "@/components/cards/PlatformCard";

export const metadata: Metadata = constructMetadata({
  title: "Social Media Network | BitWizards Clips",
  description:
    "Explore BitWizards Clips across 8 global platforms — YouTube, TikTok, WhatsApp, Facebook, X, LinkedIn, Threads, and Rumble. One vision. Every epic gaming moment.",
  path: "/socials",
  keywords: ["social media", "gaming network", "BitWizards Clips", "YouTube", "TikTok", "gaming channels"],
});

export default function SocialsPage() {
  const platforms = allPlatformIds.map((id) => socialLinksConfig[id]);
  const verifiedCount = platforms.filter((p) => p.isVerified).length;
  const launchingCount = platforms.filter((p) => !p.isVerified).length;

  return (
    <main className="min-h-screen bg-space-900 text-soft-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Background AI Generated Gaming Visual */}
        <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none z-0">
          <Image
            src="/images/gta6-hero-vice2060.webp"
            alt="Vice City 2060 Global Network Atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/80 to-transparent" />
        </div>

        {/* Background ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Pre-headline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-space-800/80 border border-chrome-silver/20 backdrop-blur-md mb-8 text-xs font-mono text-chrome-silver uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5 text-cyber-cyan" />
            Global Presence
            <span className="w-1 h-1 rounded-full bg-neon-magenta" />
            8 Platforms
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
            <span className="text-gradient-vice">OUR GLOBAL</span>
            <br />
            <span className="text-soft-white">SOCIAL NETWORK.</span>
          </h1>

          <p className="text-lg md:text-xl text-chrome-silver max-w-2xl mx-auto mb-12 leading-relaxed">
            8 Platforms. One Vision.{" "}
            <span className="text-cyber-cyan font-semibold">Every Epic Gaming Moment.</span>
          </p>

          {/* Stats Row */}
          <div className="inline-grid grid-cols-3 gap-px bg-chrome-silver/10 rounded-2xl overflow-hidden border border-chrome-silver/10 mb-16">
            {[
              { label: "Platforms", value: "8", icon: <Rocket className="w-4 h-4" /> },
              { label: "Setup Active", value: `${launchingCount}`, icon: <Zap className="w-4 h-4" /> },
              { label: "Live Channels", value: `${verifiedCount}`, icon: <CheckCircle2 className="w-4 h-4" /> },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-space-800/80 backdrop-blur-sm px-8 py-5 flex flex-col items-center gap-1"
              >
                <div className="text-neon-magenta mb-1">{stat.icon}</div>
                <div className="font-display font-black text-2xl text-soft-white">{stat.value}</div>
                <div className="text-xs font-mono text-chrome-silver uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Grid ── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display font-bold text-2xl text-soft-white">All Platforms</h2>
            <p className="text-sm text-chrome-silver mt-1">Select a platform to explore its dedicated channel hub</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3 h-3" /> Verified
            </span>
            <span className="inline-flex items-center gap-1 text-sunset-orange bg-sunset-orange/10 px-2.5 py-1 rounded-full border border-sunset-orange/20">
              <Clock className="w-3 h-3" /> Setup Phase
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {platforms.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </section>

      {/* ── Active Broadcast Status Box ── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="glass-panel rounded-2xl p-8 border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-xl text-soft-white mb-2">
                ⚡ Global Network Fully Operational — All 8 Channels Active
              </h3>
              <p className="text-chrome-silver text-sm leading-relaxed mb-4">
                BitWizards Clips is officially broadcasting across all 8 major global entertainment platforms. From 4K episodic series on YouTube and viral stunt clips on TikTok, to direct VIP community drops on WhatsApp, industry thought leadership on LinkedIn, and raw gameplay archival on Rumble. Follow our channels below for instant notifications.
              </p>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <Link
                    key={platform.id}
                    href={`/socials/${platform.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-chrome-silver hover:text-cyber-cyan border border-chrome-silver/20 hover:border-cyber-cyan/40 px-3 py-1.5 rounded-lg transition-all duration-200"
                    style={{ borderColor: platform.color + "40" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: platform.color }}
                    />
                    {platform.name}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
