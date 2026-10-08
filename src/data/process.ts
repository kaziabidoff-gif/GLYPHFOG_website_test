import type { Principle, ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "The business, the audience, the problem and the constraints. Before anything is designed.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "The information, workflows, user experience and technical direction, agreed in plain language.",
  },
  {
    number: "03",
    title: "Build",
    description: "Design and implement the solution that fits, not the one that's fashionable.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Test, improve and polish until it's ready for real use.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Iterate, automate and extend as the business changes, where it makes sense.",
  },
];

export const principles: Principle[] = [
  {
    title: "Business-first thinking",
    description:
      "We start with what the business needs to change. The technology comes after.",
  },
  {
    title: "One connected perspective",
    description:
      "Design, software and automation are considered together, so the website, the system behind it and the brand around it fit.",
  },
  {
    title: "Practical engineering",
    description: "We build what is useful and avoid adding complexity for its own sake.",
  },
  {
    title: "Clear communication",
    description: "You should always know what is being built, why, and what happens next.",
  },
  {
    title: "Scalable foundations",
    description: "Projects are structured so they can grow as the business does.",
  },
];
