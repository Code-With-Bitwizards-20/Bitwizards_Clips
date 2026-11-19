export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export type PlatformId =
  | 'youtube'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'
  | 'threads'
  | 'x'
  | 'rumble';

export interface SocialPlatformConfig {
  id: PlatformId;
  name: string;
  handle: string;
  url: string;
  isVerified: boolean;
  color: string;
  secondaryColor: string;
  description: string;
  longDescription: string;
  audienceExpectation: string[];
  features: string[];
  targetAudience: string;
  postFrequency: string;
  contentTypes: string[];
}

export interface VideoHighlight {
  id: string;
  title: string;
  game: string;
  category: 'GTA VI' | 'Epic Gameplay' | 'Funny Moments' | 'Cinematic' | 'Viral' | 'Discoveries';
  creator: {
    name: string;
    handle: string;
    verified: boolean;
  };
  platform: PlatformId;
  duration: string;
  date: string;
  thumbnailUrl: string;
  originalUrl?: string;
  isDemo: boolean;
  views?: string;
  aspectRatio?: 'landscape' | 'portrait';
}

export interface ContentCategoryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlightCount: string;
  accentColor: string;
  icon: string;
  bgGradient: string;
}

export interface CreatorTier {
  id: string;
  title: string;
  benefits: string[];
  requirements: string[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  category: 'Partnership' | 'Licensing' | 'Business' | 'General';
  message: string;
  creatorHandle?: string;
}
