import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/primitives";
import { PricingTable } from "@/components/pricing-table";
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

      {pricing.sections.map((sec, i) => (
        <Section key={sec.title} alt={i % 2 === 0}>
          <SectionHeading title={sec.title} />
          <PricingTable tiers={sec.tiers} />
        </Section>
      ))}

      <Section alt={pricing.sections.length % 2 === 0}>
        <SectionHeading
          title="Coming verticals"
          sub={pricing.comingNote}
        />
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {["Healthcare", "Public Safety", "Education", "Small Business"].map(
            (v) => (
              <div
                key={v}
                className="rounded-[4px] border border-line bg-bg p-5 text-center"
              >
                <p className="text-sm font-medium text-fg">{v}</p>
                <p className="mt-1 text-xs text-faint">Enterprise + custom</p>
              </div>
            ),
          )}
        </div>
      </Section>

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
