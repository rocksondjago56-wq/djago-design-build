import React, { useState, useEffect } from 'react';
import { SERVICES, COMPANY_INFO } from '../data/content';
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, Paintbrush, Compass, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (serviceId?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SERVICES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const serviceIcons = [Paintbrush, Building2, Compass];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-6 pb-16 lg:py-20 bg-[#0d0f12]">
      {/* Background Architectural Grid Lines & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d_1px,transparent_1px),linear-gradient(to_bottom,#1f242d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30" />
      
      {/* Radiant Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest backdrop-blur-md shadow-lg shadow-black/40">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>Integrated Multidisciplinary Enterprise • Ghana</span>
          </div>
        </div>

        {/* Hero Title & Subheading Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white font-['Syne'] tracking-tight leading-[1.08]">
              Your Vision <span className="text-amber-400 font-extrabold relative inline-block">
                •
              </span> <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              <strong className="text-white font-semibold">DJAGO Design & Build</strong> bridges artistic brand mastery, precision civil engineering, and opulent interior design under one unified Ghanaian standard.
            </p>

            {/* Three Pillars Pill Chips */}
            <div className="mt-8 flex flex-wrap gap-2.5 justify-center md:justify-start">
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-amber-300 text-xs font-semibold font-['Space_Grotesk'] flex items-center gap-2">
                <Paintbrush className="w-3.5 h-3.5 text-amber-400" />
                Graphic Design & Branding
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-amber-300 text-xs font-semibold font-['Space_Grotesk'] flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                Civil Engineering
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-amber-300 text-xs font-semibold font-['Space_Grotesk'] flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Interior Design
              </span>
            </div>

            {/* Call to Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold font-['Space_Grotesk'] text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 group"
              >
                <span>Book Free Project Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold font-['Space_Grotesk'] text-sm tracking-wider uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Disciplines</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Feature Showcase Carousel/Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-2 shadow-2xl shadow-black/80 backdrop-blur-xl">
              
              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 bg-[#0d0f12] p-1.5 rounded-xl border border-slate-800/80 mb-3">
                {SERVICES.map((srv, idx) => {
                  const Icon = serviceIcons[idx];
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setActiveTab(idx)}
                      className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold font-['Space_Grotesk'] transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate hidden sm:inline">{srv.badge.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Service Preview Card */}
              <div className="relative h-96 sm:h-[420px] rounded-xl overflow-hidden group">
                <img
                  src={SERVICES[activeTab].image}
                  alt={SERVICES[activeTab].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/60 to-transparent" />

                {/* Card Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 rounded-md bg-amber-500/90 text-slate-950 text-xs font-extrabold font-['Space_Grotesk'] uppercase tracking-wider mb-2 self-start">
                    {SERVICES[activeTab].badge}
                  </span>

                  <h3 className="text-2xl font-bold text-white font-['Syne'] leading-tight mb-2">
                    {SERVICES[activeTab].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4">
                    {SERVICES[activeTab].tagline}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {SERVICES[activeTab].features.slice(0, 3).map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-amber-200/90 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenConsultation(SERVICES[activeTab].id)}
                    className="w-full py-2.5 bg-slate-950/90 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/40 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Quotation for {SERVICES[activeTab].badge}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="flex gap-1.5 px-3 py-2 justify-center">
                {SERVICES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTab === idx ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-12 text-center hidden md:block">
        <a href="#about" className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-amber-400 text-xs transition-colors">
          <span>Scroll to Discover DJAGO</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
