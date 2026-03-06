import {
  ExperienceItem,
  Project,
  Skill,
  LocalizedString,
  EducationItem,
  TestimonialItem,
} from "./types";
import { BarChart3, Box, PenTool, Database, Globe, Zap } from "lucide-react";

export const INTRO: LocalizedString = {
  en: "I eliminate operational bottlenecks by deploying autonomous sales engines and secure AI-database architectures. My background in Physics provides the structural logic to solve failures, while my Data Marketing degree ensures every system I build generates measurable ROI.",
  fr: "J'élimine les goulots d'étranglement opérationnels en déployant des moteurs de vente autonomes et des architectures base de données-IA sécurisées. Mon parcours en Physique apporte la logique structurelle, tandis que mon diplôme en Marketing Data assure un ROI mesurable.",
};

export const HERO_TITLE: LocalizedString = {
  en: "Solutions Architect | AI Operations & Data Strategy",
  fr: "Architecte Solutions | Opérations IA & Stratégie Data",
};

export const CTA_TEXT: LocalizedString = {
  en: "Download CV",
  fr: "Télécharger CV",
};

export const MODE_LABELS: Record<string, LocalizedString> = {
  all: { en: "Full Systems View", fr: "Vue Systèmes Complète" },
  growth: { en: "AI Ops & ROI", fr: "Opérations IA & ROI" },
  operations: { en: "Architecture & Data", fr: "Architecture & Data" },
  creative: { en: "Industrial Media", fr: "Média Industriel" },
};

export const VIBE_CODING_DATA = {
  title: { en: "Vibe Coding", fr: "Vibe Coding" },
  subtitle: {
    en: "Enterprise AI Orchestration",
    fr: "Orchestration IA Entreprise",
  },
  description: {
    en: "Building technical resilience through AI-native workflows (Vertex AI, Gemini 2.0 Flash). I architect autonomous systems that bridge the gap between complex data and business execution.",
    fr: "Construction de la résilience technique via des flux de travail natifs IA (Vertex AI, Gemini 2.0 Flash). J'architecture des systèmes autonomes reliant les données complexes à l'exécution commerciale.",
  },
  tag: { en: "Core Philosophy", fr: "Philosophie Centrale" },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "chada-alyasmin",
    title: {
      en: "Chada Alyasmin Sales Engine",
      fr: "Moteur de Vente Chada Alyasmin",
    },
    role: { en: "Lead Architect", fr: "Architecte Principal" },
    metric: { en: "Autonomous Sales Flow", fr: "Flux de Vente Autonome" },
    categories: ["growth", "operations"],
    description: {
      en: "Enterprise-grade B2B ecosystem featuring a multilingual AI Consultant (French, English, Darija) powered by Gemini 2.0 Flash and Supabase. Automated the entire funnel from technical Q&A to PDF quote generation, ensuring 100% data sync and secure API orchestration.",
      fr: "Écosystème B2B de classe entreprise incluant un Consultant IA multilingue (Français, Anglais, Darija) propulsé par Gemini 2.0 Flash et Supabase. Automatisation du tunnel complet, de la Q&A technique à la génération de devis PDF.",
    },
    tags: ["Vertex AI", "Supabase", "React", "Enterprise Security"],
    link: "https://chadaalyasminma.vercel.app/fr",
  },
  {
    id: "siemens-industrial",
    title: {
      en: "Industrial Standard Media",
      fr: "Média aux Normes Industrielles",
    },
    role: {
      en: "Technical Standards Partner",
      fr: "Partenaire Normes Techniques",
    },
    metric: { en: "100% Compliance", fr: "100% Conformité" },
    categories: ["creative"],
    description: {
      en: "Delivered high-stakes industrial documentation and visual assets for Siemens, Marsa Maroc, and ONDE. Specialized in strict adherence to Global Brand Guidelines and industrial safety standards.",
      fr: "Livraison de documentation industrielle et d'actifs visuels pour Siemens, Marsa Maroc et ONDE. Spécialisation dans le respect strict des directives de marque et des normes de sécurité industrielle.",
    },
    tags: ["Compliance", "Industrial Safety", "Global Brand Guidelines"],
  },
  {
    id: "softstore-architecture",
    title: { en: "SoftStore Data Ecosystem", fr: "Écosystème Data SoftStore" },
    role: { en: "System Architect", fr: "Architecte Système" },
    metric: { en: "Zero-Latency Update", fr: "Mise à jour sans latence" },
    categories: ["operations"],
    description: {
      en: "Architected a Sheet-to-Site ecosystem where Google Sheets acts as a live PostgreSQL-alternative for real-time inventory management. Built for high operational speed and low-friction scalability.",
      fr: "Architecture d'un écosystème Sheet-to-Site où Google Sheets sert d'alternative PostgreSQL pour la gestion d'inventaire en temps réel. Conçu pour une haute vitesse opérationnelle.",
    },
    tags: ["System Architecture", "Real-time Sync", "Data Orchestration"],
    link: "https://softstore-professional-lighting.vercel.app/",
  },
  {
    id: "verdanov-crm",
    title: {
      en: "Verdanov CRM Infrastructure",
      fr: "Infrastructure CRM Verdanov",
    },
    role: { en: "Head of Operations", fr: "Responsable Opérations" },
    metric: {
      en: "End-to-End Data Flow",
      fr: "Flux de Données de Bout en Bout",
    },
    categories: ["operations", "growth"],
    description: {
      en: "Architected the Bitrix24 CRM server and managed complex import/export data flows from China. Optimized lead conversions through custom automation scripts and data-driven pipeline management.",
      fr: "Architecture du serveur CRM Bitrix24 et gestion des flux de données import/export complexes depuis la Chine. Optimisation des conversions via des scripts d'automatisation personnalisés.",
    },
    tags: ["Bitrix24", "Import/Export", "Automation", "CRM Architecture"],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "verdanov-ops",
    role: { en: "Head of Operations", fr: "Responsable des Opérations" },
    company: "Verdanov / Bicshop",
    period: "2021 – Present",
    location: "Casablanca",
    categories: ["operations", "growth"],
    description: {
      en: "Architecting end-to-end operational systems and data flows. Responsible for technical resilience and ROI-focused automation for e-commerce and import/export ventures.",
      fr: "Architecture des systèmes opérationnels et des flux de données. Responsable de la résilience technique et de l'automatisation axée sur le ROI pour l'e-commerce et l'import/export.",
    },
    achievements: [
      {
        en: "Architected Bitrix24 CRM server to manage complex cross-continent data flows (China-Morocco).",
        fr: "Architecture du serveur CRM Bitrix24 pour gérer les flux de données transcontinentaux complexes (Chine-Maroc).",
      },
      {
        en: "Deployed custom automation that reduced order processing latency by 40%.",
        fr: "Déploiement d'automatisations personnalisées réduisant la latence de traitement des commandes de 40%.",
      },
      {
        en: "Integrated real-time inventory tracking linking supplier APIs to front-end sales channels.",
        fr: "Intégration du suivi d'inventaire en temps réel reliant les APIs fournisseurs aux canaux de vente front-end.",
      },
    ],
    techStack: [
      "CRM Architecture",
      "Python",
      "API Orchestration",
      "Supply Chain",
    ],
  },
  {
    id: "industrial-media-partner",
    role: {
      en: "Technical Media & Standards Partner",
      fr: "Partenaire Média & Normes Techniques",
    },
    company: "Freelance (Siemens, Marsa Maroc, ONDE)",
    period: "2020 – Present",
    location: "Casablanca",
    categories: ["creative"],
    description: {
      en: "Specializing in high-stakes industrial documentation and visual communication that bridges technical complexity with corporate compliance.",
      fr: "Spécialisation dans la documentation industrielle de haut niveau et la communication visuelle reliant complexité technique et conformité entreprise.",
    },
    achievements: [
      {
        en: "Maintained 100% compliance with strict Global Brand Guidelines for Fortune 500 industrial clients.",
        fr: "Maintien d'une conformité de 100% avec les directives de marque mondiales strictes pour des clients industriels du Fortune 500.",
      },
      {
        en: "Produced technical documentation visuals for large-scale port operations at Marsa Maroc.",
        fr: "Production de visuels de documentation technique pour les opérations portuaires d'envergure chez Marsa Maroc.",
      },
    ],
    techStack: ["Industrial Standards", "Visual Production", "Compliance"],
  },
];

export const SKILLS_DATA: Skill[] = [
  { name: "AI Orchestration (Vertex AI)", level: 95, category: "data" },
  {
    name: "Database Architecture (PostgreSQL)",
    level: 90,
    category: "operations",
  },
  { name: "Python (Automation)", level: 92, category: "operations" },
  { name: "Systems Architecture", level: 95, category: "operations" },
  { name: "React / Next.js", level: 88, category: "growth" },
  { name: "ROI Optimization", level: 94, category: "growth" },
  { name: "Data Analytics (SPSS/Excel)", level: 90, category: "data" },
  { name: "CRM Architecture (Bitrix24)", level: 92, category: "operations" },
  { name: "Industrial Standards", level: 90, category: "creative" },
  { name: "Meta Certified Media Buying", level: 85, category: "growth" },
];

export const CATEGORY_ICONS = {
  growth: BarChart3,
  operations: Box,
  creative: PenTool,
  all: Globe,
};

export const CV_URL = "/AnassHlaibi-Growth-CV.pdf";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/anass-hlaibi-316434244";

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bachelors-marketing",
    degree: {
      en: "Bachelor in Marketing & Digital Strategies",
      fr: "Licence en Marketing & Stratégies Digitales",
    },
    school: "Sup'RH Casablanca",
    year: "2023 - Present",
    description: {
      en: "Specializing in Data Marketing and Digital Transformation. Applying structural logic to business problems.",
      fr: "Spécialisation en Marketing Data et Transformation Digitale. Application de la logique structurelle aux problèmes business.",
    },
  },
  {
    id: "physics-logic",
    degree: {
      en: "Bachelor in Physics (Theoretical Logic)",
      fr: "Licence en Physique (Logique Théorique)",
    },
    school: "University of Science",
    year: "2021",
    description: {
      en: "Provided the mental framework for multi-variate analysis and technical problem solving.",
      fr: "Formation au cadre mental de l'analyse multivariée et de la résolution de problèmes techniques.",
    },
  },
];

export const STATUS_DATA = {
  en: "🎯 Actively seeking PFE Internship 2026 | Focus: Data Analysis, AI Ops, or Digital Transformation.",
  fr: "🎯 En recherche active de Stage PFE 2026 | Focus: Data Analysis, AI Ops, ou Transformation Digitale.",
};
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Karim B.",
    role: { en: "CEO", fr: "PDG" },
    company: "Verdanove",
    content: {
      en: "Anass transformed our chaotic supply chain into a well-oiled machine. His data-driven approach saved us 30% in operational costs.",
      fr: "Anass a transformé notre chaîne logistique chaotique en une machine bien huilée. Son approche basée sur les données nous a fait économiser 30% de coûts opérationnels.",
    },
  },
  {
    id: "t2",
    name: "Sarah L.",
    role: { en: "Marketing Director", fr: "Directrice Marketing" },
    company: "Ste Chada",
    content: {
      en: "The automated recruitment funnel he built was a game changer. We went from drowning in CVs to interviewing only top candidates.",
      fr: "Le tunnel de recrutement automatisé qu'il a construit a changé la donne. Nous sommes passés de la noyade sous les CVs à l'entretien des seuls meilleurs candidats.",
    },
  },
];
