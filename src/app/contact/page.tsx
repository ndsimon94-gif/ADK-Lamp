import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { NewsletterForm } from "@/components/newsletter-form";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach ADK LAMP to attend a gathering, ask about retreat, request prayer, discuss a ceremony, explore a partnership, or learn more.",
};

type ContactPageProps = {
  searchParams: Promise<{ reason?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { reason } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect With ADK LAMP"
        description="Whether you want to attend a gathering, ask about retreat, request prayer, discuss a ceremony, explore a community partnership, volunteer, or simply learn more, you are welcome to reach out."
      />

      <Section id="prayer">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-display text-2xl text-navy">Davis Trachte</h2>
            <p className="mt-1 font-body text-sm uppercase tracking-[0.15em] text-maroon">
              Founder &amp; Spiritual Director
            </p>
            <div className="mt-6 flex flex-col gap-2 font-body text-ink/85">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-maroon">
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-maroon">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-10 border-t border-maroon/15 pt-8">
              <h3 className="font-display text-xl text-navy">
                Work One-on-One With Davis
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/80">
                For inquiries about Davis&rsquo;s separate Dharma and life-coaching
                work, contact him directly at the email or phone above.
              </p>
              <p className="mt-3 font-body text-xs leading-relaxed text-ink/60">
                Individual coaching is separate from ADK LAMP programming and
                donations.
              </p>
            </div>

            <div className="mt-10 border-t border-maroon/15 pt-8">
              <h3 className="font-display text-xl text-navy">Our Future Home</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/80">
                ADK LAMP does not yet have a permanent retreat center. Our long-term
                goal is to establish our home in the Adirondacks of New York. Until
                then, gatherings and programs may take place at various locations or
                online.
              </p>
            </div>
          </div>

          <div>
            <ContactForm initialReason={reason} />
          </div>
        </div>
      </Section>

      <Section tone="alt" id="connected">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">Stay Connected</h2>
          <p className="mt-4 font-body leading-relaxed text-ink/85">
            Prefer just to stay in the loop? Join our email list for upcoming
            gatherings, retreats, and teachings.
          </p>
          <div className="mt-6 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </Section>
    </>
  );
}
