import { ButtonLink } from "./primitives";
import type { CTA } from "@/lib/content";

export function Hero({
  eyebrow,
  headline,
  subheading,
  body,
  ctas,
  note,
}: {
  eyebrow?: string;
  headline: string;
  subheading?: string;
  body?: string;
  ctas: CTA[];
  note?: string;
}) {
  return (
    <section className="bg-bg">
      <div className="container-site pt-24 pb-20 text-center md:pt-32 md:pb-28">
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
      </div>
    </section>
  );
}
