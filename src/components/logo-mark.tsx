type LogoMarkProps = {
  className?: string;
  color?: string;
};

/**
 * Heart, flame, and radiating rays, with the Tibetan syllable ཨ (a) set in
 * the heart's center using an actual Tibetan typeface (see the
 * Noto_Serif_Tibetan font in layout.tsx) rather than a hand-traced glyph,
 * so the character itself renders correctly.
 */
export function LogoMark({ className, color = "currentColor" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* radiating rays */}
      <g strokeWidth="1.6">
        <path d="M27 8l4.5 6.5" />
        <path d="M73 8l-4.5 6.5" />
        <path d="M13 21l6 4.5" />
        <path d="M87 21l-6 4.5" />
        <path d="M6 39h8" />
        <path d="M94 39h-8" />
      </g>

      {/* flame */}
      <path
        d="M50,3 C55,9 59,14 55,20 C53,23 49,23 47,21 C43,17 42,11 45,7 C47,4 49,3 50,3 Z"
        fill={color}
        stroke="none"
      />

      {/* heart */}
      <path d="M50,90 C50,90 15,61 15,36 C15,19 29,11 41,18 C46,21 49,26 50,32 C51,26 54,21 59,18 C71,11 85,19 85,36 C85,61 50,90 50,90 Z" />

      {/* Tibetan seed syllable, a */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="none"
        fill={color}
        fontSize="30"
        style={{ fontFamily: "var(--font-tibetan), serif" }}
      >
        {"ཨ"}
      </text>
    </svg>
  );
}
