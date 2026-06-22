import type { Stat } from "@/lib/content";

/**
 * Signature element. The trust stats rendered as a clean audit / financial-
 * statement readout: Plex Mono numerals, hairline column rules like a ledger,
 * the "audit-ready" cell resolving to a teal check — the emotional payoff.
 */
export function StatLedger({
  stats,
  caption,
}: {
  stats: Stat[];
  caption?: string;
}) {
  return (
    <section className="bg-bg">
      <div className="container-site">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-card)]">
          {/* teal hairline — the "verified / clean" accent across the top */}
          <div className="h-[3px] bg-accent-alt" aria-hidden />
          <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-2 px-6 py-9 text-center md:px-8 md:py-11"
              >
                <dt className="order-2 text-sm leading-snug text-muted">
                  {s.label}
                </dt>
                <dd
                  className={`order-1 whitespace-nowrap font-mono font-medium leading-none tracking-tight ${
                    s.check
                      ? "text-[26px] text-accent-alt-strong md:text-[28px]"
                      : "text-[32px] text-ink md:text-[40px]"
                  }`}
                >
                  {s.check && (
                    <span className="mr-1 inline-block" aria-hidden>
                      ✓
                    </span>
                  )}
                  {s.figure}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {caption && (
          <p className="mt-4 text-center font-mono text-xs tracking-tight text-faint">
            {caption}
          </p>
        )}
      </div>
    </section>
  );
}
