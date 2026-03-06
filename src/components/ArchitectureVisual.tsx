import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  FileText, 
  Zap, 
  RefreshCw,
  Server
} from 'lucide-react';
import { Language } from '../../types';

interface ArchitectureVisualProps {
  language: Language;
}

const ArchitectureVisual: React.FC<ArchitectureVisualProps> = ({ language }) => {
  const content = {
    title: { 
      en: "Enterprise Architecture: Chada Alyasmin", 
      fr: "Architecture Entreprise : Chada Alyasmin" 
    },
    subtitle: { 
      en: "Autonomous B2B Sales Ecosystem", 
      fr: "Écosystème de Vente B2B Autonome" 
    },
    nodes: [
      {
        id: 'frontend',
        icon: Globe,
        title: { en: "React Interface", fr: "Interface React" },
        desc: { en: "High-performance B2B storefront", fr: "Vitrines B2B haute performance" },
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
      },
      {
        id: 'ai',
        icon: Cpu,
        title: { en: "Gemini 2.0 Flash", fr: "Gemini 2.0 Flash" },
        desc: { en: "Multilingual AI Sales Consultant", fr: "Consultant Ventes IA Multilingue" },
        color: 'text-purple-400',
        bg: 'bg-purple-400/10'
      },
      {
        id: 'db',
        icon: Database,
        title: { en: "Supabase PG", fr: "Supabase PG" },
        desc: { en: "Real-time product & commercial data", fr: "Données produits & commerciales" },
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10'
      }
    ],
    features: [
      { icon: RefreshCw, text: { en: "Autonomous Data Sync", fr: "Sync de Données Autonome" } },
      { icon: FileText, text: { en: "Auto-PDF Quotation", fr: "Devis PDF Automatique" } },
      { icon: ShieldCheck, text: { en: "Enterprise Security", fr: "Sécurité Entreprise" } },
      { icon: Zap, text: { en: "Zero-Latency Logic", fr: "Logique sans Latence" } }
    ]
  };

  return (
    <section className="py-24 px-4 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
            {content.title[language]}
          </h2>
          <p className="text-slate-400 text-lg uppercase tracking-widest font-mono">
            {content.subtitle[language]}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {content.nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors"
              >
                <div className={`w-16 h-16 ${node.bg} ${node.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/50`}>
                  <node.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{node.title[language]}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{node.desc[language]}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-2xl border border-slate-800/50"
            >
              <feature.icon className="w-5 h-5 text-brand-accent" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {feature.text[language]}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-slate-900 to-brand-dark border border-slate-800 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-brand-accent/10 rounded-full">
              <Server className="w-8 h-8 text-brand-accent" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-1">ROI-Focused Engineering</h4>
              <p className="text-slate-400 text-sm">Deploying autonomous systems that protect and grow proprietary data.</p>
            </div>
          </div>
          <div className="flex gap-3">
             <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-mono text-slate-400 border border-slate-700">Vertex AI</span>
             <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-mono text-slate-400 border border-slate-700">Supabase</span>
             <span className="px-4 py-2 bg-slate-800 rounded-full text-xs font-mono text-slate-400 border border-slate-700">Gemini 2.0</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureVisual;
