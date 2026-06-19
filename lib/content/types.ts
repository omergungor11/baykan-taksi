import type { Locale } from "@/lib/i18n/config";

/** Her dil için bir string tutan alan */
export type L10n = Record<Locale, string>;

export type FaqItem = { q: L10n; a: L10n };

export type ServiceData = {
  slug: string;
  icon: string; // lucide ikon adı (components/icon.tsx üzerinden çözülür)
  title: L10n;
  shortDesc: L10n;
  description: L10n;
  features: L10n[];
  faq: FaqItem[];
};

export type AreaData = {
  slug: string; // örn. "lefkosa-taksi"
  keyword: L10n; // görünen anahtar kelime, örn. "Lefkoşa Taksi"
  h1: L10n;
  metaTitle: L10n;
  metaDescription: L10n;
  intro: L10n; // giriş paragrafı (uzun olabilir)
  highlights: L10n[]; // madde madde avantajlar
  routes: string[]; // popüler güzergahlar (özel isimler, dile göre değişmez)
  nearby: string[]; // ilgili bölge slug'ları
  faq: FaqItem[];
};

/** Bir L10n alanını locale'e göre çöz; eksikse TR'ye düş */
export function t(field: L10n, locale: Locale): string {
  return field[locale] || field.tr;
}
