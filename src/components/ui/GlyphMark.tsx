/**
 * Compact brand mark: a 2x2 grid fragment that resolves from a loose stroke
 * into an ordered one. Interim mark until a final logo asset is supplied.
 */
export function GlyphMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 4h6v6H4z" />
      <path d="M14 7h6" />
      <path d="M7 14v6" />
      <path d="M14 14l6 6" stroke="var(--accent)" />
    </svg>
  );
}
