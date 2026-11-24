import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | BitWizards Clips",
  description:
    "BitWizards Clips Privacy Policy — how we collect, use, and protect your personal information when you visit our website and social media channels.",
  path: "/privacy-policy",
  noIndex: false,
});

const sections = [
  {
    id: "information-collected",
    title: "1. Information We Collect",
    content: `When you visit bitwizardsclips.com, we may collect the following types of information:

**Information You Provide Voluntarily:**
- Name and email address when you submit our contact form
- Social media handle when provided in enquiry submissions
- Messages and attachments submitted through our contact form

**Information Collected Automatically:**
- Browser type and version
- Device type and operating system
- Pages visited and time spent on those pages
- Referring URL and exit pages
- General geographic region (country/city level)
- IP address (anonymised where possible)

We use industry-standard analytics tools to understand how visitors interact with our website. This data is aggregated and does not personally identify individual visitors.`,
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: `We use the information collected for the following purposes:

- **To respond to your enquiries** — We use your name, email, and message content to respond to contact form submissions and creator partnership applications.
- **To improve our website** — Anonymous analytics data helps us understand what content is most valuable and where the user experience can be improved.
- **To comply with legal obligations** — Where required by law, we may retain certain records of communications.
- **To protect our platform** — We analyse usage patterns to identify and prevent spam, abuse, or malicious activity.

We do not sell, rent, or trade your personal information to third parties under any circumstances.`,
  },
  {
    id: "cookies",
    title: "3. Cookies and Tracking",
    content: `BitWizards Clips uses cookies and similar tracking technologies to enhance your browsing experience.

**Types of Cookies We Use:**
- **Essential Cookies** — Required for the website to function correctly, such as session management and security.
- **Analytics Cookies** — Used to understand how visitors navigate our site (e.g. page views, bounce rate).
- **Preference Cookies** — Store your choices such as reduced-motion preferences.

You can control cookie preferences through your browser settings. Disabling certain cookies may limit some website functionality. We do not use cookies for advertising targeting or cross-site tracking.`,
  },
  {
    id: "third-party",
    title: "4. Third-Party Services",
    content: `Our website may integrate or link to the following third-party services:

- **Google Fonts** — For typography rendering
- **Social Media Platforms** — YouTube, Facebook, WhatsApp, TikTok, LinkedIn, Threads, X (Twitter), and Rumble. Each has their own privacy policy governing data collected through their platforms.
- **Email Service Provider** — When our contact form is active, messages may be processed through a third-party email delivery service (e.g. Resend or SendGrid). We do not store form submissions on our servers beyond what is necessary to respond.

Clicking external links from our website will take you to third-party sites governed by their own privacy policies. We are not responsible for the data practices of external websites.`,
  },
  {
    id: "user-rights",
    title: "5. Your Data Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Right to Access** — Request a copy of the personal data we hold about you
- **Right to Rectification** — Request correction of inaccurate personal data
- **Right to Erasure** — Request deletion of your personal data ("right to be forgotten")
- **Right to Restrict Processing** — Request that we limit how we process your data
- **Right to Data Portability** — Receive your data in a machine-readable format
- **Right to Object** — Object to processing based on legitimate interests

To exercise any of these rights, contact us at **${siteConfig.email}** with the subject line "Data Rights Request." We will respond within 30 days.`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: `We retain personal data only for as long as necessary to fulfil the purpose for which it was collected:

- **Contact form submissions** — Retained for up to 24 months or until your enquiry is resolved, whichever comes first
- **Analytics data** — Anonymised and aggregated; retained indefinitely in aggregate form
- **Creator content permissions** — Retained for the duration of the content licence plus 12 months

After retention periods expire, data is securely deleted or anonymised.`,
  },
  {
    id: "content-creators",
    title: "7. Creator Content and Attribution",
    content: `If you submit gaming clips or creative content to BitWizards Clips for potential publication, please note:

- You retain full copyright of your original content
- By submitting, you grant us a non-exclusive licence to edit, format, and publish with attribution
- We will display your social media handle prominently in all published content
- You may withdraw permission at any time by emailing ${siteConfig.email}
- We do not publish creator content without explicit prior permission

We handle creator personal information (names, handles, contact details) with the same privacy protections as all other personal data.`,
  },
  {
    id: "security",
    title: "8. Data Security",
    content: `We implement reasonable technical and organisational security measures to protect your personal information, including:

- HTTPS encryption for all website traffic
- Strict HTTP security headers (HSTS, X-Frame-Options, X-Content-Type-Options)
- Regular software and dependency updates
- Minimal data collection practices (privacy by design)

However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.`,
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: `BitWizards Clips is not directed at individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at ${siteConfig.email} and we will take steps to delete such information.`,
  },
  {
    id: "updates",
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.

Your continued use of our website after any changes constitutes your acceptance of the updated Privacy Policy.`,
  },
  {
    id: "contact-privacy",
    title: "11. Contact Us About Privacy",
    content: `If you have questions, concerns, or requests relating to this Privacy Policy or our data practices, please contact us:

**Email:** ${siteConfig.email}
**Subject Line:** Privacy Policy Enquiry
**Website:** bitwizardsclips.com

We are committed to working with you to resolve any privacy concerns promptly and transparently.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-space-950 text-soft-white pt-24">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden" aria-label="Privacy Policy header">
        <div className="absolute inset-0 bg-gradient-to-br from-space-950 via-[#0a1525] to-space-950" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-chrome-dark font-mono text-xs uppercase tracking-widest mb-4">Legal Documents</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-soft-white mb-5">
            PRIVACY POLICY
          </h1>
          <p className="text-chrome-silver text-base leading-relaxed mb-4 max-w-2xl">
            This Privacy Policy explains how BitWizards Clips collects, uses, stores, and protects your personal information when you use our website and services.
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
              <nav aria-label="Privacy policy table of contents">
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
          <article className="lg:col-span-3 flex flex-col gap-10" aria-label="Privacy policy content">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-28 p-8 rounded-2xl bg-space-800/50 border border-chrome-silver/10"
              >
                <h2 className="font-display font-bold text-xl text-soft-white mb-5">{section.title}</h2>
                <div className="text-chrome-silver text-sm leading-relaxed whitespace-pre-line">
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
          <Link href="/terms" className="text-sm text-chrome-silver hover:text-cyber-cyan transition-colors">
            View Terms & Conditions →
          </Link>
        </div>
      </div>
    </main>
  );
}
