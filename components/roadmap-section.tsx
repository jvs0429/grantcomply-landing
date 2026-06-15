import { ButtonLink } from "./primitives";
import { landing } from "@/lib/content";

export function RoadmapSection() {
  const { columns, subtext, cta } = landing.roadmap;
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {columns.map((col) => (
          <div
            key={col.heading}
            className="rounded-[4px] border border-line bg-bg p-7"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-faint">
              {col.heading}
            </p>
            <ul className="flex flex-col gap-3">
              {col.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-fg">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] text-xs font-bold ${
                      col.done
                        ? "bg-accent-alt/15 text-accent-alt"
                        : "bg-surface text-muted"
                    }`}
                    aria-hidden
                  >
                    {col.done ? "✓" : "→"}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-base leading-relaxed text-muted">{subtext}</p>
        <div className="mt-7 flex justify-center">
          <ButtonLink href={cta.href} variant="primary">
            {cta.label}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
