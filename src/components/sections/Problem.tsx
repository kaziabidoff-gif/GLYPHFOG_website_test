import { Reveal } from "@/components/motion/Reveal";

const problems = [
  "Disconnected tools",
  "Manual processes",
  "An outdated website",
  "An unclear online experience",
];

export function Problem() {
  return (
    <section
      aria-labelledby="problem-title"
      className="section-space border-y border-line bg-sunken"
    >
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="text-label text-muted">01 / The problem</p>
          <h2 id="problem-title" className="text-title mt-5">
            Growth gets harder when the tools around it don&rsquo;t fit.
          </h2>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <ul className="border-t border-line-strong">
            {problems.map((problem, index) => (
              <Reveal as="li" key={problem} delay={index * 0.06} y={8}>
                <div className="flex items-baseline gap-5 border-b border-line py-4">
                  <span className="text-label text-muted">0{index + 1}</span>
                  <span className="text-subtitle">{problem}</span>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.3}>
            <p className="text-lead mt-8">
              We turn these into practical digital systems that are easier to run, easier to
              understand and easier to grow.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
