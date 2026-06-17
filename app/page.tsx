import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ProblemGrid } from "@/components/problem-grid";
import { Section, SectionHeading } from "@/components/primitives";
import { VerticalsGrid } from "@/components/verticals-grid";
import { ThesisSection } from "@/components/thesis-section";
import { SocialProof } from "@/components/social-proof";
import { RoadmapSection } from "@/components/roadmap-section";
import { PricingTable } from "@/components/pricing-table";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { landing, pricing, VERTICALS } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.home);

export default function HomePage() {
  return (
    <>
      <Hero
        headline={landing.hero.headline}
        subheading={landing.hero.subheading}
        ctas={landing.hero.ctas}
        note={landing.hero.note}
        screenshotSrc="/screenshots/government-discovery.png"
      />

      <ProblemGrid cards={landing.problemGrid.cards} />

      <Section alt>
        <SectionHeading
          label="Seven verticals, one engine"
          title="Built for every kind of organization"
        />
        <VerticalsGrid verticals={VERTICALS} />
      </Section>

      <Section>
        <SectionHeading
          label="The Thesis"
          title="Different orgs. Identical cycle."
        />
        <ThesisSection columns={landing.thesis} />
      </Section>

      <Section alt>
        <SocialProof
          label={landing.socialProof.label}
          quotes={landing.socialProof.quotes}
          logos={landing.socialProof.logos}
        />
      </Section>

      <Section id="roadmap">
        <SectionHeading label={landing.roadmap.label} title="Where we're headed" />
        <RoadmapSection />
      </Section>

      <Section alt id="pricing">
        <SectionHeading label="Transparent Pricing" title={pricing.heading} sub={pricing.sub} />
        <div className="flex flex-col gap-14">
          {pricing.sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="mb-6 text-center text-xl font-semibold tracking-[-0.3px] text-fg">
                {sec.title}
              </h3>
              <PricingTable tiers={sec.tiers} />
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted">
          {pricing.comingNote}
        </p>
      </Section>
    </>
  );
}
