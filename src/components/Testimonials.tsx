import React from 'react';
import { TESTIMONIALS, TEAM_MEMBERS } from '../data/content';
import { Quote, Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#11141a] relative overflow-hidden border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4 animate-float">
              <Quote className="w-3.5 h-3.5" />
              <span>Client Endorsements & Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Trusted by Corporate & Private Clients
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Hear directly from developers, executives, and homeowners who entrusted DJAGO Design & Build with their flagship projects.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <AnimatedSection key={t.id} direction="up" delay={idx * 120}>
              <div
                className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between glass-card-hover h-full relative shadow-xl group"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-200 italic leading-relaxed font-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Syne']">{t.author}</h4>
                    <p className="text-xs text-slate-400 font-['Space_Grotesk']">{t.role}, <strong className="text-amber-400">{t.company}</strong></p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-800 text-[10px] text-amber-300 font-['Space_Grotesk'] border border-slate-700">
                    {t.category}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Leadership Team Showcase */}
        <div className="pt-12 border-t border-slate-800">
          <AnimatedSection direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Syne']">
                Leadership & Principal Specialists
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Our multidisciplinary team brings over 35+ years of combined experience across civil engineering, graphic branding, and spatial architecture.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden glass-card-hover group h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white font-['Syne']">{member.name}</h4>
                    <p className="text-xs font-bold text-amber-400 font-['Space_Grotesk'] mt-0.5">{member.role}</p>
                    <p className="text-xs text-slate-400 mt-2">{member.specialty}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
