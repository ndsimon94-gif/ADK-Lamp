import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, Section, SectionHeading } from "@/components/section";

export const metadata: Metadata = {
  title: "Free Teachings & Resources",
  description:
    "A growing collection of free teachings, talks, and recordings offered by ADK LAMP.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Free Teachings & Resources"
        description="A growing collection of recordings, teachings, and reflections — freely offered."
      />

      <Section>
        <Eyebrow>Podcast</Eyebrow>
        <SectionHeading>Listen</SectionHeading>
        <div className="mt-8 max-w-2xl overflow-hidden rounded-sm border border-maroon/15 bg-cream">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/ceTWNO0BJHA"
              title="ADK LAMP podcast"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <Eyebrow>Teachings</Eyebrow>
        <SectionHeading>Talks &amp; Teachings</SectionHeading>
        <div className="mt-8 max-w-2xl border border-maroon/15 bg-cream p-8">
          <p className="font-display text-xl text-navy">
            Teaching on the 37 Practices of a Bodhisattva
          </p>
          <p className="mt-1 font-body text-sm text-ink/70">With Davis Trachte</p>
          <p className="mt-4 inline-block rounded-full border border-maroon/30 px-4 py-1 font-body text-xs uppercase tracking-[0.15em] text-maroon">
            Coming Soon
          </p>
        </div>
      </Section>
    </>
  );
}
