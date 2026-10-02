import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { useApp } from "../context/AppContext";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";
export default function Projects() {
  const { t } = useApp();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedProject =
    selectedIndex !== null ? t.projects.items[selectedIndex] : null;
  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            onSelect={() => setSelectedIndex(i)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          visitLabel={t.projects.visit}
          stackLabel={t.projects.stackLabel}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </Section>
  );
}
