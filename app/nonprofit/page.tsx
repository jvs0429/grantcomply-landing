import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/primitives";
import { ProblemCards } from "@/components/problem-cards";
import { StepsSection } from "@/components/steps-section";
import { CapabilitiesChecklist } from "@/components/capabilities-checklist";
import { ScreenshotCarousel } from "@/components/screenshot-carousel";
import { PricingTable } from "@/components/pricing-table";
import { SocialProof } from "@/components/social-proof";
import { CtaSection } from "@/components/cta-section";
import { ContactSalesForm } from "@/components/contact-sales-form";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { nonprofit } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.nonprofit);

export default function NonprofitPage() {
  return (
    <>
      <Hero
        eyebrow="Nonprofit"
        headline={nonprofit.hero.headline}
        subheading={nonprofit.hero.subheading}
        body={nonprofit.hero.body}
        ctas={nonprofit.hero.ctas}
      />

      <Section alt>
        <SectionHeading title={nonprofit.problem.heading} />
        <ProblemCards cards={nonprofit.problem.cards} />
      </Section>

      <Section>
        <SectionHeading
          label="How It Works"
          title="Discover. Assess. Draft. Track."
        />
        <StepsSection steps={nonprofit.steps} />
      </Section>

      <Section alt>
        <SectionHeading
          label="Capabilities"
          title="A full grants team, built in"
        />
        <CapabilitiesChecklist items={nonprofit.capabilities} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-[4px] border border-accent-alt/40 bg-accent-alt/5 p-7">
          <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-accent-alt">
            <span aria-hidden>🟡</span> {nonprofit.roadmapCallout.badge}
          </p>
          <p className="text-[15px] leading-relaxed text-muted">
            {nonprofit.roadmapCallout.body}
          </p>
        </div>
      </Section>

      <Section alt>
        <SectionHeading label="Product" title="See it in the workspace" />
        <ScreenshotCarousel screenshots={nonprofit.screenshots} />
      </Section>

      <Section id="pricing">
        <SectionHeading label="Pricing" title="Free to start" />
        <div className="mx-auto max-w-2xl">
          <PricingTable tiers={nonprofit.pricing} />
        </div>
      </Section>

      <Section alt>
        <SocialProof quote={nonprofit.socialProof.quote} />
      </Section>

      <Section>
        <ContactSalesForm
          orgType="Nonprofit"
          heading="Talk to sales"
          sub="Tell us about your organization and we'll help you get started."
        />
      </Section>

      <CtaSection headline={nonprofit.cta.headline} ctas={nonprofit.cta.ctas} />
    </>
  );
}
