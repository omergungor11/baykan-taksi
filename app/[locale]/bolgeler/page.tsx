import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { areas } from "@/lib/content/areas";
import { t } from "@/lib/content/types";
import { Section, SectionHeading } from "@/components/section";
import { CtaPair } from "@/components/cta-buttons";
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
    path: "/bolgeler",
    title: `${dict.common.popularAreas} | ${siteConfig.shortName}`,
    description:
      "Lefkoşa, Gönyeli, Hamitköy, Ercan ve tüm Kıbrıs'ta hizmet verdiğimiz taksi bölgeleri ve anahtar güzergahlar.",
  });
}

export default async function AreasIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = await getDictionary(typedLocale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, url: `${siteConfig.url}${localizedPath(typedLocale, "/")}` },
          { name: dict.nav.areas, url: `${siteConfig.url}${localizedPath(typedLocale, "/bolgeler")}` },
        ]}
      />
      <Section>
        <SectionHeading title={dict.common.popularAreas} subtitle={dict.footer.tagline} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={localizedPath(typedLocale, `/${a.slug}`)}
              className="group rounded-2xl border bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <h2 className="text-lg font-bold text-ink">{t(a.keyword, typedLocale)}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{t(a.metaDescription, typedLocale)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:gap-2">
                {dict.common.readMore} <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <CtaPair source="areas-index" message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
        </div>
      </Section>
    </>
  );
}
