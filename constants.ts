import { ExperienceItem, Project, Skill, LocalizedString } from './types';
import { BarChart3, Box, PenTool, Database, Globe, Zap, Target, TrendingUp } from 'lucide-react';

export const INTRO: LocalizedString = {
  en: "I bridge the gap between Data, Operations, and Creative Strategy.",
  fr: "Je comble le fossé entre la Data, les Opérations et la Stratégie Créative."
};

export const HERO_TITLE: LocalizedString = {
  en: "Growth Marketing Analyst & Operations Strategist",
  fr: "Analyste Growth Marketing & Stratège Opérationnel"
};

export const CTA_TEXT: LocalizedString = {
  en: "Download CV",
  fr: "Télécharger CV"
};

export const MODE_LABELS: Record<string, LocalizedString> = {
  all: { en: "Full Profile", fr: "Profil Complet" },
  growth: { en: "Growth", fr: "Growth" },
  data: { en: "Data & Analytics", fr: "Data & Analytics" },
  operations: { en: "Ops & Founder", fr: "Opérations" },
  creative: { en: "Creative Studio", fr: "Créatif" }
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'verdanov',
    role: { en: "Co-Founder & Head of Operations", fr: "Co-Fondateur & Directeur des Opérations" },
    company: "Verdanov / Bicshop",
    period: "2022 – 2025",
    location: "Casablanca",
    categories: ['operations', 'growth'],
    description: {
      en: "Orchestrated end-to-end supply chain from China to Morocco while building the digital sales infrastructure.",
      fr: "Orchestration de la chaîne d'approvisionnement de bout en bout de la Chine au Maroc tout en construisant l'infrastructure de vente numérique."
    },
    achievements: [
      {
        en: "Built sales platform using WordPress & integrated Meta Pixel for advanced tracking.",
        fr: "Création de la plateforme de vente sous WordPress et intégration du Meta Pixel pour un tracking avancé."
      },
      {
        en: "Deployed Bitrix24 CRM to automate lead management & improve retention.",
        fr: "Déploiement du CRM Bitrix24 pour automatiser la gestion des leads et améliorer la rétention."
      },
      {
        en: "Modeled pricing strategies to maximize net profit margins in a competitive market.",
        fr: "Modélisation des stratégies de prix pour maximiser les marges nettes dans un marché concurrentiel."
      }
    ],
    techStack: ["Supply Chain", "Bitrix24", "WordPress", "Financial Modeling"]
  },
  {
    id: 'chada',
    role: { en: "Data Marketing Consultant", fr: "Consultant Data Marketing" },
    company: "Ste Chada Alyasmin",
    period: "2023",
    location: "Casablanca",
    categories: ['growth', 'data'],
    description: {
      en: "Solved a critical recruitment bottleneck using data-driven automation.",
      fr: "Résolution d'un goulot d'étranglement critique de recrutement grâce à l'automatisation basée sur les données."
    },
    achievements: [
      {
        en: "Engineered automated pre-qualification funnel using conditional logic in Meta Ads.",
        fr: "Conception d'un tunnel de pré-qualification automatisé utilisant la logique conditionnelle dans Meta Ads."
      },
      {
        en: "Achieved 100% lead qualification accuracy, eliminating manual HR filtering.",
        fr: "100% de précision dans la qualification des leads, éliminant le filtrage manuel RH."
      }
    ],
    techStack: ["Meta Ads", "Conditional Logic", "Funnel Optimization"]
  },
  {
    id: 'freelance',
    role: { en: "Corporate Media & Technical Consultant", fr: "Consultant Technique & Média Corporate" },
    company: "Freelance",
    period: "2022 – Present",
    location: "Casablanca",
    categories: ['creative', 'operations'],
    description: {
      en: "Trusted technical partner for large-scale industrial accounts including Siemens & ONDE.",
      fr: "Partenaire technique de confiance pour des grands comptes industriels dont Siemens & ONDE."
    },
    achievements: [
      {
        en: "Delivered high-stakes corporate content compliant with strict global brand guidelines.",
        fr: "Livraison de contenu corporate à fort enjeu conforme aux directives de marque mondiales strictes."
      },
      {
        en: "Managed production workflows for Marsa Maroc and other industrial giants.",
        fr: "Gestion des flux de production pour Marsa Maroc et d'autres géants industriels."
      }
    ],
    techStack: ["DaVinci Resolve", "Sony Cinema Line", "Brand Compliance"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'hiring-funnel',
    title: { en: "Automated Hiring Funnel", fr: "Tunnel de Recrutement Automatisé" },
    role: { en: "Growth Engineer", fr: "Ingénieur Growth" },
    metric: { en: "100% Accuracy", fr: "100% Précision" },
    categories: ['growth', 'data'],
    description: {
      en: "Engineered a conditional logic system within Meta Ads to filter candidates pre-submission, saving 100+ hours of manual HR review.",
      fr: "Conception d'un système logique conditionnel dans Meta Ads pour filtrer les candidats avant soumission, économisant plus de 100h de revue RH."
    },
    tags: ["Meta Ads", "Python", "Automation"]
  },
  {
    id: 'supply-chain',
    title: { en: "China-Morocco Supply Chain", fr: "Supply Chain Chine-Maroc" },
    role: { en: "Head of Operations", fr: "Directeur des Opérations" },
    metric: { en: "E2E Infrastructure", fr: "Infrastructure E2E" },
    categories: ['operations', 'growth'],
    description: {
      en: "Established complete logistics pipeline for niche electronics, calculating landed costs to precision to secure profit margins.",
      fr: "Mise en place d'un pipeline logistique complet pour l'électronique de niche, calcul précis des coûts rendus pour garantir les marges."
    },
    tags: ["Logistics", "Financial Modeling", "Sourcing"]
  },
  {
    id: 'crm-ecosystem',
    title: { en: "CRM Ecosystem Deployment", fr: "Déploiement Écosystème CRM" },
    role: { en: "Tech Lead", fr: "Lead Technique" },
    metric: { en: "Full Automation", fr: "Automatisation Complète" },
    categories: ['operations', 'data'],
    description: {
      en: "Integrated Bitrix24 with WordPress and Meta Pixel, creating a closed-loop data system from ad click to final sale.",
      fr: "Intégration de Bitrix24 avec WordPress et Meta Pixel, créant un système de données en boucle fermée du clic à la vente."
    },
    tags: ["Bitrix24", "API Integration", "WordPress"]
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: "Excel (Pivot/Adv)", level: 90, category: 'data' },
  { name: "Google Analytics 4", level: 85, category: 'growth' },
  { name: "Bitrix24 CRM", level: 95, category: 'operations' },
  { name: "Meta Ads Manager", level: 90, category: 'growth' },
  { name: "Supply Chain", level: 80, category: 'operations' },
  { name: "Generative AI", level: 85, category: 'data' },
  { name: "DaVinci Resolve", level: 75, category: 'creative' },
  { name: "Workflow Automation", level: 85, category: 'operations' },
  { name: "Python (Data)", level: 70, category: 'data' },
  { name: "SQL", level: 75, category: 'data' }
];

export const CATEGORY_ICONS = {
  growth: BarChart3,
  operations: Box,
  creative: PenTool,
  data: Database,
  all: Globe
};