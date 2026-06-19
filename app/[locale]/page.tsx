import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Zap, ShieldCheck, BadgeCheck, Clock } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/content/services";
import { areas } from "@/lib/content/areas";
import { t } from "@/lib/content/types";
import { Section, SectionHeading } from "@/components/section";
import { Icon } from "@/components/icon";
import { CtaPair } from "@/components/cta-buttons";

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
    path: "/",
    title: `${dict.hero.title} | ${siteConfig.name}`,
    description: dict.hero.subtitle,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = await getDictionary(typedLocale);

  const whyUs = [
    { icon: Zap, ...dict.whyUs.fast },
    { icon: BadgeCheck, ...dict.whyUs.fixed },
    { icon: ShieldCheck, ...dict.whyUs.safe },
    { icon: Clock, ...dict.whyUs.always },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink" aria-hidden />
        <div className="container-x relative grid gap-8 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-sm font-semibold text-brand">
              <Clock className="size-4" aria-hidden /> {dict.common.available247}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              {dict.hero.title}
            </h1>
            <p className="mt-4 max-w-lg text-lg text-slate-300">{dict.hero.subtitle}</p>
            <div className="mt-8">
              <CtaPair source="hero" message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <Section>
        <SectionHeading title={dict.common.ourServices} center />
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
              <h3 className="text-lg font-bold text-ink">{t(s.title, typedLocale)}</h3>
              <p className="mt-1 text-sm text-ink-muted">{t(s.shortDesc, typedLocale)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:gap-2">
                {dict.common.readMore} <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Bölgeler */}
      <Section alt>
        <SectionHeading title={dict.common.popularAreas} center />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={localizedPath(typedLocale, `/${a.slug}`)}
              className="rounded-xl border bg-surface px-4 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-brand hover:bg-brand/10"
            >
              {t(a.keyword, typedLocale)}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href={localizedPath(typedLocale, "/bolgeler")}
            className="inline-flex items-center gap-1 font-semibold text-ink hover:gap-2"
          >
            {dict.common.allAreas} <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Section>

      {/* Neden biz */}
      <Section>
        <SectionHeading title={dict.common.whyUs} center />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-3 inline-flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <w.icon className="size-7" aria-hidden />
              </div>
              <h3 className="font-bold text-ink">{w.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Alt CTA */}
      <section className="bg-brand">
        <div className="container-x flex flex-col items-center gap-6 py-12 text-center">
          <h2 className="text-2xl font-extrabold text-brand-foreground md:text-3xl">
            {dict.hero.title}
          </h2>
          <CtaPair source="home-bottom" message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
        </div>
      </section>
    </>
  );
}
