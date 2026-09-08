type LogoMarkProps = {
  className?: string;
  color?: string;
};

/**
 * Placeholder mark: heart outline with a rising flame and radiating lines,
 * echoing ADK LAMP's brand. Swap for the organization's actual logo file
 * (see README) once available.
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
      <g strokeWidth="1.75">
        <path d="M50 4v8" />
        <path d="M28 10l4 7" />
        <path d="M72 10l-4 7" />
        <path d="M14 24l6 5" />
        <path d="M86 24l-6 5" />
        <path d="M8 42h8" />
        <path d="M92 42h-8" />
      </g>
      {/* flame */}
      <path d="M50 20c3.5 5 6 8.7 6 13.2 0 3.7-2.7 6.3-6 6.3s-6-2.6-6-6.3C44 28.7 46.5 25 50 20z" />
      {/* heart */}
      <path d="M50 84C32 71 16 58.5 16 42.5 16 31 24.5 23 34.5 23c6.7 0 12.3 3.6 15.5 9.6C53.2 26.6 58.8 23 65.5 23 75.5 23 84 31 84 42.5 84 58.5 68 71 50 84z" />
    </svg>
  );
}
