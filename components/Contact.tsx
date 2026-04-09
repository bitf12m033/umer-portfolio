import { SectionWrapper } from "@/components/SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { focusRing } from "@/lib/focus-ring";

const GITHUB_URL = "https://github.com/bitf12m033";
const LINKEDIN_URL = "https://linkedin.com/in/umer-majeed";

const linkBase =
  "inline-flex h-11 w-full items-center justify-center rounded-lg border px-5 text-sm font-medium transition-all duration-200 sm:w-auto sm:min-w-[10rem]";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-72 w-72 max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/8 blur-[88px]" />
        <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-zinc-400 md:text-base">
          Open to senior full-stack roles, contract work, and collaboration on
          production systems and AI-integrated products. Reach out by email or
          connect on GitHub or LinkedIn.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href={`mailto:${portfolioData.email}`}
            className={`${linkBase} border-white/12 bg-white/6 text-zinc-100 hover:border-white/20 hover:bg-white/10 ${focusRing}`}
          >
            {portfolioData.email}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} border-white/10 text-zinc-300 hover:border-white/16 hover:text-white ${focusRing}`}
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} border-white/10 text-zinc-300 hover:border-white/16 hover:text-white ${focusRing}`}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
