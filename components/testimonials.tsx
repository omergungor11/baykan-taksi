import { Star, Quote } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/tr";
import { Section, SectionHeading } from "@/components/section";

/**
 * Yolcu yorumları — güven / sosyal kanıt bölümü.
 * (Gerçek Google yorumları gelince items güncellenir; ileride Review JSON-LD eklenebilir.)
 */
export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <Section alt>
      <SectionHeading
        kicker="4.9 / 5"
        title={dict.testimonials.title}
        subtitle={dict.testimonials.subtitle}
        center
      />
      <div className="grid gap-6 md:grid-cols-3">
        {dict.testimonials.items.map((item, i) => (
          <figure
            key={i}
            className="relative flex flex-col rounded-2xl border bg-surface p-6 shadow-card"
          >
            <Quote className="absolute right-5 top-5 size-8 text-brand/30" aria-hidden />
            <div className="mb-3 flex gap-0.5 text-brand" aria-label="5/5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-4 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
              “{item.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t pt-4">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand/15 font-extrabold text-ink">
                {item.name.charAt(0)}
              </span>
              <span>
                <span className="block font-bold text-ink">{item.name}</span>
                <span className="block text-xs text-ink-muted">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
