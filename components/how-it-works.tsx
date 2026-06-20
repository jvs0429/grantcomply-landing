import type { Step } from "@/lib/content";

/**
 * Homepage how-it-works. A genuine sequence — Discover → Apply → Stay
 * audit-ready — so numbered markers carry real meaning. Mono numerals tie
 * back to the audit-ledger signature.
 */
export function HowItWorks({
  label,
  title,
  sub,
  steps,
}: {
  label: string;
  title: string;
  sub: string;
  steps: Step[];
}) {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 text-accent-alt-strong">{label}</p>
          <h2 className="font-serif text-3xl font-medium tracking-[-0.4px] text-ink md:text-[40px] md:leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{sub}</p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.kicker}
              className="relative flex flex-col rounded-2xl border border-line bg-bg p-7 shadow-[var(--shadow-card)]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-3xl font-medium leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="h-px flex-1 bg-line"
                  aria-hidden
                />
                <span className="eyebrow text-faint">{step.kicker}</span>
              </div>
              <h3 className="font-serif text-xl font-medium tracking-[-0.2px] text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
