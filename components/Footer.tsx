export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row sm:px-8">
        <p className="text-sm text-zinc-500">
          © {year} M. Umer Majeed. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">Built with Next.js</p>
      </div>
    </footer>
  );
}
