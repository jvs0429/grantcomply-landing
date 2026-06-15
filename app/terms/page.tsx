import type { Metadata } from "next";
import { LegalLayout, LegalSection, P, List } from "@/components/legal-layout";
import { buildMetadata, pageMeta } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(pageMeta.terms);

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      meta="Effective date: April 14, 2026 · ZJN Consulting LLC"
    >
      <P>
        These Terms of Service (&quot;Terms&quot;) govern your use of the
        GrantComply platform (&quot;Service&quot;) operated by ZJN Consulting LLC
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By creating an
        account or using the Service, you agree to these Terms.
      </P>
      <P>
        <strong className="text-fg">Important:</strong> GrantComply is an
        educational and workflow tool. It does not constitute legal, financial,
        or compliance advice. Always verify regulatory requirements with
        qualified legal counsel and your program officer before making
        compliance decisions.
      </P>

      <LegalSection heading="1. Eligibility and Accounts">
        <P>
          GrantComply is designed for use by employees and authorized
          representatives of organizations pursuing grant funding, including
          government entities, nonprofits, health systems, educational
          institutions, public safety agencies, and small businesses. By
          creating an account you represent that:
        </P>
        <List
          items={[
            "You are authorized to represent your organization",
            "The information you provide during signup is accurate",
            "You are at least 18 years old",
            "Your use of the Service complies with applicable laws and regulations",
          ]}
        />
      </LegalSection>

      <LegalSection heading="2. Subscription and Billing">
        <P>
          GrantComply offers paid subscription plans billed annually. Eligible
          plans include a 30-day free trial with no credit card required. After
          the trial period:
        </P>
        <List
          items={[
            "Your selected plan will be billed at the rates shown at grantcomply.app",
            "Subscriptions renew automatically unless cancelled before the renewal date",
            "You may cancel at any time from your billing settings",
            "We do not offer refunds for partial subscription periods",
            "If your organization requires a purchase order or contract, contact us at hello@grantcomply.app before subscribing",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Acceptable Use">
        <P>
          You agree to use GrantComply only for lawful purposes related to grant
          management and compliance for your organization. You may not:
        </P>
        <List
          items={[
            "Share your account credentials with users outside your organization",
            "Attempt to access another organization's data",
            "Use the Service to store or transmit unlawful, harmful, or fraudulent content",
            "Reverse engineer, copy, or resell the Service or its outputs",
            "Use automated tools to scrape or extract data from the platform",
            "Misrepresent your organization or your authority to act on its behalf",
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. Your Data">
        <P>
          You retain ownership of all data, documents, and content you upload to
          GrantComply. By uploading content, you grant us a limited license to
          store, process, and display it solely to provide the Service to you.
        </P>
        <P>
          We do not sell your data. We do not use your organization&apos;s data
          to train AI models. Your data is isolated from all other organizations
          on the platform.
        </P>
      </LegalSection>

      <LegalSection heading="5. AI-Generated Content">
        <P>
          GrantComply uses artificial intelligence to generate compliance
          summaries, grant application drafts, and other content. You
          acknowledge that:
        </P>
        <List
          items={[
            "AI-generated content is for informational and workflow purposes only",
            "It does not constitute legal, financial, or compliance advice",
            "You are responsible for verifying the accuracy of AI-generated content before acting on it",
            "Citations are grounded in indexed source documents but may not reflect the most current version of applicable law",
            "Always consult qualified counsel or your program officer for binding compliance determinations",
          ]}
        />
      </LegalSection>

      <LegalSection heading="6. Intellectual Property">
        <P>
          The GrantComply platform, including its software, design, knowledge
          base, and documentation, is owned by ZJN Consulting LLC and protected
          by copyright and other intellectual property laws. You may not copy,
          modify, distribute, or create derivative works from the platform
          without our written permission.
        </P>
      </LegalSection>

      <LegalSection heading="7. Disclaimers">
        <P>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY
          KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE
          UNINTERRUPTED, ERROR-FREE, OR THAT AI-GENERATED CONTENT WILL BE
          ACCURATE OR COMPLETE. GRANTCOMPLY IS NOT A LAW FIRM AND DOES NOT
          PROVIDE LEGAL ADVICE.
        </P>
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZJN CONSULTING LLC SHALL NOT BE
          LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES
          ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY TO YOU SHALL
          NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS
          PRECEDING THE CLAIM.
        </P>
      </LegalSection>

      <LegalSection heading="9. Indemnification">
        <P>
          You agree to indemnify and hold harmless ZJN Consulting LLC from any
          claims, damages, or expenses arising from your use of the Service, your
          violation of these Terms, or your organization&apos;s compliance
          decisions made using GrantComply outputs.
        </P>
      </LegalSection>

      <LegalSection heading="10. Termination">
        <P>
          We may suspend or terminate your account if you materially breach these
          Terms. You may cancel your account at any time from your billing
          settings. Upon termination, your data will be retained for 90 days
          before permanent deletion.
        </P>
      </LegalSection>

      <LegalSection heading="11. Governing Law">
        <P>
          These Terms are governed by the laws of the State of Texas, without
          regard to conflict of law principles. Any disputes shall be resolved in
          the courts of Texas.
        </P>
      </LegalSection>

      <LegalSection heading="12. Changes to These Terms">
        <P>
          We may update these Terms from time to time. We will notify active
          users by email of material changes at least 30 days before they take
          effect.
        </P>
      </LegalSection>

      <LegalSection heading="13. Contact">
        <P>
          For questions about these Terms, contact us at: ZJN Consulting LLC —
          GrantComply, hello@grantcomply.app.
        </P>
      </LegalSection>
    </LegalLayout>
  );
}
