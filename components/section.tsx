import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  alt,
}: {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section className={cn("py-12 md:py-20", alt && "bg-surface-alt", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  kicker,
  center,
}: {
  title: string;
  subtitle?: string;
  /** Başlık üstü küçük sarı etiket (eyebrow) */
  kicker?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-10 max-w-2xl", center && "mx-auto text-center")}>
      {kicker && (
        <span
          className={cn(
            "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-dark",
            center && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-brand" aria-hidden />
          {kicker}
        </span>
      )}
      <h2 className="mt-2 text-2xl font-extrabold text-ink md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-ink-muted md:text-lg">{subtitle}</p>}
    </div>
  );
}
