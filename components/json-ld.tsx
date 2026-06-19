import { siteConfig } from "@/lib/config";

/** Ham JSON-LD script enjektörü */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify çıktısı güvenli; XSS için </script> kaçışı yapılır
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Sitewide TaxiService / LocalBusiness — layout'ta bir kez */
export function TaxiServiceJsonLd({ areasServed }: { areasServed?: string[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "TaxiService",
        name: siteConfig.name,
        url: siteConfig.url,
        telephone: `+${siteConfig.phone}`,
        priceRange: siteConfig.priceRange,
        image: `${siteConfig.url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.geo.city,
          addressRegion: siteConfig.geo.region,
          addressCountry: siteConfig.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        areaServed: (areasServed ?? [siteConfig.geo.city, "Kıbrıs"]).map((name) => ({
          "@type": "City",
          name,
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        availableLanguage: ["tr", "en", "ru"],
      }}
    />
  );
}

/** Breadcrumb — her iç sayfada */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

/** FAQPage — SSS içeren sayfalarda */
export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  if (items.length === 0) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}

/** Service — hizmet sayfalarında */
export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        name,
        description,
        url,
        provider: { "@type": "TaxiService", name: siteConfig.name, url: siteConfig.url },
        areaServed: { "@type": "Place", name: "Kıbrıs / Lefkoşa" },
      }}
    />
  );
}
