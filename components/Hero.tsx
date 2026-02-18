import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Languages, Download } from 'lucide-react';
import { HERO_TITLE, INTRO, MODE_LABELS, CTA_TEXT } from '../constants';
import { Language, Category } from '../types';

interface HeroProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
}

const Hero: React.FC<HeroProps> = ({ language, setLanguage, selectedCategory, setSelectedCategory }) => {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/10 rounded-full blur-[100px]" />
      </div>

      {/* Language Toggle Fixed Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <button
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark/50 border border-slate-700 hover:border-brand-accent transition-colors backdrop-blur-md"
        >
          <Languages className="w-4 h-4 text-brand-accent" />
          <span className="uppercase text-sm font-bold tracking-wider">{language}</span>
        </button>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full text-center z-10"
      >
        <motion.div variants={item} className="mb-6">
          <span className="px-3 py-1 text-xs font-mono text-brand-success border border-brand-success/30 bg-brand-success/10 rounded-full">
            OPEN TO INTERNATIONAL RELOCATION
          </span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
          Anass Hlaibi
        </motion.h1>

        <motion.h2 variants={item} className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          {HERO_TITLE[language]}
        </motion.h2>

        <motion.p variants={item} className="text-lg md:text-xl text-brand-accent mb-12 font-medium">
          "{INTRO[language]}"
        </motion.p>

        {/* Persona/Category Selector */}
        <motion.div variants={item} className="mb-12">
          <p className="text-sm text-slate-500 mb-4 uppercase tracking-widest text-xs">
            {language === 'en' ? "Select a lens to view my profile" : "Choisissez un filtre pour voir mon profil"}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.keys(MODE_LABELS) as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-6 py-3 rounded-xl border transition-all duration-300 font-medium
                  ${selectedCategory === cat 
                    ? 'bg-brand-accent text-white border-brand-accent shadow-[0_0_20px_rgba(59,130,246,0.5)] transform scale-105' 
                    : 'bg-brand-dark/40 text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white'}
                `}
              >
                {MODE_LABELS[cat][language]}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="flex justify-center gap-4">
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-slate-200 transition-colors"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            {CTA_TEXT[language]}
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;