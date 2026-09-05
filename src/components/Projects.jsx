import { FolderKanban } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={FolderKanban}
          badge={t.projects.badge}
          title={t.projects.title}
          highlight={t.projects.titleHighlight}
          subtitle={t.projects.subtitle}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
