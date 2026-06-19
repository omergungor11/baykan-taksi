import type { Dictionary } from "./dictionaries/tr";

/** Üst menü / footer ortak bağlantı listesi (locale'siz yollar) */
export function mainNav(dict: Dictionary) {
  return [
    { href: "/", label: dict.nav.home },
    { href: "/hizmetler", label: dict.nav.services },
    { href: "/bolgeler", label: dict.nav.areas },
    { href: "/blog", label: dict.nav.blog },
    { href: "/hakkimizda", label: dict.nav.about },
    { href: "/iletisim", label: dict.nav.contact },
  ] as const;
}
