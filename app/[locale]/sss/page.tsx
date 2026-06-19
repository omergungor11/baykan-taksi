import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { generalFaq } from "@/lib/content/faq";
import { t } from "@/lib/content/types";
import { Section, SectionHeading } from "@/components/section";
import { Faq } from "@/components/faq";
import { CtaPair } from "@/components/cta-buttons";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";

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
    path: "/sss",
    title: `${dict.common.faqTitle} | ${siteConfig.shortName}`,
    description:
      "Taksi çağırma, 7/24 hizmet, ödeme, havalimanı transferi ve fiyatlandırma hakkında sıkça sorulan sorular.",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = await getDictionary(typedLocale);
  const items = generalFaq.map((f) => ({ q: t(f.q, typedLocale), a: t(f.a, typedLocale) }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, url: `${siteConfig.url}${localizedPath(typedLocale, "/")}` },
          { name: dict.nav.faq, url: `${siteConfig.url}${localizedPath(typedLocale, "/sss")}` },
        ]}
      />
      <FaqJsonLd items={items} />
      <Section>
        <SectionHeading title={dict.common.faqTitle} />
        <Faq items={items} />
        <div className="mt-10">
          <CtaPair source="faq" message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
        </div>
      </Section>
    </>
  );
}
