# Portfolio Bilingue FR/EN — Développeur Full-Stack

Portfolio moderne, réactif et bilingue construit avec **React (Vite)**, **Tailwind CSS v4** et **Lucide React**.

## ✨ Fonctionnalités

- 🌍 **Bilinguisme instantané FR ↔ EN** via un React Context (`LanguageContext`) et un switcher élégant dans la navbar.
- 🧩 **Sections** : Hero animé, Projets phares (CarburFlow, GBLRecover/Camtel, Portfolio V2), Compétences, Témoignages, Contact, Footer.
- 🌙 **Dark mode élégant** : slate-900, cartes glassmorphism `slate-800/80`, accents `blue-500` / `indigo-500`.
- 📱 **100 % responsive** (Mobile First) avec menu burger animé.
- 📄 **Téléchargement de CV** (`public/cv.pdf`) avec attribut `download`.

## 🚀 Démarrage rapide

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualisation du build
```

## 🗂 Structure

```
src/
├── components/        # Navbar, Hero, Projects, Skills, Testimonials, Contact, Footer…
├── context/           # LanguageContext.jsx (état global FR/EN)
├── data/              # translations.js, projects.js, testimonials.js, skills.js, profile.js
├── App.jsx            # Assemblage des sections
├── index.css          # Import Tailwind v4 + thème personnalisé
└── main.jsx           # Point d'entrée
```

## 🛠 Personnalisation

| Quoi | Fichier |
| --- | --- |
| Nom, e-mail, réseaux sociaux, CV | `src/data/profile.js` |
| Tous les textes (FR / EN) | `src/data/translations.js` |
| Projets (descriptions, tags, liens) | `src/data/projects.js` |
| Témoignages | `src/data/testimonials.js` |
| Compétences par catégorie | `src/data/skills.js` |
| CV téléchargeable | Remplacer `public/cv.pdf` (placeholder fourni) |

## 📮 Formulaire de contact

L'envoi est **simulé** (état de chargement + message de succès). Pour le brancher sur un vrai
service, remplacez le `setTimeout` dans `handleSubmit` (`src/components/Contact.jsx`) par un
appel à votre API ou à un service comme EmailJS / Formspree.

## 📄 Licence

Usage personnel — personnalisez librement.
