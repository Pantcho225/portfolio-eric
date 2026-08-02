export const projects = [
  {
    id: 1,

    featured: true,

    title: "SaaS Gestion de copropriété",

    category: "Application SaaS",

    year: "2026",

    status: "Projet terminé",

    duration: "Développement sur plusieurs mois",

    image: "/images/copropriete.png",

    shortDescription:
      "Plateforme SaaS professionnelle développée pour digitaliser la gestion des copropriétés.",

    description:
      "Application web complète destinée aux syndics et aux copropriétaires. Elle centralise la gestion des copropriétaires, des lots, des appels de fonds, des paiements, des assemblées générales, des documents et de la comptabilité dans une interface moderne et sécurisée.",

    technologies: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Axios"
    ],

    highlights: [
      "Gestion des copropriétaires",
      "Gestion des lots",
      "Appels de fonds",
      "Paiements",
      "Assemblées générales",
      "Comptabilité",
      "Génération de documents PDF",
      "API REST sécurisée"
    ],

    architecture: [
      "Frontend React",
      "Backend Django",
      "API REST",
      "Base PostgreSQL"
    ],

    github: "#",

    demo: "#",

    caseStudy: "#etude-de-cas"
  },

  {
    id: 2,

    featured: false,

    title: "ImportIQ",

    category: "Application d'aide à l'importation",

    year: "En cours",

    status: "En développement",
    
    development: true,

    duration: "Projet personnel",

    image: "/images/importiq.png",

    shortDescription:
      "Plateforme intelligente destinée aux importateurs.",

    description:
      "ImportIQ est un projet visant à aider les entreprises importatrices à estimer automatiquement les coûts liés aux opérations d'importation grâce à l'automatisation et à l'intelligence artificielle.",

  technologies: [
  "React",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "Django",
  "PostgreSQL",
  "OpenAI API"
],

   highlights: [
  "Estimation automatique des coûts d'importation",
  "Calcul prévisionnel des droits et taxes",
  "Analyse intelligente des factures fournisseurs",
  "Gestion des dossiers d'importation",
  "Suivi des expéditions",
  "Tableaux de bord analytiques",
  "Assistant IA pour les importateurs",
  "Génération de rapports"
],

    architecture: [
  "Frontend React + Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Backend Django REST Framework",
  "Authentification JWT",
  "API REST",
  "PostgreSQL"
],

stats: {
  screens: "30+",
  modules: "8",
  responsive: "100%",
  api: "REST"
},

    github: "#",

    demo: "#",

    caseStudy: "#"
  }
];