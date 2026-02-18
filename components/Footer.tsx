import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-slate-950 py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            {language === 'en' ? "Let's build something scalable." : "Construisons quelque chose de scalable."}
          </h2>
          <p className="text-slate-400 mb-8 max-w-md text-lg">
            {language === 'en' 
              ? "Open to international opportunities in Growth Marketing, Operations, or Data Strategy."
              : "Ouvert aux opportunités internationales en Growth Marketing, Opérations ou Stratégie Data."}
          </p>
          
          <a 
            href="mailto:anasshlaibi@gmail.com" 
            className="inline-flex items-center gap-2 text-brand-accent font-bold text-xl hover:text-white transition-colors"
          >
            anasshlaibi@gmail.com <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-slate-300">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
              <Phone className="w-4 h-4" />
            </div>
            <span>+212 673 011 873</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
              <MapPin className="w-4 h-4" />
            </div>
            <span>Casablanca, Morocco (Open to Relocation)</span>
          </div>

          <div className="pt-8 border-t border-slate-900 flex gap-4">
             <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
             </a>
             {/* Add more socials if needed */}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 text-center text-slate-700 text-sm">
        © {new Date().getFullYear()} Anass Hlaibi. Built with React, Tailwind & Framer Motion.
      </div>
    </footer>
  );
};

export default Footer;