import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-maroon/10 bg-cream-alt">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-maroon">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl text-navy sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-ink/85">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
