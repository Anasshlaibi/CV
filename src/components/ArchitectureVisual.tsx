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
  Server,
  LayoutDashboard,
  Truck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { Language } from '../../types';

interface ArchitectureVisualProps {
  language: Language;
}

const ArchitectureVisual: React.FC<ArchitectureVisualProps> = ({ language }) => {
  const content = {
    title: { 
      en: "Enterprise B2B Sales Ecosystem", 
      fr: "Écosystème de Vente B2B Entreprise" 
    },
    subtitle: { 
      en: "Chada Alyasmin: High-Stakes AI Orchestration", 
      fr: "Chada Alyasmin : Orchestration IA Haute Performance" 
    },
    nodes: [
      {
        id: 'frontend',
        icon: Globe,
        title: { en: "B2B Interface", fr: "Interface B2B" },
        desc: { 
          en: "Zero-friction requirement capture and material selection.", 
          fr: "Capture de besoins et sélection de matériaux sans friction." 
        },
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
      },
      {
        id: 'ai',
        icon: Cpu,
        title: { en: "AI Sales Consultant", fr: "Consultant Ventes IA" },
        desc: { 
          en: "Gemini 2.0 Flash: Multilingual technical cross-selling (FR, EN, Darija).", 
          fr: "Gemini 2.0 Flash : Cross-selling technique multilingue (FR, EN, Darija)." 
        },
        color: 'text-purple-400',
        bg: 'bg-purple-400/10'
      },
      {
        id: 'db',
        icon: Database,
        title: { en: "Autonomous DB Sync", fr: "Sync DB Autonome" },
        desc: { 
          en: "Real-time linkage with Supabase. Inventory updates instantly rewire AI logic.", 
          fr: "Lien temps réel avec Supabase. Les mises à jour réécrivent l'IA à chaud." 
        },
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10'
      },
      {
        id: 'pdf',
        icon: FileText,
        title: { en: "Quote Pipeline", fr: "Pipeline de Devis" },
        desc: { 
          en: "Automated PDF generation and intelligent routing to local sales offices.", 
          fr: "Génération PDF automatisée et routage intelligent vers les bureaux de vente." 
        },
        color: 'text-orange-400',
        bg: 'bg-orange-400/10'
      }
    ],
    roadmap: {
      title: { en: "Operational Roadmap: Next Phase", fr: "Roadmap Opérationnelle : Prochaine Phase" },
      items: [
        {
          icon: LayoutDashboard,
          title: { en: "Client Dashboard", fr: "Dashboard Client" },
          desc: { 
            en: "Private B2B portal for real-time status tracking and order history.", 
            fr: "Portail B2B privé pour le suivi en temps réel et l'historique des commandes." 
          }
        },
        {
          icon: Truck,
          title: { en: "Production Tracking", fr: "Suivi Production" },
          desc: { 
            en: "End-to-end visibility from manufacturing stages to final delivery logistics.", 
            fr: "Visibilité de bout en bout, de la fabrication à la logistique de livraison." 
          }
        },
        {
          icon: CheckCircle2,
          title: { en: "Verification Layer", fr: "Couche de Vérification" },
          desc: { 
            en: "Automated workflows where management acts only as the final approval gate.", 
            fr: "Workflows où le management n'intervient que pour l'approbation finale." 
          }
        }
      ]
    }
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display italic">
            {content.title[language]}
          </h2>
          <p className="text-slate-400 text-lg uppercase tracking-widest font-mono">
            {content.subtitle[language]}
          </p>
        </motion.div>

        {/* 4-Node Architecture Map */}
        <div className="relative mb-32">
          {/* Connection Lines (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {content.nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl text-center group hover:border-slate-700 transition-all hover:translate-y-[-4px]"
              >
                <div className={`w-14 h-14 ${node.bg} ${node.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <node.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{node.title[language]}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{node.desc[language]}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Operational Roadmap Section */}
        <div className="mt-32">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex items-center gap-4 mb-12"
           >
             <h3 className="text-2xl font-bold text-white">{content.roadmap.title[language]}</h3>
             <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {content.roadmap.items.map((item, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="p-8 bg-gradient-to-br from-slate-900/40 to-slate-900/10 border border-slate-800/50 rounded-3xl group hover:bg-slate-900/60 transition-all"
               >
                 <div className="w-12 h-12 bg-brand-accent/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                   <item.icon className="w-6 h-6 text-brand-accent" />
                 </div>
                 <h4 className="text-white font-bold mb-3">{item.title[language]}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">{item.desc[language]}</p>
                 <div className="mt-6 flex items-center gap-2 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest">
                   <span>Scale Ready</span>
                   <ChevronRight className="w-3 h-3" />
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Security & ROI Valuation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-br from-slate-900 to-brand-dark border border-slate-800 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-emerald-500/10 rounded-full">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-1">Corporate-Grade Security</h4>
              <p className="text-slate-400 text-sm max-w-lg">Dedicated Service Accounts and authenticated API gateways shift the system from an operational expense to a protected revenue asset.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
             <span className="px-4 py-2 bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-tighter text-slate-300 border border-slate-700">Service Accounts</span>
             <span className="px-4 py-2 bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-tighter text-slate-300 border border-slate-700">PG Authenticated</span>
             <span className="px-4 py-2 bg-slate-800 rounded-full text-[10px] font-bold uppercase tracking-tighter text-slate-300 border border-slate-700">ROI Focused</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureVisual;
