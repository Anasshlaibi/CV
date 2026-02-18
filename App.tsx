import React, { useState } from 'react';
import { Language, Category } from './types';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsStats from './components/SkillsStats';
import KeyProjects from './components/KeyProjects';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 font-sans selection:bg-brand-accent selection:text-white">
      <Hero 
        language={language} 
        setLanguage={setLanguage} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      {/* Decorative Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <KeyProjects language={language} />

      <ExperienceTimeline language={language} category={selectedCategory} />
      
      <SkillsStats language={language} category={selectedCategory} />

      <Footer language={language} />
    </div>
  );
}

export default App;