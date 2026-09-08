import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PhotoFrame } from "@/components/photo-frame";
import { Eyebrow, Section, SectionHeading } from "@/components/section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "ADK LAMP grew from a simple aspiration: to help make deep contemplative practice and retreat more accessible while creating a community rooted in loving awareness. Our vision is a home in the Adirondacks.",
};

const FOUNDING_MEMBERS = [
  {
    name: "Nick Simon",
    bio: "Nick grew up in Westchester, New York and currently bases in Boulder, Colorado. He has been an avid traveler, entrepreneur, and meditation practitioner for the last 13 years. Currently, Nick works as a filmmaker and producer for his non-profit, Art of Mastery — an initiative to support artists, artisans, and masters around the world. He is also in school for counseling, with the hopes of bringing mindfulness and nature into therapeutic relationships. He is a student of Soto Zen Buddhism and aspires to bring this influence into his work.",
  },
  { name: "Nate Trachte" },
  { name: "Alex Morton" },
  { name: "Wynde Kate" },
  { name: "Sarah Workneh" },
];

const MEMBERS_WITH_BIO = FOUNDING_MEMBERS.filter((m) => m.bio);
const MEMBERS_WITHOUT_BIO = FOUNDING_MEMBERS.filter((m) => !m.bio);

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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-body text-lg leading-relaxed text-ink/85">
              ADK Loving Awareness Meditation Project grew from a simple aspiration:
              to help make deep contemplative practice and retreat more accessible
              while creating a community rooted in loving awareness, compassion,
              wisdom, service, and connection.
            </p>
            <p className="mt-6 font-display text-xl italic text-maroon">
              We are intentionally non-denominational.
            </p>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              People from all religious traditions and spiritual backgrounds, as well
              as those without a religious affiliation, are welcome.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              At the same time, we believe openness does not require abandoning
              tradition. Authentic spiritual traditions can be practiced and
              preserved without being imposed on others.
            </p>
          </div>
          <PhotoFrame
            src="/images/founder-portrait.jpg"
            alt="Davis Trachte seated in meditation"
            aspect="aspect-[4/5]"
            rounded
          />
        </div>
      </Section>

      {/* Heart-based approach */}
      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Our Heart-Based Approach</Eyebrow>
            <SectionHeading>The cultivation of loving awareness</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              At the center of ADK LAMP is the cultivation of loving awareness —
              learning to meet ourselves, other people, and the world with both
              attention and care.
            </p>
          </div>
          <PhotoFrame
            src="/images/home-welcome-beach.jpg"
            alt="Davis Trachte and his teacher smiling on a lakeshore"
            rounded
          />
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Tradition Without Exclusivity</Eyebrow>
            <SectionHeading>Rooted in a living lineage</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              Tibetan Buddhism has a particular place in the roots of ADK LAMP because
              of the training and practice background of its founder.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Traditional Tibetan Buddhist teachings, meditation, prayer, and
              ceremonies may be offered for those who wish to engage with them.
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
              Our long-term vision is to create a place where different contemplative
              and spiritual traditions can be practiced with integrity while meeting
              one another with genuine respect.
            </p>
          </div>
          <PhotoFrame
            src="/images/tradition-mandala.jpg"
            alt="Davis constructing a sand mandala with his teacher"
            rounded
          />
        </div>
      </Section>

      {/* Founder */}
      <Section tone="alt">
        <Eyebrow>Founder</Eyebrow>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
          <PhotoFrame
            src="/images/tradition-shrine.jpg"
            alt="Davis and his teacher receiving a ceremonial khata scarf in a shrine room"
            aspect="aspect-[4/3]"
            rounded
          />
          <div>
            <h2 className="font-display text-3xl text-navy">Davis Trachte</h2>
            <p className="mt-1 font-body text-sm uppercase tracking-[0.15em] text-maroon">
              Founder &amp; Spiritual Director
            </p>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              Davis Trachte was born in Goshen, New York, in July 1993 and grew up
              with a deep connection to the mountains and outdoor life of New York
              State. During middle school in New Paltz, he volunteered with his
              family to help maintain nature trails on the Mohonk Preserve, an early
              experience that helped establish a lifelong appreciation for
              wilderness, service, and the importance of caring for the natural
              world.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              Davis has been a student and practitioner of Tibetan Buddhism since
              2013, primarily within the Nyingma and Kagyu traditions.
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

      {/* Our Vision */}
      <Section id="vision">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Our Vision</Eyebrow>
            <SectionHeading>A Home in the Adirondacks</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              We are working toward something simple: a place for practice. Our
              long-term goal is to establish a permanent home for ADK Loving
              Awareness Meditation Project in the Adirondacks — a place where
              nature, silence, spiritual practice, service, and community can meet.
              We expect this vision to unfold gradually over many years.
            </p>
          </div>
          <PhotoFrame
            src="/images/vision-land.jpg"
            alt="A cairn atop an Adirondack summit, overlooking forested peaks"
            aspect="aspect-[4/5]"
            rounded
          />
        </div>
      </Section>

      <Section tone="alt">
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
                  <h3 className="font-display text-2xl text-navy sm:text-3xl">{phase.name}</h3>
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

      {/* Founding members */}
      <Section>
        <Eyebrow>Founding Members</Eyebrow>
        <SectionHeading>Building ADK LAMP together</SectionHeading>
        <p className="mt-6 max-w-2xl font-body leading-relaxed text-ink/85">
          ADK LAMP is being built with the help of a small circle of founding
          members.
        </p>

        <div className="mt-10 flex flex-col gap-10">
          {MEMBERS_WITH_BIO.map((member) => (
            <div key={member.name} className="border-l-2 border-maroon pl-5">
              <p className="font-display text-xl text-navy">{member.name}</p>
              <p className="mb-3 font-body text-sm uppercase tracking-[0.15em] text-maroon">
                Founding Member
              </p>
              <p className="max-w-2xl font-body leading-relaxed text-ink/80">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
          {MEMBERS_WITHOUT_BIO.map((member) => (
            <div key={member.name} className="border-l-2 border-maroon pl-4">
              <p className="font-display text-lg text-navy">{member.name}</p>
              <p className="font-body text-sm text-ink/60">Founding Member</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
