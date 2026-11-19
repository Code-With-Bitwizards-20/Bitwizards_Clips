import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import {
  Globe,
  Users,
  Zap,
  Heart,
  Shield,
  Target,
  ArrowRight,
  Mail,
  Star,
  Film,
  TrendingUp,
  Gamepad2,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About BitWizards Clips | Futuristic Gaming Media Network",
  description:
    "BitWizards Clips is a futuristic gaming media and entertainment brand — a next-generation broadcasting network delivering the world's best gaming moments across 8 global social platforms.",
  path: "/about",
  keywords: ["about BitWizards Clips", "gaming media network", "futuristic gaming brand", "gaming content creators"],
});

const values = [
  {
    icon: Star,
    title: "Creator First",
    color: "#FF8A45",
    desc: "Every clip starts with a creator who captured something extraordinary. We amplify their work, never replace it. Full attribution, every time.",
  },
  {
    icon: Shield,
    title: "Ethical Distribution",
    color: "#925BFF",
    desc: "We only publish content we have explicit permission to feature. Copyright, licensing, and attribution are non-negotiable standards — not afterthoughts.",
  },
  {
    icon: Zap,
    title: "2060-Standard Quality",
    color: "#FF3F9D",
    desc: "Every piece of content is held to cinematic-grade production values. Blurry captures and muted colours don't belong in our universe.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    color: "#37DFFF",
    desc: "An 8-platform distribution strategy means no gaming moment stays hidden in a single feed. We ensure the best clips reach the widest possible audience.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    color: "#925BFF",
    desc: "BitWizards Clips is built for gamers, by gamers. Our curation team lives inside the community and surfaces what matters to actual players, not algorithms alone.",
  },
  {
    icon: Heart,
    title: "Passion for Gaming",
    color: "#FF3F9D",
    desc: "Gaming isn't just entertainment to us — it's culture, art, and storytelling. We treat every highlight as a chapter in a much larger epic.",
  },
];

const milestones = [
  { year: "2026", event: "BitWizards Clips is founded. The vision: build the world's most cinematic gaming media network." },
  { year: "2026 Q4", event: "Website launch, 8-platform social ecosystem deployed, first creator partnerships established." },
  { year: "2027", event: "First 100 creator partner highlights published across all platforms." },
  { year: "2060", event: "The vision we're building toward: a fully global, real-time, AI-enhanced gaming media broadcast network." },
];

const contentPillars = [
  { icon: Gamepad2, label: "GTA VI Fan Content", color: "#FF3F9D" },
  { icon: Zap, label: "Epic Gameplay", color: "#37DFFF" },
  { icon: Film, label: "Cinematic Captures", color: "#925BFF" },
  { icon: TrendingUp, label: "Viral Moments", color: "#FF8A45" },
  { icon: Users, label: "Creator Spotlights", color: "#FF3F9D" },
  { icon: Target, label: "Gaming Discoveries", color: "#37DFFF" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white">
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0520] via-[#0a1525] to-space-950 z-0" />
        
        {/* Background GTA 6 AI Concept Atmospheric Visual */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none z-0">
          <Image
            src="/images/gta6-coastal-skyline.webp"
            alt="Vice City 2060 Coastal Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/70 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(146,91,255,0.2)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(200,209,222,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(200,209,222,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric-purple/40 bg-electric-purple/10 text-electric-purple text-xs font-mono uppercase tracking-widest mb-8">
            <Globe className="w-3.5 h-3.5" />
            Our Story
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-none mb-6">
            <span className="text-soft-white">ABOUT</span>
            <br />
            <span className="text-gradient-vice">BITWIZARDS CLIPS</span>
          </h1>
          <p className="text-chrome-silver text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just a gaming channel. We&apos;re a next-generation media network built to deliver the most cinematic, unforgettable gaming moments to a global audience — across every major platform simultaneously.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="mission-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-neon-magenta font-mono text-xs uppercase tracking-widest mb-4">OUR MISSION</p>
            <h2 id="mission-heading" className="font-display font-black text-4xl sm:text-5xl text-soft-white mb-6 leading-tight">
              ONE WORLD.
              <br />
              <span className="text-gradient-neon">EVERY EPIC GAMING MOMENT.</span>
            </h2>
            <p className="text-chrome-silver leading-relaxed mb-6 text-base">
              BitWizards Clips was founded with a single obsession: to build a media network worthy of gaming culture&apos;s greatest moments. We believe the most spectacular achievements in gaming deserve production values to match — cinematic editing, global distribution, and creator recognition at every step.
            </p>
            <p className="text-chrome-silver leading-relaxed mb-8 text-base">
              We are an independent brand — not affiliated with any game studio — operating as a fan-driven, creator-first media organisation. Our content spans open-world adventures, multiplayer spectacles, physics experiments, easter egg discoveries, and moments of pure human mastery at a controller.
            </p>
            <Link
              href="/creators"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta to-electric-purple hover:opacity-90 transition-all text-sm"
            >
              <span>Join As a Creator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Visual AI Generated Showcase Panel */}
          <div className="group relative h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-space-900 border border-chrome-silver/20 shadow-glass-xl">
            <Image
              src="/images/gta6-neon-drift.webp"
              alt="Vice City 2060 Wet Asphalt Physics"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 via-transparent to-neon-magenta/20 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10">
              <div className="font-display font-black text-6xl text-soft-white/20 mb-2 tracking-widest">2060</div>
              <div className="font-display font-black text-2xl text-soft-white mb-2 tracking-wide">THE VISION</div>
              <div className="text-chrome-silver text-sm max-w-xs leading-relaxed bg-space-950/80 px-4 py-2 rounded-xl backdrop-blur-md border border-chrome-silver/10">
                Building the cinematic gaming media network of the future — today.
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-chrome-silver/80 bg-space-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-chrome-silver/10">
              <span className="text-cyber-cyan font-bold">RAY-TRACED 60FPS</span>
              <span className="text-neon-magenta">GLOBAL DISTRIBUTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-24 px-6 bg-space-900/50" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyber-cyan font-mono text-xs uppercase tracking-widest mb-3">What We Cover</p>
          <h2 id="pillars-heading" className="font-display font-black text-3xl sm:text-4xl text-soft-white mb-12">
            SIX CONTENT PILLARS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentPillars.map((pillar) => (
              <div
                key={pillar.label}
                className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 border border-chrome-silver/10 hover:border-chrome-silver/30 transition-all hover:-translate-y-1"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${pillar.color}18`, border: `1px solid ${pillar.color}40` }}
                >
                  <pillar.icon className="w-5 h-5" style={{ color: pillar.color }} aria-hidden="true" />
                </div>
                <span className="text-xs font-mono font-bold text-chrome-silver text-center">{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="values-heading">
        <div className="text-center mb-14">
          <p className="text-electric-purple font-mono text-xs uppercase tracking-widest mb-3">What We Stand For</p>
          <h2 id="values-heading" className="font-display font-black text-3xl sm:text-4xl text-soft-white">
            OUR CORE VALUES
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="glass-card rounded-2xl p-7 border border-chrome-silver/10 hover:border-chrome-silver/25 transition-all hover:-translate-y-1"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${v.color}18`, border: `1px solid ${v.color}40` }}
              >
                <v.icon className="w-5 h-5" style={{ color: v.color }} aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-soft-white text-lg mb-3">{v.title}</h3>
              <p className="text-chrome-silver text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-space-900/50" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-neon-magenta font-mono text-xs uppercase tracking-widest mb-3">Our Journey</p>
            <h2 id="timeline-heading" className="font-display font-black text-3xl sm:text-4xl text-soft-white">
              BUILDING TOWARD 2060
            </h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-magenta via-electric-purple to-cyber-cyan opacity-30" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex flex-col sm:flex-row gap-6 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-neon-magenta border-2 border-space-900 shadow-neon-magenta z-10" />
                  <div className={`sm:w-1/2 pl-14 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12" : "sm:pl-12"}`}>
                    <div className="glass-card rounded-xl p-5 border border-chrome-silver/10">
                      <span className="text-xs font-mono font-bold text-neon-magenta uppercase">{m.year}</span>
                      <p className="text-chrome-silver text-sm leading-relaxed mt-2">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/10 via-electric-purple/5 to-cyber-cyan/10" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-soft-white mb-6">
            READY TO JOIN THE NETWORK?
          </h2>
          <p className="text-chrome-silver text-lg mb-10 leading-relaxed">
            Follow us across 8 platforms, submit your gameplay highlights, or partner with us to distribute your content to millions of gaming fans worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/socials"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan shadow-neon-magenta hover:opacity-90 transition-all"
            >
              <Globe className="w-4 h-4" />
              Explore Our Network
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-space-800/80 border border-chrome-silver/20 hover:border-cyber-cyan/50 transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
