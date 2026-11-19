import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { BrandIntroSection } from "@/components/sections/BrandIntroSection";
import { GtaFeaturedSection } from "@/components/sections/GtaFeaturedSection";
import { ContentCategoriesSection } from "@/components/sections/ContentCategoriesSection";
import { SocialNetworkSection } from "@/components/sections/SocialNetworkSection";
import { FeaturedHighlightsSection } from "@/components/sections/FeaturedHighlightsSection";
import { CreatorPartnershipsSection } from "@/components/sections/CreatorPartnershipsSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

export const metadata: Metadata = constructMetadata({
  title: undefined, // Uses default: "BitWizards Clips — One World. Every Epic Gaming Moment."
  description:
    "The futuristic gaming media network delivering premier highlights, cinematic open-world experiences, and creator partnerships across 8 global platforms.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <BrandIntroSection />
      <GtaFeaturedSection />
      <ContentCategoriesSection />
      <SocialNetworkSection />
      <FeaturedHighlightsSection />
      <CreatorPartnershipsSection />
      <CallToActionSection />
    </>
  );
}
