import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwpvylqq"); // Replaced placeholder with actual ID if available, or keep placeholder
  
  if (state.succeeded) {
      return (
        <div className="text-center p-8 bg-brand-success/10 rounded-2xl border border-brand-success/20">
          <p className="text-xl font-bold text-brand-success">Thanks for your message!</p>
          <p className="text-slate-400 mt-2">I'll get back to you shortly.</p>
        </div>
      );
  }
  return (
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid grid-cols-1 gap-6 bg-slate-900/50 p-8 pb-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-slate-200 placeholder-slate-500"
            placeholder="john@example.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-slate-200 placeholder-slate-500 resize-none"
            placeholder="Tell me about your project..."
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm"
          />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full py-4 mt-6 bg-brand-accent hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
  );
}
export default ContactForm;