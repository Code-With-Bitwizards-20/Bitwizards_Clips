import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = "/images/og-image.webp",
  keywords = siteConfig.keywords,
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.creativeStudioUrl }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.username,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/bitwizards-logo.webp`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundingYear),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [
      siteConfig.creativeStudioUrl,
      "https://www.tiktok.com/@bitwizardsclips?lang=en",
      "https://www.facebook.com/profile.php?id=61596877313086",
      "https://www.linkedin.com/in/bitwizards-clips-375abb450/",
      "https://x.com/BitWizardsClip",
      "https://youtube.com/channel/UCwiaM-TlEote_GaM_QqOygw",
      "https://rumble.com/user/BitWizardsClips",
      "https://www.instagram.com/bitwizardsclipss/",
      "https://www.threads.com/@bitwizardsclips",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/highlights?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Generates a BreadcrumbList JSON-LD schema for a given page */
export function generateBreadcrumbSchema(
  crumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
