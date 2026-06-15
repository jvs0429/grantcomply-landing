import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Section } from "@/components/primitives";
import { buildMetadata, pageMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(pageMeta.blog);

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        headline="Notes on funding, built in public."
        subheading="Strategy, product updates, and field notes from building GrantComply across verticals."
        ctas={[]}
      />

      <Section alt>
        <div className="mx-auto max-w-xl rounded-[4px] border border-line bg-bg p-10 text-center">
          <p className="text-2xl" aria-hidden>
            ✍️
          </p>
          <h2 className="mt-4 text-xl font-semibold text-fg">
            Posts coming soon
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            We&apos;re writing about grant strategy, compliance, and what
            we&apos;re learning building one platform across every kind of
            organization. Check back shortly.
          </p>
        </div>
      </Section>
    </>
  );
}
