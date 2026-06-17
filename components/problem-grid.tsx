import { Section, SectionHeading } from "./primitives";
import type { ProblemGridCard } from "@/lib/content";

export function ProblemGrid({ cards }: { cards: ProblemGridCard[] }) {
  return (
    <Section>
      <SectionHeading
        label="The Reality"
        title="Why it's hard to manage grants well"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.kicker}
            style={{
              background: "#1a1a1a",
              border: "1px solid #2a2d36",
              borderRadius: "4px",
              padding: "16px",
            }}
          >
            <p style={{ fontSize: "20px", margin: "0 0 8px" }}>{card.icon}</p>
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#6b7280",
                margin: "0 0 8px",
              }}
            >
              {card.kicker}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#999999",
                margin: "0",
                lineHeight: "1.5",
              }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
