import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Database, Box, Globe } from 'lucide-react';
import { Language, Category } from '../types';
import { PROJECTS_DATA } from '../constants';

interface KeyProjectsProps {
  language: Language;
}

const KeyProjects: React.FC<KeyProjectsProps> = ({ language }) => {
  
  const getIcon = (categories: Category[]) => {
    const mainCat = categories[0];
    if (mainCat === 'growth') return TrendingUp;
    if (mainCat === 'data') return Database;
    if (mainCat === 'operations') return Box;
    if (mainCat === 'creative') return Zap;
    return Target;
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
       <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          {language === 'en' ? 'Impact Case Studies' : 'Études de Cas'}
        </h2>
        <p className="text-slate-400">
          {language === 'en' ? "Selected highlights where data met execution." : "Sélection de projets où la data rencontre l'exécution."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => {
          const Icon = getIcon(project.categories);
          const colorClass = project.categories.includes('growth') ? 'text-brand-success' 
            : project.categories.includes('data') ? 'text-brand-accent'
            : project.categories.includes('creative') ? 'text-brand-purple'
            : 'text-brand-warning';

          const borderColorClass = project.categories.includes('growth') ? 'hover:border-brand-success' 
            : project.categories.includes('data') ? 'hover:border-brand-accent'
            : project.categories.includes('creative') ? 'hover:border-brand-purple'
            : 'hover:border-brand-warning';
          
          const bgClass = project.categories.includes('growth') ? 'bg-brand-success/20' 
            : project.categories.includes('data') ? 'bg-brand-accent/20'
            : project.categories.includes('creative') ? 'bg-brand-purple/20'
            : 'bg-brand-warning/20';

          return (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 ${borderColorClass} transition-all group`}
            >
              <div className={`w-12 h-12 ${bgClass} rounded-lg flex items-center justify-center mb-6 ${colorClass}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title[language]}
              </h3>
              <div className="text-3xl font-display font-bold text-white mb-2">
                {project.metric[language]}
              </div>
              <p className={`${colorClass} text-xs font-bold uppercase tracking-wide mb-4`}>
                {project.role[language]}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                 {project.tags.map(tag => (
                   <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-slate-950 text-slate-500 border border-slate-800">
                     {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyProjects;