import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Eye, Clock, CheckCircle2, ExternalLink } from "lucide-react";
import { VideoHighlight } from "@/types";
import { socialLinksConfig } from "@/config/socialLinks";

interface HighlightCardProps {
  highlight: VideoHighlight;
}

export function HighlightCard({ highlight }: HighlightCardProps) {
  const platform = socialLinksConfig[highlight.platform];

  return (
    <div className="group relative flex flex-col rounded-2xl bg-space-800/80 border border-chrome-silver/10 overflow-hidden hover:border-neon-magenta/40 transition-all duration-300 hover:shadow-glass-lg hover:-translate-y-1">
      {/* Thumbnail Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-space-950">
        <Image
          src={highlight.thumbnailUrl}
          alt={highlight.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />

        {/* Gradient dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/30 to-transparent" />

        {/* Demo Tag Badge */}
        {highlight.isDemo && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-space-900/80 backdrop-blur-md border border-chrome-silver/20 text-[10px] font-mono tracking-wider text-chrome-silver uppercase">
            Demo Showcase
          </div>
        )}

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-space-950/85 backdrop-blur-md text-[11px] font-mono text-soft-white flex items-center gap-1 border border-white/10">
          <Clock className="w-3 h-3 text-neon-magenta" />
          <span>{highlight.duration}</span>
        </div>

        {/* Floating Play Icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-neon-magenta/90 text-white flex items-center justify-center shadow-neon-magenta transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-white translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
        <div>
          {/* Metadata Bar */}
          <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
            <span className="font-semibold text-neon-cyan uppercase tracking-wider text-[11px]">
              {highlight.category}
            </span>
            <div className="flex items-center gap-1.5 text-chrome-dark font-mono text-[11px]">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: platform.color }}
              />
              <span>{platform.name}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-base text-soft-white group-hover:text-cyber-cyan transition-colors line-clamp-2 leading-snug">
            {highlight.title}
          </h3>

          <p className="text-xs text-chrome-dark font-mono mt-1">
            Game: {highlight.game}
          </p>
        </div>

        {/* Creator Attribution & Footer */}
        <div className="pt-3 border-t border-chrome-silver/10 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-neon-magenta to-electric-purple flex items-center justify-center font-bold text-white text-[11px]">
              {highlight.creator.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-soft-white font-medium flex items-center gap-1 text-[11px]">
                {highlight.creator.name}
                {highlight.creator.verified && (
                  <CheckCircle2 className="w-3 h-3 text-cyber-cyan" />
                )}
              </span>
              <span className="text-[10px] text-chrome-dark font-mono">
                {highlight.creator.handle}
              </span>
            </div>
          </div>

          <Link
            href={`/socials/${highlight.platform}`}
            className="px-2.5 py-1 rounded bg-space-700 hover:bg-space-600 text-[11px] font-semibold text-soft-white flex items-center gap-1 border border-chrome-silver/10 transition-colors"
          >
            <span>Watch</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </Link>
        </div>
      </div>
    </div>
  );
}
