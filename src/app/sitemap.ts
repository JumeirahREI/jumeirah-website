import { absoluteUrl } from "@/lib/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Define route configurations with specific priorities
  const routeConfig = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    {
      path: "/projects/sanaa-towers",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/projects/alhathaa-towers",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/projects/manarat-al-hudaydah",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  routeConfig.forEach(({ path, priority, changeFrequency }) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: absoluteUrl(locale, path),
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: absoluteUrl("en", path),
            ar: absoluteUrl("ar", path),
          },
        },
      });
    });
  });

  return sitemapEntries;
}
