"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Zap,
  Users,
  Calendar,
  Star,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { SocialPlatformConfig } from "@/types";
import { cn } from "@/lib/utils";
import { PlatformIcon } from "@/components/socials/PlatformIcons";

interface PlatformPageTemplateProps {
  platform: SocialPlatformConfig;
  otherPlatforms: SocialPlatformConfig[];
}

export default function PlatformPageTemplate({
  platform,
  otherPlatforms,
}: PlatformPageTemplateProps) {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${platform.color} 0%, ${platform.secondaryColor} 100%)`,
  };

  return (
    <main className="min-h-screen bg-space-900 text-soft-white">
      {/* ─────────────────────────────────────────────────
          A) HERO
      ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Background AI Generated Gaming Visual */}
        <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none z-0">
          <Image
            src="/images/gta6-coastal-skyline.webp"
            alt="Vice City 2060 Ambient Visual"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/80 to-transparent" />
        </div>

        {/* Ambient glows from platform colors */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: platform.color }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: platform.secondaryColor }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-chrome-silver mb-10">
            <Link href="/" className="hover:text-cyber-cyan transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/socials" className="hover:text-cyber-cyan transition-colors">
              Socials
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-soft-white">{platform.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
            {/* Platform Icon */}
            <div
              className="w-28 h-28 shrink-0 rounded-3xl flex items-center justify-center text-white shadow-2xl border-2 border-white/10 p-5"
              style={gradientStyle}
            >
              <PlatformIcon platform={platform.id} className="w-16 h-16 text-white drop-shadow-md" />
            </div>

            <div className="flex-1">
              {/* Status Badge */}
              <div className="mb-4">
                {platform.isVerified ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4" /> Verified Channel
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-sunset-orange bg-sunset-orange/10 px-3 py-1.5 rounded-full border border-sunset-orange/20">
                    <Clock className="w-4 h-4" /> Setup Phase — Launching Soon
                  </span>
                )}
              </div>

              {/* Platform Name */}
              <h1
                className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-3"
                style={{ color: platform.color }}
              >
                {platform.name.toUpperCase()}
              </h1>

              {/* Handle */}
              <p className="font-mono text-lg text-chrome-silver">
                {platform.handle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          B) CHANNEL INTRO
      ───────────────────────────────────────────────── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="glass-card rounded-2xl p-8 md:p-10 border border-chrome-silver/10">
          <div className="mb-6">
            <div className="text-xs font-mono uppercase tracking-widest text-chrome-silver mb-3 flex items-center gap-2">
              <Star className="w-3.5 h-3.5" style={{ color: platform.color }} />
              Channel Overview
            </div>
            <p className="text-soft-white text-lg leading-relaxed">
              {platform.longDescription}
            </p>
          </div>

          {/* What to Expect */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-xl text-soft-white mb-5">
              What to Expect
            </h2>
            <ul className="space-y-3">
              {platform.audienceExpectation.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-chrome-silver text-sm leading-relaxed"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: platform.color + "25", color: platform.color }}
                  >
                    <Zap className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Features Pills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-chrome-silver mb-3">
              Platform Features
            </h3>
            <div className="flex flex-wrap gap-2">
              {platform.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs font-bold px-3 py-1.5 rounded-full border font-mono"
                  style={{
                    color: platform.color,
                    borderColor: platform.color + "40",
                    backgroundColor: platform.color + "12",
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          C) CONTENT TYPES
      ───────────────────────────────────────────────── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-soft-white mb-8">
          Content Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platform.contentTypes.map((type, i) => (
            <div
              key={type}
              className="glass-panel rounded-xl p-5 border border-chrome-silver/10 hover:border-chrome-silver/30 transition-all group relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{ backgroundColor: platform.color }}
              />
              <div
                className="text-2xl font-black font-display mb-3 opacity-30"
                style={{ color: platform.color }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-soft-white font-bold text-sm leading-tight">
                {type}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          D) SETUP STATUS / FOLLOW CTA
      ───────────────────────────────────────────────── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        {platform.isVerified && platform.url ? (
          // Verified: Show real link
          <div
            className="rounded-2xl p-8 text-center border"
            style={{
              borderColor: platform.color + "40",
              background: `linear-gradient(135deg, ${platform.color}10, ${platform.secondaryColor}08)`,
            }}
          >
            <h2 className="font-display font-black text-3xl text-soft-white mb-3">
              Follow Us on {platform.name}
            </h2>
            <p className="text-chrome-silver mb-8 max-w-md mx-auto">
              We&apos;re live! Join our community and never miss an epic gaming moment.
            </p>
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={gradientStyle}
            >
              Visit {platform.name} Channel
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          // Not verified: Launching Soon card — NO fake URLs
          <div className="rounded-2xl p-8 md:p-12 border border-sunset-orange/20 bg-sunset-orange/5 backdrop-blur-md text-center">
            <div className="w-16 h-16 rounded-2xl bg-sunset-orange/15 border border-sunset-orange/30 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-sunset-orange" />
            </div>
            <h2 className="font-display font-black text-3xl text-soft-white mb-4">
              LAUNCHING SOON
            </h2>
            <div className="max-w-xl mx-auto">
              <p className="text-chrome-silver mb-3 leading-relaxed">
                Our <span className="text-soft-white font-semibold">{platform.name}</span> channel is
                currently being configured by the BitWizards Clips team. We&apos;re building out the
                full content pipeline, branding assets, and publishing workflow before going live.
              </p>
              <p className="text-chrome-silver/70 text-sm mb-8">
                The handle <span className="font-mono text-chrome-silver">{platform.handle}</span> is
                reserved. The official channel link will appear here once verified and published.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sunset-orange bg-sunset-orange/10 px-4 py-2 rounded-full border border-sunset-orange/20">
                <Zap className="w-3.5 h-3.5" />
                Follow our progress — check back soon
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ─────────────────────────────────────────────────
          E) POST FREQUENCY
      ───────────────────────────────────────────────── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Post Frequency */}
          <div className="glass-card rounded-2xl p-7 border border-chrome-silver/10">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: platform.color + "20", color: platform.color }}
              >
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-soft-white text-lg">Post Frequency</h3>
            </div>
            <p className="text-chrome-silver text-sm leading-relaxed">
              {platform.postFrequency}
            </p>
          </div>

          {/* F) Target Audience */}
          <div className="glass-card rounded-2xl p-7 border border-chrome-silver/10">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: platform.secondaryColor + "20", color: platform.secondaryColor }}
              >
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-soft-white text-lg">Target Audience</h3>
            </div>
            <p className="text-chrome-silver text-sm leading-relaxed">
              {platform.targetAudience}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          G) EXPLORE OTHER CHANNELS
      ───────────────────────────────────────────────── */}
      <section className="px-6 pb-28 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-2xl text-soft-white">
            Explore Other Channels
          </h2>
          <Link
            href="/socials"
            className="text-xs font-bold uppercase tracking-wider text-chrome-silver hover:text-cyber-cyan transition-colors inline-flex items-center gap-1"
          >
            All Platforms <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-chrome-silver/20 scrollbar-track-transparent">
          {otherPlatforms.map((other) => (
            <Link
              key={other.id}
              href={`/socials/${other.id}`}
              className="shrink-0 group w-56 p-5 rounded-2xl bg-space-800/60 border border-chrome-silver/10 hover:border-chrome-silver/30 transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                style={{ backgroundColor: other.color }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white mb-3 border border-white/10 shadow p-2"
                style={{
                  background: `linear-gradient(135deg, ${other.color}, ${other.secondaryColor})`,
                }}
              >
                <PlatformIcon platform={other.id} className="w-5 h-5 text-white" />
              </div>
              <div className="font-display font-bold text-soft-white text-sm group-hover:text-cyber-cyan transition-colors">
                {other.name}
              </div>
              <div className="text-[11px] font-mono text-chrome-silver mt-0.5">{other.handle}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-chrome-silver/60 group-hover:text-cyber-cyan transition-colors">
                View Hub <ArrowUpRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
