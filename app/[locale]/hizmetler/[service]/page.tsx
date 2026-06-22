import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { serviceSlugs, getService } from "@/lib/content/services";
import { t } from "@/lib/content/types";
import { getServiceImage } from "@/lib/content/images";
import { Section, SectionHeading } from "@/components/section";
import { Icon } from "@/components/icon";
import { Faq } from "@/components/faq";
import { CtaPair } from "@/components/cta-buttons";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  if (!isLocale(locale)) return {};
  const data = getService(service);
  if (!data) return {};
  return buildMetadata({
    locale,
    path: `/hizmetler/${service}`,
    title: `${t(data.title, locale)} | ${siteConfig.shortName}`,
    description: t(data.description, locale).slice(0, 160),
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const data = getService(service);
  if (!data) notFound();

  const dict = await getDictionary(typedLocale);
  const faqItems = data.faq.map((f) => ({ q: t(f.q, typedLocale), a: t(f.a, typedLocale) }));
  const url = `${siteConfig.url}${localizedPath(typedLocale, `/hizmetler/${service}`)}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, url: `${siteConfig.url}${localizedPath(typedLocale, "/")}` },
          { name: dict.nav.services, url: `${siteConfig.url}${localizedPath(typedLocale, "/hizmetler")}` },
          { name: t(data.title, typedLocale), url },
        ]}
      />
      <FaqJsonLd items={faqItems} />
      <ServiceJsonLd name={t(data.title, typedLocale)} description={t(data.description, typedLocale)} url={url} />

      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={getServiceImage(service)}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" aria-hidden />
        <div className="taxi-checker absolute bottom-0 left-0 h-2 w-full" aria-hidden />
        <div className="container-x relative py-14 md:py-20">
          <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-brand">
            <Icon name={data.icon} className="size-7" />
          </div>
          <h1 className="text-3xl font-extrabold md:text-5xl">{t(data.title, typedLocale)}</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-200">{t(data.shortDesc, typedLocale)}</p>
          <div className="mt-6">
            <CtaPair source={`service-${service}`} message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} onDark />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <p className="text-lg leading-relaxed text-ink-soft lg:col-span-2">
            {t(data.description, typedLocale)}
          </p>
          <ul className="space-y-3">
            {data.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border bg-surface p-4">
                <Check className="mt-0.5 size-5 shrink-0 text-wa" aria-hidden />
                <span className="font-medium text-ink">{t(f, typedLocale)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {faqItems.length > 0 && (
        <Section alt>
          <SectionHeading title={dict.common.faqTitle} />
          <Faq items={faqItems} />
        </Section>
      )}
    </>
  );
}
