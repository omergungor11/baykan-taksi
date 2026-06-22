import type { StaticImageData } from "next/image";
import hero from "@/assets/images/hero.jpg";
import about from "@/assets/images/about.jpg";
import ctaBg from "@/assets/images/cta-bg.jpg";
import taksi from "@/assets/images/service-taksi.jpg";
import havalimani from "@/assets/images/service-havalimani-transfer.jpg";
import otel from "@/assets/images/service-otel-transfer.jpg";
import ada from "@/assets/images/service-ada-turu.jpg";
import gezi from "@/assets/images/service-gezi-turu.jpg";
import kiralama from "@/assets/images/service-arac-kiralama.jpg";

/**
 * Görsel kayıtları — statik import (next/image otomatik boyut + blur placeholder üretir).
 * Gerçek araç/şoför fotoğrafları gelince assets/images altındaki dosyalar değiştirilir.
 */
export const heroImage = hero;
export const aboutImage = about;
export const ctaBgImage = ctaBg;

const serviceImages: Record<string, StaticImageData> = {
  taksi,
  "havalimani-transfer": havalimani,
  "otel-transfer": otel,
  "ada-turu": ada,
  "gezi-turu": gezi,
  "arac-kiralama": kiralama,
};

export function getServiceImage(slug: string): StaticImageData {
  return serviceImages[slug] ?? taksi;
}
