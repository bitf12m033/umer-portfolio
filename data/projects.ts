export type Project = {
  id: string;
  title: string;
  description: string;
  highlights: readonly string[];
  techStack: readonly string[];
  role?: string;
};

export const projects: readonly Project[] = [
  {
    id: "minutes",
    title: "Minutes – Real-Time Collaboration",
    description:
      "SaaS platform combining video calls, live transcription, e-signatures, and subscription billing. Built for teams that need a single place to meet, agree, and pay—without stitching together five tools.",
    highlights: [
      "Video sessions with real-time transcription and searchable meeting context",
      "AI-assisted intent analysis on conversation data using Vertex AI",
      "Deep integrations: Vonage, Google Speech-to-Text, Signit, and billing flows",
    ],
    techStack: [
      "React",
      "Next.js",
      "GCP",
      "Vertex AI",
      "Vonage",
      "Google STT",
      "Signit",
    ],
    role: "Full-stack ownership across product surfaces, APIs, and AI pipelines",
  },
  {
    id: "offrs",
    title: "Offrs Marketing Applications",
    description:
      "Marketing automation platform for orchestrating outbound campaigns and operational workflows. Emphasis on reliable API-driven fulfillment and repeatable campaign logic—not one-off scripts.",
    highlights: [
      "LOB.com API integration for print and mail fulfillment at scale",
      "Automated campaign builder with scheduling and audience segmentation",
      "Workflow engine for recurring and event-triggered marketing runs",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "REST APIs", "LOB.com"],
    role: "Backend and integration focus; production-grade error handling and monitoring",
  },
  {
    id: "lead-deal-reporting",
    title: "Lead & Deal Reporting System",
    description:
      "Laravel and MySQL reporting layer on top of HubSpot CRM. Replaced manual exports with scheduled, trustworthy pipelines from daily snapshots through annual rollups.",
    highlights: [
      "HubSpot API ingestion with normalization for reporting schemas",
      "Automated jobs for daily, weekly, monthly, and annual reporting windows",
      "Dashboards and exports stakeholders actually use in planning cycles",
    ],
    techStack: ["Laravel", "MySQL", "HubSpot API", "Queues", "REST"],
    role: "Designed data model and job architecture for long-running accuracy",
  },
  {
    id: "shopify-migration",
    title: "Shopify Migration",
    description:
      "Migrated a live commerce catalog into Shopify—products, variants, images, and metadata—while preserving relationships customers and ops depend on.",
    highlights: [
      "Field-level mapping and validation across source and Shopify Admin API",
      "Integrity checks on inventory, pricing, and media before cutover",
      "Phased migration to reduce risk and allow rollback if anomalies surfaced",
    ],
    techStack: ["Shopify Admin API", "PHP", "MySQL", "ETL scripting"],
    role: "End-to-end migration execution with stakeholder sign-off checkpoints",
  },
];
