"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n/config";
import { mainNav } from "@/lib/i18n/navigation";
import type { Dictionary } from "@/lib/i18n/dictionaries/tr";
import { siteConfig, telUrl } from "@/lib/config";
import { LanguageSwitcher } from "./language-switcher";
import { trackCallClick } from "@/lib/analytics";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const nav = mainNav(dict);

  return (
    <header className="sticky top-0 z-40 border-b bg-surface/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href={localizedPath(locale, "/")} className="flex items-center gap-2 font-extrabold">
          <span className="rounded-lg bg-brand px-2 py-1 text-brand-foreground">TAKSİ</span>
          <span className="hidden text-ink sm:inline">{siteConfig.shortName}</span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-surface-alt"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} />
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
                className="rounded-lg px-3 py-3 font-medium text-ink hover:bg-surface-alt"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
