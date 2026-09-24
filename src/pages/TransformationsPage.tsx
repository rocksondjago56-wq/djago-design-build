import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { PageId } from '../types/navigation';
import { ArrowLeftRight, ArrowRight, Building2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface TransformationsPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
}

export const TransformationsPage: React.FC<TransformationsPageProps> = ({ navigateTo }) => {
  return (
    <div>
      {/* Page Header Screen */}
      <PageHeader
        badge="BEFORE & AFTER TRANSFORMATIONS"
        icon={ArrowLeftRight}
        title="From Raw Structural Foundations to Architectural Landmarks"
        subtitle="Explore our interactive transformation sliders comparing initial brownfield earthworks, bare concrete shells, and outdated facilities with completed DJAGO turnkey handovers."
        currentPage="transformations"
        navigateTo={navigateTo}
      />

      {/* Main Before & After Interactive Slider */}
      <BeforeAfterSlider
        onOpenConsultation={() => navigateTo('contact', { serviceId: 'civil-engineering' })}
      />

      {/* Detailed Technical Case Breakdown */}
      <section className="py-16 bg-[#0a0c0f] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                Our Renovation &amp; Structural Delivery Principles
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Every renovation, structural retrofitting, and fit-out adheres to Ghana building codes and international structural integrity standards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection direction="up" delay={100}>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 glass-card">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Syne']">Structural Core Integrity</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Non-destructive concrete testing, ultrasound rebar mapping, and core load audits before commencing interior fit-outs or vertical extensions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 glass-card">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Syne']">Bespoke Millwork &amp; Acoustics</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Precision timber baffle manufacturing, custom executive cabinetry, and smart ambient cove lighting integrated into high-rise office towers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 glass-card">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-['Syne']">Turnkey Civil Execution</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  On-site QA/QC management, 40-tonne axle pavement installations, structural steel fabrication, and zero-defect client handovers.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Renovation Audit on Contact Screen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
