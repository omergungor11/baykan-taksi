import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import {
  locales,
  defaultLocale,
  hreflangMap,
  localizedPath,
  type Locale,
} from "@/lib/i18n/config";

type BuildMetaArgs = {
  locale: Locale;
  /** locale'siz yol, başında "/" ile (kök için "/") */
  path: string;
  title: string;
  description: string;
  /** OpenGraph görseli (opsiyonel; varsayılan /og.png) */
  image?: string;
  /** Arama motoru indekslemesini kapat (örn. taslak sayfalar) */
  noindex?: boolean;
};

/**
 * Her sayfa için canonical + hreflang alternates + OpenGraph üretir.
 * hreflang: tr-CY / en / ru + x-default (TR'yi işaret eder).
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image,
  noindex,
}: BuildMetaArgs): Metadata {
  const canonical = `${siteConfig.url}${localizedPath(locale, path)}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[hreflangMap[l]] = `${siteConfig.url}${localizedPath(l, path)}`;
  }
  languages["x-default"] = `${siteConfig.url}${localizedPath(defaultLocale, path)}`;

  // Varsayılan OG görseli dinamik /opengraph-image route'undan gelir (app/opengraph-image.tsx).
  const ogImage = image ?? `${siteConfig.url}/opengraph-image`;
  const ogImages = [{ url: ogImage, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    alternates: { canonical, languages },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
      locale,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
