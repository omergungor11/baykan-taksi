import { NextResponse, type NextRequest } from "next/server";

// Next.js 16: eski "middleware" konvansiyonu "proxy" olarak yeniden adlandırıldı.
//
// Gizli varsayılan locale stratejisi:
//  - /en, /ru ile başlayan istekler olduğu gibi geçer.
//  - /tr ve /tr/* → temiz (prefix'siz) URL'e 308 redirect (yinelenen içerik önlenir).
//  - Prefix'siz istekler (Türkçe) dahili olarak /tr'ye REWRITE edilir; URL temiz kalır.
//    Redirect değil rewrite: Googlebot kök URL'de doğrudan TR içeriği görür; hreflang
//    /en ve /ru'yu işaret eder. (Accept-Language ile otomatik yönlendirme yok.)

const PREFIXED_LOCALES = ["en", "ru"] as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasPrefixedLocale = PREFIXED_LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasPrefixedLocale) {
    return NextResponse.next();
  }

  // /tr ve /tr/* → canonical temiz URL'e kalıcı redirect
  if (pathname === "/tr" || pathname.startsWith("/tr/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/tr/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  // Prefix yok → Türkçe. Dahili olarak /tr altına rewrite et.
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/tr" : `/tr${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // _next, metadata route'ları (sitemap/robots/manifest/opengraph-image) ve
    // uzantılı statik dosyaları atla
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|opengraph-image|twitter-image|icon|apple-icon|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
