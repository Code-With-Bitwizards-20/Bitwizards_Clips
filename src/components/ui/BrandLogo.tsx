import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "full" | "icon" | "monogram";
  size?: number;
  className?: string;
  withGlow?: boolean;
  priority?: boolean;
  useImage?: boolean;
}

export function BrandLogo({
  variant = "full",
  size = 48,
  className,
  withGlow = false,
  priority = false,
  useImage = true,
}: BrandLogoProps) {
  // Master Icon Mark: Official BitWizards Master WebP Asset with fallback to high-fidelity SVG Monogram
  const iconMark = (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-2xl overflow-hidden shrink-0 select-none transition-transform duration-300 group-hover:scale-105",
        withGlow && "shadow-neon-magenta",
        className
      )}
      style={{ width: size, height: size }}
      role="img"
      aria-label="BitWizards Clips Logo Icon"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta via-electric-purple to-cyber-cyan opacity-90 rounded-2xl" />
      <div className="absolute inset-[1.5px] bg-space-950 rounded-[14px] flex items-center justify-center overflow-hidden p-1 shadow-inner">
        {useImage ? (
          <Image
            src="/images/bitwizards-logo.webp"
            alt="BitWizards Clips Official Logo"
            width={size}
            height={size}
            priority={priority}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,63,157,0.6)]"
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="w-4/5 h-4/5 text-soft-white drop-shadow-[0_0_8px_rgba(255,63,157,0.6)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 8L86 28V72L50 92L14 72V28L50 8Z"
              stroke="url(#bw-gradient)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M50 8V50M86 28L50 50M14 28L50 50"
              stroke="url(#bw-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M36 42L44 65L50 52L56 65L64 42"
              stroke="#F5F7FC"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="34" r="4" fill="#37DFFF" />
            <defs>
              <linearGradient id="bw-gradient" x1="14" y1="8" x2="86" y2="92" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF3F9D" />
                <stop offset="0.5" stopColor="#FF8A45" />
                <stop offset="1" stopColor="#37DFFF" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );

  if (variant === "icon" || variant === "monogram") {
    return iconMark;
  }

  return (
    <div className={cn("inline-flex items-center gap-3.5 group", className)}>
      {iconMark}
      <div className="flex flex-col text-left leading-tight select-none">
        <span className="font-display font-black tracking-wider text-lg sm:text-xl md:text-2xl text-soft-white group-hover:text-cyber-cyan transition-colors duration-300 drop-shadow-sm">
          BITWIZARDS
        </span>
        <span className="font-display font-black text-xs sm:text-sm tracking-[0.25em] text-gradient-vice uppercase">
          CLIPS
        </span>
      </div>
    </div>
  );
}
