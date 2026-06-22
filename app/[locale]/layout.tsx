import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { display, body } from "@/lib/fonts";
import { locales, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { siteConfig } from "@/lib/config";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCta } from "@/components/floating-cta";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { TaxiServiceJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 7/24 Lefkoşa & Kıbrıs Taksi`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Lefkoşa ve tüm Kıbrıs'ta 7/24 taksi, Ercan Havalimanı transfer, ada turu ve özel araç hizmeti. Tek tıkla taksi çağırın.",
  verification: siteConfig.analytics.gscVerification
    ? { google: siteConfig.analytics.gscVerification }
    : undefined,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = await getDictionary(typedLocale);

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body>
        <AnalyticsScripts />
        <TaxiServiceJsonLd />
        <SiteHeader locale={typedLocale} dict={dict} />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter locale={typedLocale} dict={dict} />
        <FloatingCta message={dict.cta.whatsappMessage} callLabel={dict.cta.callNow} />
      </body>
    </html>
  );
}
