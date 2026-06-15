import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/primitives";
import { CtaSection } from "@/components/cta-section";
import { EarlyAccessForm } from "@/components/early-access-form";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { healthcare } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.healthcare);

export default function HealthcarePage() {
  return (
    <>
      <Hero
        eyebrow="Healthcare · Coming Q4 2026"
        headline={healthcare.hero.headline}
        subheading={healthcare.hero.subheading}
        body={healthcare.hero.body}
        ctas={healthcare.hero.ctas}
      />

      <Section alt>
        <SectionHeading title={healthcare.opportunity.heading} />
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-fg">{healthcare.opportunity.intro}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {healthcare.opportunity.streams.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-[4px] border border-line bg-bg p-4 text-[15px] text-muted"
              >
                <span className="mt-0.5 text-accent" aria-hidden>
                  ◆
                </span>
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[4px] border border-line bg-bg p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-faint">
                The Problem
              </p>
              <p className="text-[15px] leading-relaxed text-muted">
                {healthcare.opportunity.problem}
              </p>
            </div>
            <div className="rounded-[4px] border border-accent/40 bg-accent/5 p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                The GrantComply Approach
              </p>
              <p className="text-[15px] leading-relaxed text-muted">
                {healthcare.opportunity.approach}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading label="Timeline & Access" title="Early access cohort" />
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-[4px] border border-line bg-bg px-6 py-4 text-center">
              <p className="text-xs uppercase tracking-wider text-faint">
                Live
              </p>
              <p className="mt-1 text-lg font-semibold text-fg">
                {healthcare.access.live}
              </p>
            </div>
            <div className="rounded-[4px] border border-line bg-bg px-6 py-4 text-center">
              <p className="text-xs uppercase tracking-wider text-faint">
                Cohort
              </p>
              <p className="mt-1 text-lg font-semibold text-fg">
                {healthcare.access.cohort}
              </p>
            </div>
          </div>
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-accent">
            Early access means
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {healthcare.access.benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-[4px] border border-line bg-bg p-4 text-[15px] text-muted"
              >
                <span className="mt-0.5 text-accent-alt" aria-hidden>
                  ✓
                </span>
                {b}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <EarlyAccessForm
          vertical="healthcare"
          heading="Request Early Access"
          sub="Join the cohort of 10 health systems shaping GrantComply for healthcare."
        />
      </Section>

      <CtaSection headline={healthcare.cta.headline} ctas={healthcare.cta.ctas} />
    </>
  );
}
