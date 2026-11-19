"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Radio, Phone, Sparkles, ChevronRight } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { PlatformIcon } from "@/components/socials/PlatformIcons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-space-950/90 backdrop-blur-2xl border-b border-chrome-silver/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-space-950/80 via-space-950/40 to-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Left: Brand Logo (Enhanced Size on all devices) */}
            <Link
              href="/"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan rounded-xl group"
              aria-label="BitWizards Clips Home"
            >
              <BrandLogo variant="full" size={50} withGlow priority />
            </Link>

            {/* Middle: Desktop Navigation Links with Clean Spacing & Visual Rhythm */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 bg-space-900/70 backdrop-blur-xl px-3 xl:px-4 py-2 rounded-full border border-chrome-silver/15 shadow-glass-sm">
              {mainNavItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 xl:px-3.5 2xl:px-4 py-2 xl:py-2.5 text-sm font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan flex items-center whitespace-nowrap",
                      isActive
                        ? "text-soft-white font-semibold"
                        : "text-chrome-silver hover:text-soft-white hover:bg-space-800/60"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-neon-magenta/25 via-electric-purple/20 to-cyber-cyan/25 border border-neon-magenta/50 rounded-full shadow-[0_0_16px_rgba(255,63,157,0.35)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase rounded-full bg-neon-magenta/25 text-neon-magenta border border-neon-magenta/40 shadow-[0_0_8px_rgba(255,63,157,0.3)]">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right: Icon-Only WhatsApp & Call Buttons + Network CTA + Hamburger */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* WhatsApp Icon-Only Button */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Chat on WhatsApp +92-349-627-4499"
                title="Chat on WhatsApp: +92-349-627-4499"
              >
                <PlatformIcon platform="whatsapp" className="w-5 h-5 fill-current" />
              </a>

              {/* Call Icon-Only Button */}
              <a
                href={siteConfig.callUrl}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-space-800/80 border border-chrome-silver/20 text-soft-white hover:text-cyber-cyan hover:border-cyber-cyan/60 hover:bg-cyber-cyan/10 hover:scale-105 hover:shadow-[0_0_15px_rgba(55,223,255,0.35)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
                aria-label="Call +92-349-627-4499"
                title="Call Direct: +92-349-627-4499"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Network CTA (Desktop / Tablet) */}
              <Link
                href="/socials"
                className="hidden md:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan text-soft-white hover:shadow-neon-magenta transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan"
              >
                <Radio className="w-3.5 h-3.5 animate-pulse text-soft-white" />
                <span>Our Network</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </Link>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-11 h-11 rounded-full bg-space-800/90 border border-chrome-silver/20 text-soft-white hover:text-cyber-cyan hover:border-cyber-cyan/60 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-cyan transition-all"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Futuristic Animated Mobile Sidebar & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay with Smooth Fade */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-space-950/80 backdrop-blur-md lg:hidden"
              aria-hidden="true"
            />

            {/* Futuristic Drawer with Smooth Slide & Glow Animations */}
            <motion.div
              key="sidebar-drawer"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Drawer"
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.8 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm sm:max-w-md lg:hidden bg-gradient-to-b from-space-950 via-[#0a0c16] to-space-950 border-l border-neon-magenta/30 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between shadow-[-15px_0_50px_rgba(255,63,157,0.2)]"
            >
              {/* Top Section */}
              <div>
                {/* Futuristic HUD Header */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-chrome-silver/15">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyber-cyan flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
                      TERMINAL 2060 // SYSTEM ONLINE
                    </span>
                    <div className="mt-2">
                      <BrandLogo variant="full" size={46} withGlow priority />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-space-900 border border-chrome-silver/20 text-soft-white hover:text-neon-magenta hover:border-neon-magenta/50 flex items-center justify-center transition-all duration-200"
                    aria-label="Close navigation sidebar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Staggered Animated Navigation Stream */}
                <div className="flex flex-col gap-2 mb-6">
                  <div className="text-[10px] uppercase tracking-widest text-chrome-silver/60 font-mono mb-1 flex items-center justify-between">
                    <span>MAIN NAVIGATION STREAM</span>
                    <span className="text-neon-magenta font-mono">07 NODES</span>
                  </div>

                  {mainNavItems.map((item, index) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border",
                            isActive
                              ? "bg-gradient-to-r from-neon-magenta/20 to-electric-purple/20 text-soft-white border-neon-magenta/50 shadow-[0_0_15px_rgba(255,63,157,0.25)] font-bold"
                              : "text-chrome-silver border-chrome-silver/10 hover:bg-space-900 hover:text-soft-white hover:border-cyber-cyan/40"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <span className="font-display tracking-wide text-base">{item.title}</span>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span className="px-2 py-0.5 text-[9px] font-black uppercase rounded-full bg-neon-magenta/25 text-neon-magenta border border-neon-magenta/40">
                                {item.badge}
                              </span>
                            )}
                            <ChevronRight className={cn("w-4 h-4 transition-transform", isActive ? "text-neon-magenta translate-x-0.5" : "text-chrome-dark")} />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Direct Action Line (WhatsApp & Call) */}
                <div className="p-4 rounded-2xl bg-space-900/90 border border-chrome-silver/15 mb-6 shadow-inner">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-chrome-silver/70 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-sunset-orange" />
                    <span>INSTANT DIRECT CONNECT</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all text-center"
                    >
                      <PlatformIcon platform="whatsapp" className="w-5 h-5 fill-current" />
                      <span className="text-xs font-bold font-display">WhatsApp</span>
                      <span className="text-[10px] font-mono text-emerald-400/80">+92-349-627-4499</span>
                    </a>

                    <a
                      href={siteConfig.callUrl}
                      className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-space-800/80 border border-chrome-silver/20 text-soft-white hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:bg-space-800 transition-all text-center"
                    >
                      <Phone className="w-5 h-5 text-cyber-cyan" />
                      <span className="text-xs font-bold font-display">Direct Call</span>
                      <span className="text-[10px] font-mono text-chrome-silver">+92-349-627-4499</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Section: All 8 Verified Socials & Network Button */}
              <div className="pt-4 border-t border-chrome-silver/15 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono text-chrome-silver/70">
                  <span>8 GLOBAL CHANNELS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ALL VERIFIED
                  </span>
                </div>

                {/* All 8 Official Social Platform Icons Strip with Colors & Deep Links */}
                <div className="grid grid-cols-8 gap-2 py-1 text-chrome-silver">
                  <a
                    href="https://youtube.com/channel/UCwiaM-TlEote_GaM_QqOygw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-red-500/50 hover:text-red-500 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="YouTube"
                    title="YouTube Channel"
                  >
                    <PlatformIcon platform="youtube" className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@bitwizardsclips?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-cyber-cyan/50 hover:text-cyber-cyan flex items-center justify-center transition-all hover:scale-110"
                    aria-label="TikTok"
                    title="TikTok Hub"
                  >
                    <PlatformIcon platform="tiktok" className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://www.instagram.com/bitwizardsclips/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-pink-500/50 hover:text-pink-500 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Instagram"
                    title="Instagram Profile"
                  >
                    <PlatformIcon platform="instagram" className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61596877313086"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-blue-500/50 hover:text-blue-500 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Facebook"
                    title="Facebook Page"
                  >
                    <PlatformIcon platform="facebook" className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://x.com/BitWizardsClip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-soft-white/50 hover:text-soft-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label="X Twitter"
                    title="X Profile"
                  >
                    <PlatformIcon platform="x" className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bitwizards-clips-375abb450/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-blue-400/50 hover:text-blue-400 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="LinkedIn"
                    title="LinkedIn Page"
                  >
                    <PlatformIcon platform="linkedin" className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://www.threads.com/@bitwizardsclips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-purple-400/50 hover:text-purple-400 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Threads"
                    title="Threads Profile"
                  >
                    <PlatformIcon platform="threads" className="w-4 h-4 fill-current" />
                  </a>
                  <a
                    href="https://rumble.com/user/BitWizardsClips"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-space-900 border border-chrome-silver/10 hover:border-emerald-400/50 hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Rumble"
                    title="Rumble Channel"
                  >
                    <PlatformIcon platform="rumble" className="w-4 h-4 fill-current" />
                  </a>
                </div>

                <Link
                  href="/socials"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold uppercase tracking-wider bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan text-soft-white shadow-neon-magenta text-xs hover:opacity-95 transition-all"
                >
                  <Radio className="w-4 h-4" />
                  <span>Explore Full 8-Platform Network</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}