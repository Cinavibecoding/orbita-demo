export function PageWrap({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="hero-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/75">{intro}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">{children}</section>
    </div>
  );
}
