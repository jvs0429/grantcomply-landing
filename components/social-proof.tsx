export function SocialProof({
  label,
  quote,
  attribution,
  logos,
}: {
  label?: string;
  quote: string;
  attribution: string;
  logos?: string[];
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
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

      <blockquote className="font-serif text-2xl leading-snug tracking-[-0.3px] text-fg md:text-3xl">
        “{quote}”
      </blockquote>
      <p className="mt-6 text-sm text-muted">{attribution}</p>
    </div>
  );
}
