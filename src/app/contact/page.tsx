import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { PlatformIcon } from "@/components/socials/PlatformIcons";
import {
  Mail,
  Users,
  Shield,
  Briefcase,
  MessageSquare,
  Clock,
  ArrowRight,
  Globe,
  Phone,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact BitWizards Clips | Gaming Media Network",
  description:
    "Get in touch with BitWizards Clips for creator partnerships, clip licensing, brand sponsorships, and direct phone / WhatsApp communication at +92-349-627-4499. Response within 48 hours.",
  path: "/contact",
});

const contactCategories = [
  {
    icon: Users,
    title: "Creator Partnerships",
    color: "#FF3F9D",
    desc: "Submit your gaming clips for syndication, apply to our creator program, or enquire about creator tier eligibility.",
    cta: "Partner With Us",
  },
  {
    icon: Shield,
    title: "Licensing & Permissions",
    color: "#925BFF",
    desc: "Request removal of a clip, clarify content usage rights, or submit a DMCA notice. We respond within 48 hours.",
    cta: "Licensing Enquiry",
  },
  {
    icon: Briefcase,
    title: "Brand & Sponsorship",
    color: "#37DFFF",
    desc: "Enquire about sponsored content integration, brand partnership opportunities, or advertising across our 8-platform network.",
    cta: "Business Enquiry",
  },
  {
    icon: MessageSquare,
    title: "General Contact",
    color: "#FF8A45",
    desc: "Press enquiries, media kit requests, website feedback, or any other questions about BitWizards Clips.",
    cta: "General Enquiry",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden" aria-label="Contact page hero">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0520] via-space-950 to-[#051020] z-0" />
        
        {/* Ambient GTA 6 Concept Visual Background */}
        <div className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none z-0">
          <Image
            src="/images/gta6-hero-vice2060.webp"
            alt="Vice City 2060 Concept Atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/80 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(255,138,69,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sunset-orange/40 bg-sunset-orange/10 text-sunset-orange text-xs font-mono uppercase tracking-widest mb-8">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-6">
            <span className="text-gradient-vice">GET IN TOUCH.</span>
          </h1>
          <p className="text-chrome-silver text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a creator with an epic clip, a brand looking to partner, or an enthusiast with a question — contact us directly via Form, WhatsApp, Phone, or Email.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="contact-categories-heading">
        <h2 id="contact-categories-heading" className="sr-only">Contact categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card rounded-2xl p-6 border border-chrome-silver/10 hover:border-chrome-silver/30 transition-all hover:-translate-y-1"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${cat.color}18`, border: `1px solid ${cat.color}40` }}
              >
                <cat.icon className="w-5 h-5" style={{ color: cat.color }} aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-soft-white text-base mb-2" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <p className="text-chrome-silver text-xs leading-relaxed mb-4">{cat.desc}</p>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: cat.color }}>
                → {cat.cta}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pb-24 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="contact-form-heading">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form (3 of 5 cols) */}
          <div className="lg:col-span-3">
            <h2 id="contact-form-heading" className="font-display font-black text-2xl sm:text-3xl text-soft-white mb-8">
              SEND A TRANSMISSION
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar (2 of 5 cols) */}
          <aside className="lg:col-span-2 flex flex-col gap-6" aria-label="Contact information">
            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-space-800/90 border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.1)]">
              <h3 className="font-display font-bold text-soft-white text-base mb-2 flex items-center gap-2">
                <PlatformIcon platform="whatsapp" className="w-5 h-5 text-emerald-400 fill-current" />
                Instant WhatsApp & Phone
              </h3>
              <p className="text-xs text-chrome-silver mb-4 leading-relaxed">
                Connect directly with our media coordinators for partnership pitches and rapid inquiries.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-space-950 transition-colors shadow-md"
                >
                  <PlatformIcon platform="whatsapp" className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp: {siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.callUrl}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-space-900 border border-chrome-silver/20 hover:border-cyber-cyan hover:text-cyber-cyan text-soft-white transition-all"
                >
                  <Phone className="w-4 h-4 text-cyber-cyan" />
                  <span>Call: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Direct email */}
            <div className="p-6 rounded-2xl bg-space-800/80 border border-chrome-silver/10">
              <h3 className="font-display font-bold text-soft-white text-base mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-magenta" aria-hidden="true" />
                Official Inbox
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-cyber-cyan hover:text-soft-white transition-colors font-mono text-sm break-all font-semibold"
              >
                {siteConfig.email}
              </a>
              <p className="text-chrome-dark text-xs mt-2">Monitored 24/7 by our editorial curation desk.</p>
            </div>

            {/* Response time */}
            <div className="p-6 rounded-2xl bg-space-800/80 border border-chrome-silver/10">
              <h3 className="font-display font-bold text-soft-white text-base mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyber-cyan" aria-hidden="true" />
                Response Time Guarantees
              </h3>
              <div className="flex flex-col gap-2.5 text-xs text-chrome-silver">
                <div className="flex items-center justify-between">
                  <span>WhatsApp & Calls</span>
                  <span className="font-bold text-emerald-400 font-mono">Immediate / Same Day</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Creator Partnerships</span>
                  <span className="font-bold text-soft-white font-mono">Within 48h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Licensing & Removal</span>
                  <span className="font-bold text-soft-white font-mono">Within 48h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Brand Sponsorships</span>
                  <span className="font-bold text-soft-white font-mono">3–5 Business Days</span>
                </div>
              </div>
            </div>

            {/* Business info */}
            <div className="p-6 rounded-2xl bg-space-800/80 border border-chrome-silver/10">
              <h3 className="font-display font-bold text-soft-white text-base mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-electric-purple" aria-hidden="true" />
                Brand Coordinates
              </h3>
              <div className="flex flex-col gap-2 text-xs text-chrome-silver">
                <div><span className="text-soft-white font-bold">Brand:</span> {siteConfig.name}</div>
                <div><span className="text-soft-white font-bold">Handle:</span> {siteConfig.username}</div>
                <div><span className="text-soft-white font-bold">Website:</span> bitwizardsclips.com</div>
                <div><span className="text-soft-white font-bold">Direct Line:</span> {siteConfig.phone}</div>
              </div>
            </div>

            {/* Navigate to socials */}
            <Link
              href="/socials"
              className="p-5 rounded-2xl bg-gradient-to-r from-neon-magenta/10 via-electric-purple/10 to-cyber-cyan/10 border border-neon-magenta/20 hover:border-neon-magenta/40 transition-all group flex items-center justify-between"
            >
              <div>
                <p className="font-display font-bold text-soft-white text-sm mb-1">Follow Our Network</p>
                <p className="text-chrome-silver text-xs">8 platforms. All in one place.</p>
              </div>
              <ArrowRight className="w-5 h-5 text-neon-magenta group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
