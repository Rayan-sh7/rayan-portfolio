import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
export default function Footer() {
  const { lang, t } = useApp();
  const [glow, setGlow] = useState(0);
  useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setGlow(max <= 0 ? 0 : Math.min(1, window.scrollY / max));
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <footer className="relative overflow-hidden border-t border-slate-900/10 px-5 pb-7 pt-14 lg:px-8 dark:border-white/[.07]">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex min-h-48 items-center justify-center border-y border-indigo-400/10">
          <div
            className={`outline-word ${glow > 0.5 ? "is-glowing" : ""} select-none text-center text-[clamp(5rem,18vw,13rem)] font-black leading-none tracking-[-.08em]`}
            style={{ opacity: 0.45 + glow * 0.55 }}
          >
            {lang === "ar" ? "ريان" : "Rayan"}
          </div>
        </div>
        <div className="mt-6 flex justify-between gap-4 text-xs text-slate-500 dark:text-slate-600">
          <span>© {new Date().getFullYear()} Rayan</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
