import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["instagram"];

export const metadata: Metadata = constructMetadata({
  title: "Instagram Gaming Reels | BitWizards Clips",
  description: platform.description,
  path: "/socials/instagram",
  keywords: ["Instagram gaming", "gaming reels", "BitWizards Instagram", "vertical gaming clips"],
});

export default function InstagramPage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "instagram")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
