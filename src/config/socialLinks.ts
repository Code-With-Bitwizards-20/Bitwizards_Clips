import { PlatformId, SocialPlatformConfig } from "@/types";

export interface SocialLinkEntry {
  id: PlatformId;
  name: string;
  handle: string;
  internalPath: string;
  externalUrl: string;
  isVerified: boolean;
  color: string;
  accentGradient: string;
  description: string;
}

export const socialLinksConfig: Record<PlatformId, SocialPlatformConfig> = {
  youtube: {
    id: "youtube",
    name: "YouTube",
    handle: "@BitWizardsClips",
    url: "https://youtube.com/channel/UCwiaM-TlEote_GaM_QqOygw",
    isVerified: true,
    color: "#FF0000",
    secondaryColor: "#FF3F9D",
    description: "4K 60FPS cinematic open-world gameplays, deep-dive story analyses, and high-octane gaming compilations.",
    longDescription:
      "BitWizards Clips YouTube is the flagship visual hub for cinematic gaming entertainment. Featuring pristine high-bitrate captures, meticulously edited montages, and episodic highlight reels from Vice City and beyond.",
    audienceExpectation: [
      "Full-length 4K 60FPS gaming highlights & cinematic captures",
      "Curated episodic compilations of the world's best creator moments",
      "Deep breakdowns of next-gen game physics, mechanics, and easter eggs",
      "Exclusive community spotlight premieres with verified creator attribution",
    ],
    features: ["4K HDR Playback", "Episodic Series", "Community Premieres", "Curated Playlists"],
    targetAudience: "Enthusiast gamers, cinematic directors, and gaming montage lovers",
    postFrequency: "3x Weekly Premium Releases + Daily Shorts",
    contentTypes: ["4K Compilations", "Cinematic Shorts", "Game Physics Breakdowns", "Community Premieres"],
  },
  facebook: {
    id: "facebook",
    name: "Facebook",
    handle: "BitWizards Clips",
    url: "https://www.facebook.com/profile.php?id=61596877313086",
    isVerified: true,
    color: "#1877F2",
    secondaryColor: "#37DFFF",
    description: "Engaging gaming community discussions, interactive polls, video reels, and major gaming announcements.",
    longDescription:
      "Connect with global gaming fans, share your favorite clips, participate in weekly gaming debates, and discover viral moments directly in your feed.",
    audienceExpectation: [
      "Daily viral highlight reels & trending gaming clips",
      "Interactive gaming debates, polls, and community discussions",
      "Live watch parties for major gaming events and trailer reveals",
      "Dedicated creator shoutouts and collaborative community showcases",
    ],
    features: ["Community Groups", "Live Watch Parties", "Interactive Polls", "Viral Video Reels"],
    targetAudience: "Global gaming enthusiasts, casual players, and social communities",
    postFrequency: "Daily Highlights & Interactive Posts",
    contentTypes: ["Reels", "Community Polls", "Highlight Carousels", "Event Live Streams"],
  },
  instagram: {
    id: "instagram",
    name: "Instagram",
    handle: "@bitwizardsclipss",
    url: "https://www.instagram.com/bitwizardsclipss/",
    isVerified: true,
    color: "#E1306C",
    secondaryColor: "#FF8A45",
    description: "Futuristic visual storytelling, vertical reels, neon aesthetic screenshots, and behind-the-scenes clips.",
    longDescription:
      "A curated visual grid of Vice City sunset aesthetics, high-octane vertical gaming clips, motion posters, and creator spotlight galleries designed for mobile immersion.",
    audienceExpectation: [
      "Ultra-slick 9:16 vertical gameplay reels with custom sound design",
      "Stunning high-resolution photo mode screenshots with futuristic lighting",
      "Daily stories featuring breaking gaming news and clip of the day",
      "Behind-the-scenes editing techniques from the BitWizards creative lab",
    ],
    features: ["Vertical 9:16 Reels", "Aesthetic Grid Curation", "Interactive Stories", "Creator Collab Posts"],
    targetAudience: "Mobile-first gamers, digital artists, and short-form video fans",
    postFrequency: "Daily Reels + Interactive Stories",
    contentTypes: ["Vertical Highlights", "Photo Mode Gallery", "Motion Posters", "Q&A Stories"],
  },
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    handle: "@bitwizardsclips",
    url: "https://www.tiktok.com/@bitwizardsclips?lang=en",
    isVerified: true,
    color: "#00F2FE",
    secondaryColor: "#FF3F9D",
    description: "Fast-paced viral gaming moments, impossible stunts, hilarious fails, and trending audio gaming syncs.",
    longDescription:
      "High-energy, hyper-edited clips engineered for virality. From mind-bending physics stunts in open-world games to hilarious sandbox chaos.",
    audienceExpectation: [
      "Lightning-fast viral edits synced with trending global audio tracks",
      "Unbelievable sandbox stunts, secret locations, and hidden Easter eggs",
      "Hilarious gaming fails, ragdoll physics, and unexpected multiplayer moments",
      "Fast creator challenges with duet and stitch opportunities",
    ],
    features: ["Trending Audio Sync", "Duet & Stitch Challenges", "Sub-60s Fast Edits", "Viral Algorithmic Reach"],
    targetAudience: "Gen-Z gamers, TikTok creators, and viral video enthusiasts",
    postFrequency: "2-3 Viral Clips Daily",
    contentTypes: ["Micro-Clips", "Stunt Showcases", "Humor / Fails", "Trending Audio Edits"],
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    handle: "BitWizards Clips",
    url: "https://www.linkedin.com/in/bitwizards-clips-375abb450/",
    isVerified: true,
    color: "#0A66C2",
    secondaryColor: "#925BFF",
    description: "Gaming media industry insights, creator economy analysis, digital broadcast tech, and partnership announcements.",
    longDescription:
      "The professional dimension of BitWizards Clips. Providing executive commentary on interactive media trends, digital production pipelines, licensing ethics, and brand partnerships.",
    audienceExpectation: [
      "In-depth analysis of gaming creator economy and media distribution models",
      "Case studies on video encoding, AI-assisted editing, and CDN performance",
      "Official announcements regarding brand collaborations and creator sponsorships",
      "Industry perspectives on next-gen game launches and virtual world monetization",
    ],
    features: ["Industry Whitepapers", "Partnership Announcements", "B2B Creator Insights", "Executive Articles"],
    targetAudience: "Game studio marketers, media executives, tech investors, and creators",
    postFrequency: "Weekly Strategic Commentary & News",
    contentTypes: ["Industry Articles", "Partnership Press Releases", "Tech Breakdowns", "Media Insights"],
  },
  threads: {
    id: "threads",
    name: "Threads",
    handle: "@bitwizardsclips",
    url: "https://www.threads.com/@bitwizardsclips",
    isVerified: true,
    color: "#FFFFFF",
    secondaryColor: "#FF3F9D",
    description: "Real-time gaming commentary, hot takes, bite-sized clip drops, and direct creator banter.",
    longDescription:
      "A fast, modern text and micro-media stream for instant reactions to gaming showcases, live event commentary, and uncensored community dialogue.",
    audienceExpectation: [
      "Instant live-reactions during major gaming press conferences and state-of-play events",
      "Micro-clips and screenshot snapshots highlighting breaking moments",
      "Conversational prompts exploring favorite video game soundtracks, lore, and mechanics",
      "Direct conversations with our curation and production team",
    ],
    features: ["Real-time Conversation", "Direct Audio/Video Threads", "Cross-Platform Sync", "Community Replies"],
    targetAudience: "Engaged gamers, tech commentators, and conversational social users",
    postFrequency: "Real-Time Event Updates & Daily Threads",
    contentTypes: ["Conversational Threads", "Reaction Clips", "Polls", "Live Event Coverage"],
  },
  x: {
    id: "x",
    name: "X (Twitter)",
    handle: "@BitWizardsClip",
    url: "https://x.com/BitWizardsClip",
    isVerified: true,
    color: "#C8D1DE",
    secondaryColor: "#37DFFF",
    description: "Breaking gaming alerts, trending highlight clips, esports updates, and community retweets.",
    longDescription:
      "The real-time epicenter of gaming culture. Get immediate alerts when world-record gameplay happens, viral moments blow up, or major titles drop updates.",
    audienceExpectation: [
      "Breaking notifications on trending gaming news and instant clip coverage",
      "Ultra-crisp 1080p clip drops capturing viral gameplay within minutes",
      "Retweets and amplification of verified creator community clips",
      "Engaging hashtag storms celebrating monumental gaming achievements",
    ],
    features: ["Breaking News Broadcasts", "Instant Video Snippets", "Community Spaces", "Thread Breakdowns"],
    targetAudience: "Core gamers, esports followers, gaming journalists, and content creators",
    postFrequency: "Multiple Real-Time Updates Daily",
    contentTypes: ["Breaking News Alerts", "Instant Gameplay Snippets", "Community Amplification", "Spaces Discussions"],
  },
  rumble: {
    id: "rumble",
    name: "Rumble",
    handle: "BitWizardsClips",
    url: "https://rumble.com/user/BitWizardsClips",
    isVerified: true,
    color: "#85C742",
    secondaryColor: "#FF8A45",
    description: "Decentralized video broadcast, uncompressed gaming footage, creator freedom, and alternative distribution.",
    longDescription:
      "A fast-growing alternative video platform offering uncompressed gaming spectacles, full creative autonomy, and direct community monetization.",
    audienceExpectation: [
      "Raw, uncompressed high-fidelity gameplay captures with zero restrictive throttling",
      "Extended cuts of multiplayer showdowns and unscripted sandbox experiments",
      "Independent creator spotlight videos celebrating community autonomy",
      "Dedicated livestreams and archival preservation of epic gaming milestones",
    ],
    features: ["High-Bitrate Archival", "Alternative Stream Host", "Creator Independence", "Long-Form Video"],
    targetAudience: "Alternative media enthusiasts, raw footage archivists, and freedom-first creators",
    postFrequency: "Weekly Long-Form & Raw Captures",
    contentTypes: ["Raw Gameplay Files", "Extended Compilations", "Independent Creator Showcases", "Archival Streams"],
  },
};

export const allPlatformIds: PlatformId[] = [
  "youtube",
  "facebook",
  "instagram",
  "tiktok",
  "linkedin",
  "threads",
  "x",
  "rumble",
];
