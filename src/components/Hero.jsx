import { ArrowDown, ArrowUpLeft } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Hero() {
  const { t, lang } = useApp();
  return (
    <section id="home" className="grid-bg relative flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center border-b border-slate-900/10 dark:border-white/[.06]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="mb-5 text-sm font-medium text-indigo-600 dark:text-indigo-300">
            ● {t.hero.eyebrow}
          </p>
          <h1 className="text-6xl font-black tracking-[-.06em] text-slate-900 sm:text-7xl lg:text-8xl dark:text-white">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 sm:text-3xl dark:from-indigo-400 dark:to-purple-400">
            {t.hero.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
            {t.hero.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              {t.hero.work}{" "}
              <ArrowUpLeft
                className="inline transition group-hover:-translate-y-0.5"
                size={15}
              />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-900/15 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-900/[.05] dark:border-white/15 dark:text-white dark:hover:bg-white/[.06]"
            >
              {t.hero.contact}
            </a>
          </div>
        </div>
        <div className="relative hidden min-h-[380px] items-center justify-center lg:flex">
          <div className="absolute h-72 w-72 rounded-full bg-indigo-600/20 blur-[80px]" />
          <div className="relative flex h-56 w-56 rotate-6 items-center justify-center rounded-[4rem] border border-indigo-400/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 shadow-[0_0_90px_rgba(79,70,229,.2)]">
            <div className="-rotate-6 font-mono text-7xl font-black text-indigo-500/80 dark:text-indigo-300/80">
              &lt;/&gt;
            </div>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <ArrowDown size={16} className="animate-bounce" />
            {t.hero.scroll}
          </div>
        </div>
      </div>
    </section>
  );
}
