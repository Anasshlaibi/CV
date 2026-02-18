export type Language = 'en' | 'fr';

export type Category = 'all' | 'growth' | 'operations' | 'creative' | 'data';

export interface LocalizedString {
  en: string;
  fr: string;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: string;
  period: string;
  location: string;
  categories: Category[];
  description: LocalizedString;
  achievements: LocalizedString[];
  techStack: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: Category;
}

export interface Project {
  id: string;
  title: LocalizedString;
  role: LocalizedString;
  metric: LocalizedString;
  categories: Category[];
  description: LocalizedString;
  tags: string[];
}