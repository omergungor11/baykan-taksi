import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { locales, hreflangMap, defaultLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { areaSlugs } from "@/lib/content/areas";
import { serviceSlugs } from "@/lib/content/services";
import { getAllSlugs } from "@/lib/mdx";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getAllSlugs();

  const paths: Entry[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/hizmetler", priority: 0.8, changeFrequency: "monthly" },
    { path: "/bolgeler", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/hakkimizda", priority: 0.4, changeFrequency: "yearly" },
    { path: "/iletisim", priority: 0.5, changeFrequency: "yearly" },
    { path: "/sss", priority: 0.5, changeFrequency: "monthly" },
    ...areaSlugs.map((s) => ({ path: `/${s}`, priority: 0.9, changeFrequency: "monthly" as const })),
    ...serviceSlugs.map((s) => ({ path: `/hizmetler/${s}`, priority: 0.8, changeFrequency: "monthly" as const })),
    ...blogSlugs.map((s) => ({ path: `/blog/${s}`, priority: 0.6, changeFrequency: "monthly" as const })),
  ];

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of paths) {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[hreflangMap[l]] = `${siteConfig.url}${localizedPath(l, path)}`;
    }
    languages["x-default"] = `${siteConfig.url}${localizedPath(defaultLocale, path)}`;

    for (const l of locales as readonly Locale[]) {
      entries.push({
        url: `${siteConfig.url}${localizedPath(l, path)}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
