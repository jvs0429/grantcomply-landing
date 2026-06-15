import type { Step } from "@/lib/content";

export function ThesisSection({ columns }: { columns: Step[] }) {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-3">
      {columns.map((col) => (
        <div key={col.kicker} className="bg-bg p-8 md:p-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            {col.kicker}
          </p>
          <h3 className="mb-4 text-xl font-semibold tracking-[-0.3px] text-fg">
            {col.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-muted">{col.body}</p>
        </div>
      ))}
    </div>
  );
}
