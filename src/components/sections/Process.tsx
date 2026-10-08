import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-space border-y border-line bg-sunken"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="process-title"
            label="05 / How we work"
            title="We don't start with technology. We start with the problem."
          />
        </Reveal>

        <ol className="mt-16 grid gap-0 md:grid-cols-5 md:gap-6">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 0.06} y={10}>
              <div className="h-full border-t border-ink py-6 md:pr-2">
                <p className="text-label text-accent">{step.number}</p>
                <h3 className="text-subtitle mt-4">{step.title}</h3>
                <p className="mt-3 text-[0.98rem] text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
