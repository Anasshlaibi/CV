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
  en: "I eliminate industrial bottlenecks by deploying 'Systems-as-a-Server'—autonomous sales engines and secure AI-database architectures. My background in Physics provides the unique structural logic to solve complex system failures, while my Data Marketing expertise ensures every loop generates measurable ROI.",
  fr: "J'élimine les goulots d'étranglement industriels en déployant des 'Systèmes-en-tant-que-Serveur'—des moteurs de vente autonomes et des architectures IA-données sécurisées. Mon parcours en Physique apporte la logique structurelle pour résoudre les défaillances de systèmes complexes, tandis que mon expertise en Marketing Data assure un ROI mesurable.",
};

export const HERO_TITLE: LocalizedString = {
  en: "Solutions Architect | AI Operations & Data Strategy",
  fr: "Architecte Solutions | Opérations IA & Stratégie Data",
};

export const CTA_TEXT: LocalizedString = {
  en: "Download Portfolio",
  fr: "Télécharger Portfolio",
};

export const MODE_LABELS: Record<string, LocalizedString> = {
  all: { en: "Full Architecture", fr: "Architecture Complète" },
  growth: { en: "AI Ops & ROI", fr: "Opérations IA & ROI" },
  operations: { en: "Systems-as-a-Server", fr: "Systèmes-en-tant-que-Serveur" },
  creative: { en: "Industrial Standards", fr: "Normes Industrielles" },
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
  tag: { en: "Technical Philosophy", fr: "Philosophie Technique" },
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "chada-alyasmin",
    title: {
      en: "Enterprise B2B Sales Ecosystem (Chada Alyasmin)",
      fr: "Écosystème de Vente B2B Entreprise (Chada Alyasmin)",
    },
    role: {
      en: "Senior Solutions Architect",
      fr: "Architecte Solutions Senior",
    },
    metric: {
      en: "Zero-Friction Pipeline",
      fr: "Pipeline Sans Friction",
    },
    categories: ["growth", "operations"],
    description: {
      en: "Architected a high-end B2B ecosystem for Ste Chada. Powered by a Google Vertex AI Brain (Gemini 2.0 Flash) acting as a Senior technical sales consultant with multilingual intelligent cross-selling. Features an autonomous real-time link between Supabase (PG) and AI knowledge bases with zero-friction automated PDF quote generation and intelligent sales-office routing. Secured with Enterprise-Grade Service Accounts.",
      fr: "Conception d'un écosystème B2B d'entreprise pour Ste Chada. Piloté par une IA Vertex (Gemini 2.0 Flash) agissant comme consultant technique senior avec cross-selling intelligent. Lien autonome Supabase/IA et génération de devis PDF automatisée sans friction. Sécurisé par des Comptes de Service d'entreprise.",
    },
    tags: ["Vertex AI", "Supabase", "React", "Enterprise Security"],
    link: "https://chadaalyasminma.vercel.app/fr",
  },
  {
    id: "softstore-architecture",
    title: { en: "SoftStore Data Ecosystem", fr: "Écosystème Data SoftStore" },
    role: { en: "Systems Architect", fr: "Architecte Systèmes" },
    metric: { en: "Sheet-to-Site Logic", fr: "Logique Sheet-to-Site" },
    categories: ["operations", "data"],
    description: {
      en: "Architected a production-ready Sheet-to-Site ecosystem where Google Sheets acts as a live PostgreSQL-alternative for real-time inventory management. Built for high operational speed and low-friction scalability for the lighting industry.",
      fr: "Architecture d'un écosystème Sheet-to-Site où Google Sheets sert d'alternative PostgreSQL pour la gestion d'inventaire en temps réel. Conçu pour une haute vitesse opérationnelle dans le secteur de l'éclairage.",
    },
    tags: ["System Architecture", "Real-time Sync", "Data Orchestration"],
    link: "https://softstore-professional-lighting.vercel.app/",
  },
  {
    id: "siemens-industrial",
    title: {
      en: "Industrial Standard Systems",
      fr: "Systèmes aux Normes Industrielles",
    },
    role: {
      en: "Technical Media & Industrial Standards Consultant",
      fr: "Consultant Médias Techniques & Normes Industrielles",
    },
    metric: { en: "100% Brand Compliance", fr: "100% Conformité Marque" },
    categories: ["creative"],
    description: {
      en: "Consulted on industrial documentation and technical media for Siemens, Marsa Maroc, and ONDE. Focused on strict compliance with Global Brand Guidelines and large-scale corporate infrastructure standards.",
      fr: "Conseil en documentation industrielle et médias techniques pour Siemens, Marsa Maroc et ONDE. Focus sur la conformité stricte aux directives de marque mondiales et aux standards d'infrastructure corporate.",
    },
    tags: ["Siemens", "Marsa Maroc", "Compliance", "Global Brand Guidelines"],
  },
  {
    id: "verdanov-crm",
    title: {
      en: "Global CRM Architecture",
      fr: "Architecture CRM Globale",
    },
    role: {
      en: "Senior Full-Stack Architect",
      fr: "Architecte Full-Stack Senior",
    },
    metric: {
      en: "ROI-Focused Data Flows",
      fr: "Flux de Données Axés ROI",
    },
    categories: ["operations", "growth"],
    description: {
      en: "Designed the Bitrix24 CRM infrastructure and managed end-to-end import data flows from China. Built custom automation layers to synchronize supply chain logistics with sales pipelines.",
      fr: "Conception de l'infrastructure CRM Bitrix24 et gestion des flux de données importés de Chine. Construction de couches d'automatisation pour synchroniser la logistique avec les pipelines de vente.",
    },
    tags: ["Bitrix24", "China Import", "Automation", "CRM Architecture"],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "verdanov-ops",
    role: {
      en: "Senior Full-Stack Architect",
      fr: "Architecte Full-Stack Senior",
    },
    company: "Verdanov / Bicshop",
    period: "2021 – Present",
    location: "Casablanca",
    categories: ["operations", "growth"],
    description: {
      en: "Designing end-to-end CRM architectures and data flows between China and Morocco. Implementing 'Systems-as-a-Server' logic to automate supply chain and sales synchronization.",
      fr: "Conception d'architectures CRM et de flux de données Chine-Maroc. Mise en œuvre de la logique 'Systems-as-a-Server' pour automatiser la synchronisation logistique et vente.",
    },
    achievements: [
      {
        en: "Architected Bitrix24 CRM infrastructure for complex cross-continent import data flows.",
        fr: "Architecture de l'infrastructure CRM Bitrix24 pour les flux de données d'importation transcontinentaux.",
      },
      {
        en: "Built custom Python automation reducing data friction in order processing by 40%.",
        fr: "Construction d'automatisations Python réduisant les frictions de données de 40%.",
      },
      {
        en: "Established industrial synchronization between supplier APIs and sales channels.",
        fr: "Établissement d'une synchronisation industrielle entre les APIs fournisseurs et les canaux de vente.",
      },
    ],
    techStack: [
      "Bitrix24 Architecture",
      "Python",
      "API Orchestration",
      "Data Sync",
    ],
  },
  {
    id: "industrial-media-partner",
    role: {
      en: "Technical Media & Industrial Standards Consultant",
      fr: "Consultant Médias Techniques & Normes Industrielles",
    },
    company: "Freelance (Siemens, Marsa Maroc, ONDE)",
    period: "2020 – Present",
    location: "Casablanca",
    categories: ["creative"],
    description: {
      en: "Bridging the gap between complex industrial infrastructure and Global Brand Guidelines. Focused on high-stakes documentation and technical compliance.",
      fr: "Lien entre infrastructure industrielle complexe et directives de marque mondiales. Focus sur la documentation de haut niveau et la conformité technique.",
    },
    achievements: [
      {
        en: "Ensured 100% compliance with Siemens Global Brand Standards for technical assets.",
        fr: "Conformité 100% avec les standards de marque mondiaux Siemens pour les actifs techniques.",
      },
      {
        en: "Developed industrial media workflows for large-scale corporate infrastructure projects.",
        fr: "Développement de workflows médias industriels pour des projets d'infrastructure corporate à grande échelle.",
      },
    ],
    techStack: ["Industrial Media", "Brand Equity", "Corporate Compliance"],
  },
];

export const SKILLS_DATA: Skill[] = [
  { name: "Systems Architecture", level: 98, category: "operations" },
  { name: "AI Ops (Vertex AI/Gemini)", level: 95, category: "data" },
  { name: "Database Design (Postgres)", level: 100, category: "operations" },
  { name: "Python Systems", level: 92, category: "operations" },
  { name: "React / Next.js", level: 90, category: "growth" },
  { name: "CRM Ops (Bitrix24)", level: 95, category: "operations" },
  { name: "Industrial Standards", level: 100, category: "creative" },
  { name: "Theoretical Logic (Physics)", level: 95, category: "data" },
  { name: "ROI Orchestration", level: 94, category: "growth" },
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
      en: "Bachelor in Marketing & Data Analytics",
      fr: "Licence en Marketing & Analyse de Données",
    },
    school: "Sup'RH Casablanca",
    year: "2023 - Present (3rd Year)",
    description: {
      en: "Focusing on Data Strategy and AI Operations. Applying structural logic to business bottlenecks.",
      fr: "Focus sur la Stratégie Data et les Opérations IA. Application de la logique structurelle aux blocages business.",
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
      en: "Foundation for multi-variate analysis and technical resilience in systems design.",
      fr: "Base de l'analyse multivariée et de la résilience technique dans la conception de systèmes.",
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
