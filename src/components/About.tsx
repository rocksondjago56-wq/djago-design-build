import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { ShieldCheck, Award, Layers, Sparkles, MapPin, Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#11141a] relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background Accent Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Multidisciplinary Excellence • Ghana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Single-Roof Collaborative Practice
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg font-normal">
            Modeled on leading global design collaboratives, DJAGO unites Architecture, Civil Engineering, Interior Spatial Design, and Brand Strategy into one seamless, concurrent workflow.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne'] leading-snug">
              Eliminating inter-firm friction through interdisciplinary design synergy.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Traditional project delivery forces clients to contract separate entities: architects, structural/MEP civil engineers, interior designers, and branding consultants. This fragmented structure causes late-stage change orders, budget inflation, and misaligned spatial vision.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-amber-400">DJAGO Design & Build Collaborative</strong>, all disciplines collaborate from Day 1. Structural engineering constraints, environmental daylighting, interior acoustic comfort, and brand touchpoints are resolved concurrently—delivering superior human-centric spaces with total single-point accountability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">Unified Vision</h4>
                  <p className="text-xs text-slate-400 mt-1">Single-point accountability from foundation blueprint to interior styling.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">Ghana Standard Compliance</h4>
                  <p className="text-xs text-slate-400 mt-1">Full adherence to Ghana Institution of Engineers & municipal codes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=1200&auto=format&fit=crop&q=80"
                alt="Accra Ghana Skylines and Civil Engineering"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-slate-950/90 border border-amber-500/30 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 font-['Space_Grotesk'] uppercase tracking-wider">
                    Accra, Ghana Headquarters
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white font-['Syne']">
                  Delivering Landmark Projects Across West Africa
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Serving residential developers, commercial enterprises, government institutions, and private high-net-worth individuals.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 hover:border-amber-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Syne'] mb-3">1. Graphic Design & Branding</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              We define market-leading brand identities, visual style systems, packaging, and high-impact marketing collateral for modern Ghanaian and global enterprises.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Brand Architecture & Logo Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Packaging & Environmental Signage
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 hover:border-amber-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Syne'] mb-3">2. Civil Engineering</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Our structural engineers plan, design, and manage structural construction, earthworks, drainage systems, and high-rise commercial framing with zero compromise.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Structural Analysis & Soil Audits
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Commercial & Residential Build
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-8 hover:border-amber-500/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-['Syne'] mb-3">3. Interior Design</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              We create luxury living rooms, custom office fitouts, bespoke cabinetry, and lighting schemes that blend timber, stone, and plush acoustic textiles.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                3D Photorealistic Renderings
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Bespoke Furniture & Fitout
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
