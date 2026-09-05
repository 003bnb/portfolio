import { MessageSquareQuote, Quote, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { testimonialsData } from '../data/testimonials';

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={MessageSquareQuote}
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          highlight={t.testimonials.titleHighlight}
          subtitle={t.testimonials.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonialsData.map((item) => (
            <figure
              key={item.id}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-700/80 bg-slate-800/80 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <Quote
                aria-hidden="true"
                className="absolute top-6 right-6 h-8 w-8 text-slate-700 transition-colors duration-300 group-hover:text-blue-500/40"
              />

              <Stars count={item.rating} />

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
                « {item.quote[language]} »
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-700/60 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-indigo-600 font-display text-sm font-bold text-white shadow-lg shadow-blue-500/25">
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {item.role[language]} · {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
