import { ButtonLink } from "@/components/button-link";
import { NewsletterForm } from "@/components/newsletter-form";
import { PhotoFrame } from "@/components/photo-frame";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Eyebrow, Section, SectionHeading } from "@/components/section";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-maroon">
              A Non-Denominational Church &amp; Retreat Center
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
              A Place for Loving Awareness
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink/85">
              ADK Loving Awareness Meditation Project is a growing non-denominational
              spiritual community dedicated to meditation, contemplative practice,
              compassionate service, and connection.
            </p>
            <p className="mt-4 max-w-lg font-body text-lg leading-relaxed text-ink/85">
              We welcome people of every religious tradition and spiritual background,
              as well as those who belong to no particular tradition at all.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/about">About Us</ButtonLink>
              <ButtonLink href="/gather" variant="secondary">
                Get Involved
              </ButtonLink>
              <ButtonLink href="/support" variant="ghost">
                Donate
              </ButtonLink>
            </div>
          </div>
          <PhotoFrame
            src="/images/founder-portrait.jpg"
            alt="Davis Trachte seated in meditation"
            aspect="aspect-[4/5]"
            rounded
          />
        </div>
      </section>

      {/* Mission */}
      <Section tone="alt">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Mission</Eyebrow>
          <SectionHeading className="mx-auto">
            Contemplative practice and compassionate service, together
          </SectionHeading>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/85">
            Our mission is to make authentic contemplative practice and retreat
            accessible across denominations and spiritual traditions, while developing
            free, secular and nondenominational nature-based meditation programs for
            at-risk and underserved youth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          <div className="border border-maroon/15 bg-cream p-8">
            <h3 className="font-display text-2xl text-navy">Practice &amp; Retreat</h3>
            <p className="mt-3 font-body leading-relaxed text-ink/80">
              Meditation, spiritual teachings, community gatherings, prayer, ceremony,
              and opportunities for deeper retreat.
            </p>
          </div>
          <div className="border border-maroon/15 bg-cream p-8">
            <h3 className="font-display text-2xl text-navy">Service</h3>
            <p className="mt-3 font-body leading-relaxed text-ink/80">
              Bringing the qualities cultivated through contemplative practice —
              attention, compassion, connection, and loving awareness — into service of
              the wider community, particularly young people who have had fewer
              opportunities and resources.
            </p>
          </div>
        </div>
      </Section>

      {/* Everyone welcome */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Everyone Is Welcome</Eyebrow>
            <SectionHeading>You do not need to belong to a particular religion</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              You do not need to know how to meditate, either. ADK LAMP welcomes people
              from all religious traditions and denominations, experienced
              contemplative practitioners, people exploring spirituality for the first
              time, and people with no religious affiliation.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              We believe authentic traditions can be respected and preserved without
              requiring everyone to follow the same path.
            </p>
          </div>
          <PhotoFrame
            src="/images/home-welcome-beach.jpg"
            alt="Davis Trachte and his teacher smiling on a lakeshore"
            rounded
          />
        </div>
      </Section>

      {/* Gather & practice */}
      <Section tone="alt">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Gather &amp; Practice</Eyebrow>
          <SectionHeading className="mx-auto">
            Meditation, teaching, prayer, and community
          </SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            ADK LAMP offers and hosts meditation, spiritual teachings, community
            gatherings, prayer, retreats, ceremonies, visiting teachers, and online
            practice.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Offerings may be free, donation-based, or sliding-scale depending on the
            program.
          </p>
          <div className="mt-8">
            <ButtonLink href="/gather" variant="secondary">
              Explore Gatherings &amp; Practice
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Home in Adirondacks */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <PhotoFrame
            src="/images/home-land-adirondacks.jpg"
            alt="A newly built wooden platform on forested land"
            rounded
            className="lg:order-2"
          />
          <div className="lg:order-1">
            <Eyebrow>A Home in the Adirondacks</Eyebrow>
            <SectionHeading>A simple place, surrounded by quiet</SectionHeading>
            <p className="mt-6 font-body leading-relaxed text-ink/85">
              Our long-term vision is a simple permanent spiritual and retreat center
              surrounded by the forests, mountains, and quiet of the Adirondacks.
            </p>
            <p className="mt-4 font-body leading-relaxed text-ink/85">
              We hope to begin by acquiring land and gradually develop a
              non-denominational sanctuary, a dedicated Tibetan Buddhist practice
              space, and simple retreat cabins.
            </p>
            <p className="mt-4 font-display text-xl italic text-maroon">
              The goal is not to create a luxury retreat center or a large institution.
              It is to create a place for practice.
            </p>
            <div className="mt-8">
              <ButtonLink href="/vision" variant="secondary">
                Explore Our Vision
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Youth */}
      <Section tone="maroon">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-cream/80">
              Meditation, Nature &amp; Young People
            </p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              A central service commitment
            </h2>
            <p className="mt-6 font-body leading-relaxed text-cream/90">
              ADK LAMP is committed to developing free, secular and nondenominational
              nature-based meditation programs for at-risk and underserved youth.
            </p>
            <p className="mt-4 font-body leading-relaxed text-cream/90">
              These programs will not require religious belief or participation. They
              are intended to offer young people opportunities for quiet, attention,
              compassion, connection, and meaningful time in nature.
            </p>
            <div className="mt-8">
              <ButtonLink href="/youth" variant="ghost" className="!border-cream !text-cream hover:!bg-cream hover:!text-maroon">
                Learn About Our Youth Mission
              </ButtonLink>
            </div>
          </div>
          <PhotoPlaceholder
            label="Youth nature program"
            rounded
            className="border-cream/20 from-maroon-dark via-maroon to-maroon-dark"
          />
        </div>
      </Section>

      {/* Stay connected */}
      <Section tone="alt" id="stay-connected">
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Stay Connected</Eyebrow>
          <SectionHeading className="mx-auto">ADK LAMP is growing</SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            Join our email list to hear about upcoming gatherings, retreats, teachings,
            visiting teachers, youth initiatives, and progress toward our future
            Adirondack home.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </Section>
    </>
  );
}
