import type { ProblemCard } from "@/lib/content";

export function ProblemCards({ cards }: { cards: ProblemCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-[4px] border border-line bg-bg p-7"
        >
          <div className="mb-4 text-2xl" aria-hidden>
            {card.icon}
          </div>
          <h3 className="mb-3 text-lg font-semibold tracking-[-0.3px] text-fg">
            {card.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-muted">{card.body}</p>
        </div>
      ))}
    </div>
  );
}
