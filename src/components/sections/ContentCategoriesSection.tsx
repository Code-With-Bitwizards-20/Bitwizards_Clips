"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { contentCategories } from "@/data/highlights";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function ContentCategoriesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden bg-space-800/30"
      aria-labelledby="categories-heading"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-chrome-silver/15 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-chrome-silver/15 to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-electric-purple/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cyber-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyber-cyan border border-cyber-cyan/30 bg-cyber-cyan/8 px-3 py-1 rounded-full mb-6">
            Content Universe
          </span>
          <h2
            id="categories-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-soft-white leading-tight tracking-tight"
          >
            EXPLORE THE
            <br />
            <span className="text-gradient-cyber">UNIVERSE.</span>
          </h2>
          <p className="mt-6 text-lg text-chrome-silver max-w-2xl mx-auto leading-relaxed">
            Six categories of elite gaming content — from cinematic masterpieces
            to viral sandbox chaos. Every pixel curated for maximum impact.
          </p>
        </motion.div>

        {/* Category cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contentCategories.map((category) => (
            <motion.div key={category.id} variants={cardVariants}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
