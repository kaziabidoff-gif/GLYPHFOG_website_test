import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildOutcomes } from "@/data/capabilities";

export function WhatWeBuild() {
  return (
    <section
      aria-labelledby="build-title"
      className="section-space border-y border-line bg-surface"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="build-title"
            label="03 / What we build"
            title="Start from the problem. Build what solves it."
            lead="Here is what that tends to look like in practice."
          />
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {buildOutcomes.map((outcome, index) => (
            <Reveal key={outcome.id} delay={(index % 2) * 0.06}>
              <article className="border-t border-ink pt-6">
                <h3 className="text-subtitle">{outcome.title}</h3>
                <p className="mt-5 text-muted">
                  <span className="text-label mr-2 text-accent">Problem</span>
                  {outcome.problem}
                </p>
                <p className="mt-4">
                  <span className="text-label mr-2 text-accent">We build</span>
                  {outcome.builds.join(", ")}.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
