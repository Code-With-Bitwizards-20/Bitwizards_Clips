import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["rumble"];

export const metadata: Metadata = constructMetadata({
  title: "Rumble Gaming Channel | BitWizards Clips",
  description: platform.description,
  path: "/socials/rumble",
  keywords: ["Rumble gaming", "alternative video platform", "BitWizards Rumble", "uncompressed gaming footage"],
});

export default function RumblePage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "rumble")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
