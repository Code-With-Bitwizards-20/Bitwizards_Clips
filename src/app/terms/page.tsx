import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | BitWizards Clips",
  description:
    "BitWizards Clips Terms and Conditions — the rules, rights, and responsibilities governing your use of our website and gaming media content.",
  path: "/terms",
  noIndex: false,
});

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using the BitWizards Clips website at bitwizardsclips.com (the "Website"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Website.

These Terms apply to all visitors, users, and others who access or use the Website. We reserve the right to update these Terms at any time. Continued use of the Website after any changes constitutes your acceptance of the new Terms.`,
  },
  {
    id: "site-description",
    title: "2. Website Description",
    content: `BitWizards Clips is an independent gaming media and entertainment brand that curates, edits, and distributes gaming highlights across multiple social media platforms, including YouTube, Facebook, Instagram, TikTok, LinkedIn, Threads, X (Twitter), and Rumble.

The Website serves as a hub for our brand identity, creator partnership programme, social media network information, and audience communications. BitWizards Clips is not a game developer, game publisher, or affiliated with any game studio.`,
  },
  {
    id: "fan-disclaimer",
    title: "3. Fan Media & Intellectual Property Disclaimer",
    content: `IMPORTANT — PLEASE READ CAREFULLY:

BitWizards Clips is an INDEPENDENT FAN MEDIA BRAND. We are not affiliated with, endorsed by, licensed by, or in any partnership with:

- Rockstar Games
- Take-Two Interactive Software, Inc.
- Any game studio, game publisher, or platform holder

The following names, logos, characters, and marks are the exclusive intellectual property of their respective owners:

- "Grand Theft Auto VI," "GTA VI," "Vice City," and all related marks — Rockstar Games and Take-Two Interactive
- All game titles, studio names, and platform identifiers referenced on this Website

Any fan content published by BitWizards Clips is clearly labelled as independent fan-created material and is not presented as official content from any game studio.

If you believe any content on this Website infringes your intellectual property rights, please contact us immediately at ${siteConfig.email} with subject line "IP Infringement Notice."`,
  },
  {
    id: "creator-content",
    title: "4. Creator Content Submissions",
    content: `If you submit gaming clips, footage, or creative content to BitWizards Clips for potential publication, you agree to the following:

**Your Representations:**
- You are the original creator or have explicit rights to submit the content
- The content does not infringe any third-party intellectual property rights
- The content does not contain illegal material, hate speech, or violations of platform policies
- You have permission to grant us the rights described below

**Licence Grant:**
By submitting content, you grant BitWizards Clips a non-exclusive, worldwide, royalty-free licence to edit, format, publish, distribute, and promote your content across our social media platforms, with attribution to your handle.

**Attribution:**
We commit to displaying your social media handle prominently in all published content.

**Withdrawal:**
You may withdraw your licence at any time by contacting ${siteConfig.email}. We will remove content within 48 business hours of a valid withdrawal request.`,
  },
  {
    id: "user-conduct",
    title: "5. Acceptable Use",
    content: `When using this Website, you agree not to:

- Use the Website for any unlawful purpose or in violation of any regulations
- Attempt to gain unauthorised access to our systems or data
- Scrape, crawl, or systematically extract data without our written consent
- Transmit malware, viruses, or other harmful code
- Submit false, misleading, or fraudulent information through our contact forms
- Harass, impersonate, or harm other users or our team
- Use our contact form to send spam or bulk unsolicited communications
- Circumvent any security features or access controls

We reserve the right to restrict or terminate access for users who violate these conditions.`,
  },
  {
    id: "links",
    title: "6. External Links",
    content: `Our Website contains links to third-party websites, including social media platforms and creator channels. These links are provided for convenience and informational purposes only.

BitWizards Clips has no control over the content, privacy practices, or data handling of external websites. We are not responsible for the availability, accuracy, or content of any external site. Visiting external links is at your own risk.

We do not endorse or make any representations about third-party websites linked from our platform.`,
  },
  {
    id: "disclaimer",
    title: "7. Disclaimers",
    content: `The Website and all content on it are provided "as is" and "as available" without warranties of any kind, either express or implied.

BitWizards Clips does not warrant that:
- The Website will be uninterrupted, error-free, or secure
- Defects will be corrected
- The Website or its servers are free from viruses or harmful components
- Results obtained from using the Website will be accurate or reliable

The content on this Website is for general information and entertainment purposes only. We make no claims about the completeness, accuracy, or timeliness of any information provided.`,
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, BitWizards Clips, its founders, team members, and affiliates shall not be liable for any:

- Indirect, incidental, special, consequential, or punitive damages
- Loss of profits, revenue, data, goodwill, or other intangible losses
- Damages resulting from your reliance on information provided on this Website
- Damages resulting from your submission of content to BitWizards Clips
- Damages caused by third-party websites linked from this Website

This limitation applies regardless of the legal theory on which the claim is based, even if we have been advised of the possibility of such damages.`,
  },
  {
    id: "privacy",
    title: "9. Privacy",
    content: `Your use of this Website is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at bitwizardsclips.com/privacy-policy to understand our data practices.`,
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising from these Terms or your use of the Website shall be resolved through good-faith negotiation before any formal legal proceedings are initiated.

Please contact us at ${siteConfig.email} to resolve any concerns before escalating to formal dispute resolution.`,
  },
  {
    id: "contact-terms",
    title: "11. Contact Us",
    content: `If you have any questions about these Terms and Conditions, please contact us:

**Email:** ${siteConfig.email}
**Subject Line:** Terms and Conditions Enquiry
**Website:** bitwizardsclips.com

We aim to respond to all legal enquiries within 5 business days.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white pt-24">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden" aria-label="Terms and Conditions header">
        <div className="absolute inset-0 bg-gradient-to-br from-space-950 via-[#0a1525] to-space-950" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-chrome-dark font-mono text-xs uppercase tracking-widest mb-4">Legal Documents</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-soft-white mb-5">
            TERMS &amp; CONDITIONS
          </h1>
          <p className="text-chrome-silver text-base leading-relaxed mb-4 max-w-2xl">
            These Terms and Conditions govern your use of the BitWizards Clips website and all associated services and content.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-chrome-dark">
            <span>Last Updated: November 2026</span>
            <span>·</span>
            <span>Applies to: bitwizardsclips.com</span>
            <span>·</span>
            <span>Brand: {siteConfig.name}</span>
          </div>
        </div>
      </section>

      {/* Table of Contents + Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sticky TOC sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 glass-panel rounded-2xl p-5 border border-chrome-silver/10">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-chrome-silver mb-4">Contents</p>
              <nav aria-label="Terms table of contents">
                <ul className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-xs text-chrome-dark hover:text-cyber-cyan transition-colors block py-0.5"
                      >
                        {s.title.replace(/^\d+\.\s/, "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <article className="lg:col-span-3 flex flex-col gap-10" aria-label="Terms and conditions content">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-28 p-8 rounded-2xl bg-space-800/50 border border-chrome-silver/10"
              >
                <h2 className="font-display font-bold text-xl text-soft-white mb-5">{section.title}</h2>
                <div className="text-chrome-silver text-sm leading-relaxed">
                  {section.content.split("\n\n").map((para, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {para.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </article>
        </div>

        {/* Back navigation */}
        <div className="mt-12 pt-8 border-t border-chrome-silver/10 flex flex-wrap gap-4 justify-between items-center">
          <Link href="/" className="text-sm text-chrome-silver hover:text-cyber-cyan transition-colors">
            ← Back to Home
          </Link>
          <Link href="/privacy-policy" className="text-sm text-chrome-silver hover:text-cyber-cyan transition-colors">
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
