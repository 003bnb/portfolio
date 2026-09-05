import { useEffect, useState } from 'react';
import { Code2, Download, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

const LANGUAGES = ['fr', 'en'];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'border-slate-700/80 bg-slate-900/85 shadow-lg shadow-slate-950/40'
          : 'border-slate-800/60 bg-slate-900/60'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Marque */}
        <a href="#top" onClick={closeMenu} className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
            <Code2 className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            {profile.brand}
            <span className="text-blue-400">.dev</span>
          </span>
        </a>

        {/* Liens desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-slate-800/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions : switcher de langue + CV + burger mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            role="group"
            aria-label={t.nav.language}
            className="flex items-center rounded-full border border-slate-700/80 bg-slate-800/80 p-1"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  language === lang
                    ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href={profile.cvFile}
            download={profile.cvFileName}
            className="hidden items-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            <span>{t.nav.downloadCv}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80 text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 border-t border-slate-800/80 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.cvFile}
            download={profile.cvFileName}
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Download className="h-4 w-4" />
            <span>{t.nav.downloadCv}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
