import { ButtonLink } from "./primitives";
import { FundingCounter } from "./funding-counter";
import type { CTA } from "@/lib/content";

export function Hero({
  eyebrow,
  counter,
  headline,
  subheading,
  body,
  ctas,
  note,
  screenshotSrc,
}: {
  eyebrow?: string;
  counter?: { target?: number; suffix?: string; label: string };
  headline: string;
  subheading?: string;
  body?: string;
  ctas: CTA[];
  note?: string;
  screenshotSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Quiet ambient wash — keeps the white from feeling clinical */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-gradient-to-b from-accent-soft to-transparent"
      />
      <div className="container-site relative pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="eyebrow mb-7 text-accent">{eyebrow}</p>}

          {counter && (
            <div className="mb-7">
              <p className="font-mono font-medium leading-[0.95] tracking-[-0.03em] text-ink text-[clamp(1.9rem,8vw,5.5rem)]">
                <FundingCounter
                  target={counter.target}
                  suffix={counter.suffix}
                />
              </p>
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
                {counter.label}
              </p>
            </div>
          )}

          <h1 className="mx-auto max-w-2xl text-balance font-serif text-[26px] font-medium leading-[1.1] tracking-[-0.4px] text-ink sm:text-3xl md:text-[34px]">
            {headline}
          </h1>
          {subheading && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {subheading}
            </p>
          )}
          {body && (
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-faint">
              {body}
            </p>
          )}

          {ctas.length > 0 && (
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {ctas.map((cta, i) => (
                <ButtonLink
                  key={cta.label}
                  href={cta.href}
                  variant={i === 0 ? "primary" : "secondary"}
                >
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          )}
          {note && (
            <p className="mt-5 font-mono text-xs tracking-tight text-faint">
              {note}
            </p>
          )}
        </div>

        {screenshotSrc && (
          <div className="mx-auto mt-14 max-w-5xl md:mt-16">
            <figure className="overflow-hidden rounded-xl border border-line bg-bg shadow-[var(--shadow-lift)]">
              {/* Faux app chrome — signals this is the real product */}
              <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                </span>
                <span className="mx-auto rounded-[5px] bg-bg px-3 py-1 font-mono text-[11px] text-faint">
                  app.grantcomply.app
                </span>
              </div>
              <img
                src={screenshotSrc}
                alt="The GrantComply workspace — discovery, applications, and compliance in one place"
                className="block w-full"
              />
            </figure>
          </div>
        )}
      </div>
    </section>
  );
}
