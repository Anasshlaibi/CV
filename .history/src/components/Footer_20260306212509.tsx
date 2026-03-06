import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Language } from '../../types';
import { LINKED_URL } from '../../constants';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 py-12 px-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Anass Hlaibi</h3>
          <p className="text-slate-400 text-sm">
            {language === 'en' 
              ? "Growth & Operations | Marketing & Data Analytics" 
              : "Croissance & Opérations | Marketing & Analyse de Données"}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href={LINKED_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-brand-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="mailto:contact@anass-hlaibi.dev" 
            className="text-slate-400 hover:text-brand-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Anass Hlaibi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
