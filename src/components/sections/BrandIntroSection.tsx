"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Radio, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Platforms", value: "8", accent: "#FF3F9D" },
  { label: "Quality", value: "2060", accent: "#37DFFF" },
  { label: "Global Network", value: "∞", accent: "#925BFF" },
  { label: "Creator First", value: "100%", accent: "#FF8A45" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function BrandIntroSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden bg-space-900"
      aria-labelledby="brand-intro-heading"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-electric-purple/8 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-neon-magenta/6 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-6"
        >
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-[0.3em] text-neon-magenta border border-neon-magenta/30 bg-neon-magenta/8 px-3 py-1 rounded-full">
            Who We Are
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT COLUMN: Text + Stats */}
          <div>
            <motion.h2
              id="brand-intro-heading"
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-soft-white leading-[1.05] tracking-tight mb-8"
            >
              MORE THAN
              <br />
              <span className="text-gradient-neon">JUST CLIPS.</span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-lg text-chrome-silver leading-relaxed mb-6 max-w-lg"
            >
              BitWizards Clips is a gaming media and entertainment brand built
              for the digital age. We curate, distribute, and amplify the most
              jaw-dropping gaming highlights across the globe — from cinematic
              open-world captures to record-breaking competitive plays.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-base text-chrome-silver/80 leading-relaxed mb-12 max-w-lg"
            >
              Our network distributes elite gaming content across{" "}
              <strong className="text-soft-white">8+ social platforms</strong>,
              reaching millions of passionate fans worldwide — with every clip
              credited, every creator honored, and every frame engineered for
              impact.
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 4}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="relative p-5 rounded-2xl bg-space-800/60 border border-chrome-silver/10 overflow-hidden group hover:border-chrome-silver/25 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity pointer-events-none"
                    style={{ backgroundColor: stat.accent }}
                  />
                  <div
                    className="font-display font-extrabold text-3xl sm:text-4xl mb-1"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-chrome-silver">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Futuristic AI-Generated Visual Panel */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="group relative h-[480px] lg:h-[560px] rounded-3xl overflow-hidden border border-chrome-silver/20 shadow-glass-xl"
          >
            {/* AI Generated Vice City 2060 Coastal Skyline WebP */}
            <Image
              src="/images/gta6-coastal-skyline.webp"
              alt="Vice City 2060 Coastal Skyline Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-space-950/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-magenta/20 via-transparent to-cyber-cyan/20 pointer-events-none" />

            {/* Cyber Grid Lines */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(55,223,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(55,223,255,0.4) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Floating Futuristic HUD Elements */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between pointer-events-none">
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-space-950/80 backdrop-blur-md border border-cyber-cyan/40 text-xs font-mono text-cyber-cyan">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                  <span>METROPOLIS AERIAL // 2060</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-space-950/80 backdrop-blur-md border border-neon-magenta/40 text-xs font-mono text-neon-magenta">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>8 PLATFORMS</span>
                </div>
              </div>

              {/* Center decorative target & coordinates */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full border border-cyber-cyan/40 flex items-center justify-center relative animate-spin [animation-duration:20s]">
                  <div className="w-16 h-16 rounded-full border border-neon-magenta/40" />
                  <div className="absolute top-0 w-2 h-2 bg-cyber-cyan rounded-full" />
                </div>
                <span className="mt-3 text-[11px] font-mono tracking-widest text-chrome-silver/90 bg-space-950/70 px-3 py-1 rounded-full border border-chrome-silver/10">
                  LAT 25.7617° N • LON 80.1918° W
                </span>
              </div>

              {/* Bottom row badges */}
              <div className="flex items-center justify-between gap-4">
                <div className="glass-card rounded-xl px-4 py-3 bg-space-950/80 backdrop-blur-md border border-chrome-silver/15">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-chrome-silver">
                    Broadcast Render
                  </div>
                  <div className="font-display font-black text-sm text-soft-white flex items-center gap-1.5 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-sunset-orange" />
                    <span>4K 60FPS HDR</span>
                  </div>
                </div>

                <div className="glass-card rounded-xl px-4 py-3 bg-space-950/80 backdrop-blur-md border border-chrome-silver/15 text-right">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-chrome-silver">
                    Attribution Engine
                  </div>
                  <div className="font-display font-black text-sm text-emerald-400 flex items-center gap-1.5 justify-end mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
