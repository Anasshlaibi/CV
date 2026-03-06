import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Download, 
  Link, 
  Briefcase, 
  Zap, 
  Palette, 
  Loader2, 
  Check, 
  Share2,
  Bot
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// --- MASTER DATA ---
const MASTER_DATA = {
  name: "Anass Hlaibi",
  title: "Multidisciplinary Brand Strategist & Vibe Coder",
  contact: {
    email: "anass@verdanov.com", // Placeholder
    location: "Casablanca, Morocco",
    linkedin: "linkedin.com/in/anasshlaibi",
    portfolio: "anass.dev"
  },
  summary: {
    marketing: "Data-driven Marketing Strategist with a background in Physics and Business Leadership. Expert in scaling brands like Verdanov and Bicshop through analytical rigor and creative storytelling.",
    creative: "High-end Visual Creator and Videographer with 3+ years of experience crafting premium narratives for global brands like Siemens and Marsa Maroc. Master of visual aesthetics and post-production.",
    ops: "Operations & Automation Specialist using 'Vibe Coding' to build efficient workflows. Proven track record in Supply Chain Management and building internal tools like SoftStore's Sheet-to-Site system."
  },
  skills: {
    marketing: ["Growth Strategy", "Market Analysis", "Brand Positioning", "CRM (Bitrix24)", "Digital Advertising"],
    creative: ["Videography", "DaVinci Resolve", "Adobe Creative Suite", "Visual Storytelling", "Art Direction"],
    ops: ["Process Automation", "Supply Chain Mgmt", "React / Next.js", "AI Integration", "Data Analytics"]
  }
};

type Role = 'Marketing' | 'Creative' | 'Ops';

export const TalentEngine: React.FC = () => {
  const [activeRole, setActiveRole] = useState<Role>('Marketing');
  const [jobDescription, setJobDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [tailoredProfile, setTailoredProfile] = useState<{ summary: string; keywords: string[] } | null>(null);
  const [magicLinkCopied, setMagicLinkCopied] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  // Magic Link: Check for 'jd' query param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedJD = params.get('jd');
    if (encodedJD) {
      try {
        const decodedJD = atob(encodedJD);
        setJobDescription(decodedJD);
      } catch (e) {
        console.error("Failed to decode magic link JD", e);
      }
    }
  }, []);

  const handleGenerate = async () => {
    if (!jobDescription.trim()) return;
    setIsGenerating(true);
    setTailoredProfile(null);

    const SYSTEM_PROMPT = `
You are a high-level Recruitment Consultant and Brand Strategist. Your task is to analyze a Job Description and Anass Hlaibi's multi-disciplinary background.

Synthesis: Don't just copy text. Rewrite the summary to bridge the gap between his specific experience and the company's needs.

Tone: Bold, analytical, and results-driven.

Selection: If the role is Marketing, emphasize his 'Growth' stats. If it's Operations, emphasize his 'Automation/Vibe Coding' skills.

Formatting: Output only the rewritten Professional Summary (max 4 sentences) and a list of the 3 most relevant power-keywords from his career.

Return VALID JSON only:
{
  "summary": "The tailored summary...",
  "keywords": ["Keyword1", "Keyword2", "Keyword3"]
}
    `;

    const USER_PROMPT = `
    Job Description: ${jobDescription}
    Target Role: ${activeRole}
    Anass's Background: ${MASTER_DATA.summary[activeRole.toLowerCase() as keyof typeof MASTER_DATA.summary]}
    Skills: ${MASTER_DATA.skills[activeRole.toLowerCase() as keyof typeof MASTER_DATA.skills].join(', ')}
    `;

    try {
      const response = await fetch("/api/talent-engine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          jobDescription,
          activeRole,
          masterData: MASTER_DATA
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("AI Response:", data); // Debugging

      if (data) {
        setTailoredProfile(data);

        // --- AUTOMATION HOOK ---
        const webhookUrl = import.meta.env.VITE_AUTOMATION_WEBHOOK_URL;
        if (webhookUrl) {
            fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    role: activeRole,
                    jobDescription: jobDescription.substring(0, 200) + "...", // Truncate for log
                    generatedSummary: data.summary
                })
            }).catch(err => console.error("Webhook trigger failed:", err));
        }

      }
    } catch (error: any) {
      console.error("Error generating profile:", error);
      alert(`Failed to generate profile: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    
    try {
      const canvas = await html2canvas(cvRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Anass_Hlaibi_Tailored_CV.pdf');
    } catch (err) {
      console.error("PDF Export failed:", err);
    }
  };

  const copyMagicLink = () => {
    const encodedJD = btoa(jobDescription);
    const url = `${window.location.origin}${window.location.pathname}?jd=${encodedJD}`;
    navigator.clipboard.writeText(url);
    setMagicLinkCopied(true);
    setTimeout(() => setMagicLinkCopied(false), 2000);
  };

  // UI Helpers
  const getRoleColor = (role: Role) => {
    switch(role) {
      case 'Marketing': return 'from-emerald-400 to-green-600';
      case 'Creative': return 'from-pink-500 to-purple-600';
      case 'Ops': return 'from-blue-400 to-indigo-600';
      default: return 'from-slate-400 to-slate-600';
    }
  };

  const getAccentColor = (role: Role) => {
      switch(role) {
          case 'Marketing': return 'text-emerald-400';
          case 'Creative': return 'text-pink-400';
          case 'Ops': return 'text-blue-400';
          default: return 'text-slate-400';
      }
  };

  return (
    <section className="py-20 px-4 bg-slate-950 relative overflow-hidden" id="talent-engine">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-indigo-200 mb-6 font-display">
                AI Talent Engine
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Experience the future of recruitment. Paste your Job Description, and watch my 
                <span className="text-brand-accent font-semibold"> AI Agent </span> 
                tailor my entire professional DNA to match your exact needs in seconds.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* LEFT PANEL: Input & Controls */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
                {/* Role Toggles */}
                <div className="flex bg-slate-800/50 p-1.5 rounded-xl mb-8 relative">
                    {(['Marketing', 'Creative', 'Ops'] as Role[]).map((role) => (
                        <button
                            key={role}
                            onClick={() => setActiveRole(role)}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all duration-300 relative z-10 ${
                                activeRole === role ? 'text-white shadow-lg' : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            {activeRole === role && (
                                <motion.div 
                                    layoutId="activeRole"
                                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${getRoleColor(role)}`}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {role === 'Marketing' && <Briefcase size={16} />}
                                {role === 'Creative' && <Palette size={16} />}
                                {role === 'Ops' && <Zap size={16} />}
                                {role}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Job Description Input */}
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                        <label className="text-slate-300 font-medium flex items-center gap-2">
                            <Bot className="w-4 h-4 text-indigo-400" />
                            Job Description / Challenge
                        </label>
                        <button 
                            onClick={copyMagicLink}
                            className="text-xs flex items-center gap-1.5 text-slate-500 hover:text-indigo-400 transition-colors"
                        >
                            {magicLinkCopied ? <Check size={14} /> : <Link size={14} />}
                            {magicLinkCopied ? 'Link Copied!' : 'Copy Magic Link'}
                        </button>
                    </div>
                    <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the Job Description here... e.g. 'Looking for a Growth Hacker to scale our SaaS...'"
                        className="w-full h-64 bg-slate-950/50 border border-slate-700/50 rounded-2xl p-6 text-slate-300 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none resize-none transition-all placeholder:text-slate-600 leading-relaxed custom-scrollbar"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating || !jobDescription}
                        className={`flex-1 py-4 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-3 transition-all ${
                            isGenerating || !jobDescription 
                            ? 'bg-slate-800 cursor-not-allowed opacity-50' 
                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                    >
                        {isGenerating ? (
                            <>
                                <Loader2 className="animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5 fill-current" />
                                Generate Tailored Profile
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* RIGHT PANEL: Live CV Preview */}
            <div className="relative group">
                 {/* Decorative Border Gradient */}
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${getRoleColor(activeRole)} opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div ref={cvRef} className="relative bg-white rounded-[22px] overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
                    {/* PDF Export Button (Moved to top right) */}
                    <div className="absolute top-4 right-4 z-20">
                         <motion.button
                            onClick={handleDownloadPDF}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-900/10 hover:bg-slate-900 text-slate-900 hover:text-white p-2 rounded-full shadow-lg border border-slate-900/10 backdrop-blur-sm transition-all"
                            title="Export to PDF"
                        >
                            <Download className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* CV Header */}
                    <div className="bg-slate-900 text-white p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-3xl font-bold font-display tracking-tight mb-2">Anass Hlaibi</h3>
                                <p className={`text-lg font-medium opacity-90 ${getAccentColor(activeRole)}`}>
                                    {MASTER_DATA.title}
                                </p>
                            </div>
                            <div className="text-right text-sm text-slate-400 leading-relaxed">
                                <p>{MASTER_DATA.contact.email}</p>
                                <p>{MASTER_DATA.contact.location}</p>
                                <p className="text-indigo-400">{MASTER_DATA.contact.portfolio}</p>
                            </div>
                        </div>
                    </div>

                    {/* CV Content */}
                    <div className="p-8 flex-1 bg-white text-slate-800">
                        {/* Profile Section */}
                        <div className="mb-8">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 border-b border-slate-100 pb-2">
                                Professional Profile
                            </h4>
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={tailoredProfile ? 'tailored' : 'default'}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="prose prose-slate max-w-none"
                                >
                                    <p className="text-lg leading-relaxed text-slate-600">
                                        {tailoredProfile 
                                            ? tailoredProfile.summary 
                                            : MASTER_DATA.summary[activeRole.toLowerCase() as keyof typeof MASTER_DATA.summary]
                                        }
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Skills / Keywords */}
                        <div className="mb-8">
                            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 border-b border-slate-100 pb-2">
                                {tailoredProfile ? 'Targeted Competencies' : 'Core Expertise'}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {(tailoredProfile?.keywords || MASTER_DATA.skills[activeRole.toLowerCase() as keyof typeof MASTER_DATA.skills]).map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className={`px-3 py-1.5 rounded-full text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Static Experience (Simplified for Demo) */}
                        <div>
                             <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4 border-b border-slate-100 pb-2">
                                Recent Experience
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h5 className="font-bold text-slate-900">Co-Founder & Lead Strategist</h5>
                                        <span className="text-sm text-slate-500">2023 - Present</span>
                                    </div>
                                    <p className="text-indigo-600 font-medium text-sm mb-2">Verdanov</p>
                                    <p className="text-sm text-slate-600">
                                        Spearheading operations and digital transformation for a multi-brand e-commerce ecosystem.
                                        Implemented "Vibe Coding" workflows to automate supply chain logistics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TalentEngine;
