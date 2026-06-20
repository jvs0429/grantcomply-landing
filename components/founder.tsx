import { ButtonLink } from "./primitives";
import type { CTA } from "@/lib/content";

export function Founder({
  label,
  name,
  role,
  photo,
  quote,
  ctas,
}: {
  label: string;
  name: string;
  role: string;
  photo: string;
  quote: string;
  ctas: CTA[];
}) {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          {/* Portrait */}
          <div className="mx-auto w-48 md:mx-0 md:w-full">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-card)]">
              <img
                src={photo}
                alt={`${name}, ${role}`}
                className="block aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Story */}
          <div>
            <p className="eyebrow mb-5 text-accent-alt-strong">{label}</p>
            <blockquote className="font-serif text-2xl font-medium leading-snug tracking-[-0.3px] text-ink md:text-[28px]">
              {quote}
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-ink">{name}</p>
            <p className="font-mono text-xs tracking-tight text-faint">{role}</p>
            {ctas.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {ctas.map((cta, i) => (
                  <ButtonLink
                    key={cta.label}
                    href={cta.href}
                    variant={i === 0 ? "secondary" : "ghost"}
                  >
                    {cta.label}
                  </ButtonLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
