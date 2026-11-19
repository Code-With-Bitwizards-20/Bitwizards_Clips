import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Gamepad2, Flame, Smile, Film, TrendingUp, Compass, ArrowRight } from "lucide-react";
import { ContentCategoryItem } from "@/types";

interface CategoryCardProps {
  category: ContentCategoryItem;
}

const iconMap = {
  Gamepad2,
  Flame,
  Smile,
  Film,
  TrendingUp,
  Compass,
};

const categoryImageMap: Record<string, string> = {
  "gta-6-highlights": "/images/gta6-hero-vice2060.webp",
  "epic-gameplay": "/images/gta6-action-stunt.webp",
  "funny-gaming-moments": "/images/gta6-hero-vice2060.webp",
  "cinematic-moments": "/images/gta6-coastal-skyline.webp",
  "viral-gaming-clips": "/images/gta6-neon-drift.webp",
  "gaming-discoveries": "/images/gta6-coastal-skyline.webp",
};

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Gamepad2;
  const bgImage = categoryImageMap[category.id] || "/images/gta6-hero-vice2060.webp";

  return (
    <Link
      href="/highlights"
      className="group relative p-7 rounded-2xl bg-space-800/60 border border-chrome-silver/10 hover:border-chrome-silver/30 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-glass-lg block"
    >
      {/* Background AI-Generated Concept Artwork (Reveals on Hover) */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
        <Image
          src={bgImage}
          alt={category.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/70 to-space-950/50" />
      </div>

      {/* Background glow gradient */}
      <div
        className="absolute top-0 right-0 w-44 h-44 rounded-full opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: category.accentColor }}
      />

      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex items-center justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-110 shadow-sm"
            style={{
              backgroundColor: `${category.accentColor}20`,
              color: category.accentColor,
            }}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-space-900/90 border border-chrome-silver/15 text-chrome-silver">
            {category.highlightCount}
          </span>
        </div>

        {/* Title & Tagline */}
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-chrome-dark block mb-1">
          {category.tagline}
        </span>
        <h3 className="font-display font-extrabold text-xl text-soft-white group-hover:text-cyber-cyan transition-colors mb-3">
          {category.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-chrome-silver leading-relaxed mb-6">
          {category.description}
        </p>
      </div>

      {/* Action link */}
      <div className="pt-4 border-t border-chrome-silver/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-soft-white group-hover:text-cyber-cyan transition-colors relative z-10">
        <span>Explore Category</span>
        <div className="w-7 h-7 rounded-full bg-space-700/80 flex items-center justify-center group-hover:bg-neon-magenta group-hover:text-white transition-all shadow-sm">
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}