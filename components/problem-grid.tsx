import { Icon, type IconName } from "./icons";
import type { ProblemGridCard } from "@/lib/content";

export function ProblemGrid({
  label,
  title,
  intro,
  cards,
}: {
  label: string;
  title: string;
  intro: string;
  cards: ProblemGridCard[];
}) {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 text-accent-alt-strong">{label}</p>
          <h2 className="font-serif text-3xl font-medium tracking-[-0.4px] text-ink md:text-[40px] md:leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.kicker}
              className="flex flex-col bg-bg p-7 transition-colors duration-200 hover:bg-surface"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-muted">
                <Icon name={card.icon as IconName} />
              </span>
              <p className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-faint">
                {card.kicker}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
