export interface NavItem {
  label: string;
  href: string;
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  positioning: string;
  description: string;
  examples: string[];
}

export interface BuildOutcome {
  id: string;
  title: string;
  problem: string;
  builds: string[];
}

export type ProjectType =
  | "Client"
  | "Freelance"
  | "University"
  | "Personal"
  | "Concept"
  | "Prototype";

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  status: string;
  /** Path under /public. `null` renders an abstract placeholder, never a fake screenshot. */
  image: string | null;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Principle {
  title: string;
  description: string;
}
