import { ButtonLink } from "./primitives";
import type { CTA } from "@/lib/content";

export function Hero({
  eyebrow,
  headline,
  subheading,
  body,
  ctas,
  note,
  screenshotSrc,
}: {
  eyebrow?: string;
  headline: string;
  subheading?: string;
  body?: string;
  ctas: CTA[];
  note?: string;
  screenshotSrc?: string;
}) {
  return (
    <section className="bg-bg">
      <div className="container-site pt-24 pb-20 text-center md:pt-32 md:pb-28">
        {screenshotSrc ? (
          // Two-column layout
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-left md:grid-cols-2 md:gap-12">
            {/* Left: Text */}
            <div>
              {eyebrow && (
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {eyebrow}
                </p>
              )}
              <h1 className="font-serif text-4xl leading-[1.05] tracking-[-1px] text-fg sm:text-5xl md:text-[48px]">
                {headline}
              </h1>
              {subheading && (
                <p className="mt-7 text-base leading-relaxed text-muted md:text-lg">
                  {subheading}
                </p>
              )}
              {body && (
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-faint">
                  {body}
                </p>
              )}
              {ctas.length > 0 && (
                <div className="mt-9 flex flex-wrap gap-3">
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
              {note && <p className="mt-5 text-xs text-faint">{note}</p>}
            </div>

            {/* Right: Screenshot */}
            <div className="flex items-center">
              <div className="w-full rounded-lg border border-line bg-surface p-3">
                <img
                  src={screenshotSrc}
                  alt="GrantComply interface"
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </div>
        ) : (
          // Original centered layout (no screenshot)
          <div className="mx-auto max-w-3xl">
            {eyebrow && (
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-1px] text-fg sm:text-5xl md:text-6xl lg:text-[72px]">
              {headline}
            </h1>
            {subheading && (
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                {subheading}
              </p>
            )}
            {body && (
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-faint">
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
            {note && <p className="mt-5 text-sm text-faint">{note}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
