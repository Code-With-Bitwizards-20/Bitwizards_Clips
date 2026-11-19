import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { SocialPlatformConfig } from "@/types";
import { PlatformIcon } from "@/components/socials/PlatformIcons";

interface PlatformCardProps {
  platform: SocialPlatformConfig;
}

export function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 rounded-2xl bg-space-800/60 border border-chrome-silver/10 hover:border-chrome-silver/30 transition-all duration-300 backdrop-blur-md overflow-hidden hover:shadow-glass-lg hover:-translate-y-1">
      {/* Dynamic ambient highlight based on platform color */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-25 blur-3xl transition-opacity pointer-events-none"
        style={{ backgroundColor: platform.color }}
      />

      <div>
        {/* Card Header: Real SVG Platform Icon + Name + Verification Status */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${platform.color} 0%, ${platform.secondaryColor} 100%)`,
              }}
            >
              <PlatformIcon platform={platform.id} className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-soft-white group-hover:text-cyber-cyan transition-colors">
                {platform.name}
              </h3>
              <p className="text-xs font-mono text-chrome-silver">{platform.handle}</p>
            </div>
          </div>

          {platform.isVerified ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sunset-orange bg-sunset-orange/10 px-2.5 py-1 rounded-full border border-sunset-orange/20">
              <Clock className="w-3.5 h-3.5" />
              Setup Phase
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-chrome-silver leading-relaxed mb-6 line-clamp-3">
          {platform.description}
        </p>

        {/* Content pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {platform.contentTypes.slice(0, 3).map((item) => (
            <span
              key={item}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-900 border border-chrome-silver/10 text-chrome-dark"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-chrome-silver/10 flex items-center justify-between gap-2">
        <Link
          href={`/socials/${platform.id}`}
          aria-label={`${platform.name} channel hub on BitWizards Clips`}
          className="text-xs font-bold uppercase tracking-wider text-soft-white hover:text-cyber-cyan transition-colors inline-flex items-center gap-1"
        >
          <span>Channel Hub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {platform.isVerified && platform.url ? (
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-soft-white bg-space-700 hover:bg-space-600 border border-chrome-silver/20 hover:border-cyber-cyan transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Visit Channel</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        ) : (
          <span className="text-[11px] text-chrome-dark font-mono italic">
            Connecting Soon
          </span>
        )}
      </div>
    </div>
  );
}
