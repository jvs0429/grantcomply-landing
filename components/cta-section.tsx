import { ButtonLink } from "./primitives";
import type { CTA } from "@/lib/content";

export function CtaSection({
  headline,
  ctas,
}: {
  headline: string;
  ctas: CTA[];
}) {
  return (
    <section className="bg-bg">
      <div className="container-site py-20 md:py-28">
        <div className="mx-auto max-w-3xl rounded-[4px] border border-line bg-surface px-8 py-14 text-center md:px-14">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight tracking-[-0.5px] text-fg md:text-4xl">
            {headline}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
