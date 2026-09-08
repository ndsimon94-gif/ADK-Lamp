import { LogoMark } from "./logo-mark";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
  aspect?: string;
  rounded?: boolean;
};

/**
 * Stand-in for a real photograph. Replace with an <Image> pointing at an
 * actual photo in /public/images once available — see README.
 */
export function PhotoPlaceholder({
  label,
  className = "",
  aspect = "aspect-[4/3]",
  rounded = false,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden border border-maroon/15 bg-gradient-to-br from-cream-deep via-cream-alt to-cream-deep ${rounded ? "rounded-md" : ""} ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(135deg,var(--color-maroon)_0,var(--color-maroon)_1px,transparent_1px,transparent_14px)]" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <LogoMark className="h-8 w-8 text-maroon/40" />
        <span className="font-body text-xs uppercase tracking-[0.15em] text-maroon/60">
          {label}
        </span>
      </div>
    </div>
  );
}
