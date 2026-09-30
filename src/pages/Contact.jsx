import Section from "../components/Section";
import { useApp } from "../context/AppContext";
export default function Contact() {
  const { t } = useApp();
  return (
    <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <p className="max-w-md leading-8 text-slate-600 dark:text-slate-400">{t.contact.text}</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            className="w-full rounded-2xl border border-slate-900/10 bg-white px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 dark:border-white/10 dark:bg-white/[.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-400/50"
            placeholder={t.contact.name}
          />
          <input
            type="email"
            className="w-full rounded-2xl border border-slate-900/10 bg-white px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 dark:border-white/10 dark:bg-white/[.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-400/50"
            placeholder={t.contact.email}
          />
          <textarea
            rows="6"
            className="w-full resize-none rounded-2xl border border-slate-900/10 bg-white px-5 py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-400 dark:border-white/10 dark:bg-white/[.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-400/50"
            placeholder={t.contact.message}
          />
          <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
            {t.contact.send}
          </button>
        </form>
      </div>
    </Section>
  );
}
