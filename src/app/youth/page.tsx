import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Eyebrow, Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Youth & Nature",
  description:
    "Free, secular and nondenominational nature-based meditation programs for at-risk and underserved youth.",
};

const OFFERS = [
  "Quiet",
  "Time in nature",
  "Undistracted attention",
  "Compassion",
  "Reflection",
  "Supportive community",
  "Meaningful human connection",
];

const PARTNERS = [
  "Schools",
  "Youth Organizations",
  "Nonprofits",
  "Camps",
  "Community Organizations",
  "Social-Service Organizations",
];

export default function YouthPage() {
  return (
    <>
      <PageHero
        eyebrow="Youth & Nature"
        title="Quiet. Nature. Attention. Connection."
        description="ADK LAMP is committed to developing free, secular and nondenominational nature-based meditation programs for at-risk and underserved youth."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-body leading-relaxed text-ink/85">
              These programs are not intended as religious instruction. They are
              intended to give young people access to:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {OFFERS.map((offer) => (
                <li key={offer} className="flex items-start gap-3 font-body text-ink/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maroon" />
                  {offer}
                </li>
              ))}
            </ul>
          </div>
          <PhotoPlaceholder label="Youth walking a forest trail" rounded />
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why Nature?</Eyebrow>
            <SectionHeading>Paying attention differently</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              The natural world gives us opportunities to pay attention differently.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Walking quietly through a forest, sitting beside water, noticing sound
              and sensation, breathing, and simply being present can create space for
              young people to experience themselves and their surroundings without the
              constant demands of everyday life.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Our aim is simple: to make these opportunities available to young people
              who may otherwise have little access to them.
            </p>
          </div>
          <PhotoFrame
            src="/images/youth-nature-flower.jpg"
            alt="A hand reaching toward a hibiscus flower"
            rounded
          />
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Free &amp; Nondenominational</Eyebrow>
          <SectionHeading className="mx-auto">Open to every young person</SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            We hope these youth programs will always be offered to participating young
            people without charge. No religious belief or participation will be
            required.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            The program will remain distinct from the explicitly spiritual and
            religious offerings of ADK LAMP.
          </p>
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>Community Partnerships</Eyebrow>
            <SectionHeading>Working alongside those who know young people well</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              We hope to work alongside organizations that already know and serve young
              people well. We welcome conversations with:
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {PARTNERS.map((partner) => (
                <li
                  key={partner}
                  className="rounded-full border border-maroon/30 px-4 py-1.5 font-body text-sm text-maroon"
                >
                  {partner}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-body text-sm leading-relaxed text-ink/60 italic">
              Programs involving minors will be developed with appropriate
              safeguarding, consent, privacy, and supervision procedures.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact?reason=Youth or Community Partnership" variant="secondary">
                Discuss a Partnership
              </ButtonLink>
            </div>
          </div>
          <PhotoPlaceholder label="Community partnership gathering" rounded />
        </div>
      </Section>
    </>
  );
}
