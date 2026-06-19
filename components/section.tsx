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
    <section className={cn("py-12 md:py-16", alt && "bg-surface-alt", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  center,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-8 max-w-2xl", center && "mx-auto text-center")}>
      <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-ink-muted">{subtitle}</p>}
    </div>
  );
}
