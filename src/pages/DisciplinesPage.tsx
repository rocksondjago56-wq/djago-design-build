import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Services } from '../components/Services';
import { PageId } from '../types/navigation';
import { Paintbrush, ArrowRight, Building2, CheckCircle2, FileText } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface DisciplinesPageProps {
  initialServiceId?: string;
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}

export const DisciplinesPage: React.FC<DisciplinesPageProps> = ({
  initialServiceId,
  navigateTo,
  onOpenBrochure
}) => {
  return (
    <div>
      {/* Page Header Screen */}
      <PageHeader
        badge="THE THREE PILLARS"
        icon={Paintbrush}
        title="Multidisciplinary Services & Practice Disciplines"
        subtitle="Explore our integrated capabilities across Graphic Design & Brand Architecture, Civil & Structural Engineering, and Turnkey Interior Fit-Outs."
        currentPage="disciplines"
        navigateTo={navigateTo}
      />

      {/* Main Services / Disciplines Component */}
      <Services
        initialServiceId={initialServiceId}
        onOpenConsultation={(serviceId) => navigateTo('contact', { serviceId })}
      />

      {/* Commissioning Banner */}
      <section className="py-16 bg-[#0a0c0f] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
              Need a unified proposal across multiple disciplines?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              Our multidisciplinary contracts reduce handover friction and save an estimated 18% in project timeline coordination.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Navigate to Quotation Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              {onOpenBrochure && (
                <button
                  onClick={onOpenBrochure}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Download Service Deck (PDF)</span>
                </button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
