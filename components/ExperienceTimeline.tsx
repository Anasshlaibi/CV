import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { ExperienceItem, Language, Category } from '../types';
import { EXPERIENCE_DATA } from '../constants';

interface ExperienceTimelineProps {
  language: Language;
  category: Category;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ language, category }) => {
  // Filter experience based on category
  const filteredData = EXPERIENCE_DATA.filter(item => {
    if (category === 'all') return true;
    return item.categories.includes(category);
  });

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          {language === 'en' ? 'Professional Journey' : 'Parcours Professionnel'}
        </h2>
        <div className="h-1 w-20 bg-brand-accent rounded-full" />
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-16">
        <AnimatePresence mode='popLayout'>
          {filteredData.map((exp, index) => (
            <motion.div
              key={exp.id}
              layout
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:-left-[7px] top-2 w-3 h-3 md:w-4 md:h-4 bg-brand-accent rounded-full border-4 border-brand-dark shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-brand-accent/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role[language]}</h3>
                    <p className="text-xl text-brand-accent">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-sm text-slate-400 gap-1 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description[language]}
                </p>

                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-success shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-sm">{achievement[language]}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-800 text-xs font-mono text-slate-300 rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceTimeline;