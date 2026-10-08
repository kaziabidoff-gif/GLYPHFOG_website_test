import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-[0.95rem] font-medium tracking-[-0.01em] transition-[background-color,border-color,color] duration-[var(--duration-base)]";

const variants = {
  primary: "bg-ink text-canvas hover:bg-accent",
  secondary: "border border-line-strong text-ink hover:border-ink hover:bg-surface",
} as const;

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      >
        →
      </span>
    </a>
  );
}
