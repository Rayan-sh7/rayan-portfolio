import Section from "../components/Section";
import { useApp } from "../context/AppContext";
export default function About() {
  const { t } = useApp();
  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="max-w-3xl">
        <p className="text-lg leading-9 text-slate-600 dark:text-slate-400">{t.about.text}</p>
        <p className="mt-6 leading-8 text-slate-500 dark:text-slate-500">
          {t.about.text2}
        </p>
      </div>
    </Section>
  );
}
