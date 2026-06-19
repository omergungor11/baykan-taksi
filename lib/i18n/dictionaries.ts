import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/tr";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  tr: () => import("./dictionaries/tr").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  ru: () => import("./dictionaries/ru").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}

export type { Dictionary };
