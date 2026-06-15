import type { ReactNode } from "react";

export function LegalLayout({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <article className="bg-bg">
      <div className="container-site py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          Legal
        </p>
        <h1 className="font-serif text-4xl tracking-[-0.5px] text-fg md:text-5xl">
          {title}
        </h1>
        {meta && <p className="mt-3 text-sm text-faint">{meta}</p>}
        <div className="legal-prose mt-12 flex flex-col gap-6">{children}</div>
        </div>
      </div>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold tracking-[-0.3px] text-fg">
        {heading}
      </h2>
      {children}
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[15px] leading-relaxed text-muted">{children}</p>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
        >
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}
