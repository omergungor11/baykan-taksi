import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { getAllPosts } from "@/lib/mdx";
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
    path: "/blog",
    title: `${dict.nav.blog} | ${siteConfig.shortName}`,
    description:
      "Kıbrıs ve Lefkoşa'da ulaşım, havalimanı transferi, gezi rehberleri ve taksi ipuçları. Blog yazılarımız.",
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const dict = await getDictionary(typedLocale);
  const posts = await getAllPosts(typedLocale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, url: `${siteConfig.url}${localizedPath(typedLocale, "/")}` },
          { name: dict.nav.blog, url: `${siteConfig.url}${localizedPath(typedLocale, "/blog")}` },
        ]}
      />
      <Section>
        <SectionHeading title={dict.nav.blog} />
        {posts.length === 0 ? (
          <p className="text-ink-muted">—</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={localizedPath(typedLocale, `/blog/${p.slug}`)}
                className="group rounded-2xl border bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <span className="flex items-center gap-2 text-xs text-ink-muted">
                  <CalendarDays className="size-4" aria-hidden />
                  {new Date(p.date).toLocaleDateString(typedLocale)}
                </span>
                <h2 className="mt-2 text-lg font-bold text-ink">{p.title}</h2>
                <p className="mt-1 line-clamp-3 text-sm text-ink-muted">{p.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:gap-2">
                  {dict.common.readMore} <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
