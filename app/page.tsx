import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { StatLedger } from "@/components/stat-ledger";
import { ProblemGrid } from "@/components/problem-grid";
import { HowItWorks } from "@/components/how-it-works";
import { Section } from "@/components/primitives";
import { SocialProof } from "@/components/social-proof";
import { Founder } from "@/components/founder";
import { CtaSection } from "@/components/cta-section";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { landing } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.home);

export default function HomePage() {
  const {
    hero,
    stats,
    statsCaption,
    problem,
    steps,
    socialProof,
    founder,
    finalCta,
  } = landing;

  return (
    <>
      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheading={hero.subheading}
        ctas={hero.ctas}
        note={hero.note}
        screenshotSrc="/screenshots/government-discovery.png"
      />

      <StatLedger stats={stats} caption={statsCaption} />

      <ProblemGrid
        label={problem.label}
        title={problem.title}
        intro={problem.intro}
        cards={problem.cards}
      />

      <HowItWorks
        label={steps.label}
        title={steps.title}
        sub={steps.sub}
        steps={steps.items}
      />

      <Section>
        <SocialProof
          label={socialProof.label}
          quotes={socialProof.quotes}
          logos={socialProof.logos}
        />
      </Section>

      <Founder
        label={founder.label}
        name={founder.name}
        role={founder.role}
        photo={founder.photo}
        quote={founder.quote}
        ctas={founder.ctas}
      />

      <CtaSection
        headline={finalCta.title}
        sub={finalCta.sub}
        ctas={finalCta.ctas}
      />
    </>
  );
}
