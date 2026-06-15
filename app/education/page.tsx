import type { Metadata } from "next";
import { ComingVertical } from "@/components/coming-vertical";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { education } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta.education);

export default function EducationPage() {
  return (
    <ComingVertical
      eyebrow="Education · Coming Q1 2027"
      vertical="education"
      hero={education.hero}
      cohort={education.cohort}
      live={education.live}
    />
  );
}
