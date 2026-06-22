import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  BadgeCheck,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/content/services";
import { areas } from "@/lib/content/areas";
import { t } from "@/lib/content/types";
import { heroImage, ctaBgImage } from "@/lib/content/images";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { StatsBar } from "@/components/stats-bar";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
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

  const trustBadges = [
    { icon: Clock, label: dict.common.available247 },
    { icon: BadgeCheck, label: dict.whyUs.fixed.title },
    { icon: Star, label: dict.stats.rating.value },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 overlay-ink" aria-hidden />
        <div className="container-x relative py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-3 py-1 text-sm font-bold text-brand">
              <MapPin className="size-4" aria-hidden /> {dict.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] md:text-6xl">
              {dict.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200 md:text-xl">
              {dict.hero.subtitle}
            </p>
            <div className="mt-8">
              <CtaPair
                source="hero"
                message={dict.cta.whatsappMessage}
                size="lg"
                waLabel={dict.cta.callTaxi}
                callLabel={dict.cta.callNow}
                onDark
              />
            </div>
            <p className="mt-4 text-sm text-slate-300">{dict.hero.note}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustBadges.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-slate-200">
                  <b.icon className="size-4 text-brand" aria-hidden />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="taxi-checker absolute bottom-0 left-0 h-2 w-full opacity-90" aria-hidden />
      </section>

      <StatsBar dict={dict} />

      {/* Hizmetler */}
      <Section>
        <SectionHeading
          kicker={dict.common.ourServices}
          title={dict.common.ourServices}
          subtitle={dict.common.servicesSubtitle}
          center
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} locale={typedLocale} readMore={dict.common.readMore} />
          ))}
        </div>
      </Section>

      {/* Nasıl çalışır */}
      <HowItWorks dict={dict} />

      {/* Bölgeler */}
      <Section alt>
        <SectionHeading
          kicker={dict.nav.areas}
          title={dict.common.popularAreas}
          subtitle={dict.common.areasSubtitle}
          center
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={localizedPath(typedLocale, `/${a.slug}`)}
              className="group flex items-center justify-between gap-2 rounded-xl border bg-surface px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:bg-brand/10"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-brand" aria-hidden />
                {t(a.keyword, typedLocale)}
              </span>
              <ArrowRight className="size-4 text-ink-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={localizedPath(typedLocale, "/bolgeler")}
            className="inline-flex items-center gap-1 font-bold text-ink hover:gap-2 hover:text-brand-dark"
          >
            {dict.common.allAreas} <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Section>

      {/* Neden biz */}
      <Section>
        <SectionHeading
          kicker={dict.common.whyUs}
          title={dict.common.whyUs}
          subtitle={dict.common.whyUsSubtitle}
          center
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-surface p-6 text-center shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-brand">
                <w.icon className="size-7" aria-hidden />
              </div>
              <h3 className="font-bold text-ink">{w.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Yorumlar */}
      <Testimonials dict={dict} />

      {/* Alt CTA */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src={ctaBgImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" aria-hidden />
        <div className="taxi-checker absolute left-0 top-0 h-2 w-full" aria-hidden />
        <div className="container-x relative flex flex-col items-center gap-6 py-16 text-center md:py-20">
          <h2 className="max-w-2xl text-3xl font-extrabold md:text-4xl">{dict.hero.title}</h2>
          <p className="max-w-xl text-slate-200">{dict.hero.note}</p>
          <CtaPair
            source="home-bottom"
            message={dict.cta.whatsappMessage}
            size="lg"
            waLabel={dict.cta.callTaxi}
            callLabel={dict.cta.callNow}
            onDark
          />
        </div>
      </section>
    </>
  );
}
