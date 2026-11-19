"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PlatformCard } from "@/components/cards/PlatformCard";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import { Radio } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function SocialNetworkSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden bg-space-900"
      aria-labelledby="social-network-heading"
    >
      {/* Ambient background with AI-Generated Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 mix-blend-screen">
          <Image
            src="/images/gta6-coastal-skyline.webp"
            alt="Vice City 2060 Global Broadcast Horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/85 to-space-900" />
        </div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-neon-magenta/6 blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-electric-purple/8 blur-[120px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-chrome-silver/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.3em] text-neon-magenta border border-neon-magenta/30 bg-neon-magenta/8 px-3 py-1 rounded-full mb-6">
            <Radio className="w-3 h-3 animate-pulse" />
            8-Platform Grid
          </span>
          <h2
            id="social-network-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-soft-white leading-tight tracking-tight"
          >
            JOIN OUR
            <br />
            <span className="text-gradient-neon">GLOBAL NETWORK.</span>
          </h2>
          <p className="mt-6 text-lg text-chrome-silver max-w-2xl mx-auto leading-relaxed">
            One unified content universe, distributed across eight platforms
            simultaneously. Find us wherever you watch, follow, and play.
          </p>
        </motion.div>

        {/* Platform cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {allPlatformIds.map((platformId) => {
            const platform = socialLinksConfig[platformId];
            return (
              <motion.div key={platformId} variants={cardVariants}>
                <PlatformCard platform={platform} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-chrome-silver">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-bold">ALL 8 CHANNELS LIVE</span>
            <span>— Verified broadcasts & daily gaming drops</span>
          </div>
          <span className="hidden sm:block text-chrome-dark/40">•</span>
          <div className="flex items-center gap-2 text-xs font-mono text-chrome-dark">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan" />
            Unified identity: @BitWizardsClips
          </div>
        </motion.div>
      </div>
    </section>
  );
}
