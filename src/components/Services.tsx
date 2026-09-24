import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { Paintbrush, Building2, Compass, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface ServicesProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const icons = {
    'graphic-design': Paintbrush,
    'civil-engineering': Building2,
    'interior-design': Compass,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0d0f12] relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d_1px,transparent_1px),linear-gradient(to_bottom,#1f242d_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4 animate-float">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Disciplines & Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Tailored Engineering & Creative Services
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Select a service pillar below to review our specific capabilities, deliverables, and execution methodologies.
            </p>
          </div>
        </AnimatedSection>

        {/* Tab Selector Buttons */}
        <AnimatedSection direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {SERVICES.map((srv) => {
              const Icon = icons[srv.id as keyof typeof icons] || Layers;
              const isSelected = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/20 ring-1 ring-amber-500 scale-[1.02]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 hover:scale-[1.01]'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span
                      className={`text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider ${
                        isSelected ? 'text-amber-400' : 'text-slate-400'
                      }`}
                    >
                      {srv.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white font-['Syne'] mt-0.5">{srv.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{srv.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Detailed Active Service Spotlight Box */}
        <AnimatedSection direction="up" delay={200}>
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 lg:p-10 shadow-2xl backdrop-blur-xl glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider mb-3">
                    {activeService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Syne']">
                    {activeService.title}
                  </h3>
                  <p className="text-amber-300 text-sm font-['Space_Grotesk'] font-medium mt-1">
                    {activeService.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeService.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-['Space_Grotesk']">
                    Core Service Scope & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Deliverables Tags */}
                <div className="pt-2 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-['Space_Grotesk'] mb-3">
                    Key Client Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-slate-800 text-amber-300 text-xs font-semibold font-['Space_Grotesk'] border border-slate-700"
                      >
                        ✓ {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onOpenConsultation(activeService.id)}
                    className="px-7 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-105"
                  >
                    <span>Inquire for {activeService.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Image Showcase */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 group h-[380px] lg:h-[450px] shadow-2xl">
                  <img
                    key={activeService.id}
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md">
                    <div className="text-xs text-amber-400 font-bold font-['Space_Grotesk'] uppercase tracking-wider mb-1">
                      DJAGO Excellence Guarantee
                    </div>
                    <p className="text-xs text-slate-300">
                      {activeService.tagline}
                    </p>
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
