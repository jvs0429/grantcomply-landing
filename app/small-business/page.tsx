import type { Metadata } from "next";
import { ComingVertical } from "@/components/coming-vertical";
import { buildMetadata, pageMeta } from "@/lib/metadata";
import { smallBusiness } from "@/lib/content";

export const metadata: Metadata = buildMetadata(pageMeta["small-business"]);

export default function SmallBusinessPage() {
  return (
    <ComingVertical
      eyebrow="Small Business · Coming Q1 2027"
      vertical="small-business"
      hero={smallBusiness.hero}
      cohort={smallBusiness.cohort}
      live={smallBusiness.live}
    />
  );
}
