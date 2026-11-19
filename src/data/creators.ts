import { CreatorTier } from "@/types";

export interface CreatorFaq {
  question: string;
  answer: string;
}

export const creatorTiers: CreatorTier[] = [
  {
    id: "emerging",
    title: "Rising Streamer",
    requirements: [
      "Original recorded gameplay (1080p 60fps minimum)",
      "Clear non-copyrighted or stream-safe audio",
      "Explicit permission granted to feature and tag your profile",
    ],
    benefits: [
      "Featured placement in daily Shorts & Reels across 8 social platforms",
      "100% verified on-screen watermark and handle credit in video caption",
      "Direct link back to your personal Twitch / YouTube / Kick profile",
      "Access to BitWizards creator discord community",
    ],
  },
  {
    id: "partnered",
    title: "Syndicate Partner",
    requirements: [
      "Consistent streaming or highlight upload schedule",
      "Minimum 5 submitted viral-ready clips per month",
      "High community engagement and clean sporting conduct",
    ],
    benefits: [
      "Dedicated weekly standalone highlight reel curated by our edit suite",
      "Co-branded title cards and custom motion graphics overlays",
      "Priority submission queue and direct communication with chief editor",
      "Revenue sharing eligibility on sponsored brand integrations",
    ],
  },
  {
    id: "vanguard",
    title: "Vanguard Studio",
    requirements: [
      "Professional esports team, studio, or high-tier content agency",
      "Master licensing agreement for recurring season footage",
      "Exclusive tournament or cinematic capture access",
    ],
    benefits: [
      "Full network distribution blast across our entire 8-platform grid",
      "Custom cinematic trailer production by BitWizards creative team",
      "Permanent placement on bitwizardsclips.com featured partners wall",
      "Strategic B2B marketing coverage via LinkedIn & industry releases",
    ],
  },
];

export const creatorFaqs: CreatorFaq[] = [
  {
    question: "Do I retain ownership and copyright of my gameplay clips?",
    answer:
      "Yes, 100%. You retain full underlying ownership of your gameplay captures. By submitting your clip to BitWizards Clips, you grant us a non-exclusive, worldwide license to edit, format, and broadcast your clip across our verified social media channels with mandatory on-screen attribution.",
  },
  {
    question: "How are creators credited on each platform?",
    answer:
      "Every video we publish displays your handle permanently on screen during the clip, and the first line of every social caption includes your official @handle with a direct clickable link to your primary channel.",
  },
  {
    question: "What technical resolution and format do you require?",
    answer:
      "We recommend 1080p 60fps or 4K 60fps in MP4 or MOV. Bitrates of 15 Mbps or higher are preferred to ensure pristine visual fidelity after our high-end 2060 motion grading.",
  },
  {
    question: "Can I withdraw permission if I change my mind?",
    answer:
      "Absolutely. You can reach out to bitwizardsclips@gmail.com with your clip ID at any time, and our moderation team will review and accommodate requests within 48 business hours.",
  },
];
