import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import { Language } from '../../types';
import { VIBE_CODING_DATA, PROJECTS_DATA } from '../../constants';

interface VibeCodingProps {
  language: Language;
}

const VibeCoding: React.FC<VibeCodingProps> = ({ language }) => {
  const mainProject = PROJECTS_DATA.find(p => p.id === 'chada-alyasmin');

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-slate-950/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-brand-accent/10 rounded-lg border border-brand-accent/20">
                <Zap className="w-6 h-6 text-brand-accent animate-pulse" />
              </span>
              <span className="p-2 bg-brand-purple/10 rounded-lg border border-brand-purple/20">
                <Sparkles className="w-5 h-5 text-brand-purple" />
              </span>
              <span className="font-mono text-slate-400 tracking-wider uppercase text-xs">
                {VIBE_CODING_DATA.subtitle[language]}
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight font-display">
              {VIBE_CODING_DATA.title[language]}
              <span className="text-brand-accent">.</span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed mb-8 border-l-4 border-brand-accent/30 pl-6 bg-slate-900/10 py-4 rounded-r-xl">
              {VIBE_CODING_DATA.description[language]}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                 {['Vertex AI', 'Gemini 2.0', 'Supabase', 'Python'].map((tool, i) => (
                   <div key={tool} className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300 shadow-xl">
                     {tool}
                   </div>
                 ))}
              </div>
              <span className="text-slate-500 font-medium text-xs ml-4">Enterprise Orchestration Stack</span>
            </div>
          </motion.div>

          {/* Feature Card / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Chada Alyasmin Highlight Card */}
            {mainProject && (
              <a 
                href={mainProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-brand-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/10"
              >
                <div className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <ExternalLink className="w-5 h-5" />
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                     <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-wider rounded-full">
                       Case Study
                     </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{mainProject.title[language]}</h3>
                  <p className="text-slate-400">{mainProject.metric[language]}</p>
                </div>

                <div className="flex items-center gap-3 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
                  Live Ecosystem
                  <ArrowRight className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            )}

            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VibeCoding;
