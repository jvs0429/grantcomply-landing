"use client";

import Link from "next/link";
import { useState } from "react";
import type { PricingTier, PricingSegment } from "@/lib/content";

/* CTA styled by role: featured = solid blue, Contact Sales = teal outline
   (opens the on-page contact form with the plan prefilled), others = blue outline.
   Mirrors ButtonLink's internal/external handling so query+hash hrefs work. */
function PricingCTA({ tier }: { tier: PricingTier }) {
  const kind = tier.featured
    ? "primary"
    : tier.cta.href.includes("#contact-sales")
      ? "teal"
      : "blue";

  const styles: Record<string, string> = {
    primary:
      "bg-accent text-white border border-transparent shadow-[var(--shadow-card)] hover:bg-accent-hover",
    blue: "bg-bg text-accent border border-accent hover:bg-accent-soft",
    teal: "bg-bg text-accent-alt-strong border border-accent-alt hover:bg-accent-alt-soft",
  };
  const cls = `btn-base w-full ${styles[kind]}`;

  if (tier.cta.href.startsWith("http")) {
    return (
      <a
        href={tier.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {tier.cta.label}
      </a>
    );
  }
  return (
    <Link href={tier.cta.href} className={cls}>
      {tier.cta.label}
    </Link>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative flex flex-col rounded-xl bg-bg p-7 ${
        tier.featured
          ? "border-2 border-accent shadow-[var(--shadow-card)]"
          : "border border-line"
      }`}
    >
      {tier.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {tier.plan}
      </p>
      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold tracking-[-1px] text-ink">
          {tier.price}
        </span>
        {tier.cadence && (
          <span className="text-sm text-faint">{tier.cadence}</span>
        )}
      </div>
      <p className="mt-4 border-b border-line pb-5 text-sm leading-relaxed text-muted">
        {tier.description}
      </p>
      <div className="flex-1" />
      <div className="mt-6">
        <PricingCTA tier={tier} />
      </div>
    </div>
  );
}

export function UnifiedPricing({
  anchor,
  segments,
  coming,
  comingNote,
}: {
  anchor: { heading: string; sub: string };
  segments: PricingSegment[];
  coming: string[];
  comingNote: string;
}) {
  const [active, setActive] = useState(segments[0].key);
  const segment = segments.find((s) => s.key === active) ?? segments[0];
  const tiers = segment.tiers;

  // Government (4 tiers) fills the row; Nonprofit (2 tiers) stays centered.
  const gridCls =
    tiers.length >= 4
      ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      : "mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2";

  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-site">
        {/* Consulting-cost anchor */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium tracking-[-0.4px] text-ink md:text-[40px] md:leading-[1.1]">
            {anchor.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{anchor.sub}</p>
        </div>

        {/* Segment toggle */}
        <div className="mb-12 flex justify-center">
          <div
            role="group"
            aria-label="Choose a pricing segment"
            className="inline-flex gap-1 rounded-full bg-[#f3f4f6] p-1"
          >
            {segments.map((s) => {
              const selected = s.key === active;
              return (
                <button
                  key={s.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActive(s.key)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                    selected
                      ? "bg-bg text-ink shadow-[var(--shadow-card)]"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className={gridCls}>
          {tiers.map((tier) => (
            <PricingCard key={tier.plan} tier={tier} />
          ))}
        </div>

        {/* Cross-segment discoverability note */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-faint">
          {segment.crossNote}
        </p>

        {/* Coming verticals footnote */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-line pt-12">
          <p className="mb-6 text-center text-sm font-medium text-muted">
            {comingNote}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {coming.map((v) => (
              <div
                key={v}
                className="rounded-xl border border-line bg-bg p-5 text-center"
              >
                <p className="text-sm font-medium text-fg">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
