import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  Gamepad2,
  Film,
  Laugh,
  TrendingUp,
  Compass,
  Flame,
  ChevronRight,
  ExternalLink,
  Shield,
  BookOpen,
  Users,
  Zap,
  LucideIcon,
} from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { contentCategories } from "@/data/highlights";

export const metadata: Metadata = constructMetadata({
  title: "GTA VI Gaming Highlights Hub",
  description:
    "Fan-curated gaming moments, cinematic clips, and epic highlights from the most anticipated open world ever created. Independent fan content — not affiliated with Rockstar Games.",
  path: "/gta-6",
  keywords: [
    "GTA VI fan content",
    "GTA 6 gaming highlights",
    "Vice City fan clips",
    "open world gaming",
    "gaming highlights",
  ],
});

const contentTypes = [
  {
    icon: Film,
    label: "Cinematic Captures",
    desc: "Ray-traced sunsets, weather transitions, atmospheric drone shots.",
    color: "text-electric-purple",
    border: "border-electric-purple/30",
    bg: "bg-electric-purple/10",
  },
  {
    icon: Gamepad2,
    label: "Gameplay Stunts",
    desc: "Open-world physics showcases, neon coastal drives, aerial flips.",
    color: "text-neon-magenta",
    border: "border-neon-magenta/30",
    bg: "bg-neon-magenta/10",
  },
  {
    icon: Laugh,
    label: "Funny Moments",
    desc: "Ragdoll disasters, NPC antics, sandbox chaos and comedy gold.",
    color: "text-sunset-orange",
    border: "border-sunset-orange/30",
    bg: "bg-sunset-orange/10",
  },
  {
    icon: Compass,
    label: "Discoveries",
    desc: "Hidden easter eggs, inaccessible areas, dev secrets and myths.",
    color: "text-cyber-cyan",
    border: "border-cyber-cyan/30",
    bg: "bg-cyber-cyan/10",
  },
  {
    icon: TrendingUp,
    label: "Viral Clips",
    desc: "Moments that break the internet across platforms worldwide.",
    color: "text-neon-magenta",
    border: "border-neon-magenta/30",
    bg: "bg-neon-magenta/10",
  },
  {
    icon: Flame,
    label: "Epic Gameplay",
    desc: "Clutch 1v5 moments, precision plays, world-record mechanics.",
    color: "text-sunset-orange",
    border: "border-sunset-orange/30",
    bg: "bg-sunset-orange/10",
  },
];

const fanGuidelines = [
  {
    icon: Shield,
    title: "No Leaked Assets",
    desc: "We only publish content built around officially released trailers, modded recreations, or sandbox games — never leaked internal Rockstar material.",
  },
  {
    icon: BookOpen,
    title: "Creator Attribution Always",
    desc: "Every clip features the original creator's handle on-screen and in captions. We never republish without explicit permission from the content author.",
  },
  {
    icon: Users,
    title: "Fan Speculation Labelled",
    desc: "Any concept footage or fan recreation is clearly labelled as such. We don't present speculative content as official gameplay.",
  },
  {
    icon: Zap,
    title: "Copyright Respect",
    desc: "Audio tracks used are either licensed, royalty-free, or creator-owned. We comply with platform DMCA policies across all 8 social networks.",
  },
];

const categoryIconMap: Record<string, LucideIcon> = {
  "gta-6-highlights": Gamepad2,
  "epic-gameplay": Flame,
  "funny-gaming-moments": Laugh,
  "cinematic-moments": Film,
  "viral-gaming-clips": TrendingUp,
  "gaming-discoveries": Compass,
};

export default function GtaSixPage() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white">
      {/* ── FAN DISCLAIMER BANNER ──────────────────────────────────────── */}
      <div className="relative z-30 mt-16 sm:mt-20 bg-space-800/90 border-b border-sunset-orange/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-start sm:items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-sunset-orange shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
            <span className="font-bold text-sunset-orange">⚠️ INDEPENDENT FAN CONTENT</span>
            {" — "}This is an independent fan gaming media page.{" "}
            <strong className="text-soft-white">BitWizards Clips is not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive Software.</strong>{" "}
            All trademarks belong to their respective owners.
          </p>
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
        aria-label="GTA VI Hub Hero"
      >
        {/* Layered gradient background — no Rockstar assets */}
        <div className="absolute inset-0 bg-gradient-to-br from-space-950 via-[#1a0a20] to-[#0a1525] z-0" />
        
        {/* AI-Generated Vice City 2060 Hero Backdrop */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none z-0">
          <Image
            src="/images/gta6-hero-vice2060.webp"
            alt="Vice City 2060 Fan Concept Backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter saturate-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/60 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(255,63,157,0.18)_0%,rgba(146,91,255,0.12)_40%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_30%,rgba(255,138,69,0.14)_0%,transparent_60%)]" />
        {/* Neon grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(55,223,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(55,223,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          {/* Category pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-magenta/40 bg-neon-magenta/10 text-neon-magenta text-xs font-mono uppercase tracking-widest mb-8">
            <Gamepad2 className="w-3.5 h-3.5" />
            Fan Content Hub
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-none mb-6">
            <span className="text-gradient-vice">ENTER THE WORLD</span>
            <br />
            <span className="text-soft-white">OF GTA VI.</span>
          </h1>

          <p className="text-chrome-silver text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Fan-curated gaming moments from the most anticipated open world ever created.
            Cinematic captures, epic stunts, and viral discoveries — all with verified creator credit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/highlights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan shadow-neon-magenta hover:opacity-90 transition-all"
            >
              <Flame className="w-4 h-4" />
              Explore Highlights
            </Link>
            <Link
              href="/socials"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-space-800/80 border border-chrome-silver/20 hover:border-cyber-cyan/50 hover:bg-space-800 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Our Network
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONCEPT VISUAL GALLERY (WebP Optimized) ───────────────────── */}
      <section className="py-16 px-6 max-w-7xl mx-auto" aria-label="Vice City 2060 Concept Gallery">
        <div className="text-center mb-10">
          <p className="text-neon-magenta font-mono text-xs uppercase tracking-widest mb-2">Original 2060 Media Visuals</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-soft-white">
            VICE CITY 2060 CONCEPT SHOWCASE
          </h2>
          <p className="text-chrome-silver text-sm max-w-xl mx-auto mt-2">
            Original, high-definition fan concept captures formatted in ultra-efficient WebP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-chrome-silver/15 shadow-glass-md">
            <Image
              src="/images/gta6-hero-vice2060.webp"
              alt="Vice City 2060 Sunset Supercar Drift"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-sunset-orange uppercase tracking-wider">Sunset Boulevard</span>
              <h3 className="font-display font-bold text-soft-white text-base">Coastal Supercar Drift</h3>
            </div>
          </div>

          <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-chrome-silver/15 shadow-glass-md">
            <Image
              src="/images/gta6-neon-drift.webp"
              alt="Neon Highway Night Drift"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-wider">Night Expressway</span>
              <h3 className="font-display font-bold text-soft-white text-base">Wet Asphalt Ray-Traced Physics</h3>
            </div>
          </div>

          <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-chrome-silver/15 shadow-glass-md">
            <Image
              src="/images/gta6-coastal-skyline.webp"
              alt="Vice City Coastal Marina Aerial View"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-electric-purple uppercase tracking-wider">Metropolis Aerial</span>
              <h3 className="font-display font-bold text-soft-white text-base">Coastal Marina &amp; Twilight Towers</h3>
            </div>
          </div>

          <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-chrome-silver/15 shadow-glass-md">
            <Image
              src="/images/gta6-action-stunt.webp"
              alt="Elevated Expressway Superbike Stunt"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-neon-magenta uppercase tracking-wider">Apex Velocity</span>
              <h3 className="font-display font-bold text-soft-white text-base">Elevated Flyover Superbike Leap</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto" aria-label="Content types on GTA VI Hub">
        <div className="text-center mb-14">
          <p className="text-cyber-cyan font-mono text-xs uppercase tracking-widest mb-3">What You&apos;ll Find Here</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-soft-white">
            SIX TYPES OF FAN CONTENT
          </h2>
          <p className="text-chrome-silver mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Every clip on this hub is sourced from verified gaming creators who have granted explicit permission
            for their content to be featured, edited, and distributed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentTypes.map((type) => (
            <div
              key={type.label}
              className={`glass-card rounded-2xl p-6 border ${type.border} hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <div className={`w-10 h-10 rounded-xl ${type.bg} flex items-center justify-center mb-4`}>
                <type.icon className={`w-5 h-5 ${type.color}`} aria-hidden="true" />
              </div>
              <h3 className={`font-display font-bold text-base mb-2 ${type.color}`}>{type.label}</h3>
              <p className="text-chrome-silver text-sm leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED CATEGORIES GRID ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-space-900/50" aria-label="Featured gaming categories">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-neon-magenta font-mono text-xs uppercase tracking-widest mb-3">Browse by Category</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-soft-white">
              FEATURED CATEGORIES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentCategories.map((cat) => {
              const Icon = categoryIconMap[cat.id] ?? Gamepad2;
              return (
                <Link
                  key={cat.id}
                  href="/highlights"
                  className={`group relative glass-card rounded-2xl p-7 border border-chrome-silver/10 hover:border-neon-magenta/40 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-neon-magenta`}
                >
                  {/* Gradient bg */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${cat.accentColor}20`, border: `1px solid ${cat.accentColor}40` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: cat.accentColor }} aria-hidden="true" />
                    </div>
                    <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: cat.accentColor }}>
                      {cat.tagline}
                    </p>
                    <h3 className="font-display font-bold text-soft-white text-lg mb-2">{cat.title}</h3>
                    <p className="text-chrome-silver text-sm leading-relaxed mb-4">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-chrome-silver/70">{cat.highlightCount}</span>
                      <span
                        className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                        style={{ color: cat.accentColor }}
                      >
                        Explore <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAN CONTENT GUIDELINES ──────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto" aria-label="Fan content guidelines">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-electric-purple font-mono text-xs uppercase tracking-widest mb-3">Our Standards</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-soft-white">
              FAN CONTENT GUIDELINES
            </h2>
            <p className="text-chrome-silver mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              BitWizards Clips operates as a responsible fan media network. Here&apos;s how we ensure every piece of
              content respects creators, copyright holders, and the broader gaming community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fanGuidelines.map((g) => (
              <div
                key={g.title}
                className="glass-card rounded-2xl p-6 border border-chrome-silver/10 hover:border-electric-purple/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-electric-purple/10 border border-electric-purple/30 flex items-center justify-center mb-4">
                  <g.icon className="w-5 h-5 text-electric-purple" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-soft-white text-base mb-2">{g.title}</h3>
                <p className="text-chrome-silver text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>

          {/* Legal Disclaimer Box */}
          <div className="mt-10 p-6 rounded-2xl bg-space-800/80 border border-sunset-orange/30 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-sunset-orange shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="font-display font-bold text-sunset-orange text-sm mb-2">
                  INDEPENDENT FAN MEDIA DISCLAIMER
                </h4>
                <p className="text-chrome-silver text-xs leading-relaxed">
                  GTA VI (Grand Theft Auto VI), Vice City, Rockstar Games, and all associated trademarks are
                  the exclusive intellectual property of Rockstar Games and Take-Two Interactive Software, Inc.
                  BitWizards Clips is not affiliated with, endorsed by, licensed by, or in any partnership with
                  Rockstar Games or Take-Two Interactive. All fan content published on this hub is sourced from
                  community creators who have granted explicit permission for their footage to be featured. Any
                  concept or sandbox footage is clearly labelled and not presented as official Rockstar content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        aria-label="Call to action — explore highlights and socials"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/10 via-electric-purple/5 to-cyber-cyan/10" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-soft-white mb-5">
            READY TO EXPLORE?
          </h2>
          <p className="text-chrome-silver text-lg mb-10 leading-relaxed">
            Browse our full highlights archive or follow BitWizards Clips across 8 global platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/highlights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan shadow-neon-magenta hover:opacity-90 transition-all"
            >
              <Flame className="w-4 h-4" />
              View All Highlights
            </Link>
            <Link
              href="/socials"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-space-800/80 border border-chrome-silver/20 hover:border-cyber-cyan/50 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Follow Our Network
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
