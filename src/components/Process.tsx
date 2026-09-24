import React from 'react';
import { Compass, CheckCircle2, ShieldCheck, Cpu, HardHat, Sparkles } from 'lucide-react';

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4">
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

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold text-amber-400 font-['Syne']">
                  {step.number}
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold font-['Space_Grotesk']">
                  Step
                </div>
              </div>

              {/* Title & Copy */}
              <div className="space-y-3 mb-6">
                <h3 className="text-xl font-bold text-white font-['Syne'] group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                {step.details.map((item, idxx) => (
                  <div key={idxx} className="flex items-center gap-2 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              <HardHat className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Syne']">
                Licensed Civil Engineers & Certified Brand Strategists
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                All structural civil engineering projects strictly adhere to Ghana Building Code (GBC) standards.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              100% On-Time Completion Guarantee
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
