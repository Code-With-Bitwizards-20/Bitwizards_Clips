import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { creatorTiers } from "@/data/creators";
import {
  Star,
  Zap,
  Trophy,
  CheckCircle2,
  Mail,
  ArrowRight,
  Shield,
  Upload,
  Eye,
  Award,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { CreatorFaqAccordion } from "@/components/creators/CreatorFaqAccordion";

export const metadata: Metadata = constructMetadata({
  title: "Creator Partnership Program | BitWizards Clips",
  description:
    "Join the BitWizards Clips Creator Collective. Syndicate your gaming highlights across 8 global platforms with 100% verified attribution and ethical licensing.",
  path: "/creators",
  keywords: [
    "gaming creator program",
    "clip syndication",
    "gaming highlights partnership",
    "BitWizards Clips creators",
    "gameplay licensing",
  ],
});

const tierIcons = [Star, Zap, Trophy];
const tierColors = ["#37DFFF", "#FF3F9D", "#925BFF"];

const processSteps = [
  {
    icon: Upload,
    title: "Submit",
    step: "01",
    desc: "Send your original gameplay clip with format details and channel handle.",
  },
  {
    icon: Eye,
    title: "Review",
    step: "02",
    desc: "Our curation team reviews quality, originality, and permission validity within 48 hours.",
  },
  {
    icon: Award,
    title: "Feature",
    step: "03",
    desc: "Approved clips are professionally edited and prepared for multi-platform broadcast.",
  },
  {
    icon: Shield,
    title: "Attribute",
    step: "04",
    desc: "Your handle is credited on-screen and in every caption across all 8 platforms.",
  },
];

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" aria-label="Creator program hero">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0520] via-space-950 to-[#051020]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(255,63,157,0.18)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-magenta/40 bg-neon-magenta/10 text-neon-magenta text-xs font-mono uppercase tracking-widest mb-8">
            <Star className="w-3.5 h-3.5" />
            Creator Partnership Program
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl tracking-tight leading-none mb-6">
            <span className="text-gradient-vice">JOIN THE BITWIZARDS</span>
            <br />
            <span className="text-soft-white">CREATOR COLLECTIVE.</span>
          </h1>
          <p className="text-chrome-silver text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Your greatest gaming moments deserve the widest possible audience. Partner with us to distribute your clips across 8 global platforms — with full credit, every time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan shadow-neon-magenta hover:opacity-90 transition-all"
          >
            <Mail className="w-4 h-4" />
            Apply to Partner
          </Link>
        </div>
      </section>

      {/* Creator Tiers */}
      <section className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="tiers-heading">
        <div className="text-center mb-14">
          <p className="text-cyber-cyan font-mono text-xs uppercase tracking-widest mb-3">Creator Tiers</p>
          <h2 id="tiers-heading" className="font-display font-black text-3xl sm:text-4xl text-soft-white">
            THREE LEVELS. ONE STANDARD.
          </h2>
          <p className="text-chrome-silver mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Every tier maintains the same creator-first values — full attribution, transparent licensing, and genuine community respect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {creatorTiers.map((tier, i) => {
            const Icon = tierIcons[i] ?? Star;
            const color = tierColors[i] ?? "#FF3F9D";
            return (
              <div
                key={tier.id}
                className="glass-card rounded-2xl p-8 border border-chrome-silver/10 hover:border-chrome-silver/30 transition-all hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10"
                  style={{ backgroundColor: color }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${color}18`, border: `1px solid ${color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-soft-white mb-2" style={{ color }}>
                    {tier.title}
                  </h3>

                  <p className="text-chrome-silver font-mono text-xs uppercase tracking-widest mb-5">Requirements</p>
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {tier.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-chrome-silver">
                        <Shield className="w-4 h-4 shrink-0 mt-0.5 text-chrome-dark" aria-hidden="true" />
                        {req}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t border-chrome-silver/10">
                    <p className="text-chrome-silver font-mono text-xs uppercase tracking-widest mb-3">Benefits</p>
                    <ul className="flex flex-col gap-2.5">
                      {tier.benefits.map((ben) => (
                        <li key={ben} className="flex items-start gap-2 text-sm text-soft-white">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} aria-hidden="true" />
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Creator Visual Showcase — AI Generated Concept Highlights */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-chrome-silver/15 shadow-glass-md">
            <Image
              src="/images/gta6-action-stunt.webp"
              alt="Community Stunt Feature — Elevated Superbike Leap"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-neon-magenta uppercase tracking-wider">Creator Feature // Stunts</span>
              <h3 className="font-display font-bold text-soft-white text-base">Elevated Flyover Leap • 2.8M Views</h3>
            </div>
          </div>

          <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-chrome-silver/15 shadow-glass-md">
            <Image
              src="/images/gta6-neon-drift.webp"
              alt="Community Gameplay Feature — Wet Asphalt Drift"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-wider">Creator Feature // Cinematic</span>
              <h3 className="font-display font-bold text-soft-white text-base">Midnight Wet Asphalt Drift • 1.4M Views</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-24 px-6 bg-space-900/50" aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-neon-magenta font-mono text-xs uppercase tracking-widest mb-3">How It Works</p>
            <h2 id="process-heading" className="font-display font-black text-3xl sm:text-4xl text-soft-white">
              FOUR-STEP SUBMISSION PROCESS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-space-800/50 border border-chrome-silver/10 hover:border-neon-magenta/30 transition-all"
              >
                <span className="text-xs font-mono font-bold text-neon-magenta uppercase tracking-widest mb-3">
                  {step.step}
                </span>
                <div className="w-11 h-11 rounded-xl bg-neon-magenta/10 border border-neon-magenta/30 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-neon-magenta" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-soft-white text-lg mb-2">{step.title}</h3>
                <p className="text-chrome-silver text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Rights */}
      <section className="py-24 px-6 max-w-7xl mx-auto" aria-labelledby="rights-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-electric-purple font-mono text-xs uppercase tracking-widest mb-3">Legal & Licensing</p>
            <h2 id="rights-heading" className="font-display font-black text-3xl sm:text-4xl text-soft-white">
              YOUR RIGHTS AS A CREATOR
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-8 border border-electric-purple/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "You Retain Full Copyright",
                  desc: "Submitting your clip does not transfer ownership. You retain 100% copyright of your original gameplay recordings.",
                },
                {
                  title: "Non-Exclusive License",
                  desc: "You grant BitWizards Clips a non-exclusive license to edit, format, and publish your clip with attribution.",
                },
                {
                  title: "Withdrawal Rights",
                  desc: "Contact bitwizardsclips@gmail.com at any time to request removal of your content. We comply within 48 hours.",
                },
                {
                  title: "Attribution Guarantee",
                  desc: "Your handle is credited on-screen in every published video and in the first line of every caption.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-purple shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-soft-white text-sm mb-1">{item.title}</h4>
                    <p className="text-chrome-silver text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-6 bg-space-900/50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyber-cyan font-mono text-xs uppercase tracking-widest mb-3">Creator FAQs</p>
            <h2 id="faq-heading" className="font-display font-black text-3xl sm:text-4xl text-soft-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <CreatorFaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta/10 via-electric-purple/5 to-cyber-cyan/10" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-soft-white mb-5">
            READY TO PARTNER WITH US?
          </h2>
          <p className="text-chrome-silver text-lg mb-10 leading-relaxed">
            Send us your details and your first highlight. Our team responds within 48 business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-gradient-to-r from-neon-magenta via-electric-purple to-cyber-cyan shadow-neon-magenta hover:opacity-90 transition-all"
            >
              <Mail className="w-4 h-4" />
              Apply to Partner
            </Link>
            <a
              href={`mailto:${siteConfig.email}?subject=Creator Partnership Application`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold tracking-wider uppercase text-soft-white bg-space-800/80 border border-chrome-silver/20 hover:border-cyber-cyan/50 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
