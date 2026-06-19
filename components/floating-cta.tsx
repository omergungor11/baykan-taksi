"use client";

import { MessageCircle, Phone } from "lucide-react";
import { whatsappUrl, telUrl, siteConfig } from "@/lib/config";
import { trackWhatsappClick, trackCallClick } from "@/lib/analytics";

/**
 * Sağ-altta sabit yüzen "Taksi Çağır" (WhatsApp) + "Ara" butonları.
 * Tüm sayfalarda görünür; nabız animasyonlu, mobil öncelikli.
 */
export function FloatingCta({ message, callLabel }: { message?: string; callLabel?: string }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 print:hidden">
      {/* Ara (mobilde öne çıkar) */}
      <a
        href={telUrl()}
        onClick={() => trackCallClick("floating")}
        aria-label={callLabel ?? `Telefonla ara: +${siteConfig.phone}`}
        className="flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105 md:hidden"
      >
        <Phone className="size-6" aria-hidden />
      </a>

      {/* WhatsApp — Taksi Çağır */}
      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsappClick("floating")}
        aria-label="WhatsApp ile taksi çağır"
        className="group relative flex items-center gap-2 rounded-full bg-wa px-4 py-3 font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-wa opacity-40" aria-hidden />
        <MessageCircle className="relative size-6" aria-hidden />
        <span className="relative hidden sm:inline">Taksi Çağır</span>
      </a>
    </div>
  );
}
