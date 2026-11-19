"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user already saw the intro loading animation this session
    const hasSeenIntro = sessionStorage.getItem("bw_intro_seen");
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("bw_intro_seen", "true");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-900 pointer-events-none"
          aria-live="polite"
          aria-busy={loading}
        >
          {/* Futuristic ambient backdrops */}
          <div className="absolute w-96 h-96 rounded-full bg-neon-magenta/20 blur-[100px] animate-pulse" />
          <div className="absolute w-80 h-80 rounded-full bg-cyber-cyan/15 blur-[90px] animate-pulse delay-700" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-6"
          >
            <BrandLogo variant="icon" size={72} withGlow priority />

            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-display font-extrabold text-xl tracking-widest text-soft-white">
                BITWIZARDS <span className="text-gradient-vice">CLIPS</span>
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-chrome-dark font-mono">
                INITIALIZING 2060 NETWORK
              </span>
            </div>

            {/* Glowing progress line */}
            <div className="w-48 h-0.5 bg-space-700 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
