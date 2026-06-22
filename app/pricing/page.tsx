import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section } from "@/components/primitives";
import { UnifiedPricing } from "@/components/unified-pricing";
import { CtaSection } from "@/components/cta-section";
import { ContactSalesForm } from "@/components/contact-sales-form";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { pricing, CTA_SIGNUP, CTA_CONTACT } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.pricing);

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Pricing"
        headline="Transparent pricing."
        subheading={pricing.sub}
        ctas={[CTA_SIGNUP]}
      />

      <UnifiedPricing
        anchor={pricing.anchor}
        segments={pricing.segments}
        coming={pricing.coming}
        comingNote={pricing.comingNote}
      />

      <CtaSection
        headline="Ready to see GrantComply for your organization?"
        ctas={[CTA_SIGNUP, CTA_CONTACT]}
      />

      <Section alt>
        <ContactSalesForm
          heading="Contact Sales"
          sub="Tell us about your organization and we'll be in touch to schedule a walkthrough."
        />
      </Section>
    </>
  );
}
