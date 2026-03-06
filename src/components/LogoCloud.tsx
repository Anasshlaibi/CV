import React from 'react';

const LogoCloud: React.FC = () => {
  const logos = [
    "Siemens",
    "Marsa Maroc",
    "ONDE",
    "UNFM",
    "Tanger Med",
    "Wafacash"
  ];

  return (
    <div className="py-12 bg-slate-950/50 border-y border-slate-900 overflow-hidden group">
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-3xl font-display font-bold text-slate-700 hover:text-slate-400 transition-colors cursor-default tracking-tighter uppercase"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;
