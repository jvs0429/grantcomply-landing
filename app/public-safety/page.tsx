import type { Metadata } from "next";
import { ComingVertical } from "@/components/coming-vertical";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { publicSafety } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta["public-safety"]);

export default function PublicSafetyPage() {
  return (
    <ComingVertical
      eyebrow="Public Safety · Coming Q4 2026"
      vertical="public-safety"
      hero={publicSafety.hero}
      cohort={publicSafety.cohort}
      live={publicSafety.live}
    />
  );
}
