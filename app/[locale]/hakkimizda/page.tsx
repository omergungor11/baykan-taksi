import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { t, type L10n } from "@/lib/content/types";
import { aboutImage } from "@/lib/content/images";
import { Section, SectionHeading } from "@/components/section";
import { StatsBar } from "@/components/stats-bar";
import { CtaPair } from "@/components/cta-buttons";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const content: { title: L10n; body: L10n[] } = {
  title: { tr: "Hakkımızda", en: "About Us", ru: "О нас" },
  body: [
    {
      tr: "Kıbrıs Lefkoşa Taksi olarak yıllardır Lefkoşa ve tüm Kıbrıs'ta güvenilir ulaşım hizmeti sunuyoruz. Amacımız; her yolculuğu güvenli, konforlu ve zamanında tamamlamak.",
      en: "At Kıbrıs Lefkoşa Taksi we have provided reliable transport across Nicosia and all of Cyprus for years. Our goal is to make every journey safe, comfortable and on time.",
      ru: "Kıbrıs Lefkoşa Taksi уже много лет обеспечивает надёжные перевозки по Никосии и всему Кипру. Наша цель — сделать каждую поездку безопасной, удобной и пунктуальной.",
    },
    {
      tr: "Deneyimli sürücülerimiz, bakımlı araç filomuz ve 7/24 ulaşılabilirliğimizle havalimanı transferinden ada turuna kadar her ihtiyaca cevap veriyoruz. Sabit ve şeffaf fiyatlandırma ile sürpriz yaşamazsınız.",
      en: "With experienced drivers, a well-maintained fleet and 24/7 availability, we meet every need from airport transfers to island tours. Fixed and transparent pricing means no surprises.",
      ru: "Опытные водители, ухоженный автопарк и доступность 24/7 — мы закрываем любые задачи: от трансфера до туров. Фиксированные прозрачные цены — без сюрпризов.",
    },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/hakkimizda",
    title: `${t(content.title, locale)} | ${siteConfig.shortName}`,
    description: t(content.body[0], locale).slice(0, 160),
  });
}

export default async function AboutPage({
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
          { name: t(content.title, typedLocale), url: `${siteConfig.url}${localizedPath(typedLocale, "/hakkimizda")}` },
        ]}
      />
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker={dict.common.available247}
              title={t(content.title, typedLocale)}
            />
            <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
              {content.body.map((p, i) => (
                <p key={i}>{t(p, typedLocale)}</p>
              ))}
            </div>
            <div className="mt-8">
              <CtaPair source="about" message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border shadow-card">
              <Image
                src={aboutImage}
                alt={siteConfig.name}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
            <div className="taxi-checker absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl opacity-80" aria-hidden />
          </div>
        </div>
      </Section>

      <StatsBar dict={dict} />
    </>
  );
}
