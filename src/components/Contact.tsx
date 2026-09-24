import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Building2, Loader2, AlertTriangle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface ContactProps {
  initialServiceId?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  inquiryId?: string;
  whatsappUrl?: string;
  error?: string;
  details?: Record<string, string>;
}

export const Contact: React.FC<ContactProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    servicePillar: initialServiceId || 'General Inquiry',
    projectLocation: 'Accra, Ghana',
    budgetRange: '$10,000 - $50,000',
    message: '',
    botField: '', // Honeypot for spam bots — hidden from humans
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [successData, setSuccessData] = useState<{ inquiryId: string; whatsappUrl?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setFieldErrors({});
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok || !data.success) {
        if (data.details) {
          setFieldErrors(data.details);
        }
        setApiError(data.error || 'Something went wrong. Please try again.');
        setIsLoading(false);
        return;
      }

      setSuccessData({
        inquiryId: data.inquiryId || 'DJG-RECEIVED',
        whatsappUrl: data.whatsappUrl,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('[DJAGO Contact] Network error:', err);
      setApiError('Unable to reach our servers. Please check your connection or contact us directly via WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0d0f12] relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4 animate-float">
              <Mail className="w-3.5 h-3.5" />
              <span>Consultation & Quotation Inquiry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Start Your Project With DJAGO
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Request a comprehensive technical quotation, structural feasibility review, or brand design proposal.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatedSection direction="right" delay={100}>
              <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 glass-card">
                <h3 className="text-2xl font-bold text-white font-['Syne']">
                  Accra Corporate Office
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Visit our studio and engineering headquarters in North Ridge, Accra, or schedule an executive virtual briefing.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4 text-xs text-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-['Space_Grotesk']">Address</span>
                      <span className="font-semibold text-white mt-0.5 block">{COMPANY_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-xs text-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-['Space_Grotesk']">Telephone Lines</span>
                      <span className="font-semibold text-white mt-0.5 block">{COMPANY_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-xs text-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-['Space_Grotesk']">Official Email</span>
                      <span className="font-semibold text-white mt-0.5 block">{COMPANY_INFO.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 text-xs text-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-400 block font-['Space_Grotesk']">Working Hours</span>
                      <span className="font-semibold text-white mt-0.5 block">{COMPANY_INFO.workingHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Guarantee Box */}
              <div className="mt-6 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-4 glass-card-hover">
                <Building2 className="w-8 h-8 text-amber-400 shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-sm font-bold text-amber-400 font-['Space_Grotesk']">
                    Turnaround Commitment
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Initial proposal & technical feedback delivered within 24 hours of submission.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="left" delay={150}>
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative glass-card">
                {submitted && successData ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-['Syne']">
                      Consultation Request Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out to <strong>DJAGO Design &amp; Build</strong>. One of our lead project engineers or brand directors will contact you within 24 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-['Space_Grotesk'] text-xs font-bold tracking-widest mx-auto">
                      <span>Reference:</span>
                      <span className="text-white">{successData.inquiryId}</span>
                    </div>
                    {successData.whatsappUrl && (
                      <a
                        href={successData.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-bold font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Follow Up on WhatsApp
                      </a>
                    )}
                    <button
                      onClick={() => { setSubmitted(false); setSuccessData(null); }}
                      className="block mx-auto mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold font-['Space_Grotesk'] text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden honeypot field — must stay invisible to users */}
                    <input
                      type="text"
                      name="botField"
                      value={formData.botField}
                      onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                      style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                      tabIndex={-1}
                      aria-hidden="true"
                      autoComplete="off"
                    />

                    <h3 className="text-xl font-bold text-white font-['Syne'] mb-2">
                      Request Project Quotation &amp; Feasibility
                    </h3>

                    {/* API Error Banner */}
                    {apiError && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 text-xs">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p>{apiError}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 font-['Space_Grotesk'] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Kwame Mensah"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-xs focus:outline-none focus:border-amber-500 transition-colors ${fieldErrors.fullName ? 'border-red-500' : 'border-slate-800'}`}
                        />
                        {fieldErrors.fullName && <p className="text-red-400 text-[11px] mt-1">{fieldErrors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 font-['Space_Grotesk'] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. kwame@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 font-['Space_Grotesk'] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+233 24 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 font-['Space_Grotesk'] mb-2">
                          Primary Service Pillar *
                        </label>
                        <select
                          value={formData.servicePillar}
                          onChange={(e) => setFormData({ ...formData, servicePillar: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                        >
                          <option value="General Inquiry">General Multidisciplinary Inquiry</option>
                          <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                          <option value="Civil Engineering & Build">Civil Engineering & Construction</option>
                          <option value="Interior Design & Fitout">Interior Design & Space Planning</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 font-['Space_Grotesk'] mb-2">
                          Project Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Cantonments, Accra"
                          value={formData.projectLocation}
                          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 font-['Space_Grotesk'] mb-2">
                          Estimated Budget Bracket
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500 transition-colors"
                        >
                          <option value="Under $10,000">Under $10,000 USD</option>
                          <option value="$10,000 - $50,000">$10,000 - $50,000 USD</option>
                          <option value="$50,000 - $200,000">$50,000 - $200,000 USD</option>
                          <option value="$200,000+">$200,000+ USD (Major Infrastructure)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 font-['Space_Grotesk'] mb-2">
                        Project Details &amp; Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your vision, timeline, specific requirements, or site specifications..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-white text-xs focus:outline-none focus:border-amber-500 transition-colors ${fieldErrors.message ? 'border-red-500' : 'border-slate-800'}`}
                      />
                      {fieldErrors.message && <p className="text-red-400 text-[11px] mt-1">{fieldErrors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 disabled:opacity-70 disabled:cursor-not-allowed text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase rounded-xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group hover:scale-[1.01] cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
};
