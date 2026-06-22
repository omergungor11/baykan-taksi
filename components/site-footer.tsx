import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock, Car } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { mainNav } from "@/lib/i18n/navigation";
import type { Dictionary } from "@/lib/i18n/dictionaries/tr";
import { siteConfig, telUrl, whatsappUrl } from "@/lib/config";
import { services } from "@/lib/content/services";
import { t } from "@/lib/content/types";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = mainNav(dict);
  const year = 2026;

  return (
    <footer className="mt-16 bg-ink text-slate-300">
      <div className="taxi-checker h-1.5 w-full" aria-hidden />
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 font-extrabold text-white">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1.5 text-brand-foreground">
              <Car className="size-5" aria-hidden />
              <span className="font-display">TAKSİ</span>
            </span>
            <span>{siteConfig.shortName}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">{dict.footer.tagline}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-sm">
            <Clock className="size-4 text-brand" aria-hidden />
            {dict.common.available247}
          </div>
        </div>

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

        <div>
          <h2 className="mb-3 font-semibold text-white">{dict.footer.contact}</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={telUrl()} className="flex items-center gap-2 hover:text-brand">
                <Phone className="size-4 text-brand" aria-hidden />
                +{siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl(dict.cta.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand"
              >
                <MessageCircle className="size-4 text-brand" aria-hidden />
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-brand" aria-hidden />
              {siteConfig.geo.city}, {siteConfig.geo.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {year} {siteConfig.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}
