import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/primitives";
import { ThesisSection } from "@/components/thesis-section";
import { CtaSection } from "@/components/cta-section";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { landing } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.about);

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="One engine for the entire grant lifecycle."
        subheading="GrantComply started with a simple observation: the grant cycle is identical across every kind of organization, yet everyone builds their own way of managing it. We built the engine once, so it can scale everywhere."
        ctas={[
          { label: "See Government", href: "/government" },
          { label: "See Nonprofit", href: "/nonprofit" },
        ]}
      />

      <Section alt>
        <SectionHeading
          label="The Thesis"
          title="Why we exist"
        />
        <ThesisSection columns={landing.thesis} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading label="The Company" title="Built by ZJN Consulting" />
          <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-muted">
            <p>
              GrantComply is operated by ZJN Consulting LLC. We build software
              for organizations that depend on grant funding — starting with
              local government and nonprofits, and expanding to healthcare,
              education, public safety, and small business.
            </p>
            <p>
              Our platform unifies the full grant lifecycle: discovery,
              eligibility assessment, application drafting, compliance tracking,
              and closeout. One workspace, tailored to each kind of
              organization, powered by the same underlying engine.
            </p>
            <p>
              We&apos;re based in Texas and proud to serve mission-driven
              organizations across the country. Questions? Reach us at{" "}
              <a
                href="mailto:hello@grantcomply.app"
                className="text-accent transition-colors duration-200 hover:text-accent-hover"
              >
                hello@grantcomply.app
              </a>
              .
            </p>
          </div>
        </div>
      </Section>

      <CtaSection
        headline="See the platform built for your kind of organization."
        ctas={[
          { label: "Explore Verticals", href: "/#roadmap" },
          { label: "Join Early Access", href: "/#early-access" },
        ]}
      />
    </>
  );
}
