export default function Section({ eyebrow, title, children, id, action }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[.2em] text-indigo-600 dark:text-indigo-400">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            {title}
          </h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
