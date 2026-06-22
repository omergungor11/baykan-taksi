import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/content/services";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
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
        <SectionHeading
          kicker={dict.common.ourServices}
          title={dict.common.ourServices}
          subtitle={dict.common.servicesSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} locale={typedLocale} readMore={dict.common.readMore} />
          ))}
        </div>
        <div className="mt-10">
          <CtaPair source="services-index" message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
        </div>
      </Section>
    </>
  );
}
