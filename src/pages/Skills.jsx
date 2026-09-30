import Section from "../components/Section";
import { useApp } from "../context/AppContext";
export default function Skills() {
  const { t } = useApp();
  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {t.skills.items.map((s, i) => (
          <div
            key={s}
            className="rounded-2xl border border-slate-900/[.08] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-indigo-400/50 dark:border-white/[.08] dark:bg-white/[.025] dark:shadow-none dark:hover:border-indigo-400/30"
          >
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 font-mono text-indigo-600 dark:text-indigo-300">
              {String(i + 1).padStart(2, "0")}
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{s}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
