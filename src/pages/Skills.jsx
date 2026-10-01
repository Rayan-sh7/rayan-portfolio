import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiGit,
} from "react-icons/si";
import { LuBrain } from "react-icons/lu";
import Section from "../components/Section";
import { useApp } from "../context/AppContext";
import { Icon } from "lucide-react";
export default function Skills() {
  const { t } = useApp();
  const skills = [
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Git", icon: SiGit },
    { name: "AI / RAG", icon: LuBrain },
  ];
  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="rounded-2xl border border-slate-900/[.08] bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-indigo-400/50 dark:border-white/[.08] dark:bg-white/[.025] dark:shadow-none dark:hover:border-indigo-400/30"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
              <Icon className="h-12 w-120" aria-hidden="true" />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
