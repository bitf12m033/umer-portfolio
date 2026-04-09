export type ExperienceRole = {
  id: string;
  company: string;
  title: string;
  duration: string;
  bullets: readonly string[];
  techStack: readonly string[];
};

export const experienceRoles: readonly ExperienceRole[] = [
  {
    id: "vinsuite",
    company: "vinSUITE",
    title: "Senior Software Developer",
    duration: "2023 – Present",
    bullets: [
      "Shipped bug fixes and feature work across production customer surfaces.",
      "Tuned performance and reliability on paths that carry real transaction volume.",
      "Owned payment gateway integrations and adjacent third-party APIs.",
      "Partnered with product and support to prioritize fixes and reduce regressions.",
    ],
    techStack: ["PHP", "MySQL", "REST APIs", "Payment gateways"],
  },
  {
    id: "offrs",
    company: "Offrs",
    title: "Senior Software Developer",
    duration: "2019 – 2023",
    bullets: [
      "Built and evolved marketing automation platforms and internal tooling.",
      "Implemented LOB.com integration for API-driven print and mail workflows.",
      "Automated campaign scheduling, segmentation, and recurring operational jobs.",
      "Strengthened monitoring and error handling around high-volume integrations.",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "LOB.com", "REST APIs"],
  },
  {
    id: "purelogics",
    company: "PureLogics",
    title: "Software Engineer",
    duration: "2018 – 2019",
    bullets: [
      "Developed Shopify stores, themes, and supporting customizations.",
      "Built Laravel reporting tools for leadership and operations teams.",
      "Integrated HubSpot APIs for CRM-backed dashboards and data exports.",
      "Kept PHP and SQL layers clear enough for the next engineer to extend.",
    ],
    techStack: ["Shopify", "Laravel", "PHP", "HubSpot API", "MySQL"],
  },
  {
    id: "techleadz",
    company: "Techleadz",
    title: "Web Developer",
    duration: "2016 – 2018",
    bullets: [
      "Built web applications and backend systems for client delivery.",
      "Worked across Laravel, ColdFusion, and Python codebases as projects required.",
      "Implemented data access layers and APIs backing internal and external UIs.",
      "Translated stakeholder requirements into concrete milestones and releases.",
    ],
    techStack: ["Laravel", "ColdFusion", "Python", "MySQL"],
  },
];
