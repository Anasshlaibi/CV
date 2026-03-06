import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { Language } from '../../types';
import { EDUCATION_DATA } from '../../constants';

interface EducationProps {
  language: Language;
}

const Education: React.FC<EducationProps> = ({ language }) => {
  const heading = {
    en: "Education",
    fr: "Formation"
  };

  return (
    <section id="education" className="py-20 px-4 bg-brand-dark/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {heading[language]}
          </h2>
          <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-brand-accent/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-brand-accent/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-brand-accent" />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3" />
                  {item.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">
                {item.degree[language]}
              </h3>
              <p className="text-brand-accent font-medium mb-3">{item.school}</p>
              
              {item.description && (
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description[language]}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
