import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { Language } from '../../types';
import { CV_URL, LINKEDIN_URL } from '../../constants';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', label: { en: 'Experience', fr: 'Expérience' } },
    { href: '#education', label: { en: 'Education', fr: 'Formation' } },
    { href: '#skills', label: { en: 'Skills', fr: 'Compétences' } },
    { href: '#contact', label: { en: 'Contact', fr: 'Contact' } },
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Anass Hlaibi
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label[language]}
                </a>
              ))}
            </div>

            <div className="w-px h-6 bg-slate-800" />

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="text-xs font-mono font-medium text-slate-400 hover:text-white transition-colors uppercase"
              >
                {language === 'en' ? 'FR' : 'EN'}
              </button>
              
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>

              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-full text-xs font-medium transition-all">
                <Download className="w-4 h-4" />
                <span>CV</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-slate-300 hover:text-white"
              >
                {link.label[language]}
              </a>
            ))}
             <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button 
                  onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                  className="text-sm font-mono text-slate-400"
                >
                  {language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
                </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
