import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming ADK LAMP gatherings and teachings. All events are donation-based — give what you can. Everyone is welcome, regardless of ability to pay.",
};

const EVENTS = [
  {
    title: "The Heart of Awakening",
    subtitle: "Meditation and Compassion in Action",
    teacher: "A meditation in action teaching with Davis Trachte",
    date: "Sunday, October 11",
    time: "10:30 AM – 12:30 PM",
    location: "Wild Rose Ayurveda, 23 Main St., Saranac Lake, NY 12983",
    description:
      "Davis will present the teachings and techniques of compassionate mind training as taught in Tibetan Buddhism, using treasured traditional texts. There will be opportunities for questions and answers regarding practical meditation techniques for everyday life.",
    cost:
      "Free, donation-based. Give what you can. All proceeds will support Davis's three-year intensive Dharma training retreat, which he hopes to begin in November 2026 and complete in 2030.",
    note: "Please bring your own comfortable cushion or chair.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming Gatherings & Teachings"
        description="Opportunities to practice, learn, and gather together."
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xl italic text-maroon">
            Every ADK LAMP event is donation-based. Give what you can — or nothing
            at all.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            All are welcome. There will never be a cost barrier to joining us.
          </p>
        </div>
      </Section>

      <Section tone="alt">
        <Eyebrow>Upcoming Events</Eyebrow>
        <SectionHeading>Join us</SectionHeading>
        <div className="mt-10 flex flex-col gap-8">
          {EVENTS.map((event) => (
            <div key={event.title} className="border border-maroon/15 bg-cream p-8">
              <h3 className="font-display text-2xl text-navy">{event.title}</h3>
              <p className="mt-1 font-body italic text-ink/70">{event.subtitle}</p>
              <p className="mt-3 font-body text-sm text-ink/85">{event.teacher}</p>
              <p className="mt-4 font-body text-sm uppercase tracking-[0.1em] text-maroon">
                {event.date} · {event.time}
              </p>
              <p className="mt-1 font-body text-sm text-ink/70">{event.location}</p>
              <p className="mt-4 font-body leading-relaxed text-ink/85">
                {event.description}
              </p>
              <p className="mt-4 font-body leading-relaxed text-ink/85">{event.cost}</p>
              <p className="mt-2 font-body text-sm italic text-ink/60">{event.note}</p>
              <div className="mt-6">
                <ButtonLink href="/contact?reason=Event" variant="secondary">
                  Contact Us About This Event
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Stay Connected</Eyebrow>
          <SectionHeading className="mx-auto">More events are coming</SectionHeading>
          <p className="mt-6 font-body leading-relaxed text-ink/85">
            Join our email list to hear about new gatherings, retreats, and teachings
            as soon as they are announced.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/#stay-connected">Stay Connected</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
