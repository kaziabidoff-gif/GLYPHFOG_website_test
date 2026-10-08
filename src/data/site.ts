/**
 * Site-wide facts. Anything marked CONFIRM is tracked in docs/CONTENT.md.
 */

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const site = {
  name: "GLYPHFOG",
  descriptor: "Digital Solutions",
  tagline: "We build digital solutions for growing businesses.",
  description:
    "GLYPHFOG builds practical digital solutions around real business needs: websites, business software, AI-powered automation and brand design for small and growing businesses.",
  url: resolveSiteUrl(),
  /** CONFIRM: public location wording. */
  location: "Dhaka, Bangladesh",
  /** Set NEXT_PUBLIC_CONTACT_EMAIL. No address is invented here. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? null,
  /** Add only real, verified profiles. Left empty on purpose. */
  social: [] as { label: string; href: string }[],
} as const;

export function mailtoHref(subject = "Project inquiry"): string | null {
  if (!site.email) return null;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
