/// <reference types="vite/client" />
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, X, Send, Loader2 } from 'lucide-react';

///  // Re-declare System Instruction since we are moving back to client-side for redundancy
const SYSTEM_INSTRUCTION = `
You are the AI Representative for Anass Hlaibi, a Senior Solutions Architect & Digital Transformation Lead. 
Your primary objective is to demonstrate technical authority and ROI-focused strategic thinking.

**Core Identity & Persona:**
*   **Elite Technical Architect:** Direct, high-authority, and logic-driven.
*   **Systems-as-a-Server Focus:** You deploy autonomous sales engines and secure AI-database architectures designed for multi-million dollar B2B pipelines.
*   **Structural Logic:** Background in Physics provides the framework for solving complex failures and multi-variate analysis.

**Key Projects & Capabilities:**
*   **Enterprise B2B Sales Ecosystem (Chada Alyasmin):** Architected using React, Supabase, and Google Vertex AI (Gemini 2.0 Flash). Featuring:
    - **Intelligent Cross-Selling:** AI analyzes synergy between materials to maximize average order value.
    - **Autonomous Database Sync:** Real-time link between AI and Supabase (PostgreSQL). Updates to inventory instantly rewire the AI's knowledge base.
    - **Zero-Friction Pipeline:** Automated PDF Devis (Quote) Generator that routes directly to sales offices.
    - **Security:** Dedicated Service Accounts and authenticated API endpoints.

**Operational Roadmap (Next Phase):**
*   **Client Dashboard:** Private portal for B2B clients to track order status.
*   **Production Tracking:** Real-time manufacturing and shipping visibility.
*   **Verification Layer:** Automated workflows reducing management overhead to a final approval gate.

**Tone Guidelines:**
*   **Concise & Minimalist:** High signal, low noise. Use short, punchy sentences.
*   **Professional & Industrial:** Speak as a Senior Lead. Avoid marketing fluff.
*   **ROI Driven:** Shift systems from "operational expenses" to "revenue-generating assets."

**Rules:**
1.  Never say "I hope this helps". Give the answer and stop.
2.  If asked about contact, direct them to the #contact section or LinkedIn.
3.  Keep all responses under 3-4 sentences.
4.  Speak with the authority of a Senior Architect.

**EXAMPLE:**
User: "What's your biggest project?"
You: "The Chada Alyasmin B2B Ecosystem. It's an autonomous sales engine using Gemini 2.0 Flash and Supabase to handle multilingual client acquisition and automated quote generation with zero human friction."
`;

export const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Anass's AI Representative. Ask me about Vibe Coding, SoftStore, or my marketing background!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // OpenRouter API Key
  const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || '';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!API_KEY) {
         throw new Error("API Key not found. Please check .env file for VITE_OPENROUTER_API_KEY.");
      }

      // Map history to OpenAI format
      const chatHistory = messages
        .filter(msg => !msg.isBot || msg !== messages[0]) // Filter out initial greeting if needed, or keep it.
        .map(msg => ({
          role: msg.isBot ? "assistant" : "user",
          content: msg.text
        }));

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "HTTP-Referer": window.location.origin, // Dynamic site URL
          "X-Title": "Anass Hlaibi Portfolio",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemini-2.0-flash-001", // Using the updated flash model via OpenRouter
          "messages": [
            { "role": "system", "content": SYSTEM_INSTRUCTION },
            ...chatHistory,
            { "role": "user", "content": userMsg }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      const botResponse = data.choices?.[0]?.message?.content || "I didn't catch that. Could you try again?";

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    } catch (error: any) {
      console.error("OpenRouter Error:", error);
      setMessages(prev => [...prev, { text: `Error: ${error.message || "Connection failed"}`, isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-4">
      
      {/* Badge (only visible when chat is closed or always visible? Let's keep it next to toggle) */}
      {!isOpen && (
         <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full shadow-xl animate-in fade-in slide-in-from-right-10 duration-700">
           <Sparkles className="w-4 h-4 text-brand-accent" />
           <span className="text-xs font-mono text-slate-300">Built with <span className="text-brand-accent font-bold">Vibe Coding</span></span>
         </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 bg-brand-accent hover:bg-blue-600 rounded-full shadow-2xl shadow-brand-accent/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Toggle AI Agent"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="p-4 bg-slate-800/50 border-b border-slate-700/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 absolute bottom-0 right-0 bg-green-500 rounded-full border border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-accent to-brand-purple flex items-center justify-center text-xs font-bold text-white">
                  AI
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Anass's AI Twin</h3>
                <div className="flex items-center gap-1.5">
                   <Sparkles className="w-3 h-3 text-brand-accent" />
                   <span className="text-[10px] font-mono text-brand-accent uppercase tracking-wider">Vibe Coding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent" ref={scrollRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.isBot 
                      ? 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700/50' 
                      : 'bg-brand-accent text-white rounded-tr-none shadow-lg shadow-brand-accent/20'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-4 bg-slate-800 rounded-2xl rounded-tl-none border border-slate-700/50">
                  <Loader2 className="w-5 h-5 text-brand-accent animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-800/30 border-t border-slate-700/50">
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-transparent transition-all"
                placeholder="Ask about my projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-1.5 bg-brand-accent hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-slate-600">Powered by Google Gemini</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
