import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-maroon text-cream border border-maroon hover:bg-maroon-dark hover:border-maroon-dark",
  secondary:
    "bg-transparent text-maroon border border-maroon hover:bg-maroon hover:text-cream",
  ghost:
    "bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm tracking-[0.08em] uppercase font-body transition-colors duration-200 ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
