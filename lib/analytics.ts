"use client";

import { siteConfig } from "@/lib/config";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/** GA4 olayı gönder */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}

/** Google Ads dönüşümü gönder (label .env'den) */
export function trackAdsConversion(label: string) {
  const { adsId } = siteConfig.analytics;
  if (!adsId || !label) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", { send_to: `${adsId}/${label}` });
}

/** WhatsApp tıklaması — GA4 event + Ads dönüşümü */
export function trackWhatsappClick(source: string) {
  trackEvent("whatsapp_click", { source });
  trackAdsConversion(siteConfig.analytics.adsWaLabel);
}

/** Ara tıklaması — GA4 event + Ads dönüşümü */
export function trackCallClick(source: string) {
  trackEvent("call_click", { source });
  trackAdsConversion(siteConfig.analytics.adsCallLabel);
}
