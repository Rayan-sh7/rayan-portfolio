import { ArrowUpLeft } from "lucide-react";
import ProjectImage from "./ProjectImage";
export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="group relative cursor-pointer rounded-3xl border border-slate-900/[.08] bg-white p-3 shadow-sm transition duration-300 focus-within:ring-2 focus-within:ring-indigo-400 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-white dark:border-white/[.08] dark:bg-white/[.025] dark:shadow-none dark:hover:border-indigo-400/30 dark:hover:bg-white/[.04]">
      <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 via-slate-100 to-purple-500/10 text-5xl font-black text-indigo-500/30 dark:from-indigo-500/15 dark:via-slate-900 dark:to-purple-500/10 dark:text-indigo-300/30">
        <ProjectImage project={project} className="aspect-[16/10]" />
      </div>
      <div className="p-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-slate-900 dark:text-white">
              <button
                type="button"
                onClick={() => {
                  onSelect(project);
                }}
                className="text-start font-semibold text-slate-900 after:absolute after:inset-0 after:rounded-3xl focus:outline-none dark:text-white"
              >
                {project.title}
              </button>
            </h3>
            {project.soon && (
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-400 bg-amber-400/10 px-5 py-1 text-sm font-medium text-white-300">
                {project.soon}
              </span>
            )}
          </div>
          <ArrowUpLeft
            size={18}
            className="text-slate-400 transition group-hover:text-indigo-600 dark:text-slate-500 dark:group-hover:text-indigo-300"
          />
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-500">
          {project.desc}
        </p>
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
