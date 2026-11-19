"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HighlightCard } from "@/components/cards/HighlightCard";
import { sampleHighlights } from "@/data/highlights";
import { AlertCircle, Film } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function FeaturedHighlightsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Show first 6 highlights
  const displayedHighlights = sampleHighlights.slice(0, 6);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden bg-space-800/20"
      aria-labelledby="highlights-heading"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-magenta/15 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-chrome-silver/10 to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-magenta/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.3em] text-electric-purple border border-electric-purple/30 bg-electric-purple/8 px-3 py-1 rounded-full mb-6">
            <Film className="w-3 h-3" />
            Clip Reel
          </span>
          <h2
            id="highlights-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-soft-white leading-tight tracking-tight"
          >
            FEATURED
            <br />
            <span className="text-gradient-vice">HIGHLIGHTS.</span>
          </h2>
          <p className="mt-6 text-lg text-chrome-silver max-w-2xl mx-auto leading-relaxed">
            A curated selection of the most epic, viral, and jaw-dropping gaming
            moments — straight from the community.
          </p>
        </motion.div>

        {/* Demo disclaimer banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex items-start gap-3 p-4 rounded-xl bg-electric-purple/10 border border-electric-purple/25"
          role="note"
          aria-label="Demo content disclaimer"
        >
          <AlertCircle
            className="w-5 h-5 text-electric-purple shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-chrome-silver leading-relaxed">
            <strong className="text-electric-purple font-bold">
              Demo Showcase:
            </strong>{" "}
            The highlights below are sample/demo entries used to showcase the
            BitWizards Clips platform design and content format. Real creator
            content will be featured as the network launches. All thumbnails are
            illustrative stock imagery.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedHighlights.map((highlight) => (
            <motion.div key={highlight.id} variants={cardVariants}>
              <HighlightCard highlight={highlight} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
