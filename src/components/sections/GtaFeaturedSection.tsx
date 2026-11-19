"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, AlertTriangle, MapPin, Zap, Sparkles } from "lucide-react";

const categoryPills = [
  { label: "Cinematic Reveals", color: "#FF3F9D" },
  { label: "Vice City", color: "#FF8A45" },
  { label: "Physics Engine", color: "#37DFFF" },
  { label: "Neon Stunts", color: "#925BFF" },
  { label: "Fan Content", color: "#C8D1DE" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: "easeOut" as const },
  }),
};

export function GtaFeaturedSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden bg-space-950"
      aria-labelledby="gta-featured-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-magenta/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-sunset-orange/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fan Content Disclaimer Banner */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-12 p-4 rounded-xl bg-space-800/80 border border-sunset-orange/30 backdrop-blur-md flex items-start sm:items-center gap-3 text-xs sm:text-sm text-chrome-silver"
        >
          <AlertTriangle className="w-4 h-4 text-sunset-orange shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-sunset-orange">FAN CONTENT NOTICE:</strong>{" "}
            All GTA VI content featured by BitWizards Clips is community-created
            and fan-curated. BitWizards Clips is not affiliated with, endorsed
            by, or connected to Rockstar Games or Take-Two Interactive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.3em] text-neon-magenta border border-neon-magenta/40 bg-neon-magenta/8 px-3 py-1 rounded-full">
                <Zap className="w-3 h-3" />
                Featured Series
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-chrome-dark">
                <MapPin className="w-3 h-3 text-sunset-orange" />
                Vice City 2060
              </span>
            </motion.div>

            <motion.h2
              id="gta-featured-heading"
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-soft-white leading-[1.05] tracking-tight mb-6"
            >
              WELCOME TO
              <br />
              THE WORLD OF
              <br />
              <span className="text-gradient-vice">GTA VI.</span>
            </motion.h2>

            <motion.p
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-lg text-chrome-silver leading-relaxed mb-8 max-w-lg"
            >
              Vice City has never looked — or felt — like this. We curate the
              finest fan-made cinematic reveals, insane physics showcases, and
              neon coastal spectacles from the most talented creators in the
              gaming community.
            </motion.p>

            {/* Category pills */}
            <motion.div
              custom={4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-10"
            >
              {categoryPills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-block text-xs font-mono font-medium px-3 py-1 rounded-full bg-space-800/80 border border-chrome-silver/15 text-chrome-silver backdrop-blur-sm"
                  style={{ borderColor: `${pill.color}30` }}
                >
                  {pill.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <Link
                href="/gta-6"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm bg-gradient-to-r from-neon-magenta via-sunset-orange to-electric-purple text-white hover:shadow-[0_0_30px_rgba(255,63,157,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Explore GTA VI Hub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: High-Resolution Generated WebP Visual Panel */}
          <motion.div
            custom={2}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" as const }}
            className="group relative h-[480px] lg:h-[560px] rounded-3xl overflow-hidden border border-chrome-silver/20 shadow-glass-lg"
          >
            {/* Optimized WebP Image */}
            <Image
              src="/images/gta6-hero-vice2060.webp"
              alt="Vice City 2060 GTA VI Concept Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-magenta/20 via-transparent to-cyber-cyan/15 pointer-events-none" />

            {/* Badge overlay on image */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-space-900/80 backdrop-blur-md border border-neon-magenta/40 text-[11px] font-mono font-bold text-soft-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-neon-magenta animate-pulse" />
              <span>VICE CITY 2060 ENGINE</span>
            </div>

            {/* Bottom floating card */}
            <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-space-900/85 backdrop-blur-md border border-chrome-silver/15 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-neon-magenta uppercase tracking-widest">
                  Featured Community Reveal
                </p>
                <p className="font-display font-bold text-soft-white text-sm">
                  Neon Coastal Drift at Sunset
                </p>
              </div>
              <Link
                href="/gta-6"
                className="px-3 py-1.5 rounded-lg bg-space-800 hover:bg-space-700 text-xs font-bold text-soft-white flex items-center gap-1 border border-chrome-silver/20 transition-colors"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3 text-cyber-cyan" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
