import { Reveal } from "@/components/motion/Reveal";
import { CapabilityItem } from "@/components/ui/CapabilityItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="section-space">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="capabilities-title"
            label="02 / Capabilities"
            title="Four disciplines, one connected approach."
            lead="Each stands on its own. They are designed to work together when a project needs more than one."
          />
        </Reveal>

        <div className="mt-16 border-b border-line-strong">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 0.05} y={10}>
              <CapabilityItem capability={capability} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p
            className="text-label mt-8 text-muted"
            aria-label="Brand, then website, then software, then automation: how the capabilities can connect"
          >
            Brand → Website → Software → Automation
          </p>
        </Reveal>
      </div>
    </section>
  );
}
