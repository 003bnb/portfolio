/**
 * En-tête de section réutilisable : badge, titre avec mot accentué
 * en dégradé et sous-titre.
 */
export default function SectionHeading({ icon: Icon, badge, title, highlight, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
        {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
        {badge}
      </span>
      <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}{' '}
        <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p> : null}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-blue-500 to-indigo-500" />
    </div>
  );
}
