import { Hero } from "./hero";
import { Section, SectionHeading } from "./primitives";
import { ContactSalesForm } from "./contact-sales-form";
import { RoadmapSection } from "./roadmap-section";
import type { CTA } from "@/lib/content";

export function ComingVertical({
  eyebrow,
  orgType,
  hero,
  cohort,
  live,
}: {
  eyebrow: string;
  /** Pre-fills the Contact Sales form's Organization Type (read-only). */
  orgType: string;
  hero: { headline: string; subheading: string; body: string; ctas: CTA[] };
  cohort: string;
  live: string;
}) {
  return (
    <>
      <Hero
        eyebrow={eyebrow}
        headline={hero.headline}
        subheading={hero.subheading}
        ctas={hero.ctas}
      />

      <Section alt>
        <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4">
          <div className="rounded-[4px] border border-line bg-bg px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-faint">Live</p>
            <p className="mt-1 text-lg font-semibold text-fg">{live}</p>
          </div>
          <div className="rounded-[4px] border border-line bg-bg px-6 py-4 text-center">
            <p className="text-xs uppercase tracking-wider text-faint">
              Early Access
            </p>
            <p className="mt-1 text-lg font-semibold text-fg">{cohort}</p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-muted">
          {hero.body} Same discovery → apply → comply → manage engine, tailored
          to your organization.
        </p>
      </Section>

      <Section>
        <SectionHeading label="The Roadmap" title="One engine, every vertical" />
        <RoadmapSection />
      </Section>

      <Section alt>
        <ContactSalesForm
          orgType={orgType}
          heading="Request Early Access"
          sub={cohort}
        />
      </Section>
    </>
  );
}
