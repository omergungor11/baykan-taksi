import Link from "next/link";
import { Phone, MapPin, Clock, Car } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { mainNav } from "@/lib/i18n/navigation";
import type { Dictionary } from "@/lib/i18n/dictionaries/tr";
import { siteConfig, telUrl } from "@/lib/config";
import { services } from "@/lib/content/services";
import { t } from "@/lib/content/types";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = mainNav(dict);
  const year = 2026;

  return (
    <footer className="mt-16 bg-ink text-slate-300">
      <div className="taxi-checker h-1.5 w-full" aria-hidden />
      <div className="container-x py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Marka + iletişim özeti */}
          <div>
            <div className="mb-3 flex items-center gap-2 font-extrabold text-white">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1.5 text-brand-foreground">
                <Car className="size-5" aria-hidden />
                <span className="font-display">TAKSİ</span>
              </span>
              <span>{siteConfig.shortName}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">{dict.footer.tagline}</p>
            <a
              href={telUrl()}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand"
            >
              <Phone className="size-4 text-brand" aria-hidden />
              {siteConfig.phoneDisplay}
            </a>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-brand" aria-hidden />
                {siteConfig.geo.city}, {siteConfig.geo.region}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4 text-brand" aria-hidden />
                {dict.common.available247}
              </span>
            </div>
          </div>

          {/* Menüler — mobilde 2 sütun */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h2 className="mb-3 font-semibold text-white">{dict.footer.quickLinks}</h2>
              <ul className="space-y-2 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={localizedPath(locale, item.href)} className="hover:text-brand">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-semibold text-white">{dict.footer.services}</h2>
              <ul className="space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={localizedPath(locale, `/hizmetler/${s.slug}`)}
                      className="hover:text-brand"
                    >
                      {t(s.title, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {year} {siteConfig.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}
