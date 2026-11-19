import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["threads"];

export const metadata: Metadata = constructMetadata({
  title: "Threads Gaming Commentary | BitWizards Clips",
  description: platform.description,
  path: "/socials/threads",
  keywords: ["Threads gaming", "gaming commentary", "BitWizards Threads", "real-time gaming"],
});

export default function ThreadsPage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "threads")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
