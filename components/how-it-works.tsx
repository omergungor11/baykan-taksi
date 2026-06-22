import { MessageCircle, BadgeCheck, Car } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries/tr";
import { Section, SectionHeading } from "@/components/section";

const stepIcons = [MessageCircle, BadgeCheck, Car];

/**
 * "Nasıl Çalışır?" — 3 adımlı dönüşüm odaklı akış.
 */
export function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <Section>
      <SectionHeading
        kicker={dict.common.available247}
        title={dict.howItWorks.title}
        subtitle={dict.howItWorks.subtitle}
        center
      />
      <div className="relative grid gap-8 md:grid-cols-3">
        {/* Bağlantı çizgisi (masaüstü) */}
        <div
          className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-brand/40 md:block"
          aria-hidden
        />
        {dict.howItWorks.steps.map((step, i) => {
          const StepIcon = stepIcons[i] ?? Car;
          return (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="relative flex size-16 items-center justify-center rounded-2xl bg-ink text-brand shadow-card">
                <StepIcon className="size-7" aria-hidden />
                <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-brand-foreground ring-4 ring-surface">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-ink-muted">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
