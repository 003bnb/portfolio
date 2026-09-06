import { ArrowRight, Code2, FileText, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';
import profilePhoto from '../assets/profile.jpeg';

export default function Hero() {
  const { language, t } = useLanguage();
  const { brand, email, location, socials, cvFile, cvFileName } = profile;

  const stats = [
    { value: '3+', label: t.hero.stats.years },
    { value: '15+', label: t.hero.stats.projects },
    { value: '02', label: t.hero.stats.sectors },
  ];

  const socialLinks = [
    { href: socials.github, label: t.hero.socials.github, icon: Github },
    { href: socials.linkedin, label: t.hero.socials.linkedin, icon: Linkedin },
    { href: `mailto:${email}`, label: t.hero.socials.email, icon: Mail },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
      {/* Décor d'arrière-plan : halos flous + grille */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 animate-blob rounded-full bg-blue-500/20 blur-3xl motion-reduce:animate-none" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 animate-blob rounded-full bg-indigo-500/20 blur-3xl [animation-delay:-6s] motion-reduce:animate-none" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Colonne texte */}
          <div>
            {/* Badge de disponibilité */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              {t.hero.status}
            </div>

            {/* Titre */}
            <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {t.hero.greeting}{' '}
              <span className="bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                {brand}
              </span>
              <span className="mt-3 block">
                {t.hero.titleLine1}{' '}
                <span className="bg-linear-to-r from-blue-500 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  {t.hero.titleLine2}
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>
                {t.hero.basedIn} {location[language]}
              </span>
            </div>

            {/* CTA + réseaux sociaux */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
              >
                {t.hero.ctaProjects}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={cvFile}
                download={cvFileName}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-white"
              >
                <FileText className="h-4 w-4 text-blue-400" />
                {t.hero.ctaCv}
              </a>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/60 text-slate-400 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Statistiques */}
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-800/80 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Colonne photo */}
          <div className="order-first lg:order-none">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
              {/* Halo dégradé derrière la photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-tr from-blue-500/25 via-indigo-500/15 to-transparent blur-2xl"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 shadow-2xl shadow-blue-950/50">
                <img
                  src={profilePhoto}
                  alt={profile.fullName}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent"
                />
                {/* Nom + localisation en superposition */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-display text-lg font-bold text-white sm:text-xl">
                    {profile.fullName}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-300 sm:text-sm">
                    <MapPin className="h-3.5 w-3.5 text-blue-400" />
                    {location[language]}
                  </p>
                </div>
              </div>

              {/* Badges flottants */}
              <div className="absolute -right-2 top-8 hidden items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/90 px-3.5 py-2 text-xs font-semibold text-slate-200 shadow-lg shadow-slate-950/40 backdrop-blur sm:flex lg:-right-5">
                <Code2 className="h-4 w-4 text-blue-400" />
                React · Django
              </div>
              <div className="absolute -left-2 bottom-20 hidden items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/90 px-3.5 py-2 text-xs font-semibold text-slate-200 shadow-lg shadow-slate-950/40 backdrop-blur sm:flex lg:-left-5">
                <Sparkles className="h-4 w-4 text-blue-400" />
                {t.hero.customTag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
