import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Loader2, Briefcase, Building, Target } from 'lucide-react';
import { searchAutocomplete } from '../services/serper';

interface RecruiterModeProps {
  onUpdate: (data: any) => void;
}

const RecruiterMode: React.FC<RecruiterModeProps> = ({ onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [companyNameSuggestions, setCompanyNameSuggestions] = useState<string[]>([]);
  const [showCompanyNameSuggestions, setShowCompanyNameSuggestions] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    role: 'Marketing',
    jobDescription: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/generate-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);
      
      onUpdate(data);
      setIsOpen(false);
      // Optional: Show success toast
    } catch (error) {
      console.error("Failed to generate CV:", error);
      alert("Something went wrong. Please check your connection or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-brand-accent to-purple-600 text-white rounded-full shadow-lg shadow-purple-500/30 font-semibold border border-white/10 backdrop-blur-md"
      >
        <Sparkles className="w-5 h-5" />
        <span className="hidden md:inline">Tailor for me</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-2 text-white">
                  <Sparkles className="w-5 h-5 text-brand-accent" />
                  <h2 className="text-xl font-bold">Recruiter Mode</h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-4">
                  
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                      <Building className="w-4 h-4 text-brand-accent" />
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600"
                      placeholder="e.g. Google, Airbnb..."
                      value={formData.companyName}
                      onChange={async (e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, companyName: val });
                        if (val.length > 2) {
                          const results = await searchAutocomplete(val);
                          setCompanyNameSuggestions(results);
                          setShowCompanyNameSuggestions(true);
                        } else {
                          setCompanyNameSuggestions([]);
                          setShowCompanyNameSuggestions(false);
                        }
                      }}
                      onBlur={() => setTimeout(() => setShowCompanyNameSuggestions(false), 200)}
                      onFocus={() => formData.companyName.length > 2 && setShowCompanyNameSuggestions(true)}
                    />
                    {/* Autocomplete Dropdown */}
                    {showCompanyNameSuggestions && companyNameSuggestions.length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden max-h-48 overflow-y-auto">
                        {companyNameSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            type="button"
                            className="w-full text-left px-4 py-2 text-slate-300 hover:bg-brand-accent hover:text-white transition-colors text-sm"
                            onClick={() => {
                              setFormData({ ...formData, companyName: suggestion });
                              setShowCompanyNameSuggestions(false);
                            }}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                      <Briefcase className="w-4 h-4 text-brand-accent" />
                      Hiring For
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-white transition-all appearance-none cursor-pointer"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="Marketing">Marketing Strategist</option>
                      <option value="Data Analytics">Data Analyst</option>
                      <option value="Videography">Creative / Videographer</option>
                      <option value="Web Development">Web Developer</option>
                      <option value="Business Operations">Business Operations</option>
                    </select>
                  </div>

                  {/* Problem Statement */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                      <Target className="w-4 h-4 text-brand-accent" />
                      Main Challenge / Job Description
                    </label>
                    <textarea
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none text-white transition-all placeholder:text-slate-600 resize-none"
                      placeholder="What is the main problem you need to solve? Paste the JD here."
                      value={formData.jobDescription}
                      onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                    />
                  </div>

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-brand-accent to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Tailoring Portfolio...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Tailored CV
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RecruiterMode;
