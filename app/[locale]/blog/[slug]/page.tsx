import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { getAllSlugs, getPost } from "@/lib/mdx";
import { Section } from "@/components/section";
import { MdxContent } from "@/components/mdx-content";
import { CtaPair } from "@/components/cta-buttons";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = await getPost(locale, slug);
  if (!post) return {};
  return buildMetadata({
    locale,
    path: `/blog/${slug}`,
    title: post.title,
    description: post.description,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale: Locale = locale;
  const post = await getPost(typedLocale, slug);
  if (!post) notFound();
  const dict = await getDictionary(typedLocale);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: dict.nav.home, url: `${siteConfig.url}${localizedPath(typedLocale, "/")}` },
          { name: dict.nav.blog, url: `${siteConfig.url}${localizedPath(typedLocale, "/blog")}` },
          { name: post.title, url: `${siteConfig.url}${localizedPath(typedLocale, `/blog/${slug}`)}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: siteConfig.name },
            publisher: { "@type": "Organization", name: siteConfig.name },
            mainEntityOfPage: `${siteConfig.url}${localizedPath(typedLocale, `/blog/${slug}`)}`,
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Section>
        <article>
          <header className="mb-6 max-w-3xl">
            <span className="flex items-center gap-2 text-sm text-ink-muted">
              <CalendarDays className="size-4" aria-hidden />
              {new Date(post.date).toLocaleDateString(typedLocale)}
            </span>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-ink md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-lg text-ink-muted">{post.description}</p>
          </header>
          <MdxContent source={post.content} />
        </article>
        <div className="mt-10">
          <CtaPair source={`blog-${slug}`} message={dict.cta.whatsappMessage} size="lg" waLabel={dict.cta.callTaxi} callLabel={dict.cta.callNow} />
        </div>
      </Section>
    </>
  );
}
