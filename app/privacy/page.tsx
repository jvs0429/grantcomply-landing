import type { Metadata } from "next";
import { LegalLayout, LegalSection, P, List } from "@/components/legal-layout";
import { buildMetadata, pageMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(pageMeta.privacy);

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      meta="Effective date: April 14, 2026 · ZJN Consulting LLC"
    >
      <P>
        GrantComply (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
        operated by ZJN Consulting LLC. This Privacy Policy explains how we
        collect, use, and protect information when you use the GrantComply
        platform at app.grantcomply.app.
      </P>
      <P>
        We take the privacy of our customers&apos; data seriously. Your
        organization&apos;s data is isolated from all other organizations and is
        never shared, sold, or used to train AI models.
      </P>

      <LegalSection heading="1. Information We Collect">
        <P>We collect the following categories of information:</P>
        <List
          items={[
            "Account information — name, email address, job title, and organization name provided during signup",
            "Organization data — grant information, application records, project details, and documents you upload",
            "Usage data — pages visited, features used, and actions taken within the platform (used to improve the product)",
            "Payment information — billing details processed by Stripe. We do not store credit card numbers on our servers.",
            "Communications — emails you send to us and support requests",
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. How We Use Your Information">
        <List
          items={[
            "To provide and operate the GrantComply platform",
            "To send grant match notifications and product updates you've opted into",
            "To respond to support requests",
            "To process billing and manage subscriptions",
            "To improve platform features based on aggregate usage patterns",
            "To comply with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Data Isolation and Security">
        <P>
          Each organization&apos;s data is strictly isolated using row-level
          security (RLS) enforced at the database level. No user can access
          another organization&apos;s data. Documents, grant records, and
          AI-generated content are scoped exclusively to your organization.
        </P>
        <P>
          We use industry-standard security practices including encrypted
          connections (HTTPS/TLS), secure cloud infrastructure via Supabase, and
          access controls limiting which team members can view your data.
        </P>
      </LegalSection>

      <LegalSection heading="4. AI and Third-Party Services">
        <P>GrantComply uses the following third-party services to operate:</P>
        <List
          items={[
            "OpenAI — powers AI features including grant Q&A and document generation. We do not use your data to train OpenAI models.",
            "Supabase — database and file storage hosting",
            "Stripe — payment processing",
            "Resend — transactional email delivery",
            "Vercel — application hosting",
            "PostHog — anonymous product analytics. No personally identifiable information is shared beyond anonymous session identifiers.",
          ]}
        />
        <P>
          We do not sell your data to any third party, and we do not permit
          third parties to use your data for their own marketing purposes.
        </P>
      </LegalSection>

      <LegalSection heading="5. Data Retention">
        <P>
          We retain your data for as long as your account is active. If you
          cancel your subscription, your data is retained for 90 days to allow
          for reactivation, after which it is permanently deleted upon request.
        </P>
      </LegalSection>

      <LegalSection heading="6. Your Rights">
        <List
          items={[
            "Access the data we hold about your organization",
            "Request correction of inaccurate information",
            "Request deletion of your account and associated data",
            "Export your data in a portable format",
            "Opt out of non-essential communications",
          ]}
        />
        <P>
          To exercise any of these rights, contact us at hello@grantcomply.app.
        </P>
      </LegalSection>

      <LegalSection heading="7. Cookies">
        <P>
          We use essential cookies to maintain your login session and anonymous
          analytics cookies to understand how the platform is used. We do not
          use advertising cookies or track you across other websites.
        </P>
      </LegalSection>

      <LegalSection heading="8. Changes to This Policy">
        <P>
          We may update this Privacy Policy from time to time. We will notify
          active users by email of material changes at least 30 days before they
          take effect.
        </P>
      </LegalSection>

      <LegalSection heading="9. Contact">
        <P>
          For privacy questions or data requests, contact us at: ZJN Consulting
          LLC — GrantComply, hello@grantcomply.app.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
