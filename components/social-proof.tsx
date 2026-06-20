import type { Testimonial } from "@/lib/content";

export function SocialProof({
  label,
  quotes,
  logos,
  // Legacy single-quote API still used by some vertical pages.
  quote,
  attribution,
}: {
  label?: string;
  quotes?: Testimonial[];
  logos?: string[];
  quote?: string;
  attribution?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl">
      {label && (
        <p className="eyebrow mb-12 text-center text-accent-alt-strong">
          {label}
        </p>
      )}

      {quotes && quotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.name + q.quote.slice(0, 12)}
              className="flex flex-col rounded-2xl border border-line bg-bg p-8 shadow-[var(--shadow-card)]"
            >
              <span
                className="font-serif text-5xl leading-none text-accent-alt"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 font-serif text-xl leading-snug tracking-[-0.2px] text-ink">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="text-sm font-semibold text-ink">{q.name}</p>
                <p className="font-mono text-xs tracking-tight text-faint">
                  {q.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : quote ? (
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-serif text-2xl leading-snug tracking-[-0.2px] text-ink md:text-3xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
          {attribution && (
            <figcaption className="mt-6 text-sm text-muted">
              {attribution}
            </figcaption>
          )}
        </figure>
      ) : null}

      {logos && logos.length > 0 && (
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-medium tracking-tight text-faint"
            >
              {logo}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
