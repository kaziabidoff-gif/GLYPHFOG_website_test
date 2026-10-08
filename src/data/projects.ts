import type { Project } from "@/types/content";

/**
 * Every entry must be truthful about what it is. Do not upgrade a university
 * project to client work, and do not add results that can't be backed up.
 * Open items are tracked in docs/CONTENT.md.
 */
export const projects: Project[] = [
  {
    slug: "noashal-rosui-ghor",
    // CONFIRM spelling of the business name ("Noashal" vs "Noauhal").
    title: "Noashal Rosui Ghor",
    category: "Website for a homemade food business",
    type: "Freelance",
    description:
      "A small homemade food business needed an online presence that works well on a phone and makes it easy to reach the owner. We designed and built a mobile-first promotional website with direct messaging flows and brand-aligned content.",
    technologies: ["TypeScript", "Responsive design"],
    status: "Delivered freelance website",
    image: null,
  },
  {
    slug: "medsync",
    title: "MEDSYNC",
    category: "Healthcare management system",
    type: "University",
    description:
      "Clinic information is often split across separate tools. MEDSYNC brings patients, doctors, diagnostic centers and admins into one role-based platform covering appointments, medical history and dashboards, backed by a normalized relational database.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
    status: "Academic project. Not a deployed healthcare product.",
    image: null,
  },
  {
    slug: "fbms",
    title: "Franchise Brand Management System",
    category: "Brand consistency across franchise branches",
    type: "University",
    description:
      "Franchise branches tend to drift from the brand over time. FBMS manages campaigns, brand assets, guidelines and customization requests in one place, with notifications, tasks and dashboards for each role.",
    technologies: ["Node.js", "Express", "MySQL"],
    status: "Software engineering course project",
    image: null,
  },
];
