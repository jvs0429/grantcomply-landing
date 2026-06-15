import type { Step } from "@/lib/content";

export function StepsSection({ steps }: { steps: Step[] }) {
  return (
    <div className="mx-auto max-w-4xl">
      <ol className="flex flex-col">
        {steps.map((step, i) => (
          <li
            key={step.kicker}
            className="flex gap-6 border-t border-line py-8 first:border-t-0 md:gap-10"
          >
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-line-strong text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {step.kicker}
              </p>
              <h3 className="mb-2 text-xl font-semibold tracking-[-0.3px] text-fg">
                {step.title}
              </h3>
              <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
