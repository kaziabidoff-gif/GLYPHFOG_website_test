import { Reveal } from "@/components/motion/Reveal";
import { principles } from "@/data/process";

export function WhyGlyphfog() {
  return (
    <section aria-labelledby="why-title" className="section-space">
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-label text-muted">06 / Why GLYPHFOG</p>
          <h2 id="why-title" className="text-title mt-5">
            Technology should make things clearer, not more complicated.
          </h2>
        </Reveal>

        <ul className="lg:col-span-6 lg:col-start-7">
          {principles.map((principle, index) => (
            <Reveal as="li" key={principle.title} delay={index * 0.05} y={8}>
              <div className="border-t border-line-strong py-6 first:border-t-ink">
                <h3 className="text-subtitle">{principle.title}</h3>
                <p className="mt-2 text-muted">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
