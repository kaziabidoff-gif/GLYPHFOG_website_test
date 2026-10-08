import type { BuildOutcome, Capability } from "@/types/content";

export const capabilities: Capability[] = [
  {
    id: "websites",
    number: "01",
    title: "Websites",
    positioning: "Establishing a strong digital presence.",
    description:
      "Websites that explain what a business does, look credible on any device, and make the next step obvious.",
    examples: [
      "Business websites",
      "Landing pages",
      "Corporate websites",
      "E-commerce",
      "Digital experiences",
    ],
  },
  {
    id: "business-software",
    number: "02",
    title: "Business Software",
    positioning: "Turning business processes into useful software.",
    description:
      "Systems that replace spreadsheets, scattered messages and manual tracking with something a team can actually work in.",
    examples: [
      "Management systems",
      "Dashboards",
      "Internal tools",
      "Customer platforms",
      "Booking systems",
      "Inventory systems",
    ],
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI & Automation",
    positioning: "Reducing manual work and making systems smarter.",
    description:
      "Practical automation and AI integrations that remove repetitive steps and connect the tools a business already uses.",
    examples: [
      "Workflow automation",
      "AI integrations",
      "API integrations",
      "Intelligent tools",
    ],
  },
  {
    id: "branding-creative",
    number: "04",
    title: "Branding & Creative",
    positioning: "Making the business communicate clearly and consistently.",
    description:
      "Visual identity and creative assets that keep a business recognizable across its website, social media and print.",
    examples: [
      "Visual identity",
      "Logos",
      "Social media creative",
      "Posters & print",
      "Motion graphics",
    ],
  },
];

export const buildOutcomes: BuildOutcome[] = [
  {
    id: "digital-presence",
    title: "Digital Presence",
    problem:
      "Customers can't find the business, or the website doesn't represent it well.",
    builds: ["Business websites", "Landing pages", "E-commerce", "Corporate sites"],
  },
  {
    id: "business-systems",
    title: "Business Systems",
    problem:
      "Day-to-day operations live in spreadsheets, chat threads and people's memory.",
    builds: ["Dashboards", "Management software", "Booking platforms", "Internal tools"],
  },
  {
    id: "intelligent-workflows",
    title: "Intelligent Workflows",
    problem: "People repeat the same manual steps, and tools don't talk to each other.",
    builds: ["Workflow automation", "AI integrations", "APIs", "Operational tooling"],
  },
  {
    id: "brand-experiences",
    title: "Brand Experiences",
    problem: "The business looks different everywhere it appears.",
    builds: ["Identity systems", "Marketing creative", "Motion", "Digital assets"],
  },
];
