import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["tiktok"];

export const metadata: Metadata = constructMetadata({
  title: "TikTok Viral Gaming Clips | BitWizards Clips",
  description: platform.description,
  path: "/socials/tiktok",
  keywords: ["TikTok gaming", "viral gaming clips", "BitWizards TikTok", "gaming shorts"],
});

export default function TikTokPage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "tiktok")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
