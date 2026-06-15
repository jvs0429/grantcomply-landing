import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section } from "@/components/primitives";
import { CtaSection } from "@/components/cta-section";
import { buildMetadata, pageMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(pageMeta.about);

const problemPoints = [
  "No unified discovery across federal, state, and local opportunities",
  "Eligibility assessment happens by email, weeks into the application process",
  "Post-award management is scattered across procurement systems, email threads, and spreadsheets",
  "Compliance risk is a surprise, not a planned mitigation",
  "Recovery from missed deadlines requires a consultant at $50K–$200K per engagement",
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-serif text-3xl tracking-[-0.5px] text-fg md:text-4xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-relaxed text-muted">{children}</p>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="Built by someone who's managed the chaos at scale."
        subheading="GrantComply isn't a vendor's guess at how grants work. It's the platform a federal infrastructure operator built after living the problem firsthand."
        ctas={[
          { label: "See Government", href: "/government" },
          { label: "See Nonprofit", href: "/nonprofit" },
        ]}
      />

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <Heading>About GrantComply</Heading>
          <div className="flex flex-col gap-5">
            <P>
              Jonathan Stuart is a program and portfolio executive with 15+
              years of experience managing complex, federally funded
              infrastructure at scale.
            </P>
            <P>
              He&apos;s led governance for $100M+ federal portfolios across 25+
              municipalities, preserved $30M in ARPA funding by identifying
              compliance exposure, and managed enterprise healthcare delivery
              spanning 38,000+ daily financial transactions. He&apos;s certified
              in program and portfolio management (PMP, CSPO), and spent the last
              four years as a federal infrastructure consultant—directly
              advising cities, counties, and public agencies on compliance,
              execution, and risk.
            </P>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Heading>The Problem He Saw</Heading>
          <div className="flex flex-col gap-5">
            <P>
              Managing grants is hard. Not because grants are inherently complex,
              but because organizations solve the problem from scratch, every
              time:
            </P>
            <ul className="flex flex-col gap-3">
              {problemPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-[4px] border border-line bg-bg p-4 text-[15px] leading-relaxed text-muted"
                >
                  <span className="mt-0.5 text-accent" aria-hidden>
                    ◆
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <P>
              This problem doesn&apos;t change by organization type. A city, a
              nonprofit, a hospital—they all ask the same questions and follow
              the same cycle. Yet each solves it alone.
            </P>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl">
          <Heading>The Insight</Heading>
          <div className="flex flex-col gap-5">
            <P>
              Governments shouldn&apos;t need to hire a consultant to manage
              grants. Nonprofits shouldn&apos;t have to choose between a grants
              officer and program staff. Hospitals shouldn&apos;t spend millions
              on compliance overhead.
            </P>
            <P>
              The grant-lifecycle problem is solvable once, and the solution
              should work across any organization pursuing funding.
            </P>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Heading>Why GrantComply</Heading>
          <div className="flex flex-col gap-5">
            <P>
              GrantComply is built by someone who&apos;s actually managed the
              chaos at scale. Not a vendor making assumptions. Not a consultant
              building theory. Someone who sat in the room with county judges and
              city managers, audited the execution, and asked: Why doesn&apos;t
              this work better?
            </P>
            <P>
              The answer is simple: the platform doesn&apos;t exist. So we built
              it.
            </P>
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
