import { Layout, Server, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skills';

const ICONS = { Layout, Server, Wrench };

export default function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-24 border-y border-slate-800/60 bg-slate-950/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Wrench}
          badge={t.skills.badge}
          title={t.skills.title}
          highlight={t.skills.titleHighlight}
          subtitle={t.skills.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillsData.map((category) => {
            const Icon = ICONS[category.icon] ?? Wrench;
            return (
              <div
                key={category.id}
                className="group rounded-2xl border border-slate-700/80 bg-slate-800/80 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700/60 bg-linear-to-br from-blue-500/20 to-indigo-500/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {category.title[language]}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      {category.description[language]}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-blue-500/50 hover:text-blue-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
