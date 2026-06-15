import { ButtonLink } from "./primitives";
import type { PricingTier } from "@/lib/content";

export function PricingTable({ tiers }: { tiers: PricingTier[] }) {
  const cols =
    tiers.length >= 4
      ? "lg:grid-cols-4"
      : tiers.length === 3
        ? "lg:grid-cols-3"
        : tiers.length === 2
          ? "sm:grid-cols-2"
          : "sm:grid-cols-1";

  return (
    <div className={`grid grid-cols-1 gap-5 ${cols}`}>
      {tiers.map((tier) => (
        <div
          key={tier.plan}
          className={`flex flex-col rounded-[4px] border p-7 ${
            tier.featured
              ? "border-accent bg-surface"
              : "border-line bg-bg"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {tier.plan}
          </p>
          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="text-3xl font-semibold tracking-[-1px] text-fg">
              {tier.price}
            </span>
            {tier.cadence && (
              <span className="text-sm text-faint">{tier.cadence}</span>
            )}
          </div>
          <p className="mt-4 border-b border-line pb-5 text-sm leading-relaxed text-muted">
            {tier.description}
          </p>
          {tier.features && tier.features.length > 0 && (
            <ul className="mt-5 flex flex-1 flex-col gap-2.5">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-muted"
                >
                  <span className="mt-0.5 text-accent-alt" aria-hidden>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex-1" />
          <ButtonLink
            href={tier.cta.href}
            variant={tier.featured ? "primary" : "secondary"}
            className="w-full"
          >
            {tier.cta.label}
          </ButtonLink>
        </div>
      ))}
    </div>
  );
}
