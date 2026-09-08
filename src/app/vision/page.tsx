import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { PhotoFrame } from "@/components/photo-frame";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Our Vision",
  description:
    "A home in the Adirondacks — land, a non-denominational sanctuary, a Tibetan practice space, and simple retreat cabins.",
};

const PHASES = [
  {
    number: "01",
    name: "Land",
    body: "Our first major goal is to acquire suitable land in the Adirondacks. We envision a quiet natural setting capable of supporting contemplative practice, community gatherings, youth nature programs, and eventually individual retreat.",
  },
  {
    number: "02",
    name: "A Non-Denominational Sanctuary",
    body: "We hope to establish a simple sanctuary for meditation, prayer, spiritual teaching, community gatherings, visiting teachers, and ceremonies. The space will belong to the wider ADK LAMP community rather than to one particular religious tradition.",
  },
  {
    number: "03",
    name: "Tibetan Practice Space",
    body: "We envision a separate Tibetan Buddhist shrine and practice building dedicated to traditional practice. Having distinct spaces will allow ADK LAMP to maintain a genuinely non-denominational common sanctuary while also providing an appropriate environment for preserving a particular spiritual tradition. Openness does not require erasing tradition, and tradition does not require excluding others.",
  },
  {
    number: "04",
    name: "Simple Retreat Cabins",
    body: "We hope to establish a small number of simple cabins for solitary meditation, prayer, contemplation, and traditional retreat. These will not be luxury accommodations. Their purpose will be practice.",
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Vision"
        title="A Home in the Adirondacks"
        description="We are working toward something simple: a place for practice. Our long-term goal is to establish a permanent home for ADK Loving Awareness Meditation Project in the Adirondacks — a place where nature, silence, spiritual practice, service, and community can meet. We expect this vision to unfold gradually over many years."
      />

      <Section>
        <PhotoFrame
          src="/images/vision-land.jpg"
          alt="A cairn atop an Adirondack summit, overlooking forested peaks"
          aspect="aspect-[21/9]"
          rounded
          className="mx-auto max-w-3xl"
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <ol className="flex flex-col">
            {PHASES.map((phase, index) => (
              <li
                key={phase.name}
                className={`flex gap-6 py-8 sm:gap-10 ${
                  index !== PHASES.length - 1 ? "border-b border-maroon/15" : ""
                }`}
              >
                <span className="font-display text-3xl text-maroon/40 sm:text-4xl">
                  {phase.number}
                </span>
                <div>
                  <p className="mb-1 font-body text-xs uppercase tracking-[0.2em] text-maroon">
                    Phase {index + 1}
                  </p>
                  <h2 className="font-display text-2xl text-navy sm:text-3xl">{phase.name}</h2>
                  <p className="mt-3 font-body leading-relaxed text-ink/85">{phase.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="maroon">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Help Build the Vision</h2>
          <p className="mt-6 font-body leading-relaxed text-cream/90">
            Over time, the property may support individual and group retreats,
            visiting teachers, traditional practice, scholarships, youth programs,
            interfaith gatherings, and community partnerships.
          </p>
          <p className="mt-4 font-body leading-relaxed text-cream/90">
            We intend to build patiently and responsibly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/support" className="!bg-cream !text-maroon !border-cream hover:!bg-cream/90">
              Support the Vision
            </ButtonLink>
            <ButtonLink
              href="/#stay-connected"
              variant="ghost"
              className="!border-cream !text-cream hover:!bg-cream hover:!text-maroon"
            >
              Stay Connected
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
