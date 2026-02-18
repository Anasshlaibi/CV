import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { Language, Category } from '../types';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface SkillsStatsProps {
  language: Language;
  category: Category;
}

const SkillsStats: React.FC<SkillsStatsProps> = ({ language, category }) => {
  // Filter skills based on category if specific mode selected, otherwise show top skills
  const relevantSkills = SKILLS_DATA.filter(skill => {
    if (category === 'all') return true;
    return skill.category === category;
  }).sort((a, b) => b.level - a.level);

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded shadow-lg">
          <p className="text-white font-bold">{label}</p>
          <p className="text-brand-accent">{payload[0].value}% Proficiency</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {language === 'en' ? 'Technical Arsenal' : 'Arsenal Technique'}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? "A quantifiable breakdown of my expertise across tools and strategies."
              : "Une répartition quantifiable de mon expertise sur les outils et stratégies."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Side */}
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={relevantSkills}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={150} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }} 
                />
                <Tooltip content={customTooltip} cursor={{fill: '#1e293b'}} />
                <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                  {relevantSkills.map((entry, index) => {
                     // Color coding based on skill level or category could go here
                     let color = '#3b82f6'; // Brand accent default
                     if (entry.category === 'data') color = '#3b82f6'; // Blue
                     if (entry.category === 'growth') color = '#10b981'; // Green
                     if (entry.category === 'operations') color = '#f59e0b'; // Amber
                     if (entry.category === 'creative') color = '#8b5cf6'; // Purple
                     
                     return <Cell key={`cell-${index}`} fill={color} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Highlights Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-800 rounded-xl border-l-4 border-brand-accent"
            >
              <h3 className="text-lg font-bold text-white mb-2">Meta Certified</h3>
              <p className="text-sm text-slate-400">Media Buying Professional</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-800 rounded-xl border-l-4 border-brand-warning"
            >
              <h3 className="text-lg font-bold text-white mb-2">Google Analytics IQ</h3>
              <p className="text-sm text-slate-400">Advanced Digital Measurement</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-800 rounded-xl border-l-4 border-brand-success"
            >
              <h3 className="text-lg font-bold text-white mb-2">Founder Mindset</h3>
              <p className="text-sm text-slate-400">Bootstrapped operations from 0 to 1</p>
            </motion.div>

             <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-800 rounded-xl border-l-4 border-brand-purple"
            >
              <h3 className="text-lg font-bold text-white mb-2">Polyglot</h3>
              <p className="text-sm text-slate-400">English (C1), French (Native), Arabic (Native)</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsStats;