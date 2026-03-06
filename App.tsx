import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Github, Linkedin, Download, ArrowUpRight, 
  Briefcase, Calendar, MapPin, CheckCircle2, Globe, 
  Cpu, Database, ShieldCheck, FileText, Zap, 
  LayoutDashboard, Truck, ChevronRight, Mail,
  GraduationCap, ArrowRight, ExternalLink
} from 'lucide-react';
import { Language, Category, ExperienceItem, Project, Skill, EducationItem, TestimonialItem } from './types';
import { 
  INTRO, HERO_TITLE, CTA_TEXT, MODE_LABELS, 
  PROJECTS_DATA, EXPERIENCE_DATA, SKILLS_DATA, 
  CATEGORY_ICONS, CV_URL, LINKEDIN_URL, 
  EDUCATION_DATA, STATUS_DATA, TESTIMONIALS_DATA 
} from './constants';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const filteredExperience = useMemo(() => {
    if (selectedCategory === 'all') return EXPERIENCE_DATA;
    return EXPERIENCE_DATA.filter(item => item.categories.includes(selectedCategory));
  }, [selectedCategory]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'all') return SKILLS_DATA;
    return SKILLS_DATA.filter(skill => 
      skill.category === selectedCategory || 
      (selectedCategory === 'growth' && skill.category === 'data') ||
      (selectedCategory === 'operations' && skill.category === 'data')
    );
  }, [selectedCategory]);

  return (
    <div className="bg-[#030712] min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      
      {/* Global Mouse Follower Spotlight */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      {/* PFE 2026 Internship Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-2.5 px-4 text-center relative z-[60] shadow-2xl">
        <p className="text-sm font-semibold text-white/90 tracking-wide flex items-center justify-center gap-2">
          <span className="animate-pulse bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase border border-white/30">Hiring</span>
          {STATUS_DATA[language]}
        </p>
      </div>

      {/* Unified Navbar */}
      <nav className={`fixed top-[44px] left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex flex-col group">
              <span className="text-xl font-bold tracking-tighter text-white">Anass Hlaibi</span>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Systems Architect</span>
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {['experience', 'projects', 'skills', 'education'].map((id) => (
                <a key={id} href={`#${id}`} className="text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                  {id}
                </a>
              ))}
              <div className="w-px h-5 bg-white/10" />
              <div className="flex items-center gap-6">
                <button onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} className="text-xs font-bold font-mono text-slate-500 hover:text-white transition-colors">
                  {language === 'en' ? 'FR' : 'EN'}
                </button>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-400 hover:text-white transition-all shadow-xl shadow-white/5">
                  {CTA_TEXT[language]}
                </a>
              </div>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Unified Hero Section */}
      <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -left-[10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 -right-[10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {language === 'en' ? 'Systems-as-a-Server Methodology' : 'Méthodologie Systems-as-a-Server'}
          </motion.div>

          {/* Persona Switcher Nav */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(Object.keys(MODE_LABELS) as Category[]).map((cat) => {
              const Icon = CATEGORY_ICONS[cat as keyof typeof CATEGORY_ICONS];
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold transition-all duration-500 border ${
                    isActive ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.2)]' : 'bg-white/5 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span className="tracking-widest uppercase">{MODE_LABELS[cat][language]}</span>
                </button>
              );
            })}
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-10 italic"
          >
            {HERO_TITLE[language]}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-medium mb-12"
          >
            {INTRO[language]}
          </motion.p>
        </div>
      </section>

      {/* Major Projects: B2B Ecosystem & SoftStore */}
      <section id="projects" className="py-32 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Master Ecosystems</h2>
            <p className="text-slate-400 text-sm font-mono tracking-[0.3em] uppercase underline decoration-blue-500 underline-offset-8 decoration-2">High-Stakes Industrial Orchestration</p>
          </div>

          <div className="grid grid-cols-1 gap-32">
            {PROJECTS_DATA.filter(p => ['chada-alyasmin', 'softstore-architecture'].includes(p.id)).map((project, idx) => (
              <ProjectShowcase key={project.id} project={project} language={language} reversed={idx % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Operational Roadmap Visualization */}
      <RoadmapSection language={language} />

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-4 bg-white/2 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Industrial Trajectory</h2>
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-20 bg-blue-500" />
              <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Bridging Data & Standards</p>
            </div>
          </div>

          <div className="space-y-16 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 lg:left-1/2" />
            {filteredExperience.map((item, id) => (
              <ExperienceCard key={item.id} item={item} language={language} index={id} />
            ))}
          </div>
        </div>
      </section>

       {/* Technical Arsenal */}
       <section id="skills" className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
           <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">Technical Arsenal</h2>
                <p className="text-slate-400 leading-relaxed mb-12 max-w-md italic">
                  Systems built on the laws of Physics and the requirements of enterprise-grade ROI.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['React', 'Supabase', 'Vertex AI', 'Python', 'CRM Architecture', 'Industrial Compliance'].map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {filteredSkills.map((skill, i) => (
                   <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                   >
                     <div className="flex justify-between items-end mb-3">
                       <span className="text-sm font-bold text-slate-200">{skill.name}</span>
                       <span className="text-[10px] font-mono text-blue-500">{skill.level}%</span>
                     </div>
                     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-blue-500"
                       />
                     </div>
                   </motion.div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-32 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {EDUCATION_DATA.map((item) => (
              <div key={item.id} className="p-10 rounded-3xl bg-slate-900 border border-white/5">
                <GraduationCap className="w-10 h-10 text-blue-500 mb-8" />
                <h3 className="text-2xl font-bold text-white mb-2">{item.degree[language]}</h3>
                <p className="text-blue-400 font-semibold mb-6">{item.school} <span className="text-slate-600 px-2">|</span> {item.year}</p>
                <p className="text-slate-400 leading-relaxed text-sm italic">{item.description![language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Contact CTA */}
      <footer id="contact" className="py-32 px-4 border-t border-white/5 text-center">
        <div className="container mx-auto max-w-4xl">
           <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic mb-12">Solve Failures. Build Systems.</h2>
           <div className="flex flex-wrap justify-center gap-6">
             <a href="mailto:contact@anass-hlaibi.dev" className="flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
                Get in Touch
             </a>
             <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                LinkedIn
             </a>
           </div>
           <p className="mt-20 text-slate-600 text-[10px] font-mono uppercase tracking-[0.5em]">
             © {new Date().getFullYear()} Anass Hlaibi | Solutions Architect & Technical Consultant
           </p>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[100] bg-black p-10 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
               <span className="text-lg font-bold">Menu</span>
               <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['experience', 'projects', 'skills', 'education'].map((id) => (
                <a key={id} onClick={() => setIsMobileMenuOpen(false)} href={`#${id}`} className="text-5xl font-black italic tracking-tighter uppercase">
                  {id}
                </a>
              ))}
            </div>
            <div className="pt-10 border-t border-white/10 flex flex-col gap-6">
               <button onClick={() => { setLanguage(language === 'en' ? 'fr' : 'en'); setIsMobileMenuOpen(false); }} className="text-left font-bold uppercase tracking-widest text-blue-500">
                  {language === 'en' ? 'Switch to French' : 'Passer en Français'}
               </button>
               <a href={LINKEDIN_URL} className="text-slate-400">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sub-components for better organization within App.tsx

const ProjectShowcase = ({ project, language, reversed }: { project: Project, language: Language, reversed: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
    >
      <div className="flex-1 w-full relative">
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 aspect-video flex items-center justify-center p-12">
            {project.id === 'chada-alyasmin' ? <CircularArchMap language={language} /> : <div className="text-lg font-mono text-slate-500 tracking-widest uppercase">Sheet-to-Site Ecosystem</div>}
        </div>
      </div>
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
           <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest text-blue-400 rounded-full">Case Study</span>
             <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{project.metric[language]}</span>
           </div>
           <h3 className="text-4xl font-bold text-white leading-tight">{project.title[language]}</h3>
           <p className="text-slate-400 leading-relaxed text-lg italic">"{project.description[language].slice(0, 150)}..."</p>
        </div>
        <div className="flex flex-wrap gap-3">
           {project.tags.map(tag => <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-slate-500">#{tag}</span>)}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group text-white font-bold text-xs uppercase tracking-[0.2em] pt-4 border-b border-white/10 pb-2 hover:border-blue-500 transition-all">
             Launch Site
             <ExternalLink className="w-4 h-4 text-blue-500" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ item, language, index }: { item: ExperienceItem, language: Language, index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col lg:flex-row gap-10 ${isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className="lg:w-1/2" />
      <div className={`lg:w-1/2 p-8 rounded-3xl bg-slate-900 border border-white/5 group hover:border-blue-500/50 transition-all relative z-10`}>
         <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">{item.role[language]}</h4>
              <p className="text-blue-400 font-bold text-sm tracking-widest uppercase">{item.company}</p>
            </div>
            <span className="text-[10px] font-mono text-slate-600 bg-white/5 px-2.5 py-1 rounded">{item.period}</span>
         </div>
         <p className="text-sm text-slate-400 italic mb-8">"{item.description[language]}"</p>
         <ul className="space-y-4 mb-8">
           {item.achievements.map((ach, i) => (
             <li key={i} className="flex gap-4 text-xs leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                {ach[language]}
             </li>
           ))}
         </ul>
         <div className="flex flex-wrap gap-2">
            {item.techStack.map(tech => <span key={tech} className="text-[9px] font-black uppercase tracking-tighter px-2 py-1 rounded bg-white/[0.03] border border-white/5 text-slate-600">{tech}</span>)}
         </div>
      </div>
    </motion.div>
  );
};

const RoadmapSection = ({ language }: { language: Language }) => {
  const items = [
    { icon: LayoutDashboard, title: { en: "Client Dashboard", fr: "Dashboard Client" }, desc: { en: "Private B2B portal for real-time status tracking.", fr: "Portail B2B privé pour le suivi en temps réel." } },
    { icon: Truck, title: { en: "Production Tracking", fr: "Suivi Production" }, desc: { en: "End-to-end visibility from manufacturing to delivery.", fr: "Visibilité totale de la fabrication à la livraison." } },
    { icon: CheckCircle2, title: { en: "Verification Layer", fr: "Couche de Vérification" }, desc: { en: "Automated workflows with manager-level final gates.", fr: "Workflows automatisés avec validation manager finale." } },
  ];
  return (
    <section className="py-32 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
          Operational Roadmap <div className="h-px flex-1 bg-white/5" />
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
           {items.map((item, id) => (
             <div key={id} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                <item.icon className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-white mb-3">{item.title[language]}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc[language]}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// Simplified Circular Architecture Visualization for within App.tsx
const CircularArchMap = ({ language }: { language: Language }) => {
  const steps = [
    { icon: Globe, label: { en: "B2B UI", fr: "UI B2B" } },
    { icon: Cpu, label: { en: "Vertex AI", fr: "IA Vertex" } },
    { icon: Database, label: { en: "Supabase PG", fr: "Supabase PG" } },
    { icon: FileText, label: { en: "PDF Quote", fr: "Devis PDF" } }
  ];
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
       <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-64 h-64 border border-dashed border-blue-500 rounded-full animate-[spin_20s_linear_infinity]" />
       </div>
       <div className="grid grid-cols-2 gap-12 relative z-10">
          {steps.map((s, i) => (
             <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                   <s.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{s.label[language]}</span>
             </div>
          ))}
       </div>
       <div className="absolute inset-x-0 bottom-0 text-center pb-4">
          <span className="text-[8px] font-mono text-slate-700 uppercase tracking-[0.5em]">Enterprise Sync Core 2.0</span>
       </div>
    </div>
  );
};

export default App;
