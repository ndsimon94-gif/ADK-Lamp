import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Eyebrow, Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Gather & Practice",
  description:
    "Meditation, teachings, prayer gatherings, ceremonies, and opportunities to practice together — plus one-on-one Dharma coaching with Davis Trachte.",
};

const PROGRAMS = [
  "Weekly Meditation",
  "Monthly Community Gatherings",
  "Dharma & Spiritual Teachings",
  "Prayer Gatherings",
  "Classes & Courses",
  "Visiting Teachers",
  "Online Gatherings",
  "Special Events",
];

export default function GatherPage() {
  return (
    <>
      <PageHero
        eyebrow="Gather & Practice"
        title="Practice Together"
        description="Contemplative practice can be solitary, but it does not have to be lonely."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-body leading-relaxed text-ink/85">
              ADK LAMP offers opportunities to meditate, learn, pray, reflect, and
              gather in community.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {PROGRAMS.map((program) => (
                <li key={program} className="flex items-start gap-3 font-body text-ink/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon" />
                  {program}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-body leading-relaxed text-ink/85">
              Prior meditation experience is not required unless an individual program
              specifically states otherwise.
            </p>
          </div>
          <PhotoFrame
            src="/images/gather-group.jpg"
            alt="A teacher and community members gathered on a hillside"
            rounded
          />
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>What to Expect</Eyebrow>
          <SectionHeading>New to this? You are welcome.</SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            If you have never attended a meditation or spiritual gathering before, you
            are welcome.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Each offering will clearly explain its location, time, registration
            requirements, suggested preparation, and whether there is a cost. Programs
            may be free, donation-based, or offered on a sliding scale.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Questions are welcome, and no one is expected to pretend to understand a
            spiritual tradition or practice they are encountering for the first time.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          <div>
            <Eyebrow>Prayer &amp; Spiritual Support</Eyebrow>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              There are times when we simply want to know that someone is holding us in
              prayer, contemplation, or compassionate awareness.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              ADK LAMP welcomes private prayer requests. You may share as much or as
              little as you wish. You may also contact us to inquire about spiritual
              support during periods of transition, grief, spiritual questioning, or
              difficulty.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink/60 italic">
              Spiritual support through ADK LAMP is not a substitute for emergency
              services, medical treatment, psychotherapy, or other professional
              healthcare when those services are needed.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact#prayer" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>

          <div>
            <Eyebrow>Ceremonies</Eyebrow>
            <SectionHeading>Moments that call for ceremony</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              Human lives contain moments that call for ceremony. ADK LAMP welcomes
              inquiries about blessings, prayer services, memorials, and other
              spiritual ceremonies.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Traditional Tibetan Buddhist ceremonies may be available where
              appropriate, and we hope our future center can also respectfully host
              ceremonies and contemplative gatherings from other traditions.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Rather than maintaining a fixed menu of ceremonies, we prefer to begin
              with a conversation.
            </p>
            <PhotoFrame
              src="/images/gather-ceremony.jpg"
              alt="An outdoor Tibetan Buddhist ceremony"
              aspect="aspect-[16/10]"
              rounded
              className="mt-6"
            />
            <div className="mt-8">
              <ButtonLink href="/contact?reason=Ceremony" variant="secondary">
                Inquire About a Ceremony
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="maroon">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-cream/80">
            Individual Coaching
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">Work One-on-One With Davis</h2>
          <p className="mt-6 font-body leading-relaxed text-cream/90">
            Davis separately offers individual Dharma and life coaching for people
            seeking more personalized support with contemplative practice, spiritual
            development, life direction, and integrating practice with everyday life.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-cream/70">
            This private coaching work is separate from the programs and donations of
            ADK Loving Awareness Meditation Project.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="/coaching"
              variant="ghost"
              className="!border-cream !text-cream hover:!bg-cream hover:!text-maroon"
            >
              Learn More
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
