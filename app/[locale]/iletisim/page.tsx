import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, telUrl, whatsappUrl } from "@/lib/config";
import { Section, SectionHeading } from "@/components/section";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/iletisim",
    title: `${dict.nav.contact} | ${siteConfig.shortName}`,
    description: `${siteConfig.name} iletişim: telefon, WhatsApp ve 7/24 taksi çağırma. Lefkoşa, Kıbrıs.`,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = await getDictionary(typedLocale);

  const mapSrc = `https://www.google.com/maps?q=${siteConfig.geo.lat},${siteConfig.geo.lng}&hl=${typedLocale}&z=13&output=embed`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, url: `${siteConfig.url}${localizedPath(typedLocale, "/")}` },
          { name: dict.nav.contact, url: `${siteConfig.url}${localizedPath(typedLocale, "/iletisim")}` },
        ]}
      />
      <Section>
        <SectionHeading title={dict.nav.contact} subtitle={dict.footer.tagline} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={whatsappUrl(dict.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border bg-surface p-5 hover:border-wa"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-wa/15 text-wa">
                <MessageCircle className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block font-bold text-ink">WhatsApp</span>
                <span className="text-sm text-ink-muted">{dict.cta.callTaxi}</span>
              </span>
            </a>
            <a href={telUrl()} className="flex items-center gap-4 rounded-2xl border bg-surface p-5 hover:border-brand">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/15 text-ink">
                <Phone className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block font-bold text-ink">{dict.common.callUs}</span>
                <span className="text-sm text-ink-muted">+{siteConfig.phone}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border bg-surface p-5">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/15 text-ink">
                <Mail className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block font-bold text-ink">E-posta</span>
                <span className="text-sm text-ink-muted">{siteConfig.email}</span>
              </span>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border bg-surface p-5 sm:flex-row sm:items-center">
              <span className="flex items-center gap-2 text-sm text-ink-soft">
                <MapPin className="size-5 text-brand" aria-hidden /> {siteConfig.geo.address}
              </span>
              <span className="flex items-center gap-2 text-sm text-ink-soft">
                <Clock className="size-5 text-brand" aria-hidden /> {dict.common.available247}
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border">
            <iframe
              title={`${siteConfig.name} - ${siteConfig.geo.city}`}
              src={mapSrc}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
