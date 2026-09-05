/**
 * Projets phares — descriptions bilingues, tags techniques et liens.
 * Les clés `icon` et `accent` sont interprétées par <ProjectCard />.
 */
export const projectsData = [
  {
    id: 'carburflow',
    title: 'CarburFlow',
    icon: 'Fuel',
    accent: 'blue',
    badge: { fr: 'Projet SaaS', en: 'SaaS Project' },
    description: {
      fr: "Solution SaaS complète de gestion et d'optimisation de la consommation de carburant et de suivi des flux logistiques. Conçue avec une architecture moderne découpée entre un backend robuste (Django/Python) et une interface web ultra-réactive (React + Vite).",
      en: 'Complete SaaS solution for managing and optimizing fuel consumption while tracking logistics flows in real time. Built with a modern architecture split between a robust backend (Django/Python) and an ultra-reactive web interface (React + Vite).',
    },
    techs: ['React', 'Vite', 'Django', 'Python', 'REST API', 'Tailwind CSS'],
    github: 'https://github.com/nkoumougrinnel/carburflow.git',
    demo: null, // Mettez l'URL Vercel/tunnel si vous avez un lien live public, sinon null
    featured: true,
  },
  {
    id: 'gblrecover',
    title: 'GBLRecover',
    icon: 'DatabaseBackup',
    accent: 'indigo',
    badge: { fr: 'Projet Entreprise · Camtel', en: 'Enterprise Project · Camtel' },
    description: {
      fr: "Application critique d'entreprise développée pour l'opérateur télécom Camtel. Solution de récupération, sauvegarde et gestion sécurisée de données réseaux et utilisateurs, garantissant la résilience des flux opérationnels.",
      en: 'Mission-critical enterprise application developed for telecom operator Camtel. A secure solution for recovering, backing up and managing network and user data, guaranteeing the resilience of operational flows.',
    },
    techs: ['React', 'Node.js', 'Python / Django', 'Git / GitHub', 'Security & Data Recovery'],
    github: 'https://github.com/DanielBeni-tech/gblrecover.git',
    demo: null, // Projet d'entreprise interne (pas de démo publique)
    featured: true,
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio V2',
    icon: 'Globe',
    accent: 'blue',
    badge: { fr: 'Projet Personnel', en: 'Personal Project' },
    description: {
      fr: 'Portfolio dynamique bilingue (FR/EN) avec architecture réactive, design system sombre sur-mesure, déploiement continu et composants 100 % réutilisables.',
      en: 'Dynamic bilingual (FR/EN) portfolio with a reactive architecture, a custom dark design system, continuous deployment and 100% reusable components.',
    },
    techs: ['React', 'Vite', 'Tailwind CSS v4', 'Lucide Icons', 'i18n FR/EN'],
    github: 'https://github.com/003bnb/portfolio',
    demo: 'https://portfolio-003bnb.vercel.app', // Votre futur lien Vercel
    featured: false,
  },
];