import { SectionWrapper } from "@/components/SectionWrapper";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Projects
      </h2>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-zinc-500">
        Selected work spanning collaboration SaaS, marketing automation, CRM
        reporting, and commerce data—always with production constraints in mind.
      </p>

      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/3 p-6 transition-all duration-200 hover:border-white/18 hover:bg-white/5">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5">
                <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-zinc-500">
                  Highlights
                </p>
                <ul className="space-y-2 text-sm leading-snug text-zinc-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/80"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-xs font-medium text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.role ? (
                <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                  <span className="font-medium text-zinc-500">Impact: </span>
                  {project.role}
                </p>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
