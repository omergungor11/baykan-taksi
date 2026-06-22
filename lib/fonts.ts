import { Plus_Jakarta_Sans, Inter } from "next/font/google";

/**
 * Tipografi — self-host (next/font ile build sırasında indirilir, runtime fetch yok).
 *  - Plus Jakarta Sans → başlıklar (display): geometrik, güçlü, modern.
 *  - Inter → gövde metni: nötr, yüksek okunabilirlik.
 * latin + latin-ext alt kümeleri Türkçe glifleri (ş, ğ, ı, İ, ç, ö, ü) kapsar.
 */
export const display = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--ff-display",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--ff-body",
  display: "swap",
});
