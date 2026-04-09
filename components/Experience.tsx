import { SectionWrapper } from "@/components/SectionWrapper";
import { experienceRoles } from "@/data/experience";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Experience
      </h2>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-zinc-500">
        A concise history of senior and mid-level engineering roles—shipping in
        production, owning integrations, and keeping systems maintainable.
      </p>

      <ol className="flex flex-col">
        {experienceRoles.map((role, index) => {
          const isLast = index === experienceRoles.length - 1;

          return (
            <li key={role.id} className="flex gap-6 md:gap-8">
              <div className="flex w-5 shrink-0 flex-col items-center md:w-6">
                <span
                  className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400/80 ring-[6px] ring-[#0a0a0a]"
                  aria-hidden
                />
                {!isLast ? (
                  <span
                    className="mt-3 w-px flex-1 min-h-12 bg-white/10"
                    aria-hidden
                  />
                ) : null}
              </div>

              <div
                className={`min-w-0 flex-1 ${isLast ? "pb-0" : "pb-12"}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                    {role.company}
                  </h3>
                  <span className="shrink-0 text-sm tabular-nums text-zinc-500">
                    {role.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-400">
                  {role.title}
                </p>

                <ul className="mt-4 space-y-2.5 text-sm leading-snug text-zinc-400">
                  {role.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </SectionWrapper>
  );
}
