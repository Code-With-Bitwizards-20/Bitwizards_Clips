import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "GTA VI",
    href: "/gta-6",
    badge: "Featured",
  },
  {
    title: "Highlights",
    href: "/highlights",
  },
  {
    title: "Creators",
    href: "/creators",
  },
  {
    title: "Socials",
    href: "/socials",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNavItems = {
  main: mainNavItems,
  hubs: [
    { title: "GTA VI Experience", href: "/gta-6" },
    { title: "Viral Highlights", href: "/highlights" },
    { title: "Creator Program", href: "/creators" },
    { title: "Social Ecosystem", href: "/socials" },
    { title: "About BitWizards", href: "/about" },
    { title: "Direct Contact", href: "/contact" },
  ],
  socials: [
    { title: "YouTube Channel", href: "/socials/youtube" },
    { title: "Instagram Network", href: "/socials/instagram" },
    { title: "TikTok Hub", href: "/socials/tiktok" },
    { title: "X / Twitter", href: "/socials/x" },
    { title: "Facebook Page", href: "/socials/facebook" },
    { title: "LinkedIn Corporate", href: "/socials/linkedin" },
    { title: "Threads Community", href: "/socials/threads" },
    { title: "Rumble Broadcast", href: "/socials/rumble" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms and Conditions", href: "/terms" },
  ],
};
