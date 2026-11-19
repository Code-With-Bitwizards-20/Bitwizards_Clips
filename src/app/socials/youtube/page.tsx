import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["youtube"];

export const metadata: Metadata = constructMetadata({
  title: "YouTube Gaming Channel | BitWizards Clips",
  description: platform.description,
  path: "/socials/youtube",
  keywords: ["YouTube gaming", "4K gaming highlights", "BitWizards YouTube", "gaming channel"],
});

export default function YouTubePage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "youtube")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
