import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allPlatformIds } from "@/config/socialLinks";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  const coreRoutes = [
    "",
    "/about",
    "/gta-6",
    "/highlights",
    "/creators",
    "/socials",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/gta-6" || route === "/highlights" ? 0.9 : 0.8,
  }));

  const socialRoutes = allPlatformIds.map((platform) => ({
    url: `${baseUrl}/socials/${platform}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...socialRoutes];
}
