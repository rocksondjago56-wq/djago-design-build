import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { PageId } from '../types/navigation';
import { Sparkles, ArrowRight, Building2, ShieldCheck, Award, FileText } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface AboutPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ navigateTo, onOpenBrochure }) => {
  return (
    <div>
      {/* Page Header Screen */}
      <PageHeader
        badge="ABOUT DJAGO COLLABORATIVE"
        icon={Sparkles}
        title="People-First Architecture, Civil Precision & Spatial Branding"
        subtitle="Uniting Ghanaian master planning with structural civil engineering, luxury interior design, and strategic corporate branding under one executive standard."
        currentPage="about"
        navigateTo={navigateTo}
      />

      {/* Main About Component Content */}
      <About />

      {/* Client Endorsements & Team */}
      <Testimonials />

      {/* Page Action Screen Banner */}
      <section className="py-16 bg-[#0a0c0f] border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
              Ready to collaborate with Ghana&apos;s leading design collective?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              Speak directly with our principal architects and licensed civil engineers at our North Ridge office.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Navigate to Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateTo('disciplines')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-amber-500/40 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase cursor-pointer"
              >
                <span>Explore Disciplines</span>
              </button>
              {onOpenBrochure && (
                <button
                  onClick={onOpenBrochure}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-400 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Download Practice Statement</span>
                </button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
