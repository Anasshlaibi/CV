import React, { useState, useEffect } from 'react';
import { Language, Category } from './types';
import Hero from './src/components/Hero';
import ExperienceTimeline from './src/components/ExperienceTimeline';
import SkillsStats from './src/components/SkillsStats';
import KeyProjects from './src/components/KeyProjects';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';
import Education from './src/components/Education';
import Testimonials from './src/components/Testimonials';
import ContactForm from './src/components/ContactForm';
import VibeCoding from './src/components/VibeCoding';
import ArchitectureVisual from './src/components/ArchitectureVisual';

import LogoCloud from './src/components/LogoCloud';
import { ChatAgent } from './src/components/ChatAgent';
import { ExperienceItem } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className="bg-brand-dark min-h-screen text-slate-200 font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden">
      
      {/* Global Mouse Follower Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      <Navbar language={language} setLanguage={setLanguage} />
      
      <Hero 
        language={language} 
        setLanguage={setLanguage} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <LogoCloud />

      {/* Decorative Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <VibeCoding language={language} />

      <ArchitectureVisual language={language} />

      <KeyProjects language={language} />

      <ExperienceTimeline 
        language={language} 
        category={selectedCategory} 
      />
      
      <Education language={language} />

      <SkillsStats language={language} category={selectedCategory} />
      
      <Testimonials language={language} />
      
      <div id="contact" className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <ContactForm />
      </div>

      <Footer language={language} />
      <ChatAgent />
    </div>
  );
}

export default App;
