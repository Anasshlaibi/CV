import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, ChevronDown, FileText, X } from 'lucide-react';
import { Language, Category, LocalizedString } from '../../types';
import { HERO_TITLE, INTRO, CV_URL, LINKED_URL, MODE_LABELS, CATEGORY_ICONS, STATUS_DATA } from '../../constants';

interface HeroProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  title?: string;
  intro?: string;
  coverLetter?: string;
}

const Hero: React.FC<HeroProps> = ({ language, setLanguage, selectedCategory, setSelectedCategory, title, intro, coverLetter }) => {
  const [showCoverLetter, setShowCoverLetter] = React.useState(false);
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent pt-16" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>


      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
            <span className="text-sm font-medium text-brand-accent tracking-wide uppercase">
              {STATUS_DATA[language]}
            </span>
          </motion.div>

          {/* Persona Switcher */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-slate-800/50 backdrop-blur-md rounded-full border border-slate-700/50"
          >
            {(Object.keys(MODE_LABELS) as Category[]).map((cat) => {
              const Icon = CATEGORY_ICONS[cat as keyof typeof CATEGORY_ICONS];
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}
                  `}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{MODE_LABELS[cat][language]}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Main Content */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 tracking-tight leading-tight font-display"
          >
            {title || HERO_TITLE[language]}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl leading-relaxed"
          >
            {intro || INTRO[language]}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href={CV_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-blue-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>{language === 'en' ? 'Download CV' : 'Télécharger CV'}</span>
            </a>

            {coverLetter && (
              <button
                onClick={() => setShowCoverLetter(true)}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>View Cover Letter</span>
              </button>
            )}
            
            <a 
              href={LINKED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-semibold backdrop-blur-sm border border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-semibold backdrop-blur-sm border border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      {/* Cover Letter Modal */}
      {showCoverLetter && coverLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white">Tailored Cover Letter</h3>
              <button 
                onClick={() => setShowCoverLetter(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto font-serif text-slate-300 leading-relaxed whitespace-pre-wrap">
              {coverLetter}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
