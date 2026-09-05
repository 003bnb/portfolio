import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: profile.socials.github, label: t.hero.socials.github, icon: Github },
    { href: profile.socials.linkedin, label: t.hero.socials.linkedin, icon: Linkedin },
    { href: `mailto:${profile.email}`, label: t.hero.socials.email, icon: Mail },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
              <Code2 className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              {profile.brand}
              <span className="text-blue-400">.dev</span>
            </span>
          </a>

          <p className="text-center text-sm text-slate-500">{t.footer.tagline}</p>

          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/60 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#top"
              aria-label={t.footer.backToTop}
              title={t.footer.backToTop}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/60 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-400"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/60 pt-6 text-center text-xs text-slate-500">
          <p>
            © {currentYear} {profile.fullName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
