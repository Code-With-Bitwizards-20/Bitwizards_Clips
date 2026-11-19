"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Radio, Mail, Sparkles, ArrowRight } from "lucide-react";

export function CallToActionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden bg-space-950"
      aria-labelledby="cta-heading"
    >
      {/* Background AI Generated Atmosphere */}
      <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none z-0">
        <Image
          src="/images/gta6-hero-vice2060.webp"
          alt="Vice City Sunset Horizon Backdrop"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/80 to-transparent" />
      </div>

      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-magenta/15 via-electric-purple/10 to-cyber-cyan/15 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full bg-neon-magenta/20 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-cyber-cyan/20 blur-[100px] animate-pulse delay-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full bg-electric-purple/15 blur-[80px] animate-pulse delay-500 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-800/80 border border-neon-magenta/30 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-neon-magenta animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neon-magenta">
            NEXT LEVEL AWAITS
          </span>
        </motion.div>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-soft-white leading-tight mb-6"
        >
          YOUR NEXT GAMING
          <br />
          <span className="text-gradient-vice">OBSESSION STARTS HERE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-chrome-silver text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Join millions of gaming fans across 8 global social platforms. Discover epic highlights, support talented creators, and become part of the most cinematic gaming media network ever built.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/socials"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-extrabold text-sm uppercase tracking-wider bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan text-soft-white shadow-neon-magenta hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            <span>EXPLORE OUR NETWORK</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-soft-white bg-space-800/80 border border-chrome-silver/20 hover:border-cyber-cyan hover:text-cyber-cyan hover:bg-space-700/80 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
          >
            <Mail className="w-4 h-4" />
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Handle watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-xs font-mono text-chrome-dark"
        >
          @BitWizardsClips · bitwizardsclips.com · One World. Every Epic Gaming Moment.
        </motion.p>
      </div>
    </section>
  );
}
