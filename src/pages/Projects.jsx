import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { useApp } from "../context/AppContext";
export default function Projects() {
  const { t } = useApp();
  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
