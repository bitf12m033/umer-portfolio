import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { focusRing } from "@/lib/focus-ring";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className={`rounded-md text-sm font-medium tracking-tight text-zinc-100 transition-colors duration-200 hover:text-white ${focusRing}`}
        >
          {portfolioData.name}
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-8">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`rounded-md text-xs font-medium text-zinc-400 transition-colors duration-200 hover:text-zinc-100 sm:text-sm ${focusRing}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
