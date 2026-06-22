/**
 * Site geneli yapılandırma — marka, iletişim, koordinat, sosyal.
 * Tüm değerler env ile override edilebilir. Gerçek değerler müşteriden gelince
 * .env.local içine yazılır; buradaki değerler güvenli varsayılan/placeholder'dır.
 */

export const siteConfig = {
  name: "Kıbrıs Lefkoşa Taksi",
  shortName: "Lefkoşa Taksi",
  // Birincil domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kibrislefkosataksi.com",
  domain: "kibrislefkosataksi.com",

  // İletişim — uluslararası, + olmadan (tel:/wa.me için rakam hâli)
  phone: process.env.NEXT_PUBLIC_PHONE ?? "905338366309",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "905338366309",
  // Ekranda gösterilen okunaklı format
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+90 533 836 63 09",
  email: "info@kibrislefkosataksi.com",

  // Konum (Lefkoşa / Nicosia, KKTC) — yerel SEO için
  geo: {
    lat: 35.1856,
    lng: 33.3823,
    city: "Lefkoşa",
    region: "KKTC",
    country: "CY",
    // TODO: gerçek adres müşteriden gelince güncelle
    address: "Lefkoşa, Kuzey Kıbrıs Türk Cumhuriyeti",
  },

  // 7/24 hizmet
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "₺₺",

  // Sosyal medya — TODO: gerçek linkler gelince doldur
  social: {
    instagram: "",
    facebook: "",
  },

  // Analitik / dönüşüm
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
    adsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    adsCallLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL ?? "",
    adsWaLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_WA_LABEL ?? "",
    gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
} as const;

/** wa.me derin linki — opsiyonel önceden doldurulmuş mesaj ile */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** tel: linki */
export function telUrl(): string {
  return `tel:+${siteConfig.phone}`;
}
