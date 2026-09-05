import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ⚠️ REMPLACEZ CES 3 VALEURS PAR VOS VRAIS IDENTIFIANTS EMAILJS
const EMAILJS_SERVICE_ID = 'service_003bnb';
const EMAILJS_TEMPLATE_ID = 'template_003bnb';
const EMAILJS_PUBLIC_KEY = 'gZD-tuykCzdVJ6B_5';

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    // Envoi effectif du formulaire via EmailJS
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ submitting: false, success: true, error: false });
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error('Erreur EmailJS:', error);
          setStatus({ submitting: false, success: false, error: true });
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-8 max-w-4xl mx-auto">
      <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-8 backdrop-blur-md shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          {t('contact.title')}
        </h2>

        {status.success && (
          <div className="mb-6 p-4 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-lg flex items-center gap-3">
            <CheckCircle size={20} />
            <span>{t('contact.successMessage')}</span>
          </div>
        )}

        {status.error && (
          <div className="mb-6 p-4 bg-rose-950/80 border border-rose-800 text-rose-300 rounded-lg flex items-center gap-3">
            <AlertCircle size={20} />
            <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1">
                {t('contact.name')}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">
                {t('contact.email')}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-1">
              {t('contact.subject')}
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm mb-1">
              {t('contact.message')}
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-colors w-full md:w-auto disabled:opacity-50"
          >
            {status.submitting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Envoi...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>{t('contact.send')}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}