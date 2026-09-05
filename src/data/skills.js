/**
 * Compétences regroupées par catégories.
 * La clé `icon` est interprétée par <Skills /> (icône Lucide).
 */
export const skillsData = [
  {
    id: 'frontend',
    icon: 'Layout',
    title: { fr: 'Frontend', en: 'Frontend' },
    description: {
      fr: 'Interfaces modernes, réactives et accessibles.',
      en: 'Modern, reactive and accessible interfaces.',
    },
    skills: [
      'React',
      'Vite',
      'JavaScript (ES6+)',
      'Tailwind CSS v4',
      'HTML5 / CSS3',
      'Responsive Design',
    ],
  },
  {
    id: 'backend',
    icon: 'Server',
    title: { fr: 'Backend', en: 'Backend' },
    description: {
      fr: 'APIs robustes et architectures fiables.',
      en: 'Robust APIs and reliable architectures.',
    },
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'Node.js',
      'REST API',
      'PostgreSQL / SQLite',
    ],
  },
  {
    id: 'tools',
    icon: 'Wrench',
    title: { fr: 'Outils & Cloud', en: 'Tools & Cloud' },
    description: {
      fr: 'Un environnement de travail efficace, du terminal au déploiement.',
      en: 'An efficient workflow, from terminal to deployment.',
    },
    skills: ['Git / GitHub', 'Termux', 'Linux', 'VS Code', 'Vercel / Netlify', 'Postman'],
  },
];
