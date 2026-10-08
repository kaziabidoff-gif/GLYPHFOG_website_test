import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-space">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="work-title"
            label="04 / Selected work"
            title="Real projects, labeled for what they are."
            lead="GLYPHFOG is new, so we show the work as it is: what was built, for whom, and its actual status."
          />
        </Reveal>

        <div className="mt-16 border-b border-line-strong">
          {projects.map((project, index) => (
            <Reveal key={project.slug} y={14}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
