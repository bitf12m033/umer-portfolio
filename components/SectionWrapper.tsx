type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`.trim()}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28">
        {children}
      </div>
    </section>
  );
}
