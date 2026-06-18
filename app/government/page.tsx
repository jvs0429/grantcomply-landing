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
import { government } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.government);

export default function GovernmentPage() {
  return (
    <>
      <Hero
        eyebrow="Government"
        headline={government.hero.headline}
        subheading={government.hero.subheading}
        body={government.hero.body}
        ctas={government.hero.ctas}
      />

      <Section alt>
        <SectionHeading title={government.problem.heading} />
        <ProblemCards cards={government.problem.cards} />
      </Section>

      <Section>
        <SectionHeading label="How It Works" title="Discover. Apply. Manage." />
        <StepsSection steps={government.steps} />
      </Section>

      <Section alt>
        <SectionHeading
          label="Capabilities"
          title="Everything a city grant team needs"
        />
        <CapabilitiesChecklist items={government.capabilities} />
      </Section>

      <Section>
        <SectionHeading
          label="Product"
          title="See it in the workspace"
        />
        <ScreenshotCarousel screenshots={government.screenshots} />
      </Section>

      <Section alt id="pricing">
        <SectionHeading
          label="Pricing"
          title="Pricing for government teams"
        />
        <PricingTable tiers={government.pricing} />
      </Section>

      <Section>
        <SocialProof quote={government.socialProof.quote} />
      </Section>

      <Section alt>
        <ContactSalesForm
          orgType="Government"
          heading="Talk to sales"
          sub="Tell us about your jurisdiction and we'll get you set up."
        />
      </Section>

      <CtaSection
        headline={government.cta.headline}
        ctas={government.cta.ctas}
      />
    </>
  );
}
