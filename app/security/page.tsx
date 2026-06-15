import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/primitives";
import { buildMetadata, pageMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(pageMeta.security);

const pillars = [
  {
    icon: "🔒",
    title: "Complete data isolation",
    body: "Your organization's data is never visible to any other organization — ever.",
  },
  {
    icon: "🏦",
    title: "Bank-grade encryption",
    body: "AES-256 encryption at rest. TLS 1.3 in transit. Industry-standard protection.",
  },
  {
    icon: "☁️",
    title: "SOC 2 infrastructure",
    body: "Hosted on AWS via Supabase — SOC 2 Type 2 certified cloud infrastructure.",
  },
  {
    icon: "✅",
    title: "Verified access",
    body: "Organization email domains verified. All other accounts manually reviewed.",
  },
];

const isolationPoints = [
  "Organization A can never see Organization B's data — not grants, not projects, not documents, not anything",
  "Even GrantComply staff cannot access your data without explicit audit logging",
  "Data isolation is enforced by the database itself — not just application logic",
  "There is no configuration error or bug that could expose your data to another organization",
];

export default function SecurityPage() {
  return (
    <>
      <section className="bg-bg">
        <div className="container-site max-w-3xl pt-24 pb-12 text-center md:pt-32">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Security &amp; Privacy
          </p>
          <h1 className="font-serif text-4xl tracking-[-0.5px] text-fg md:text-5xl">
            Your data is protected. Full stop.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            GrantComply was built for organizations handling sensitive funding
            data — which means security and data isolation aren&apos;t
            afterthoughts. Here&apos;s exactly how we protect your information.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-[4px] border border-line bg-bg p-6"
            >
              <div className="mb-4 text-2xl" aria-hidden>
                {p.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-fg">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading title="Data isolation — how it works" />
        <div className="mx-auto max-w-3xl">
          <p className="text-[15px] leading-relaxed text-muted">
            Every organization in GrantComply operates in a completely isolated
            data environment enforced at the database level using Row Level
            Security (RLS) — the same technology used by financial institutions
            to separate customer accounts. This means:
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {isolationPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-[4px] border border-line bg-bg p-4 text-[15px] text-muted"
              >
                <span className="mt-0.5 text-accent-alt" aria-hidden>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-[4px] border border-accent/40 bg-accent/5 p-6 text-[15px] leading-relaxed text-muted">
            <span aria-hidden>💡</span> Think of it like separate safe deposit
            boxes at a bank. The bank operates the vault, but only you hold the
            key to your box. We operate the platform, but only your organization
            can access your data.
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[15px] leading-relaxed text-muted">
            Have a security question or need documentation for a procurement
            review? Contact us at{" "}
            <a
              href="mailto:hello@grantcomply.app"
              className="text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              hello@grantcomply.app
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
