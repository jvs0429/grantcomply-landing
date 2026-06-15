export function SocialProof({
  label,
  quote,
  quotes,
  attribution,
  logos,
}: {
  label?: string;
  quote?: string;
  quotes?: string[];
  attribution?: string;
  logos?: string[];
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {label && (
        <p className="mb-10 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
          {label}
        </p>
      )}

      {logos && logos.length > 0 && (
        <div className="mb-14 grid grid-cols-2 gap-x-8 gap-y-6 opacity-40 sm:grid-cols-3">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center text-sm font-medium tracking-tight text-muted grayscale"
            >
              {logo}
            </div>
          ))}
        </div>
      )}

      {quotes && quotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-2">
          {quotes.map((q) => (
            <blockquote
              key={q}
              className="rounded-[4px] border border-line bg-bg p-7 font-serif text-xl leading-snug tracking-[-0.3px] text-fg"
            >
              “{q}”
            </blockquote>
          ))}
        </div>
      ) : quote ? (
        <>
          <blockquote className="mx-auto max-w-3xl font-serif text-2xl leading-snug tracking-[-0.3px] text-fg md:text-3xl">
            “{quote}”
          </blockquote>
          {attribution && (
            <p className="mt-6 text-sm text-muted">{attribution}</p>
          )}
        </>
      ) : null}
    </div>
  );
}
