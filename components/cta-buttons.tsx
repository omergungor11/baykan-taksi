"use client";

import { MessageCircle, Phone } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappUrl, telUrl } from "@/lib/config";
import { trackWhatsappClick, trackCallClick } from "@/lib/analytics";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        whatsapp:
          "bg-wa text-white hover:bg-wa-dark focus-visible:ring-wa",
        call: "bg-brand text-brand-foreground hover:bg-brand-dark focus-visible:ring-brand",
        outline:
          "border-2 border-ink text-ink hover:bg-ink hover:text-white focus-visible:ring-ink",
        outlineLight:
          "border-2 border-white/70 text-white hover:bg-white hover:text-ink focus-visible:ring-white",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-lg",
        md: "h-12 px-6 text-base rounded-xl",
        lg: "h-14 px-8 text-lg rounded-xl",
      },
    },
    defaultVariants: { variant: "whatsapp", size: "md" },
  },
);

type Props = VariantProps<typeof button> & {
  className?: string;
  /** analitik kaynağı (hangi bölümden tıklandı) */
  source: string;
  /** WhatsApp önceden doldurulmuş mesaj */
  message?: string;
  label?: string;
};

export function WhatsappButton({ className, source, message, label, variant = "whatsapp", size }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick(source)}
      className={cn(button({ variant, size }), className)}
      aria-label={label ?? "WhatsApp ile taksi çağır"}
    >
      <MessageCircle className="size-5" aria-hidden />
      {label ?? "Taksi Çağır"}
    </a>
  );
}

export function CallButton({ className, source, label, variant = "call", size }: Props) {
  return (
    <a
      href={telUrl()}
      onClick={() => trackCallClick(source)}
      className={cn(button({ variant, size }), className)}
      aria-label={label ?? `Telefonla ara: ${siteConfig.phoneDisplay}`}
    >
      <Phone className="size-5" aria-hidden />
      {label ?? "Hemen Ara"}
    </a>
  );
}

/** İkili CTA grubu (WhatsApp + Ara) — bölüm sonlarında kullanılır */
export function CtaPair({
  source,
  message,
  size = "md",
  className,
  waLabel,
  callLabel,
  onDark,
}: {
  source: string;
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  waLabel?: string;
  callLabel?: string;
  /** Koyu arka plan üzerinde açık renkli "Ara" outline butonu kullan */
  onDark?: boolean;
}) {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <WhatsappButton source={source} message={message} size={size} label={waLabel} />
      <CallButton
        source={source}
        size={size}
        variant={onDark ? "outlineLight" : "outline"}
        label={callLabel}
      />
    </div>
  );
}
