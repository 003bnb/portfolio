import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Loader2,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { profile } from '../data/profile';

// Identifiants EmailJS — surchargeables via variables d'environnement Vite :
// VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
// (le préfixe VITE_ est obligatoire pour exposer une variable au navigateur).
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_003bnb';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_003bnb';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'gZD-tuykCzdVJ6B_5';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const inputClass =
  'w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20';

export default function Contact() {
  const { language, t } = useLanguage();
  const formRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = (field) => (event) => {
    setForm((previous) => ({ ...previous, [field]: event.target.value }));
    if (error) setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(t.contact.form.error);
      return;
    }

    setStatus('loading');
    setError('');

    // Envoi réel via EmailJS — les attributs `name` des champs du formulaire
    // doivent correspondre aux variables déclarées dans le template EmailJS.
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success');
        setForm(INITIAL_FORM);
        window.setTimeout(() => setStatus('idle'), 6000);
      })
      .catch((emailError) => {
        console.error('Erreur EmailJS :', emailError);
        setStatus('error');
      });
  };

  const infoItems = [
    { icon: Mail, label: t.contact.info.email, value: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: t.contact.info.location, value: profile.location[language] },
    { icon: Linkedin, label: t.contact.info.linkedin, value: profile.display.linkedin, href: profile.socials.linkedin },
    { icon: Github, label: t.contact.info.github, value: profile.display.github, href: profile.socials.github },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-800/60 bg-slate-950/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={Send}
          badge={t.contact.badge}
          title={t.contact.title}
          highlight={t.contact.titleHighlight}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Coordonnées directes */}
          <aside className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-slate-700/80 bg-slate-800/80 p-7 backdrop-blur">
              <h3 className="font-display text-lg font-bold text-white">{t.contact.info.title}</h3>
              <ul className="flex-1 space-y-5">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/60 bg-linear-to-br from-blue-500/20 to-indigo-500/10">
                      <Icon className="h-4 w-4 text-blue-400" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('mailto:') ? undefined : '_blank'}
                          rel="noopener noreferrer"
                          className="block truncate text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="truncate text-sm font-medium text-slate-200">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                {t.contact.info.availabilityValue}
              </div>
            </div>
          </aside>

          {/* Formulaire de contact — envoi réel via EmailJS */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-slate-700/80 bg-slate-800/80 p-7 backdrop-blur sm:p-8"
            >
              {status === 'success' ? (
                <div
                  role="status"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-400">{t.contact.form.success}</p>
                    <p className="mt-1 text-sm text-emerald-300/80">{t.contact.form.successSub}</p>
                  </div>
                </div>
              ) : null}

              {status === 'error' ? (
                <div
                  role="alert"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                  <p className="text-sm font-medium text-rose-300">{t.contact.form.sendError}</p>
                </div>
              ) : null}

              {error ? (
                <p
                  role="alert"
                  className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm font-medium text-amber-400"
                >
                  {error}
                </p>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
                    {t.contact.form.name} <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder={t.contact.form.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
                    {t.contact.form.email} <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder={t.contact.form.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.form.subject}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  placeholder={t.contact.form.subjectPlaceholder}
                  className={inputClass}
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
                  {t.contact.form.message} <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder={t.contact.form.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t.contact.form.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
