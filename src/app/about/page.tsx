import type { Metadata } from "next";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Eyebrow, Section, SectionHeading } from "@/components/section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "ADK LAMP grew from a simple aspiration: to help make deep contemplative practice and retreat more accessible while creating a community rooted in loving awareness.",
};

const VALUES = [
  {
    name: "Loving Awareness",
    description: "Meeting experience with clarity and warmth.",
  },
  {
    name: "Compassion",
    description: "Allowing practice to become genuine care for others.",
  },
  {
    name: "Wisdom",
    description:
      "Valuing reflection, discernment, study, and the wisdom preserved within contemplative traditions.",
  },
  {
    name: "Practice",
    description: "Understanding that spiritual values become meaningful when they are lived.",
  },
  {
    name: "Service",
    description: "Bringing the fruits of practice into the wider community.",
  },
  {
    name: "Connection",
    description:
      "Cultivating meaningful relationships with ourselves, one another, our communities, and the natural world.",
  },
  {
    name: "Universal Spiritual Dignity",
    description:
      "Honoring the inherent worth of people regardless of religious identity or spiritual background.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="About ADK LAMP" />

      <Section>
        <div className="mx-auto max-w-2xl">
          <p className="font-body text-lg leading-relaxed text-ink/85">
            ADK Loving Awareness Meditation Project grew from a simple aspiration: to
            help make deep contemplative practice and retreat more accessible while
            creating a community rooted in loving awareness, compassion, wisdom,
            service, and connection.
          </p>
          <p className="mt-6 font-display text-xl italic text-maroon">
            We are intentionally non-denominational.
          </p>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            People from all religious traditions and spiritual backgrounds, as well as
            those without a religious affiliation, are welcome.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            At the same time, we believe openness does not require abandoning
            tradition. Authentic spiritual traditions can be practiced and preserved
            without being imposed on others.
          </p>
        </div>
      </Section>

      {/* Heart-based approach */}
      <Section tone="alt">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Heart-Based Approach</Eyebrow>
          <SectionHeading className="mx-auto">The cultivation of loving awareness</SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            At the center of ADK LAMP is the cultivation of loving awareness — learning
            to meet ourselves, other people, and the world with both attention and
            care.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {VALUES.map((value) => (
            <div key={value.name} className="border-l-2 border-maroon pl-5">
              <h3 className="font-display text-xl text-navy">{value.name}</h3>
              <p className="mt-2 font-body leading-relaxed text-ink/80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tradition without exclusivity */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Tradition Without Exclusivity</Eyebrow>
          <SectionHeading>Rooted in a living lineage</SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            Tibetan Buddhism has a particular place in the roots of ADK LAMP because of
            the training and practice background of its founder.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Traditional Tibetan Buddhist teachings, meditation, prayer, and ceremonies
            may be offered for those who wish to engage with them.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            The Barway Dorje Terma tradition has particular importance within these
            roots, and ADK LAMP hopes to help preserve opportunities for sincere
            practitioners to encounter and practice this tradition authentically and
            under appropriate guidance.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Participation in Tibetan Buddhist practice is never a requirement for
            belonging to the wider ADK LAMP community.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Our long-term vision is to create a place where different contemplative and
            spiritual traditions can be practiced with integrity while meeting one
            another with genuine respect.
          </p>
        </div>
      </Section>

      {/* Founder */}
      <Section tone="alt">
        <Eyebrow>Founder</Eyebrow>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <PhotoPlaceholder label="Davis Trachte" aspect="aspect-[4/5]" rounded />
          <div>
            <h2 className="font-display text-3xl text-navy">Davis Trachte</h2>
            <p className="mt-1 font-body text-sm uppercase tracking-[0.15em] text-maroon">
              Founder &amp; Spiritual Director
            </p>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              Davis Trachte has been a student and practitioner of Tibetan Buddhism
              since 2013, primarily within the Nyingma and Kagyu traditions.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              He received a Bachelor&rsquo;s degree in Tibetan Language and Buddhist
              Studies from Naropa University in 2018.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              From 2018 through 2024, Davis lived at Kunzang Palchen Ling, a Tibetan
              Buddhist center in Red Hook, New York. During those years he trained
              closely with teachers, participated in the daily practice and life of the
              community, led meditation, served as shrine master, and contributed to
              the practical work of sustaining the center.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              He continues intensive meditation and Dharma training under the guidance
              of Retreat Master Lama Tashi Topgyal, with particular connection to the
              Barway Dorje tradition as well as Dzogchen and Mahamudra practice.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Davis founded ADK LAMP with the aspiration to help create a place where
              deep practice is possible, authentic traditions are respected, people of
              different backgrounds are welcomed, and contemplative practice finds
              expression in compassionate service.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
