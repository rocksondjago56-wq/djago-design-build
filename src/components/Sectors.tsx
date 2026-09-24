import React, { useState } from 'react';
import { SECTORS } from '../data/content';
import { Layers, ArrowRight, Building2, BookOpen, HeartPulse, Home, Users } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Sectors: React.FC = () => {
  const [activeSector, setActiveSector] = useState<string>(SECTORS[0].id);

  const sectorIcons = {
    corporate: Building2,
    civic: Users,
    education: BookOpen,
    residential: Home,
    healthcare: HeartPulse,
  };

  const selectedSectorObj = SECTORS.find((s) => s.id === activeSector) || SECTORS[0];

  return (
    <section id="sectors" className="py-20 lg:py-28 bg-[#11141a] relative overflow-hidden border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4 animate-float">
              <Layers className="w-3.5 h-3.5" />
              <span>Market Expertise & Typologies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Tailored Solutions Across Sectors
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Like leading interdisciplinary design collaboratives, we cross-pollinate engineering innovation, human-centered spatial ergonomics, and brand identity across major market sectors.
            </p>
          </div>
        </AnimatedSection>

        {/* Sector Tabs */}
        <AnimatedSection direction="up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {SECTORS.map((sector) => {
              const Icon = sectorIcons[sector.id as keyof typeof sectorIcons] || Building2;
              const isActive = activeSector === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sector.name}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Selected Sector Feature Showcase */}
        <AnimatedSection direction="up" delay={200}>
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 lg:p-12 shadow-2xl relative overflow-hidden glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-block px-3.5 py-1 rounded-md bg-amber-500/20 text-amber-400 text-xs font-extrabold font-['Space_Grotesk'] uppercase tracking-wider">
                  {selectedSectorObj.count}
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne']">
                  {selectedSectorObj.name}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {selectedSectorObj.tagline}
                </p>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="font-bold font-['Space_Grotesk'] text-amber-400 uppercase tracking-wider">
                    The Collaborative Value
                  </div>
                  <p>
                    Integrated structural engineering, climate-responsive building envelopes, acoustic interior baffling, and environmental graphics tailored specifically to {selectedSectorObj.name.toLowerCase()} environments.
                  </p>
                </div>

                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-105"
                >
                  <span>View {selectedSectorObj.name} Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 group shadow-2xl">
                  <img
                    key={selectedSectorObj.id}
                    src={selectedSectorObj.image}
                    alt={selectedSectorObj.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                    <div className="text-xs font-bold text-white font-['Syne']">
                      People-First Sector Design
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Delivered with single-roof interdisciplinary efficiency across Ghana.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
