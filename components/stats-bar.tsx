import type { Dictionary } from "@/lib/i18n/dictionaries/tr";

/**
 * Hero altında güven veren istatistik şeridi (taksi sarısı).
 */
export function StatsBar({ dict }: { dict: Dictionary }) {
  const items = [dict.stats.rides, dict.stats.response, dict.stats.rating, dict.stats.support];
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="container-x grid grid-cols-2 divide-x divide-y divide-brand-foreground/10 sm:grid-cols-4 sm:divide-y-0">
        {items.map((it, i) => (
          <div key={i} className="flex flex-col items-center px-4 py-6 text-center">
            <span className="text-2xl font-extrabold md:text-3xl">{it.value}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-foreground/70 md:text-sm">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
