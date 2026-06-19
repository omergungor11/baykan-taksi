/**
 * i18n çekirdeği — Next 16 native (app/[locale] + sözlük deseni).
 *
 * GİZLİ VARSAYILAN LOCALE: Türkçe kök URL'de prefix'siz servis edilir (/, /lefkosa-taksi);
 * en/ru prefix'li (/en, /ru). proxy.ts prefix'siz istekleri dahili olarak /tr'ye rewrite eder.
 * Link/canonical üretiminde DAİMA localizedPath() kullan ki TR URL'leri temiz kalsın.
 */

export const locales = ["tr", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Locale etiketleri (dil değiştirici için) */
export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  ru: "Русский",
};

/** hreflang kodları (sitemap/metadata alternates) */
export const hreflangMap: Record<Locale, string> = {
  tr: "tr-CY",
  en: "en",
  ru: "ru",
};

/**
 * Locale'e göre temiz public path üretir.
 * tr: "/lefkosa-taksi" · en: "/en/lefkosa-taksi" · ru: "/ru/lefkosa-taksi"
 * @param path locale'siz yol, başında "/" ile (kök için "/")
 */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return clean === "" ? "/" : clean;
  }
  return `/${locale}${clean}`;
}

/** Mutlak canonical URL (siteConfig.url ile birleştirir) */
export function absoluteUrl(siteUrl: string, locale: Locale, path: string): string {
  return `${siteUrl}${localizedPath(locale, path)}`;
}
