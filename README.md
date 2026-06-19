# Kıbrıs Lefkoşa Taksi

`kibrislefkosataksi.com` — SEO/GEO odaklı, 3 dilli (TR/EN/RU) taksi & transfer web sitesi.
Birincil hedef: Google'da "Lefkoşa taksi / Kıbrıs taksi / Ercan havalimanı taksi" vb.
aramalarında üst sıralar + Google Ads ile desteklenen WhatsApp/telefon dönüşümü.

## Stack

- **Next.js 16** (App Router, SSG) · React 19 · TypeScript (strict)
- **Tailwind CSS v4** · lucide-react ikonlar
- **i18n:** native `app/[locale]` + sözlük deseni — TR kök URL'de (prefix'siz), EN/RU prefix'li
- **İçerik:** MDX (`content/{locale}/blog`) + `gray-matter` + `next-mdx-remote`
- **Deploy:** Vercel

## Komutlar

```bash
pnpm dev          # geliştirme sunucusu
pnpm build        # production build (79 statik sayfa)
pnpm start        # production sunucusu
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
```

## Mimari

```
app/
  [locale]/              # tr | en | ru  (proxy.ts TR'yi köke gizli-rewrite eder)
    layout.tsx           # header, footer, yüzen CTA, analytics, TaxiService JSON-LD
    page.tsx             # ana sayfa
    [area]/              # ANAHTAR KELİME sayfaları → /lefkosa-taksi, /ercan-havalimani-taksi ...
    hizmetler/[service]/ # taksi, havalimani-transfer, otel-transfer, ada-turu, gezi-turu, arac-kiralama
    bolgeler/            # bölge index
    blog/[slug]/         # MDX makaleler
    hakkimizda · iletisim · sss
  sitemap.ts · robots.ts · manifest.ts · opengraph-image.tsx · icon.svg
proxy.ts                 # gizli-default locale rewrite + /tr canonical redirect
lib/
  config.ts              # marka, telefon/WhatsApp, koordinat, analytics ID'leri (env)
  seo.ts                 # buildMetadata: canonical + hreflang + OG
  analytics.ts           # GA4 + Google Ads dönüşüm event'leri
  i18n/                  # locales, dictionaries (tr/en/ru), localizedPath
  content/               # services.ts, areas.ts, faq.ts (3 dilli veri)
components/              # header, footer, floating-cta, cta-buttons, json-ld, faq ...
```

### Yeni anahtar kelime sayfası eklemek
`lib/content/areas.ts` listesine bir nesne ekleyin (slug + TR/EN/RU içerik). Sayfa,
sitemap ve iç linkler otomatik oluşur.

### Yeni blog yazısı
`content/tr/blog/<slug>.mdx` (frontmatter: `title, description, date`). EN/RU çevirisi için
`content/en/blog/<slug>.mdx` ekleyin; yoksa otomatik TR'ye düşülür.

## Yapılandırma (.env.local)

`.env.example` dosyasını kopyalayın. **Müşteriden gelince doldurulacak:**
gerçek telefon/WhatsApp numarası, GA4 ID, Google Ads conversion ID + label'lar,
Search Console doğrulama kodu. Tanımsızken site güvenli placeholder'larla çalışır.

## SEO/GEO özeti

- Tüm sayfalar SSG · canonical + hreflang (tr-CY/en/ru/x-default)
- JSON-LD: TaxiService, BreadcrumbList, Service, FAQPage, BlogPosting
- `sitemap.xml` tüm dilleri + alternates ile · `robots.txt`
- Dinamik OG görseli · PWA manifest · yüzen "Taksi Çağır" (WhatsApp) + Ara butonları
- Dönüşüm tıklamaları GA4 event + Google Ads conversion olarak izlenir
