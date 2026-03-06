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
  en: "Data-driven Marketing Strategist blending the analytical rigor of a Physics background with 3+ years of entrepreneurial success. Proven expert in converting market data into actionable growth strategies. Final-year student at Sup'RH Casablanca and Co-founder of Verdanov, specializing in Growth & Operations through a unique lens of data analytics and visual storytelling.",
  fr: "Stratège Marketing orienté données, alliant la rigueur analytique d'un parcours en Physique à plus de 3 ans de succès entrepreneurial. Expert dans la conversion des données de marché en stratégies de croissance concrètes. Étudiant en dernière année à Sup'RH Casablanca et co-fondateur de Verdanov.",
};

export const HERO_TITLE: LocalizedString = {
  en: "Marketing Strategist & Data Analyst",
  fr: "Stratège Marketing & Analyste de Données",
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
    id: "softstore-lighting",
    title: {
      en: "SoftStore Lighting: Sheet-to-Site Ecosystem",
      fr: "SoftStore Lighting : Écosystème Sheet-to-Site",
    },
    role: { en: "Lead Developer", fr: "Développeur Principal" },
    metric: { en: "Instant Data Sync", fr: "Sync Data Instantanée" },
    categories: ["operations", "growth"],
    description: {
      en: "Built a high-performance e-commerce frontend where a custom Sheet-to-Site integration replaces traditional CMS, allowing instant inventory management directly from Google Sheets without manual code.",
      fr: "Développement d'un frontend e-commerce haute performance où une intégration personnalisée Sheet-to-Site remplace le CMS traditionnel, permettant une gestion d'inventaire instantanée via Google Sheets.",
    },
    tags: ["Google Sheets API", "Automation", "React", "System Architecture"],
    link: "https://softstore-professional-lighting.vercel.app/",
  },
  {
    id: "siemens-industrial",
    title: {
      en: "Siemens Industrial: Corporate Identity",
      fr: "Siemens Industrial : Identité Corporative",
    },
    role: { en: "Visual Strategist", fr: "Stratège Visuel" },
    metric: { en: "Brand Compliance", fr: "Conformité d'Image" },
    categories: ["creative"],
    description: {
      en: "Produced high-end corporate visuals and documentation for Siemens Morocco, strictly adhering to global brand guidelines and industrial safety communication standards.",
      fr: "Production de visuels corporatifs et de documentation pour Siemens Maroc, respectant strictement les directives de marque mondiales.",
    },
    tags: ["Corporate", "Industrial", "Brand Strategy"],
  },
  {
    id: "marsa-maroc-ops",
    title: {
      en: "Marsa Maroc: Large Scale Ops",
      fr: "Marsa Maroc : Opérations Grande Échelle",
    },
    role: { en: "Production Manager", fr: "Responsable Production" },
    metric: { en: "Workflow Optimization", fr: "Optimisation de Flux" },
    categories: ["operations"],
    description: {
      en: "Managed on-site production workflows for major port logistics operations, bridging technical documentation with operational reality in high-stakes environments.",
      fr: "Gestion des flux de production sur site pour des opérations logistiques portuaires majeures, reliant documentation technique et réalité opérationnelle.",
    },
    tags: ["Logistics", "Operations", "Documentary"],
  },
  {
    id: "onde-unfm",
    title: {
      en: "ONDE / UNFM: Institutional Coverage",
      fr: "ONDE / UNFM : Couverture Institutionnelle",
    },
    role: { en: "Lead Creative", fr: "Responsable Créatif" },
    metric: { en: "Public Impact", fr: "Impact Public" },
    categories: ["creative"],
    description: {
      en: "Captured and produced institutional content for national organizations, focusing on high-impact visual storytelling for public awareness campaigns.",
      fr: "Capture et production de contenu institutionnel pour des organisations nationales, axé sur le storytelling visuel à fort impact.",
    },
    tags: ["Event", "Institutional", "Coverage"],
  },
  {
    id: "bicshop-launch",
    title: {
      en: "Bicshop Launch: E-commerce Growth",
      fr: "Lancement Bicshop : Croissance E-commerce",
    },
    role: { en: "Co-Founder", fr: "Co-Fondateur" },
    metric: { en: "Market Entry Success", fr: "Succès d'Entrée Marché" },
    categories: ["growth", "creative"],
    description: {
      en: "Designed and launched the brand identity and digital storefront for premium gear. Implemented end-to-end growth strategies and operational data flows.",
      fr: "Conception et lancement de l'identité de marque et de la boutique en ligne. Mise en œuvre de stratégies de croissance et de flux de données opérationnels.",
    },
    tags: ["E-commerce", "Branding", "Strategy"],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "verdanov-ops",
    role: {
      en: "Co-Founder & Business Operations Lead",
      fr: "Co-Fondateur & Responsable Opérations Business",
    },
    company: "Verdanov / Bicshop",
    period: "2021 – Present",
    location: "Casablanca",
    categories: ["operations", "growth"],
    description: {
      en: "Leading end-to-end operational systems and data-backed growth strategies for professional gear retail.",
      fr: "Pilotage des systèmes opérationnels et des stratégies de croissance basées sur les données.",
    },
    achievements: [
      {
        en: "Analyzed supply chain data to optimize inventory flow for professional photography equipment.",
        fr: "Analyse des données de la chaîne d'approvisionnement pour optimiser les flux d'inventaire.",
      },
      {
        en: "Implemented data-backed strategies for the successful launch of SoftStore.",
        fr: "Mise en œuvre de stratégies basées sur les données pour le lancement de SoftStore.",
      },
      {
        en: "Managed client relationships and negotiated contracts using CRM data orchestration.",
        fr: "Gestion des relations clients et négociation de contrats via l'orchestration CRM.",
      },
      {
        en: "Modeled pricing strategies showing a 15% increase in net profit margins.",
        fr: "Modélisation de stratégies de prix montrant une augmentation de 15% des marges bénéficiaires.",
      },
    ],
    techStack: [
      "Business Intelligence",
      "Bitrix24",
      "Data Modeling",
      "Supply Chain",
    ],
  },
  {
    id: "industrial-media-partner",
    role: {
      en: "Visual Brand Strategist",
      fr: "Stratège d'Image de Marque",
    },
    company: "Self-Employed (Siemens, Tanger Med)",
    period: "2020 – Present",
    location: "Casablanca",
    categories: ["creative"],
    description: {
      en: "Specializing in high-stakes corporate visuals and data-driven engagement analysis.",
      fr: "Spécialisation dans les visuels corporatifs à enjeux élevés et l'analyse de l'engagement.",
    },
    achievements: [
      {
        en: "Partnered with major corporate clients (Siemens, Marsa Maroc) to produce visuals aligned with strategic communication goals.",
        fr: "Partenariat avec des clients majeurs pour produire des visuels alignés sur les objectifs stratégiques.",
      },
      {
        en: "Analyzed viewer engagement patterns using visual production data to refine content strategies.",
        fr: "Analyse des schémas d'engagement pour affiner les stratégies de contenu.",
      },
    ],
    techStack: ["DaVinci Resolve", "Visual Production", "Strategic Analysis"],
  },
];

export const SKILLS_DATA: Skill[] = [
  { name: "Market Trend Analysis", level: 95, category: "growth" },
  { name: "Strategic Planning", level: 90, category: "growth" },
  { name: "Data-Driven Decisions", level: 95, category: "operations" },
  { name: "Campaign Optimization", level: 90, category: "growth" },
  { name: "Bitrix24 CRM", level: 85, category: "operations" },
  { name: "Supply Chain", level: 80, category: "operations" },
  { name: "Generative AI", level: 90, category: "operations" },
  { name: "Vibe Coding", level: 98, category: "growth" },
  { name: "Visual Strategy", level: 90, category: "creative" },
  { name: "DaVinci Resolve", level: 85, category: "creative" },
];

export const CATEGORY_ICONS = {
  growth: BarChart3,
  operations: Box,
  creative: PenTool,
  all: Globe,
};

export const CV_URL = "/AnassHlaibi-Growth-CV.pdf";
export const LINKED_URL = "https://www.linkedin.com/in/anass-hlaibi-316434244";

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
      en: "Final-year student focusing on Data Marketing and Digital Transformation.",
      fr: "Étudiant en dernière année, spécialisation Marketing Data et Transformation Digitale.",
    },
  },
  {
    id: "physics-logic",
    degree: {
      en: "Bachelor in Physics",
      fr: "Licence en Physique",
    },
    school: "University of Science",
    year: "2021",
    description: {
      en: "Provided a deep scientific foundation in analytical and theoretical logic.",
      fr: "Base scientifique approfondie en logique analytique et théorique.",
    },
  },
];

export const STATUS_DATA = {
  en: "🎯 Actively seeking PFE Internship 2026 | Focus: Data Analysis, Growth, or Digital Operations.",
  fr: "🎯 En recherche active de Stage PFE 2026 | Focus: Analyse Data, Croissance, ou Opérations Digitales.",
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
