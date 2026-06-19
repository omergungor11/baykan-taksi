import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/content/services";
import { t } from "@/lib/content/types";
import { Section, SectionHeading } from "@/components/section";
import { Icon } from "@/components/icon";
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
    path: "/hizmetler",
    title: `${dict.common.ourServices} | ${siteConfig.shortName}`,
    description:
      "Taksi, havalimanı transfer, otel transfer, ada turu, gezi turu ve şoförlü araç kiralama. Lefkoşa ve tüm Kıbrıs'ta 7/24 hizmet.",
  });
}

export default async function ServicesIndexPage({
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
          { name: dict.nav.services, url: `${siteConfig.url}${localizedPath(typedLocale, "/hizmetler")}` },
        ]}
      />
      <Section>
        <SectionHeading title={dict.common.ourServices} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={localizedPath(typedLocale, `/hizmetler/${s.slug}`)}
              className="group rounded-2xl border bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-brand/15 text-ink">
                <Icon name={s.icon} className="size-6" />
              </div>
              <h2 className="text-lg font-bold text-ink">{t(s.title, typedLocale)}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t(s.shortDesc, typedLocale)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:gap-2">
                {dict.common.readMore} <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <CtaPair source="services-index" message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
        </div>
      </Section>
    </>
  );
}
