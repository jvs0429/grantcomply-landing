import Link from "next/link";
import { Icon, type IconName } from "./icons";
import type { Persona } from "@/lib/content";

type Coming = {
  label: string;
  title: string;
  body: string;
  verticals: string[];
  cta: { label: string; href: string };
};

export function BuiltFor({
  label,
  title,
  sub,
  live,
  coming,
}: {
  label: string;
  title: string;
  sub: string;
  live: Persona[];
  coming: Coming;
}) {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 text-accent-alt-strong">{label}</p>
          <h2 className="font-serif text-3xl font-medium tracking-[-0.4px] text-ink md:text-[40px] md:leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{sub}</p>
        </div>

        {/* Live verticals — the transformation, Today → With GrantComply */}
        <div className="grid gap-6 md:grid-cols-2">
          {live.map((p) => (
            <article
              key={p.audience}
              className="flex flex-col rounded-2xl border border-line bg-bg p-8 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={p.icon as IconName} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.2px] text-ink">
                    {p.audience}
                  </h3>
                  <p className="font-mono text-xs text-faint">{p.who}</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent-alt-soft px-2.5 py-1 text-xs font-medium text-accent-alt-strong">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent-alt"
                    aria-hidden
                  />
                  Live
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="eyebrow mb-1.5 text-faint">Today</p>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {p.pain}
                  </p>
                </div>
                <div className="rounded-xl border border-accent-alt/20 bg-accent-alt-soft p-4">
                  <p className="eyebrow mb-1.5 text-accent-alt-strong">
                    With GrantComply
                  </p>
                  <p className="text-[15px] leading-relaxed text-fg">
                    {p.relief}
                  </p>
                </div>
              </div>

              <Link
                href={p.cta.href}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                {p.cta.label}
                <span
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Coming next — muted, honest about what's live vs. ahead */}
        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-dashed border-line-strong bg-surface p-8 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-xl">
            <p className="eyebrow mb-3 text-faint">{coming.label}</p>
            <h3 className="font-serif text-2xl font-medium tracking-[-0.2px] text-ink">
              {coming.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {coming.body}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {coming.verticals.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-muted"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={coming.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base shrink-0 self-start border border-line-strong bg-bg text-ink hover:border-accent hover:text-accent md:self-center"
          >
            {coming.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
