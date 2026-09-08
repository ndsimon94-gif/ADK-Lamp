import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CONTACT_EMAIL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="mx-auto max-w-2xl font-body leading-relaxed text-ink/85">
          <p>
            ADK Loving Awareness Meditation Project is a growing organization, and this
            policy will be expanded as our programs and systems develop.
          </p>
          <p className="mt-4">
            Information you share with us through this website — such as your name,
            email address, or the contents of a contact or newsletter request — is
            used only to respond to you and, where you have asked, to keep you
            informed about ADK LAMP. We do not sell your information.
          </p>
          <p className="mt-4">
            If you have questions about this policy, please contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-maroon underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
