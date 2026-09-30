import { ArrowUpRight } from "lucide-react";
export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-3xl border border-slate-900/[.08] bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-white dark:border-white/[.08] dark:bg-white/[.025] dark:shadow-none dark:hover:border-indigo-400/30 dark:hover:bg-white/[.04]">
      <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-100 to-purple-500/10 text-5xl font-black text-indigo-500/30 dark:from-indigo-500/15 dark:via-slate-900 dark:to-purple-500/10 dark:text-indigo-300/30">
        <span>&lt;/&gt;</span>
      </div>
      <div className="p-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <ArrowUpRight
            size={18}
            className="text-slate-400 transition group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-300"
          />
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-500">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-900/10 px-2.5 py-1 text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
