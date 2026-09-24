import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProjectsMap } from '../components/ProjectsMap';
import { PageId } from '../types/navigation';
import { Globe, ArrowRight, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface MapPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
}

export const MapPage: React.FC<MapPageProps> = ({ navigateTo }) => {
  return (
    <div>
      {/* Page Header Screen */}
      <PageHeader
        badge="NATIONAL PROJECT MAP"
        icon={Globe}
        title="Delivered Architecture &amp; Infrastructure Across Ghana"
        subtitle="Explore our active project corridors, regional hubs, and completed high-precision structural builds from Accra to Kumasi, Takoradi, and Tamale."
        currentPage="map"
        navigateTo={navigateTo}
      />

      {/* Main Interactive Map Component */}
      <ProjectsMap
        onOpenConsultation={() => navigateTo('contact')}
      />

      {/* Municipal Site Feasibility Call to Action Screen */}
      <section className="py-16 bg-[#0a0c0f] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection direction="up">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
              Acquiring or developing a site anywhere in Ghana?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
              Our civil engineering survey teams conduct topographical analysis, soil bearing tests, and municipal zoning verification nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Navigate to Site Consultation Screen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateTo('work')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-amber-500/40 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase cursor-pointer"
              >
                <span>Browse All Projects</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
