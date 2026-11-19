"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Radio, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CinematicHero() {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-space-950">
      {/* Layer 1: Futuristic Vice City Sunset Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12072B] via-[#240c31] to-[#080910] z-0" />

      {/* Layer 2: GTA 6 AI-Generated Vice City 2060 Hero Backdrop */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
        <Image
          src="/images/gta6-hero-vice2060.webp"
          alt="Vice City 2060 Open World Backdrop"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/60 to-[#12072B]/80" />
      </div>

      {/* Layer 3: Sunset Horizon Sun & Neon Radial Rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-t from-sunset-orange via-neon-magenta to-transparent opacity-35 blur-[120px] pointer-events-none z-0" />

      {/* Layer 4: Cyber Grid Ground & Ocean Wave Horizon */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-space-950 via-space-900/80 to-transparent pointer-events-none z-10" />

      {/* Layer 5: Subtle Animated Particle Sparks */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-cyber-cyan shadow-[0_0_10px_#37DFFF] animate-pulse" />
        <div className="absolute top-1/2 right-1/5 w-2 h-2 rounded-full bg-neon-magenta shadow-[0_0_12px_#FF3F9D] animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-sunset-orange shadow-[0_0_8px_#FF8A45] animate-pulse delay-1000" />
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-electric-purple shadow-[0_0_10px_#925BFF] animate-pulse delay-700" />
      </div>

      {/* Layer 6: Main Hero Content (Strictly Centered across all screens) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center justify-center my-auto">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-space-800/80 border border-chrome-silver/20 backdrop-blur-md mb-8 shadow-neon-magenta/20 mx-auto"
        >
          <Sparkles className="w-4 h-4 text-neon-magenta animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-soft-white">
            WELCOME TO THE NEXT GENERATION OF GAMING MEDIA
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-soft-white max-w-5xl mb-6 uppercase mx-auto"
        >
          ENTER THE NEXT <br />
          <span className="text-gradient-vice">GENERATION.</span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-chrome-silver max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Experience unforgettable gaming moments, cinematic gameplay and the world&apos;s most exciting gaming highlights.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 mx-auto"
        >
          <Link
            href="/highlights"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan text-soft-white shadow-neon-magenta hover:shadow-cyber-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>EXPLORE HIGHLIGHTS</span>
          </Link>

          <Link
            href="/socials"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-space-800/80 border border-chrome-silver/20 text-soft-white hover:text-cyber-cyan hover:border-cyber-cyan hover:bg-space-700/80 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            <Radio className="w-4 h-4 text-neon-magenta" />
            <span>OUR SOCIAL NETWORK</span>
          </Link>
        </motion.div>

        {/* Perfectly Centered Broadcasting Handle Display */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex justify-center items-center mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-space-900/80 border border-chrome-silver/20 backdrop-blur-md text-xs font-mono text-chrome-silver shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan shadow-[0_0_8px_#37DFFF] animate-pulse" />
            <span className="tracking-wider uppercase">BROADCASTING AS</span>
            <span className="text-soft-white font-black tracking-wider text-sm">{siteConfig.username}</span>
          </div>
        </motion.div>
      </div>

      {/* Perfectly Centered Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-full inset-x-0 pt-8 pb-4 flex flex-col items-center justify-center text-center z-20 opacity-80 hover:opacity-100 transition-opacity pointer-events-auto"
      >
        <Link
          href="#explore"
          className="flex flex-col items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.25em] text-chrome-silver hover:text-cyber-cyan transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-cyber-cyan animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}