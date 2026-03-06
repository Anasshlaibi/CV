import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Camera, BarChart3 } from 'lucide-react';
import { Language } from '../../types';
import { PROJECTS_DATA } from '../../constants';

interface KeyProjectsProps {
  language: Language;
}

const KeyProjects: React.FC<KeyProjectsProps> = ({ language }) => {
  const heading = {
    en: "Selected Works",
    fr: "Sélection de Projets"
  };

  return (
    <section id="projects" className="py-20 px-4 bg-brand-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {heading[language]}
            </h2>
            <div className="h-1.5 w-32 bg-brand-accent rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-500"
            >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex gap-2">
                        {project.categories.map(cat => (
                          <span key={cat} className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-slate-400 border border-slate-700 rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-slate-600 group-hover:text-brand-accent group-hover:rotate-45 transition-all duration-300" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                      {project.title[language]}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 text-brand-purple text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                      {project.metric[language]}
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                      {project.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                        ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="p-8 h-full flex flex-col">
                  {/* Duplicate content from above for non-linked projects */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex gap-2">
                      {project.categories.map(cat => (
                        <span key={cat} className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-slate-400 border border-slate-700 rounded-full">
                          {cat}
                        </span>
                      ))}
                    </div>
                    {/* No arrow or disabled style if no link */}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title[language]}
                  </h3>

                  <div className="flex items-center gap-2 mb-4 text-brand-purple text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                    {project.metric[language]}
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                    {project.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                          <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                      ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyProjects;
