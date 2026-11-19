import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["x"];

export const metadata: Metadata = constructMetadata({
  title: "X (Twitter) Gaming Updates | BitWizards Clips",
  description: platform.description,
  path: "/socials/x",
  keywords: ["X Twitter gaming", "gaming news", "BitWizards X", "esports updates"],
});

export default function XPage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "x")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
