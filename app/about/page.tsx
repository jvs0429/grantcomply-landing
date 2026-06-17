import type { Metadata } from "next";
import { Section, ButtonLink } from "@/components/primitives";
import { buildMetadata, pageMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(pageMeta.about);

const headline = "I managed the chaos. Now I'm solving it.";

const bio = [
  "For over a decade, I've led enterprise programs and portfolios across regulated, federally funded, and high-stakes environments. My most recent work was managing $100M+ in federal infrastructure portfolios across 25+ Texas municipalities, coordinating procurement, engineering, finance, and executive teams under federal compliance frameworks.",
  "Here's what I saw: no city or nonprofit had a single system for the full grant cycle. Discovery was scattered across Grants.gov, state portals, and email alerts. Eligibility was assessed by email, weeks into the application process. Compliance risks came too late. Post-award work was fragmented. Procurement tracked here, drawdowns there, expenditures in a spreadsheet. Closeout readiness was always a last-minute scramble.",
  "The result: cities spent six people-years managing grants. Compliance exposure went undetected until an audit. Nonprofits with three staff members could only pursue two or three grants a year.",
  "I preserved $30M in ARPA funding by identifying a classification exposure that would have killed that funding entirely. I built master schedules that aligned procurement cycles with federal deadlines. But I realized something: the real lever wasn't better consulting. It was the platform itself.",
  "That's why I built GrantComply. The grant management system I wish existed when I was managing those portfolios. A single workspace for discovery through closeout. One source of truth for eligibility, compliance, and post-award tracking. Enough structure to keep a city audit-ready from day one. Enough simplicity that two people can manage what used to take six.",
  "Every feature is built from lived experience. Every workflow reflects a real compliance risk I caught or a real bottleneck I solved.",
  "I'm committed to giving cities, counties, and nonprofits a platform built by someone who's managed the chaos. Not a vendor guessing at it.",
];

export default function AboutPage() {
  return (
    <Section>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-[300px_1fr] md:gap-16">
        {/* Left: Photo */}
        <div className="md:sticky md:top-28 md:self-start">
          <div className="overflow-hidden rounded-[4px] border border-line bg-surface">
            <div className="aspect-[3/4] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jonathan-headshot.jpeg"
                alt="Jonathan Stuart, Founder of GrantComply"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-base font-medium text-fg">
            Jonathan Stuart, <span className="text-muted">Founder</span>
          </p>
        </div>

        {/* Right: Bio */}
        <div>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-[-1px] text-fg md:text-5xl">
            {headline}
          </h1>
          <div className="mt-8 flex flex-col gap-5">
            {bio.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="https://app.grantcomply.app/signup" variant="primary">
              Start Your Free Trial
            </ButtonLink>
            <ButtonLink
              href="https://calendly.com/jonathanvstuart/30min"
              variant="secondary"
            >
              Schedule a Demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
