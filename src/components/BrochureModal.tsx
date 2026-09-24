import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Sparkles, Building2, Shield, ArrowRight, Printer } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloadState, setDownloadState] = useState<'form' | 'downloading' | 'complete'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    discipline: 'All Integrated Disciplines'
  });

  if (!isOpen) return null;

  const handleTriggerDownload = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setDownloadState('downloading');

    // Generate an executive PDF / HTML document representing the official brochure
    const brochureHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>DJAGO Design & Build Collaborative - Corporate Capabilities Deck</title>
        <style>
          @page { size: A4 portrait; margin: 18mm; }
          body { font-family: 'Segoe UI', Helvetica, Arial, sans-serif; color: #1e293b; background: #fff; line-height: 1.6; margin: 0; padding: 24px; }
          .header { border-bottom: 3px solid #d97706; padding-bottom: 20px; margin-bottom: 24px; }
          .brand { font-size: 32px; font-weight: 900; letter-spacing: 2px; color: #0f172a; }
          .brand span { color: #d97706; }
          .descriptor { font-size: 11px; font-weight: 700; color: #64748b; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px; }
          .tagline { font-size: 15px; color: #475569; margin-top: 8px; font-style: italic; }
          .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 24px 0; }
          .pillar-box { border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #f8fafc; }
          .pillar-title { font-size: 16px; font-weight: bold; color: #0f172a; margin-bottom: 8px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; }
          .stats { display: flex; justify-content: space-between; background: #0f172a; color: #fff; border-radius: 8px; padding: 18px 24px; margin: 24px 0; }
          .stat-item { text-align: center; }
          .stat-val { font-size: 24px; font-weight: 900; color: #f59e0b; }
          .stat-lbl { font-size: 11px; text-transform: uppercase; color: #cbd5e1; }
          .footer { margin-top: 36px; border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #64748b; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="brand">DJAGO <span>COLLABORATIVE</span></div>
          <div class="descriptor">Architecture • Civil Engineering • Interiors • Branding</div>
          <div class="tagline">Ghana's Premier Integrated Multidisciplinary Design &amp; Build Firm</div>
        </div>

        <p><strong>Corporate Capability &amp; Practice Statement (2024 / 2025)</strong></p>
        <p>DJAGO Design &amp; Build Collaborative operates as an integrated multidisciplinary architecture and engineering practice based in Accra, Ghana. We unite architectural vision with structural civil rigor, luxury bespoke interior design, and strategic corporate branding under a single unified methodology.</p>

        <div class="stats">
          <div class="stat-item"><div class="stat-val">180+</div><div class="stat-lbl">Projects Delivered</div></div>
          <div class="stat-item"><div class="stat-val">12+</div><div class="stat-lbl">Years of Synergy</div></div>
          <div class="stat-item"><div class="stat-val">35+</div><div class="stat-lbl">Licensed Experts</div></div>
          <div class="stat-item"><div class="stat-val">100%</div><div class="stat-lbl">Safety Compliance</div></div>
        </div>

        <div class="grid">
          <div class="pillar-box">
            <div class="pillar-title">1. Civil &amp; Structural Engineering</div>
            <p>BIM 3D modeling, deep foundation engineering, high-rise structural validation, value engineering, site supervision, and turnkey civil construction.</p>
          </div>
          <div class="pillar-box">
            <div class="pillar-title">2. Architectural Master Planning</div>
            <p>Sustainable tropical modernism, commercial plazas, mixed-use complexes, luxury private residences, and civic landmarks across Ghana.</p>
          </div>
          <div class="pillar-box">
            <div class="pillar-title">3. Luxury Interiors &amp; Fit-Out</div>
            <p>Turnkey corporate boardrooms, acoustic slat baffle systems, custom hardwood millwork, luxury residential fit-outs, and intelligent lighting.</p>
          </div>
          <div class="pillar-box">
            <div class="pillar-title">4. Brand Architecture &amp; Signage</div>
            <p>Complete corporate visual identities, wayfinding systems, 3D architectural signage, and environmental brand experiences.</p>
          </div>
        </div>

        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 14px; margin: 20px 0;">
          <strong>Flagship Delivered Works in Ghana:</strong>
          <ul>
            <li><strong>Apex Financial Center (Airport Residential, Accra):</strong> 14-storey high-rise concrete core &amp; structural engineering.</li>
            <li><strong>Ridge Heights Executive Penthouse (North Ridge, Accra):</strong> Luxury walnut interior fit-out &amp; smart lighting.</li>
            <li><strong>Tema Industrial Logistics Hub (Tema Port Zone):</strong> 3,200 sqm heavy portal frame &amp; 40-tonne concrete pavement.</li>
            <li><strong>Cantonments Minimalist Eco Villa (Cantonments, Accra):</strong> Cantilevered structural villa with passive tropical shading.</li>
          </ul>
        </div>

        <div class="footer">
          <div>
            <strong>Headquarters:</strong> ${COMPANY_INFO.address}<br>
            <strong>Telephone:</strong> ${COMPANY_INFO.phone}<br>
            <strong>Email:</strong> ${COMPANY_INFO.email}
          </div>
          <div style="text-align: right;">
            <strong>Online Portfolio:</strong> https://djago-design-build.vercel.app<br>
            Official Document • Confidential &copy; 2025 DJAGO Collaborative
          </div>
        </div>
      </body>
      </html>
    `;

    setTimeout(() => {
      // Create blob and trigger download
      const blob = new Blob([brochureHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `DJAGO-Design-Build-Capabilities-Profile.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloadState('complete');
    }, 900);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0f1217] border border-amber-500/30 shadow-2xl overflow-hidden animate-scale-in">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close brochure modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column: Visual Brochure Deck Mockup */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-900 via-[#141922] to-amber-950/40 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden">
            
            {/* Ambient Gold Glow */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/20 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest mb-6">
                <FileText className="w-3 h-3" />
                <span>Executive Capabilities Deck</span>
              </div>

              {/* Deck Cover Card */}
              <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-[#0b0e13] border-2 border-amber-500/40 p-6 shadow-2xl relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-extrabold font-['Syne'] text-xl">
                  D
                </div>

                <div>
                  <h4 className="text-xl font-extrabold text-white font-['Syne'] tracking-wide">
                    DJAGO
                  </h4>
                  <div className="text-[10px] font-bold text-amber-400 font-['Space_Grotesk'] tracking-widest uppercase">
                    PRACTICE STATEMENT 2024 / 2025
                  </div>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                  Architecture • Civil &amp; Structural Engineering • Luxury Interiors • Brand Identity
                </div>

                <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between pt-2">
                  <span>Accra, Ghana</span>
                  <span>180+ Delivered</span>
                </div>
              </div>
            </div>

            {/* Deck Contents Index */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Deck Contents:
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">01.</span> Multidisciplinary Practice Philosophy
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">02.</span> BIM &amp; Civil Engineering Standards
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">03.</span> Flagship Portfolio Across Ghana
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">04.</span> Executive Team &amp; Licensure
              </div>
            </div>

          </div>

          {/* Right Column: Download Form & Instant Action */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {downloadState === 'complete' ? (
              <div className="text-center py-8 space-y-4 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-['Syne']">
                  Capabilities Deck Ready!
                </h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Your corporate capabilities profile has been generated and downloaded to your device.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => handleTriggerDownload()}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 text-xs font-bold font-['Space_Grotesk'] tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Again</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-['Space_Grotesk'] tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                  >
                    <span>Done</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                    Download Corporate Profile
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2">
                    Access our official 2024/2025 practice statement, project case studies, and engineering qualifications for tenders and project evaluations.
                  </p>
                </div>

                <form onSubmit={handleTriggerDownload} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kwame Mensah"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-amber-500/60"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="kwame@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Organization / Firm
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Private Investor"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-amber-500/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Primary Discipline of Interest
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-amber-500/60 cursor-pointer"
                    >
                      <option>All Integrated Disciplines</option>
                      <option>Architecture &amp; Master Planning</option>
                      <option>Civil &amp; Structural Engineering</option>
                      <option>Luxury Interior Design &amp; Fit-Out</option>
                      <option>Corporate Branding &amp; Signage</option>
                    </select>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={downloadState === 'downloading'}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-['Space_Grotesk'] tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {downloadState === 'downloading' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>GENERATING PROFILE...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" />
                          <span>DOWNLOAD OFFICIAL CAPABILITIES PROFILE</span>
                        </>
                      )}
                    </button>

                    {/* Instant Direct Download Bypass */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 px-1 pt-1">
                      <span>Instant file download (Print-ready document)</span>
                      <button
                        type="button"
                        onClick={() => handleTriggerDownload()}
                        className="text-amber-400 hover:underline cursor-pointer"
                      >
                        Direct Download &rarr;
                      </button>
                    </div>
                  </div>
                </form>

                <div className="text-[10px] text-slate-500 flex items-center gap-2 border-t border-slate-800/80 pt-3">
                  <Shield className="w-3.5 h-3.5 text-amber-500/70 shrink-0" />
                  <span>Your information is protected and used solely for tender evaluation and communications.</span>
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
