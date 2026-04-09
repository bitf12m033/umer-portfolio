import { SectionWrapper } from "@/components/SectionWrapper";

const skillGroups: { category: string; items: readonly string[] }[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["PHP (Laravel, CodeIgniter)", "Python", "ColdFusion"],
  },
  {
    category: "AI / Automation",
    items: ["Vertex AI", "Speech-to-Text", "real-time transcription"],
  },
  {
    category: "Integrations",
    items: [
      "REST APIs",
      "OAuth",
      "payment gateways",
      "third-party APIs",
    ],
  },
  {
    category: "Tools / Cloud",
    items: [
      "GCP",
      "Docker",
      "Git",
      "databases (MySQL, PostgreSQL, MongoDB)",
    ],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Skills
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(({ category, items }) => (
          <div
            key={category}
            className="rounded-xl border border-white/10 bg-white/3 p-6 transition-all duration-200 hover:border-white/15 hover:bg-white/5"
          >
            <h3 className="mb-4 text-sm font-semibold text-zinc-200">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item}>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/3 px-3 py-1 text-xs font-medium tracking-wide text-zinc-400">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
