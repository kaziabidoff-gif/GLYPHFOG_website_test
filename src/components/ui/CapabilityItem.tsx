import type { Capability } from "@/types/content";

export function CapabilityItem({ capability }: { capability: Capability }) {
  return (
    <article className="group grid gap-6 border-t border-line-strong py-10 transition-colors duration-[var(--duration-base)] hover:border-ink focus-within:border-ink md:grid-cols-12 md:gap-8 md:py-12">
      <p className="text-label text-muted transition-colors duration-[var(--duration-base)] group-hover:text-accent md:col-span-1 md:pt-3">
        {capability.number}
      </p>

      <div className="md:col-span-5">
        <h3 className="text-subtitle text-[clamp(1.6rem,2vw+1rem,2.25rem)]">{capability.title}</h3>
        <p className="mt-3 text-accent">{capability.positioning}</p>
      </div>

      <div className="md:col-span-6">
        <p className="text-lead">{capability.description}</p>
        <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-[0.95rem] text-ink">
          {capability.examples.map((example, index) => (
            <li key={example} className="flex items-center gap-2">
              {example}
              {index < capability.examples.length - 1 ? (
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
