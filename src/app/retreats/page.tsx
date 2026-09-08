import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Eyebrow, Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Retreats",
  description:
    "Making meaningful retreat more accessible — individual and group retreat, across traditions, in the quiet of the Adirondacks.",
};

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        eyebrow="Retreats"
        title="Make Space for Practice"
        description="Retreat creates space away from ordinary activity for meditation, prayer, contemplation, study, silence, and deeper practice."
      />

      <Section>
        <div className="mx-auto max-w-2xl">
          <p className="font-body leading-relaxed text-ink/85">
            Helping make meaningful retreat more accessible is one of the central
            long-term purposes of ADK LAMP.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Our vision includes opportunities for people rooted in established
            religious traditions, people engaged in contemplative practice without a
            religious affiliation, and groups seeking a sincere environment for
            retreat.
          </p>
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="border border-maroon/15 bg-cream p-8">
            <Eyebrow>Individual Retreat</Eyebrow>
            <h3 className="font-display text-2xl text-navy">Simple space, solitary practice</h3>
            <p className="mt-3 font-body leading-relaxed text-ink/80">
              Simple spaces for solitary meditation, prayer, contemplation, and
              traditional practice.
            </p>
          </div>
          <div className="border border-maroon/15 bg-cream p-8">
            <Eyebrow>Group Retreat</Eyebrow>
            <h3 className="font-display text-2xl text-navy">Teaching and contemplative community</h3>
            <p className="mt-3 font-body leading-relaxed text-ink/80">
              Opportunities for teachings, meditation, prayer, visiting teachers, and
              contemplative community.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl italic text-maroon">
          The emphasis will be on simplicity, quiet, nature, and practice rather than
          luxury.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <PhotoFrame
            src="/images/vision-land.jpg"
            alt="A cairn atop an Adirondack summit, overlooking forested peaks"
            aspect="aspect-[4/5]"
            rounded
          />
          <div>
            <Eyebrow>Retreat Across Traditions</Eyebrow>
            <SectionHeading>Not one universal form of retreat</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              Our purpose is not to create a single universal form of retreat. We hope
              to create an environment capable of supporting authentic forms of
              contemplative practice from different traditions while also providing
              dedicated space for traditional Tibetan Buddhist practice.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Where appropriate teachers and conditions are present, we hope to support
              more intensive forms of traditional retreat as well.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Retreat With Us</Eyebrow>
          <SectionHeading className="mx-auto">Not yet, but not far off</SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            ADK LAMP does not yet have its permanent Adirondack retreat property. Until
            then, retreat opportunities may occasionally be offered or hosted at other
            locations.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Join our mailing list to hear when retreat opportunities become available.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/#stay-connected">Stay Connected</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
