import { ButtonLink } from "./primitives";
import type { CTA } from "@/lib/content";

export function CtaSection({
  headline,
  sub,
  ctas,
}: {
  headline: string;
  sub?: string;
  ctas: CTA[];
}) {
  return (
    <section className="bg-bg">
      <div className="container-site py-20 md:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/15 bg-accent-soft px-8 py-16 text-center md:px-14 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-accent"
          />
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-tight tracking-[-0.4px] text-ink md:text-[40px]">
            {headline}
          </h2>
          {sub && (
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
              {sub}
            </p>
          )}
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
        </div>
      </div>
    </section>
  );
}
