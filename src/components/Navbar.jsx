import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { lang, setLang, dark, setDark, t } = useApp();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const links = [
    ["home", t.nav.home],
    ["about", t.nav.about],
    ["skills", t.nav.skills],
    ["projects", t.nav.projects],
    ["contact", t.nav.contact],
  ];

  useEffect(() => {
    const ids = links.map(([id]) => id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 96) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [lang]);

  const socials = [
    { namea: "Github", href: "https://github.com/Rayan-sh7", icon: FaGithub },
    {
      namea: "Linkedin",
      href: "https://linkedin.com/in/rayan-alshammary-b77742265",
      icon: FaLinkedin,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/80 backdrop-blur-xl dark:border-white/[.07] dark:bg-[#070b14]/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link
          to="/#home"
          className="text-xl font-black tracking-[-.08em] text-slate-900 dark:text-white"
        >
          R<span className="text-indigo-400">.</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(([id, label]) => (
            <Link
              key={id}
              to={`/#${id}`}
              className={`rounded-full px-4 py-2 text-sm transition ${active === id ? "bg-slate-900/[.06] text-slate-900 dark:bg-white/[.07] dark:text-white" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ namea, href, icon: Icon }) => (
            <a
              key={namea}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={namea}
              className="hidden rounded-full border border-slate-900/10 p-2 text-slate-600 transition hover:bg-slate-900/[.05] hover:text-indigo-600 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/[.07] dark:hover:text-indigo-300 sm:block"
            >
              <Icon size={22} aria-hidden="true" />
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="rounded-full border border-slate-900/10 p-2 text-slate-600 hover:bg-slate-900/[.05] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/[.07]"
          >
            {dark ? <Sun size={20} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="hidden rounded-full border border-slate-900/10 px-3 py-2 text-xs text-slate-600 hover:bg-slate-900/[.05] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/[.07] sm:flex items-center gap-1"
          >
            <Languages size={18} />
            {lang === "ar" ? "EN" : "العربية"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-full border border-slate-900/10 p-2 text-slate-600 md:hidden dark:border-white/10 dark:text-slate-300"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`overflow-hidden transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-900/10 px-5 py-3 dark:border-white/[.07]">
          {links.map(([id, label], i) => (
            <Link
              onClick={() => setOpen(false)}
              key={id}
              to={`/#${id}`}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
              className={`block rounded-xl px-4 py-3 text-sm text-slate-600 transition-all duration-300 hover:bg-slate-900/[.05] dark:text-slate-300 dark:hover:bg-white/[.06] ${
                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${links.length * 45}ms` : "0ms" }}
            className={`mt-1 w-full rounded-xl px-4 py-3 text-start text-sm text-slate-600 transition-all duration-300 dark:text-slate-300 ${
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {lang === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </header>
  );
}
