import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Language, Category } from '../../types';
import { SKILLS_DATA, CATEGORY_ICONS } from '../../constants';

interface SkillsStatsProps {
  language: Language;
  category: Category;
}

const SkillsStats: React.FC<SkillsStatsProps> = ({ language, category }) => {
  const filteredSkills = useMemo(() => {
    if (category === 'all') return SKILLS_DATA;
    return SKILLS_DATA.filter(skill => 
      skill.category === category || 
      (category === 'growth' && skill.category === 'data') || // inclusive filtering
      (category === 'operations' && skill.category === 'data')
    );
  }, [category]);

  const heading = {
    en: "Technical Arsenal",
    fr: "Arsenal Technique"
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading[language]}
          </h2>
           <div className="h-1 w-24 bg-brand-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-slate-200">{skill.name}</span>
                <span className="text-sm font-mono text-slate-500">{skill.displayTerm || `${skill.level}%`}</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full rounded-full ${
                    skill.category === 'growth' ? 'bg-blue-500' :
                    skill.category === 'data' ? 'bg-purple-500' :
                    skill.category === 'operations' ? 'bg-emerald-500' :
                    'bg-amber-500'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsStats;
