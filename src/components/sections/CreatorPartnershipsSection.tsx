"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { creatorTiers } from "@/data/creators";
import { ArrowRight, CheckCircle2, Star, Zap, Trophy, Sparkles } from "lucide-react";

const tierIcons = [Star, Zap, Trophy];
const tierAccents = ["#37DFFF", "#FF3F9D", "#925BFF"];
const tierBorderGlows = [
  "hover:border-cyber-cyan/50 hover:shadow-[0_0_30px_rgba(55,223,255,0.15)]",
  "hover:border-neon-magenta/50 hover:shadow-[0_0_30px_rgba(255,63,157,0.15)]",
  "hover:border-electric-purple/50 hover:shadow-[0_0_30px_rgba(146,91,255,0.15)]",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function CreatorPartnershipsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden bg-space-900"
      aria-labelledby="creator-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-chrome-silver/10 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-electric-purple/8 blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-neon-magenta/6 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN: Headline + Description + CTA */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              custom={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.3em] text-neon-magenta border border-neon-magenta/30 bg-neon-magenta/8 px-3 py-1 rounded-full">
                <Star className="w-3 h-3" />
                Creator Program
              </span>
            </motion.div>

            <motion.h2
              id="creator-heading"
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-soft-white leading-[1.05] tracking-tight mb-8"
            >
              LET&apos;S CREATE
              <br />
              SOMETHING
              <br />
              <span className="text-gradient-neon">EPIC.</span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-lg text-chrome-silver leading-relaxed mb-6 max-w-md"
            >
              We partner with creators at every stage — from rising streamers to
              esports studios — giving your gameplay the cinematic treatment it
              deserves across a global 8-platform distribution network.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-base text-chrome-silver/70 leading-relaxed mb-10 max-w-md"
            >
              Every clip is credited. Every creator is honored. Zero compromise
              on attribution — it&apos;s the BitWizards standard.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/creators"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan text-white hover:shadow-[0_0_30px_rgba(255,63,157,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/creators"
                aria-label="Learn more about the BitWizards Clips Creator Partnership Program"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm border border-chrome-silver/20 text-chrome-silver hover:text-soft-white hover:border-chrome-silver/40 transition-all duration-300"
              >
                Learn More About Creator Program
              </Link>
            </motion.div>

            {/* AI Generated Creator Spotlight Visual Card */}
            <motion.div
              custom={5}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mt-10 relative h-48 rounded-2xl overflow-hidden border border-chrome-silver/20 group shadow-glass-md hidden sm:block"
            >
              <Image
                src="/images/gta6-action-stunt.webp"
                alt="Creator Gameplay Spotlight - Precision Expressway Jump"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-space-950/80 backdrop-blur-md border border-neon-magenta/40 text-[10px] font-mono text-neon-magenta flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>CREATOR SPOTLIGHT // 100% CREDIT</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="font-display font-bold text-soft-white">Expressway Flyover Leap by @apexstunts</span>
                <span className="font-mono text-[10px] text-cyber-cyan bg-space-900/80 px-2 py-0.5 rounded border border-cyber-cyan/30">4.5M REACH</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Creator tier preview cards */}
          <div className="flex flex-col gap-5">
            {creatorTiers.map((tier, index) => {
              const TierIcon = tierIcons[index];
              const accent = tierAccents[index];
              const glowClass = tierBorderGlows[index];

              return (
                <motion.div
                  key={tier.id}
                  custom={index + 2}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className={`relative p-6 rounded-2xl glass-card border border-chrome-silver/10 transition-all duration-300 overflow-hidden group ${glowClass}`}
                >
                  {/* Ambient glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                    style={{ backgroundColor: accent }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10 shrink-0"
                      style={{
                        backgroundColor: `${accent}18`,
                        color: accent,
                      }}
                    >
                      <TierIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-chrome-dark mb-0.5">
                        Tier {index + 1}
                      </div>
                      <h3
                        className="font-display font-bold text-lg text-soft-white"
                        style={{ color: accent }}
                      >
                        {tier.title}
                      </h3>
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-5">
                    {tier.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-chrome-silver"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: accent }}
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="pt-4 border-t border-chrome-silver/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-chrome-dark uppercase tracking-wider">
                      {tier.requirements.length} requirements
                    </span>
                    <Link
                      href="/creators"
                      className="text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
                      style={{ color: accent }}
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
