import React from 'react';
import { CheckCircle2, Cpu } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Feasibility Audit',
      description: 'We analyze your brand vision, site conditions, zoning regulations, structural civil requirements, and budgetary constraints in Accra or wider West Africa.',
      details: ['Site & Structural Survey', 'Brand Strategy Brief', 'Budget & Timeline Roadmap']
    },
    {
      number: '02',
      title: 'Multidisciplinary Design & 3D Modeling',
      description: 'Our graphic identity, civil engineering, and interior design teams collaborate to craft synchronized blueprints, vector assets, and photorealistic 3D interior renders.',
      details: ['Photorealistic Renders', 'Structural Engineering Calculations', 'Brand Manual Drafts']
    },
    {
      number: '03',
      title: 'Engineering Procurement & Build Phase',
      description: 'Our civil engineering crew executes structural groundwork, concrete pour, framing, and installation with rigorous Ghana Institution of Engineers quality control.',
      details: ['On-site Civil Construction', 'Quality Control Audits', 'Custom Millwork Fabrication']
    },
    {
      number: '04',
      title: 'Interior Fit-Out & Brand Launch',
      description: 'We install custom furniture, lighting systems, acoustic paneling, and environmental branding collateral—delivering a turnkey masterpiece ready for immediate occupancy.',
      details: ['Turnkey Handover', 'Brand Collateral Package', 'Post-occupancy Guarantee']
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0d0f12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4 animate-float">
              <Cpu className="w-3.5 h-3.5" />
              <span>Execution Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              How DJAGO Delivers Excellence
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              A structured 4-step framework guaranteeing seamless transition from initial brand concept to heavy structural construction and luxury interior styling.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <AnimatedSection key={idx} direction="up" delay={idx * 120}>
              <div
                className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 glass-card-hover flex flex-col justify-between h-full group"
              >
                {/* Step Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-amber-400 font-['Syne'] group-hover:scale-110 transition-transform inline-block">
                      {step.number}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Syne'] mb-3 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {step.details.map((detail, didx) => (
                    <div key={didx} className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
