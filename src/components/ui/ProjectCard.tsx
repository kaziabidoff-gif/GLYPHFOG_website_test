import Image from "next/image";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import type { Project } from "@/types/content";

const typeLabel: Record<Project["type"], string> = {
  Client: "Client work",
  Freelance: "Freelance work",
  University: "University project",
  Personal: "Personal project",
  Concept: "Concept",
  Prototype: "Prototype",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

/** Editorial row, not a floating card. Problem first, technology last. */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const figure = `Abstract placeholder for ${project.title}`;

  return (
    <article className="grid gap-8 border-t border-line-strong py-12 md:grid-cols-12 md:gap-10 md:py-14">
      <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            width={1400}
            height={1000}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="h-auto w-full rounded-lg border border-line"
          />
        ) : (
          <ProjectVisual seed={project.slug} figure={figure} />
        )}
      </div>

      <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
        <p className="text-label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <span className="rounded-sm border border-line-strong px-2 py-0.5 text-ink">
            {typeLabel[project.type]}
          </span>
          <span>{project.category}</span>
        </p>
        <h3 className="text-subtitle mt-5 text-[clamp(1.6rem,2vw+1rem,2.25rem)]">
          {project.title}
        </h3>
        <p className="text-lead mt-4">{project.description}</p>

        <dl className="mt-8 grid gap-4 border-t border-line pt-5 text-[0.95rem] sm:grid-cols-2">
          <div>
            <dt className="text-label text-muted">Status</dt>
            <dd className="mt-1.5">{project.status}</dd>
          </div>
          <div>
            <dt className="text-label text-muted">Built with</dt>
            <dd className="mt-1.5 font-mono text-[0.85rem]">{project.technologies.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
