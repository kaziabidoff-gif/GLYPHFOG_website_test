import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Restrained on purpose: the company is the protagonist, not a résumé.
 * Founder name, photo and bio wording are tracked in docs/CONTENT.md.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-space border-y border-line bg-surface"
    >
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            id="about-title"
            label="07 / About"
            title="A new company with a practical point of view."
          />
        </Reveal>

        <Reveal className="space-y-6 lg:col-span-6 lg:col-start-7" delay={0.08}>
          <p className="text-lead">
            GLYPHFOG was started by a software developer with hands-on experience in web
            development, database-driven systems and brand design, and with first-hand experience
            running a small food business.
          </p>
          <p className="text-lead">
            That mix shapes how we work. We look at the business first, then choose the software,
            the design and the automation that actually fit it.
          </p>
          <p className="text-lead">
            Today we focus on websites, business software and automation for small and growing
            businesses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
