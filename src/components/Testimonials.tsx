import React from 'react';
import { TESTIMONIALS, TEAM_MEMBERS } from '../data/content';
import { Quote, Star, Building2, Paintbrush, Compass } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

/** Extract 1-2 initials from a name string */
const getInitials = (name: string): string => {
  const words = name.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/);
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

/** Deterministic accent color palette for initials */
const ACCENT_COLORS = [
  'from-amber-500 to-yellow-500',
  'from-amber-600 to-orange-500',
  'from-yellow-500 to-amber-400',
  'from-amber-400 to-yellow-600',
  'from-orange-400 to-amber-500',
];

const teamIcons = [Building2, Paintbrush, Compass];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#11141a] relative overflow-hidden border-t border-b border-slate-800">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d_1px,transparent_1px),linear-gradient(to_bottom,#1f242d_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Testimonials Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4 animate-float">
              <Quote className="w-3.5 h-3.5" />
              <span>Client Endorsements &amp; Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Trusted by Corporate &amp; Private Clients
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Hear directly from developers, executives, and homeowners who entrusted DJAGO Design &amp; Build with their flagship projects.
            </p>
          </div>
        </AnimatedSection>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => {
            const initials = getInitials(t.author);
            const gradientCls = ACCENT_COLORS[idx % ACCENT_COLORS.length];

            return (
              <AnimatedSection key={t.id} direction="up" delay={idx * 120}>
                <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 flex flex-col justify-between h-full relative shadow-xl group transition-all duration-300 hover:-translate-y-1">

                  {/* Decorative quote mark */}
                  <div className="absolute top-5 right-6 text-amber-500/10 pointer-events-none">
                    <Quote className="w-12 h-12" />
                  </div>

                  <div className="space-y-5">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm text-slate-200 italic leading-relaxed font-normal relative z-10">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-3">
                    {/* Initials Avatar */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientCls} flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/15`}>
                      <span className="text-xs font-extrabold text-slate-950 font-['Space_Grotesk']">
                        {initials}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white font-['Syne'] truncate">{t.author}</h4>
                      <p className="text-[11px] text-slate-400 font-['Space_Grotesk'] truncate">
                        {t.role}, <strong className="text-amber-400">{t.company}</strong>
                      </p>
                    </div>

                    <span className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-800/80 text-[9px] text-amber-300 font-bold font-['Space_Grotesk'] uppercase tracking-wider border border-slate-700/80">
                      {t.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Leadership and Practice Divisions */}
        <div className="pt-12 border-t border-slate-800">
          <AnimatedSection direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Syne']">
                Leadership &amp; Practice Divisions
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Our multidisciplinary team brings over 12+ years of combined experience across civil engineering, graphic branding, and spatial architecture.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => {
              const initials = getInitials(member.name);
              const gradientCls = ACCENT_COLORS[idx % ACCENT_COLORS.length];
              const TeamIcon = teamIcons[idx % teamIcons.length];

              return (
                <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                  <div className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 overflow-hidden group h-full transition-all duration-300 hover:-translate-y-1">

                    {/* Initials Hero Area (replaces stock photo) */}
                    <div className="h-56 relative flex items-center justify-center bg-gradient-to-br from-[#0d0f12] via-[#141820] to-[#1a1f2e] overflow-hidden">
                      {/* Background pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,#1f242d_25%,transparent_25%,transparent_75%,#1f242d_75%)] bg-[size:3rem_3rem] opacity-[0.04]" />

                      {/* Large Initial Circle */}
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradientCls} flex items-center justify-center shadow-2xl shadow-amber-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <span className="text-3xl font-extrabold text-slate-950 font-['Syne']">
                          {initials}
                        </span>
                      </div>

                      {/* Floating discipline icon */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700 flex items-center justify-center text-amber-400">
                        <TeamIcon className="w-4 h-4" />
                      </div>

                      {/* Bottom fade */}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    </div>

                    <div className="p-6 space-y-2">
                      <h4 className="text-lg font-bold text-white font-['Syne'] group-hover:text-amber-300 transition-colors">{member.name}</h4>
                      <p className="text-xs font-bold text-amber-400 font-['Space_Grotesk'] uppercase tracking-wider">{member.role}</p>
                      <p className="text-xs text-slate-400 leading-relaxed">{member.specialty}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
