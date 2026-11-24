import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { allPlatformIds, socialLinksConfig } from "@/config/socialLinks";
import PlatformPageTemplate from "@/components/socials/PlatformPageTemplate";

const platform = socialLinksConfig["whatsapp"];

export const metadata: Metadata = constructMetadata({
  title: "WhatsApp VIP Gaming Channel | BitWizards Clips",
  description: platform.description,
  path: "/socials/whatsapp",
  keywords: ["WhatsApp gaming", "gaming community", "BitWizards WhatsApp", "gaming highlights WhatsApp", "VIP gaming drops"],
});

export default function WhatsAppPage() {
  const otherPlatforms = allPlatformIds
    .filter((id) => id !== "whatsapp")
    .map((id) => socialLinksConfig[id]);

  return <PlatformPageTemplate platform={platform} otherPlatforms={otherPlatforms} />;
}
