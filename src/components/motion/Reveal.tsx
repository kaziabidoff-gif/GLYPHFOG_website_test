"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Seconds. Use small increments (index * 0.06) for related items. */
  delay?: number;
  /** Starting offset in px. Keep subtle. */
  y?: number;
  as?: "div" | "li" | "p";
  className?: string;
}

/**
 * Subtle opacity + transform entrance once the element nears the viewport.
 * Reduced motion: content renders in place with no transform (see also the
 * [data-reveal] rule in globals.css, which covers pre-hydration HTML).
 */
export function Reveal({
  children,
  delay = 0,
  y = 12,
  as = "div",
  className,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = m[as];

  return (
    <LazyMotion features={domAnimation}>
      <Component
        data-reveal=""
        className={className}
        initial={reduce ? false : { opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}
