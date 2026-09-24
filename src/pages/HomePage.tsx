import React from 'react';
import { Hero } from '../components/Hero';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ProjectsMap } from '../components/ProjectsMap';
import { SERVICES, PROJECTS, COMPANY_INFO } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight, Sparkles, Building2, Paintbrush, Compass, ArrowUpRight, CheckCircle2, Shield, Layers } from 'lucide-react';
import { PageId } from '../types/navigation';

interface HomePageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigateTo, onOpenBrochure }) => {
  const serviceIcons = [Paintbrush, Building2, Compass];

  return (
    <div className="space-y-0">
      {/* 1. Main Hero Section */}
      <Hero
        onOpenConsultation={() => navigateTo('contact')}
        onExploreServices={() => navigateTo('disciplines')}
        onOpenBrochure={onOpenBrochure}
      />

      {/* 2. Practice Pillars Teaser Section */}
      <section className="py-20 lg:py-24 bg-[#0a0c0f] border-t border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  <span>The Three Pillars</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne']">
                  Integrated Multidisciplinary Practice
                </h2>
              </div>
              <button
                onClick={() => navigateTo('disciplines')}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 font-['Space_Grotesk'] tracking-wider uppercase group cursor-pointer"
              >
                <span>Navigate to Disciplines</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </AnimatedSection>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <AnimatedSection key={service.id} direction="up" delay={index * 120}>
                  <div
                    onClick={() => navigateTo('disciplines', { serviceId: service.id })}
                    className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer glass-card"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-400 font-['Space_Grotesk'] uppercase tracking-wider">
                        {service.badge}
                      </span>
                      <h3 className="text-xl font-bold text-white font-['Syne'] mt-1 mb-3 group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-amber-400 font-['Space_Grotesk'] tracking-wider">
                      <span>EXPLORE DISCIPLINE</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Work Teaser */}
      <section className="py-20 lg:py-24 bg-[#0d0f12] border-t border-slate-800/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Delivered Works</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Syne']">
                  Featured Landmark Projects
                </h2>
              </div>
              <button
                onClick={() => navigateTo('work')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-amber-400 font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider group cursor-pointer transition-all"
              >
                <span>Navigate to Full Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </AnimatedSection>

          {/* 3 Spotlight Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <AnimatedSection key={project.id} direction="up" delay={idx * 100}>
                <div
                  onClick={() => navigateTo('work')}
                  className="group rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer glass-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-amber-400 uppercase tracking-wider font-['Space_Grotesk'] border border-slate-800">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                      <span>{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-['Syne'] group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Before & After Transformations Teaser */}
      <BeforeAfterSlider onOpenConsultation={() => navigateTo('contact', { serviceId: 'civil-engineering' })} />

      {/* 5. Interactive Ghana Projects Map Teaser */}
      <ProjectsMap onOpenConsultation={() => navigateTo('contact')} />

      {/* 6. Bottom Call to Action Screen Banner */}
      <section className="py-20 bg-gradient-to-b from-[#0d0f12] via-[#141820] to-[#0a0c0f] border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>Ready to Commission Your Vision?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
            Schedule a Design &amp; Engineering Consultation
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From preliminary land feasibility audits and architectural concept drafting to turnkey structural civil execution and luxury interior fit-outs in Accra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Navigate to Contact Screen</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="w-full sm:w-auto px-6 py-4 bg-slate-900 border border-slate-700 hover:border-amber-500/50 text-slate-200 hover:text-white font-bold font-['Space_Grotesk'] text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all cursor-pointer"
              >
                <span>Download Capabilities Deck</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
