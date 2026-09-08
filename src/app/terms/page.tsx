import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CONTACT_EMAIL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Website Terms",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Website Terms" />
      <Section>
        <div className="mx-auto max-w-2xl font-body leading-relaxed text-ink/85">
          <p>
            This website is provided by ADK Loving Awareness Meditation Project to
            share information about our community, programs, and vision. Content is
            offered in good faith and may be updated as the organization grows.
          </p>
          <p className="mt-4">
            Spiritual support offered through ADK LAMP is not a substitute for
            emergency services, medical treatment, psychotherapy, or other
            professional healthcare when those services are needed.
          </p>
          <p className="mt-4">
            ADK LAMP is currently developing its organizational and church structure.
            Unless and until we expressly state otherwise, contributions should not be
            considered tax-deductible charitable contributions.
          </p>
          <p className="mt-4">
            Questions about these terms can be directed to{" "}
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
