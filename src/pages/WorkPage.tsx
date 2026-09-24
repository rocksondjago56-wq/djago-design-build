import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Portfolio } from '../components/Portfolio';
import { PageId } from '../types/navigation';
import { Sparkles, ArrowRight, Building2 } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface WorkPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ navigateTo }) => {
  return (
    <div>
      {/* Page Header Screen */}
      <PageHeader
        badge="DELIVERED PORTFOLIO"
        icon={Sparkles}
        title="Featured Architectural, Civil &amp; Interior Works"
        subtitle="Browse our completed landmark projects across Ghana. Filter by discipline or market sector, and inspect comprehensive technical case studies."
        currentPage="work"
        navigateTo={navigateTo}
      />

      {/* Main Portfolio Component with Filters & Modal */}
      <Portfolio
        onOpenConsultation={(serviceId) => navigateTo('contact', { serviceId })}
      />

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#0a0c0f] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
              Inspired by one of our delivered projects?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              Let&apos;s evaluate your project site, requirements, and budget with our multidisciplinary design team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Navigate to Consultation Screen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateTo('transformations')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-amber-500/40 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase cursor-pointer"
              >
                <span>Inspect Before &amp; After Studies</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
