import type { MetadataRoute } from "next";
import { areaArticles, serviceArticles } from "@/content/index";
import { siteOrigin } from "@/lib/seo";

const origin = siteOrigin;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: origin, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${origin}/areas-we-serve`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...Object.values(serviceArticles).map((article) => ({
      url: `${origin}/services/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...Object.values(areaArticles).map((article) => ({
      url: `${origin}/areas-we-serve/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
