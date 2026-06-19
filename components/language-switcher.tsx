"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useState } from "react";
import { locales, localeNames, defaultLocale, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/** Geçerli pathname'den locale'siz "temel yolu" çıkarır */
function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(`/${l}`.length);
  }
  return pathname || "/";
}

function toLocale(locale: Locale, basePath: string): string {
  const clean = basePath === "/" ? "" : basePath;
  return locale === defaultLocale ? (clean === "" ? "/" : clean) : `/${locale}${clean}`;
}

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || "/";
  const base = stripLocale(pathname);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-ink hover:bg-surface-alt"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Globe className="size-4" aria-hidden />
        <span className="uppercase">{current}</span>
      </button>
      {open && (
        <ul className="absolute right-0 z-50 mt-1 min-w-36 overflow-hidden rounded-xl border bg-surface py-1 shadow-lg">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={toLocale(l, base)}
                hrefLang={l}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm hover:bg-surface-alt",
                  l === current ? "font-semibold text-ink" : "text-ink-muted",
                )}
              >
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
