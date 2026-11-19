import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["facebook"];

export const metadata: Metadata = constructMetadata({
  title: "Facebook Gaming Community | BitWizards Clips",
  description: platform.description,
  path: "/socials/facebook",
  keywords: ["Facebook gaming", "gaming community", "BitWizards Facebook", "gaming highlights"],
});

export default function FacebookPage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "facebook")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
