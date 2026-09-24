import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { PageId } from '../types/navigation';
import { GitBranch, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface WorkflowPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
}

export const WorkflowPage: React.FC<WorkflowPageProps> = ({ navigateTo }) => {
  return (
    <div>
      {/* Page Header Screen */}
      <PageHeader
        badge="DELIVERY METHODOLOGY"
        icon={GitBranch}
        title="Predictable, Concurrent Design &amp; Construction Workflow"
        subtitle="How our collaborative model eliminates cost overruns, prevents architectural redesigns, and guarantees structural longevity across every project phase."
        currentPage="workflow"
        navigateTo={navigateTo}
      />

      {/* 4-Step Process Section */}
      <Process />

      {/* Client Reviews & Leadership Section */}
      <Testimonials />

      {/* Start Project Banner */}
      <section className="py-16 bg-[#0a0c0f] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
              Ready to begin Step 01: Multi-Perspective Discovery?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              Book a comprehensive technical session with our lead architects and civil structural engineers.
            </p>
            <div className="pt-4">
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
              >
                <span>Navigate to Contact Screen to Begin</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
