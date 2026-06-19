import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, ArrowRight, Route } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { areaSlugs, getArea } from "@/lib/content/areas";
import { t } from "@/lib/content/types";
import { Section, SectionHeading } from "@/components/section";
import { Faq } from "@/components/faq";
import { CtaPair } from "@/components/cta-buttons";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return areaSlugs.map((area) => ({ area }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}): Promise<Metadata> {
  const { locale, area } = await params;
  if (!isLocale(locale)) return {};
  const data = getArea(area);
  if (!data) return {};
  return buildMetadata({
    locale,
    path: `/${area}`,
    title: t(data.metaTitle, locale),
    description: t(data.metaDescription, locale),
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}) {
  const { locale, area } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const data = getArea(area);
  if (!data) notFound();

  const dict = await getDictionary(typedLocale);
  const faqItems = data.faq.map((f) => ({ q: t(f.q, typedLocale), a: t(f.a, typedLocale) }));
  const nearby = data.nearby.map(getArea).filter((a) => a !== undefined);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, url: `${siteConfig.url}${localizedPath(typedLocale, "/")}` },
          { name: t(data.keyword, typedLocale), url: `${siteConfig.url}${localizedPath(typedLocale, `/${area}`)}` },
        ]}
      />
      <FaqJsonLd items={faqItems} />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="container-x py-12 md:py-16">
          <nav className="mb-3 text-sm text-slate-400">
            <Link href={localizedPath(typedLocale, "/")} className="hover:text-brand">
              {dict.nav.home}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{t(data.keyword, typedLocale)}</span>
          </nav>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl">
            {t(data.h1, typedLocale)}
          </h1>
          <div className="mt-6">
            <CtaPair source={`area-${area}`} message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
          </div>
        </div>
      </section>

      {/* İçerik */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-ink-soft">{t(data.intro, typedLocale)}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {data.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border bg-surface p-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-wa" aria-hidden />
                  <span className="font-medium text-ink">{t(h, typedLocale)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popüler güzergahlar */}
          <aside className="rounded-2xl border bg-surface-alt p-6">
            <h2 className="flex items-center gap-2 font-bold text-ink">
              <Route className="size-5 text-brand" aria-hidden /> {dict.common.popularRoutes}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {data.routes.map((r, i) => (
                <li key={i} className="flex items-center gap-2 text-ink-soft">
                  <MapPin className="size-4 shrink-0 text-ink-muted" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaPair source={`area-aside-${area}`} message={dict.cta.whatsappMessage} size="sm" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} className="flex-col" />
            </div>
          </aside>
        </div>
      </Section>

      {/* SSS */}
      {faqItems.length > 0 && (
        <Section alt>
          <SectionHeading title={dict.common.faqTitle} />
          <Faq items={faqItems} />
        </Section>
      )}

      {/* Yakın bölgeler */}
      {nearby.length > 0 && (
        <Section>
          <SectionHeading title={dict.common.relatedAreas} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {nearby.map((a) => (
              <Link
                key={a.slug}
                href={localizedPath(typedLocale, `/${a.slug}`)}
                className="flex items-center justify-between rounded-xl border bg-surface px-4 py-3 text-sm font-semibold text-ink hover:border-brand hover:bg-brand/10"
              >
                {t(a.keyword, typedLocale)}
                <ArrowRight className="size-4 text-ink-muted" aria-hidden />
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
