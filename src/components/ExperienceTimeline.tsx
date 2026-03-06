import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Language, Category } from '../../types';
import { EXPERIENCE_DATA } from '../../constants';

import { ExperienceItem } from '../../types';

interface ExperienceTimelineProps {
  language: Language;
  category: Category;
  experiences?: ExperienceItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ language, category, experiences }) => {
  const filteredExperience = useMemo(() => {
    const data = experiences || EXPERIENCE_DATA;
    if (category === 'all') return data;
    return data.filter(item => item.categories.includes(category));
  }, [category, experiences]);

  const heading = {
    en: "Professional Experience",
    fr: "Expérience Professionnelle"
  };

  return (
    <section id="experience" className="py-20 px-4 bg-brand-dark relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            {heading[language]}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 hidden md:block" />

          {filteredExperience.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                 {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1.5 md:-translate-x-1/2 mt-1.5 w-3 h-3 md:w-4 md:h-4 rounded-full bg-brand-accent shadow-[0_0_12px_rgba(59,130,246,0.5)] z-10" />

                {/* Content Spacer */}
                <div className="flex-1 hidden md:block" />

                {/* Content Card */}
                <div className="flex-1 ml-12 md:ml-0 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors group">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-accent transition-colors">
                        {item.role[language]}
                      </h3>
                      <span className="text-xs font-mono text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">
                         {item.company}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {item.description[language]}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-success shrink-0 mt-0.5" />
                        <span>{achievement[language]}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
