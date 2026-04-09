import { portfolioData } from "@/data/portfolio";
import { focusRing } from "@/lib/focus-ring";

const trustIndicators = [
  "8+ Years Experience",
  "Full Stack Development",
  "AI-Integrated Systems",
] as const;

const btnPrimary =
  "inline-flex h-11 items-center justify-center rounded-lg border border-white/12 bg-white/6 px-6 text-sm font-medium text-zinc-100 transition-all duration-200 hover:border-white/20 hover:bg-white/10";

const btnGhost =
  "inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-medium text-zinc-300 transition-all duration-200 hover:text-white";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/6 bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/4 top-1/2 h-112 w-md -translate-y-1/2 rounded-full bg-violet-500/6 blur-[90px]" />
        <div className="absolute -right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400/80">
          Portfolio
        </p>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl md:leading-[1.1]">
          {portfolioData.name}
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-lg text-zinc-400 md:text-xl">
          {portfolioData.title}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">
          8+ years in full-stack development, shipping real-world systems. I build
          end-to-end software and AI-integrated products for production.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a href="#projects" className={`${btnPrimary} ${focusRing}`}>
            View Projects
          </a>
          <a href="#contact" className={`${btnGhost} ${focusRing}`}>
            Contact Me
          </a>
        </div>

        <ul
          className="mt-12 flex flex-wrap gap-2 md:gap-3"
          aria-label="Highlights"
        >
          {trustIndicators.map((label) => (
            <li key={label}>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-400 md:text-[0.8125rem]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
