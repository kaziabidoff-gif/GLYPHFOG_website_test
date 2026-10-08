"use client";

import { useEffect, useId, useRef, useState } from "react";
import { GlyphMark } from "@/components/ui/GlyphMark";
import { navItems, primaryCta } from "@/data/navigation";
import { site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // Border appears once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu and returns focus to its button; outside press closes it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const linkClass =
    "relative inline-flex min-h-11 items-center text-[0.95rem] text-muted transition-colors duration-[var(--duration-fast)] hover:text-ink";

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 bg-canvas transition-[border-color] duration-[var(--duration-base)] border-b ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2.5 text-ink"
          aria-label={`${site.name}, back to top`}
        >
          <GlyphMark />
          <span className="text-[0.95rem] font-semibold tracking-[0.14em]">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
          <a
            href={primaryCta.href}
            className="inline-flex min-h-11 items-center rounded-md bg-ink px-5 text-[0.9rem] font-medium text-canvas transition-colors duration-[var(--duration-base)] hover:bg-accent"
          >
            {primaryCta.label}
          </a>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 inline-flex h-12 w-12 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all duration-[var(--duration-fast)] ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all duration-[var(--duration-fast)] ${
                open ? "top-1.5 -rotate-45" : "top-3.5"
              }`}
            />
          </span>
        </button>
      </div>

      {/* visibility:hidden removes closed links from the tab order. */}
      <div
        id={panelId}
        className={`absolute inset-x-0 top-full border-b border-line bg-canvas transition-[opacity,visibility] duration-[var(--duration-fast)] md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center border-b border-line text-lg tracking-[-0.01em] text-ink last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={primaryCta.href}
            onClick={() => setOpen(false)}
            className="mt-4 mb-3 inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 font-medium text-canvas"
          >
            {primaryCta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
