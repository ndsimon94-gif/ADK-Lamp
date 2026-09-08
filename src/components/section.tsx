import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "alt" | "maroon";
  id?: string;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream",
  alt: "bg-cream-alt",
  maroon: "bg-maroon text-cream",
};

export function Section({ children, className = "", tone = "cream", id }: SectionProps) {
  return (
    <section id={id} className={`${toneClasses[tone]} ${className}`}>
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm tracking-[0.2em] uppercase text-maroon font-body">
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-3xl sm:text-4xl text-navy leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}
