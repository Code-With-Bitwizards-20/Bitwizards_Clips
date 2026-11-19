import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, Shield, Sparkles, Phone } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { siteConfig } from "@/config/site";
import { footerNavItems } from "@/config/navigation";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import { PlatformIcon } from "@/components/socials/PlatformIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-space-950 border-t border-chrome-silver/10 pt-16 pb-12 overflow-hidden">
      {/* Ambient gradient auras */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-neon-magenta/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-cyber-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-chrome-silver/10">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="inline-block" aria-label="BitWizards Clips Home">
              <BrandLogo variant="full" size={54} withGlow />
            </Link>
            <p className="text-chrome-silver text-sm leading-relaxed max-w-sm">
              The premier futuristic gaming media network from 2060. Capturing unforgettable open-world moments, cinematic captures, and viral gaming phenomena across global social platforms.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-chrome-dark">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPERATING FREQUENCY: 2060 GHZ</span>
              </div>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-soft-white hover:text-cyber-cyan transition-colors group"
              >
                <Mail className="w-4 h-4 text-neon-magenta group-hover:text-cyber-cyan transition-colors" />
                <span>{siteConfig.email}</span>
              </a>

              {/* Phone & WhatsApp Contact */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all"
                >
                  <PlatformIcon platform="whatsapp" className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp: {siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.callUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-space-800 text-chrome-silver border border-chrome-silver/15 hover:text-cyber-cyan transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hubs Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-soft-white">
              Ecosystem Hubs
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-chrome-silver">
              {footerNavItems.hubs.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-soft-white hover:translate-x-1 transition-all duration-200 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyber-cyan rounded"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Network Channels */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-soft-white">
              8-Platform Network
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-chrome-silver">
              {allPlatformIds.map((id) => {
                const config = socialLinksConfig[id];
                return (
                  <li key={id}>
                    <Link
                      href={`/socials/${id}`}
                      className="hover:text-soft-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyber-cyan rounded group"
                    >
                      <PlatformIcon platform={id} className="w-4 h-4 text-chrome-dark group-hover:text-soft-white transition-colors" />
                      <span>{config.name}</span>
                      {config.isVerified ? (
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">●</span>
                      ) : (
                        <span className="text-[9px] font-mono text-sunset-orange">Soon</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-sm tracking-widest uppercase text-soft-white">
              Legal & Trust
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-chrome-silver">
              {footerNavItems.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-soft-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyber-cyan rounded"
                  >
                    <Shield className="w-3.5 h-3.5 text-chrome-dark" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 p-3 rounded-xl bg-space-900 border border-chrome-silver/10 text-xs text-chrome-dark">
              <span className="font-bold text-chrome-silver block mb-1">Fan Media Disclaimer</span>
              BitWizards Clips is an independent entertainment brand. Not affiliated with or endorsed by Rockstar Games or Take-Two Interactive.
            </div>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Exact Creative Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-chrome-dark">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. {siteConfig.tagline}
          </div>

          {/* Exact credit specified in prompt */}
          <div className="flex items-center gap-1.5 bg-space-900/80 px-4 py-2 rounded-full border border-chrome-silver/10">
            <Sparkles className="w-3.5 h-3.5 text-neon-magenta animate-pulse" />
            <span>Designed and Created by</span>
            <a
              href={siteConfig.creativeStudioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-soft-white font-semibold hover:text-cyber-cyan underline decoration-neon-magenta/50 hover:decoration-cyber-cyan transition-colors"
            >
              Code with Bitwizards
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
