import { ChevronDown } from "lucide-react";

/**
 * SSS listesi — native <details> kullanır (JS gerektirmez, SEO/erişilebilirlik dostu).
 * Yapısal veri (FAQPage JSON-LD) ayrıca sayfada enjekte edilir.
 */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (items.length === 0) return null;
  return (
    <div className="divide-y rounded-2xl border bg-surface">
      {items.map((item, i) => (
        <details key={i} className="group p-4 md:p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
            {item.q}
            <ChevronDown className="size-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="mt-3 text-ink-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
