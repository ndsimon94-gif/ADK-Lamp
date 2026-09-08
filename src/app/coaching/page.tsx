import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Section } from "@/components/section";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Work with Davis",
  description:
    "Individual Dharma and life coaching with Davis Trachte — personalized support for contemplative practice, spiritual development, and life direction.",
};

export default function CoachingPage() {
  return (
    <>
      <PageHero
        eyebrow="Individual Coaching"
        title="Work One-on-One With Davis"
        description="Personalized support for contemplative practice, spiritual development, life direction, and integrating practice with everyday life."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <PhotoFrame
            src="/images/founder-portrait.jpg"
            alt="Davis Trachte"
            aspect="aspect-[4/5]"
            rounded
          />
          <div>
            <p className="font-body leading-relaxed text-ink/85">
              Davis separately offers individual Dharma and life coaching for people
              seeking more personalized support with contemplative practice,
              spiritual development, life direction, and integrating practice with
              everyday life.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink/60 italic">
              This private coaching work is separate from the programs and donations
              of ADK Loving Awareness Meditation Project.
            </p>

            <div className="mt-8 flex flex-col gap-2 border-t border-maroon/15 pt-8 font-body text-ink/85">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-maroon">
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-maroon">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-8">
              <ButtonLink href={`mailto:${CONTACT_EMAIL}`} external>
                Contact Davis
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
