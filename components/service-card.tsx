import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/content/types";
import type { ServiceData } from "@/lib/content/types";
import { getServiceImage } from "@/lib/content/images";
import { Icon } from "@/components/icon";

/**
 * Görselli hizmet kartı — ana sayfa ve hizmetler dizininde kullanılır.
 */
export function ServiceCard({
  service,
  locale,
  readMore,
}: {
  service: ServiceData;
  locale: Locale;
  readMore: string;
}) {
  return (
    <Link
      href={localizedPath(locale, `/hizmetler/${service.slug}`)}
      className="group flex flex-col overflow-hidden rounded-2xl border bg-surface shadow-card transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={getServiceImage(service.slug)}
          alt={t(service.title, locale)}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" aria-hidden />
        <span className="absolute left-4 top-4 inline-flex size-11 items-center justify-center rounded-xl bg-brand text-brand-foreground shadow-brand">
          <Icon name={service.icon} className="size-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-ink">{t(service.title, locale)}</h3>
        <p className="mt-1 flex-1 text-sm text-ink-muted">{t(service.shortDesc, locale)}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-ink-soft transition-all group-hover:gap-2 group-hover:text-brand-dark">
          {readMore} <ArrowRight className="size-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
