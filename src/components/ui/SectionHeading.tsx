import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** e.g. "02 / Capabilities". Coordinate-style label, not decoration. */
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
}

export function SectionHeading({ label, title, lead, id }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-label text-muted">{label}</p>
      <h2 id={id} className="text-title mt-5">
        {title}
      </h2>
      {lead ? <p className="text-lead mt-6 max-w-2xl">{lead}</p> : null}
    </header>
  );
}
