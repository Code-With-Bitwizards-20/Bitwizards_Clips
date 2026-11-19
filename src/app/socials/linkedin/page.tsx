import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["linkedin"];

export const metadata: Metadata = constructMetadata({
  title: "LinkedIn Gaming Media Insights | BitWizards Clips",
  description: platform.description,
  path: "/socials/linkedin",
  keywords: ["LinkedIn gaming industry", "gaming media business", "BitWizards LinkedIn", "creator economy"],
});

export default function LinkedInPage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "linkedin")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
