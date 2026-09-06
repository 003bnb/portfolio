/**
 * Dictionnaire complet des textes statiques du site (FR / EN).
 * Accessible via le hook `useLanguage()` : const { t } = useLanguage();
 */
export const translations = {
  fr: {
    nav: {
      projects: 'Projets',
      skills: 'Compétences',
      testimonials: 'Témoignages',
      contact: 'Contact',
      downloadCv: 'Télécharger CV',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      language: 'Choix de la langue',
    },
    hero: {
      status: 'Disponible pour de nouveaux projets',
      greeting: 'Bonjour, je suis',
      titleLine1: 'Développeur',
      titleLine2: 'Full-Stack & Web',
      description:
        "Je conçois et déploie des solutions sur-mesure — applications SaaS, outils critiques pour les télécoms et expériences web modernes. Mon objectif : transformer des idées ambitieuses en produits performants, fiables et élégants.",
      basedIn: 'Basé à',
      ctaProjects: 'Explorer mes projets',
      ctaCv: 'Télécharger mon CV',
      customTag: 'Solutions sur-mesure',
      socials: {
        github: 'Profil GitHub',
        linkedin: 'Profil LinkedIn',
        email: "M'envoyer un e-mail",
      },
      stats: {
        years: "Années d'expérience",
        projects: 'Projets livrés',
        sectors: "Secteurs d'expertise",
      },
    },
    projects: {
      badge: 'Portfolio',
      title: 'Projets',
      titleHighlight: 'Phares',
      subtitle:
        "Une sélection de réalisations qui illustre ma maîtrise du développement web moderne et de l'architecture logicielle, du SaaS aux systèmes critiques.",
    },
    projectsCard: {
      viewCode: 'Code source',
      viewDemo: 'Démo live',
      private: 'Accès restreint',
    },
    skills: {
      badge: 'Expertise',
      title: 'Compétences',
      titleHighlight: 'Techniques',
      subtitle: 'Un socle technique solide, du pixel à la base de données.',
    },
    testimonials: {
      badge: 'Confiance',
      title: 'Témoignages &',
      titleHighlight: 'Recommandations',
      subtitle: 'Ce que mes clients et collaborateurs disent de nos collaborations.',
    },
    contact: {
      badge: 'Contact',
      title: 'Restons en',
      titleHighlight: 'contact',
      subtitle:
        'Un projet en tête ? Une idée à concrétiser ? Écrivez-moi, je réponds généralement sous 24 h.',
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Votre nom',
        email: 'Adresse e-mail',
        emailPlaceholder: 'vous@exemple.com',
        subject: 'Sujet',
        subjectPlaceholder: 'Opportunité, collaboration, question…',
        message: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet, de vos besoins et de vos délais…',
        send: 'Envoyer le message',
        sending: 'Envoi en cours…',
        success: 'Message envoyé avec succès !',
        successSub: 'Merci pour votre message, je vous répondrai dans les plus brefs délais.',
        error: 'Veuillez remplir tous les champs obligatoires.',
        sendError:
          "Une erreur est survenue lors de l'envoi. Vérifiez votre connexion ou écrivez-moi directement par e-mail.",
      },
      info: {
        title: 'Informations',
        email: 'E-mail',
        location: 'Localisation',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        availability: 'Statut',
        availabilityValue: 'Ouvert aux nouvelles opportunités',
      },
    },
    footer: {
      tagline: 'Conçu et développé avec passion.',
      rights: 'Tous droits réservés.',
      backToTop: 'Retour en haut',
    },
  },

  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      testimonials: 'Testimonials',
      contact: 'Contact',
      downloadCv: 'Download CV',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language selection',
    },
    hero: {
      status: 'Available for new projects',
      greeting: "Hi, I'm",
      titleLine1: 'Full-Stack',
      titleLine2: '& Web Developer',
      description:
        'I design and ship tailored solutions — SaaS applications, mission-critical telecom tools and modern web experiences. My goal: turning ambitious ideas into fast, reliable and elegant products.',
      basedIn: 'Based in',
      ctaProjects: 'Explore my projects',
      ctaCv: 'Download my CV',
      customTag: 'Tailored solutions',
      socials: {
        github: 'GitHub profile',
        linkedin: 'LinkedIn profile',
        email: 'Send me an email',
      },
      stats: {
        years: 'Years of experience',
        projects: 'Projects delivered',
        sectors: 'Areas of expertise',
      },
    },
    projects: {
      badge: 'Portfolio',
      title: 'Featured',
      titleHighlight: 'Projects',
      subtitle:
        'A selection of work showcasing my command of modern web development and software architecture, from SaaS platforms to mission-critical systems.',
    },
    projectsCard: {
      viewCode: 'Source code',
      viewDemo: 'Live demo',
      private: 'Restricted access',
    },
    skills: {
      badge: 'Expertise',
      title: 'Technical',
      titleHighlight: 'Skills',
      subtitle: 'A solid technical foundation, from pixel to database.',
    },
    testimonials: {
      badge: 'Trust',
      title: 'Testimonials &',
      titleHighlight: 'Recommendations',
      subtitle: 'What my clients and collaborators say about working with me.',
    },
    contact: {
      badge: 'Contact',
      title: 'Get in',
      titleHighlight: 'touch',
      subtitle:
        'Got a project in mind? An idea to bring to life? Drop me a line — I usually reply within 24 hours.',
      form: {
        name: 'Full name',
        namePlaceholder: 'Your name',
        email: 'Email address',
        emailPlaceholder: 'you@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Opportunity, collaboration, question…',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project, your needs and your timeline…',
        send: 'Send message',
        sending: 'Sending…',
        success: 'Message sent successfully!',
        successSub: 'Thank you for your message, I will get back to you shortly.',
        error: 'Please fill in all required fields.',
        sendError:
          'Something went wrong while sending. Check your connection or email me directly instead.',
      },
      info: {
        title: 'Information',
        email: 'Email',
        location: 'Location',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        availability: 'Status',
        availabilityValue: 'Open to new opportunities',
      },
    },
    footer: {
      tagline: 'Designed and built with passion.',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
};
