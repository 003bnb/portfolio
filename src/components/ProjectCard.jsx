import { DatabaseBackup, ExternalLink, Fuel, Github, Globe, Lock, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICONS = { Fuel, DatabaseBackup, Globe };

/**
 * Carte projet individuelle : effet glassmorphism, badge d'impact,
 * tags techniques et liens GitHub / Démo.
 */
export default function ProjectCard({ project }) {
  const { language, t } = useLanguage();
  const Icon = ICONS[project.icon] ?? Globe;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-800/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-7">
      {/* Ligne lumineuse au survol */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700/60 bg-linear-to-br from-blue-500/15 to-indigo-500/10 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-blue-400" />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-right text-[11px] font-semibold uppercase tracking-wide text-blue-400">
          {project.featured ? <Star className="h-3 w-3 shrink-0 fill-blue-400" /> : null}
          {project.badge[language]}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description[language]}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-700/80 bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-slate-700/60 pt-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-blue-400"
        >
          <Github className="h-4 w-4" />
          {t.projectsCard.viewCode}
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-300"
          >
            <ExternalLink className="h-4 w-4" />
            {t.projectsCard.viewDemo}
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
            <Lock className="h-3.5 w-3.5" />
            {t.projectsCard.private}
          </span>
        )}
      </div>
    </article>
  );
}
