import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, ShieldCheck } from 'lucide-react';

interface QuickPrompt {
  id: string;
  label: string;
  text: string;
}

const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: 'architecture',
    label: '📐 Architectural Design',
    text: 'Hello DJAGO Team, I would like to inquire about architectural design and master planning for an upcoming project.'
  },
  {
    id: 'civil',
    label: '🏗️ Civil & Structural',
    text: 'Hello DJAGO Team, I need a civil engineering / structural feasibility review for a development site.'
  },
  {
    id: 'interior',
    label: '🛋️ Interior Fit-out',
    text: 'Hello DJAGO Team, I am looking for luxury interior design and turnkey fit-out services for our space.'
  },
  {
    id: 'branding',
    label: '🎨 Branding & Identity',
    text: 'Hello DJAGO Team, we want to consult on brand architecture, environmental signage, and corporate identity.'
  }
];

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState<'line1' | 'line2'>('line1');
  const [message, setMessage] = useState(
    'Hello DJAGO Team, I would like to consult on an integrated design & build project.'
  );

  const phoneNumbers = {
    line1: {
      raw: '233506471139',
      display: '050 647 1139',
      desc: 'Corporate & Client Services'
    },
    line2: {
      raw: '233599793141',
      display: '059 979 3141',
      desc: 'Technical & Site Operations'
    }
  };

  const handleSelectPrompt = (promptText: string) => {
    setMessage(promptText);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = phoneNumbers[selectedPhone].raw;
    const encoded = encodeURIComponent(message.trim());
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Card Popover */}
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[380px] max-w-sm rounded-2xl bg-[#12161c] border border-amber-500/25 shadow-2xl shadow-black/80 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-[#12161c] p-4 border-b border-emerald-500/20 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md">
                  <MessageCircle className="w-6 h-6 fill-emerald-500/20" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#12161c] rounded-full animate-ping" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#12161c] rounded-full" />
              </div>

              <div>
                <h4 className="text-white font-bold font-['Syne'] text-base flex items-center gap-2">
                  DJAGO WhatsApp Desk
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h4>
                <p className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Typically replies within 15 mins
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <form onSubmit={handleSendWhatsApp} className="p-4 space-y-4 text-xs">
            {/* Phone Line Selector */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Select Direct Contact Line:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPhone('line1')}
                  className={`p-2 rounded-xl text-left border transition-all ${
                    selectedPhone === 'line1'
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-[12px] flex items-center gap-1">
                    <Phone className="w-3 h-3 text-amber-400" />
                    {phoneNumbers.line1.display}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {phoneNumbers.line1.desc}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPhone('line2')}
                  className={`p-2 rounded-xl text-left border transition-all ${
                    selectedPhone === 'line2'
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-[12px] flex items-center gap-1">
                    <Phone className="w-3 h-3 text-amber-400" />
                    {phoneNumbers.line2.display}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {phoneNumbers.line2.desc}
                  </div>
                </button>
              </div>
            </div>

            {/* Quick Starters */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Quick Project Topics:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt.id}
                    type="button"
                    onClick={() => handleSelectPrompt(prompt.text)}
                    className="text-left px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-300 transition-colors text-[11px] truncate"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Area */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Your Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                required
                className="w-full rounded-xl bg-slate-950/80 border border-slate-800 p-2.5 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                placeholder="Type your project inquiry..."
              />
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs font-['Space_Grotesk'] tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>START WHATSAPP CHAT</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Direct encrypted consultation • Accra, Ghana</span>
            </div>
          </form>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-950/50 hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Chat with DJAGO on WhatsApp"
      >
        {/* Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm group-hover:blur-md animate-pulse pointer-events-none" />

        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white/20" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-emerald-600 rounded-full" />
        </div>

        <span className="hidden sm:inline font-bold text-xs tracking-wider font-['Space_Grotesk'] uppercase">
          {isOpen ? 'Close Chat' : 'Chat on WhatsApp'}
        </span>
      </button>
    </div>
  );
};
