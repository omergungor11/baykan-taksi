"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, Clock, Car } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { mainNav } from "@/lib/i18n/navigation";
import type { Dictionary } from "@/lib/i18n/dictionaries/tr";
import { siteConfig, telUrl, whatsappUrl } from "@/lib/config";
import { LanguageSwitcher } from "./language-switcher";
import { trackCallClick, trackWhatsappClick } from "@/lib/analytics";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const nav = mainNav(dict);

  return (
    <header className="sticky top-0 z-40">
      {/* Üst dama şeridi */}
      <div className="taxi-checker h-1.5 w-full" aria-hidden />

      {/* Üst utility bar */}
      <div className="hidden bg-ink text-slate-300 sm:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-3.5 text-brand" aria-hidden />
            {dict.common.available247} · {siteConfig.geo.city}, {siteConfig.geo.region}
          </span>
          <a
            href={telUrl()}
            onClick={() => trackCallClick("topbar")}
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-brand"
          >
            <Phone className="size-3.5 text-brand" aria-hidden />
            +{siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Ana bar */}
      <div className="border-b bg-surface/95 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href={localizedPath(locale, "/")}
            className="flex items-center gap-2 font-extrabold"
          >
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-2.5 py-1.5 text-brand-foreground shadow-brand">
              <Car className="size-5" aria-hidden />
              <span className="font-display tracking-tight">TAKSİ</span>
            </span>
            <span className="hidden leading-tight text-ink sm:flex sm:flex-col">
              <span className="text-sm font-extrabold">{siteConfig.shortName}</span>
              <span className="text-[11px] font-medium text-ink-muted">
                {siteConfig.domain}
              </span>
            </span>
          </Link>

          {/* Masaüstü menü */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-surface-alt hover:text-brand-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher current={locale} />
            <a
              href={whatsappUrl(dict.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsappClick("header")}
              className="hidden items-center gap-2 rounded-lg bg-wa px-4 py-2 text-sm font-semibold text-white hover:bg-wa-dark md:flex"
            >
              <MessageCircle className="size-4" aria-hidden />
              {dict.cta.callTaxi}
            </a>
            <a
              href={telUrl()}
              onClick={() => trackCallClick("header")}
              className="hidden items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:bg-brand-dark sm:flex"
            >
              <Phone className="size-4" aria-hidden />
              {dict.cta.callNow}
            </a>
            {/* Mobil menü düğmesi */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-ink hover:bg-surface-alt lg:hidden"
              aria-label="Menü"
              aria-expanded={open}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobil menü */}
        {open && (
          <nav className="border-t bg-surface lg:hidden">
            <div className="container-x flex flex-col py-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(locale, item.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-semibold text-ink hover:bg-surface-alt"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl(dict.cta.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsappClick("mobile-menu");
                  setOpen(false);
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-wa px-4 py-3 font-semibold text-white"
              >
                <MessageCircle className="size-5" aria-hidden />
                {dict.cta.callTaxi}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
