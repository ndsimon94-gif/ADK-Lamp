import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Support ADK LAMP",
  description:
    "Financial support helps ADK LAMP develop programs, host gatherings, build our youth initiative, and work toward a permanent Adirondack retreat center.",
};

const IMPACT = [
  {
    name: "Practice & Community",
    body: "Meditation, gatherings, teachings, prayer, ceremonies, and contemplative community.",
  },
  {
    name: "Youth Outreach",
    body: "The development of free, secular and nondenominational nature-based meditation programs for underserved youth.",
  },
  {
    name: "Retreat",
    body: "Opportunities for deeper contemplative practice.",
  },
  {
    name: "Our Future Home",
    body: "Working toward land and, eventually, a sanctuary, Tibetan practice space, and simple retreat cabins.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support ADK LAMP"
        title="Support the Mission"
        description="ADK Loving Awareness Meditation Project is growing from an aspiration into a community and, we hope, eventually into a permanent physical home."
      />

      <Section>
        <p className="mx-auto max-w-2xl font-body leading-relaxed text-ink/85">
          Financial support helps us develop programs, host gatherings, build our
          youth initiative, strengthen the community, and work toward establishing a
          permanent Adirondack retreat center.
        </p>

        <h2 className="mt-14 mb-8 font-display text-2xl text-navy">
          What Your Support Helps Make Possible
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {IMPACT.map((item) => (
            <div key={item.name} className="border border-maroon/15 bg-cream-alt p-6">
              <h3 className="font-display text-xl text-navy">{item.name}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="maroon">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl">Give</h2>
          <p className="mt-4 font-body leading-relaxed text-cream/90">
            Donations can be made through PayPal or Venmo. One-time and recurring
            support are welcome where available.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span
              className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-sm border border-cream/50 px-6 py-3 text-sm uppercase tracking-[0.08em] text-cream/60"
              title="PayPal link to be added"
            >
              Donate with PayPal
            </span>
            <ButtonLink
              href="https://venmo.com/davis-trachte"
              external
              className="!border-cream !text-cream hover:!bg-cream hover:!text-maroon"
              variant="ghost"
            >
              Donate with Venmo
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl text-navy">Other Ways to Help</h2>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            You can also support ADK LAMP by participating in a gathering, sharing the
            project with others, introducing us to potential community partners,
            offering appropriate professional expertise, volunteering, or simply
            staying connected as the organization develops.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block font-body text-sm uppercase tracking-[0.08em] text-maroon underline underline-offset-4"
          >
            Contact Us
          </Link>
        </div>
      </Section>

      <Section tone="alt">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-xl text-navy">Donation Information</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-ink/70">
            ADK Loving Awareness Meditation Project is currently developing its
            organizational and church structure. Unless and until ADK LAMP expressly
            states otherwise, contributions should not be considered tax-deductible
            charitable contributions.
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
            We will update this information if our organizational or tax status
            changes.
          </p>
        </div>
      </Section>
    </>
  );
}
