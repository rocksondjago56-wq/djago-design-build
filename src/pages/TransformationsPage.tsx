import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { InteractiveComparisonCard } from '../components/InteractiveComparisonCard';
import { BEFORE_AFTER_PROJECTS, TransformationProject } from '../data/content';
import { PageId } from '../types/navigation';
import { ArrowLeftRight, ArrowRight, Filter, Sparkles, Building2, SlidersHorizontal } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface TransformationsPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
}

type FilterOption = 'ALL' | 'INTERIOR' | 'ENGINEERING' | 'GRAPHIC DESIGN' | 'RENOVATION';

export const TransformationsPage: React.FC<TransformationsPageProps> = ({ navigateTo }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('ALL');

  const filterTabs: FilterOption[] = [
    'ALL',
    'INTERIOR',
    'ENGINEERING',
    'GRAPHIC DESIGN',
    'RENOVATION'
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? BEFORE_AFTER_PROJECTS
    : BEFORE_AFTER_PROJECTS.filter((p) => p.filterGroup === activeFilter);

  return (
    <div className="bg-[#0b0e13]">
      {/* Page Header Screen */}
      <PageHeader
        badge="TRANSFORMATION ARCHIVES"
        icon={ArrowLeftRight}
        title="Before &amp; After: The Architectural Transformation"
        subtitle="Visual proof of concept: Explore how raw brownfields, degraded structures, bare concrete shells, and outdated assets are transformed through DJAGO’s integrated design and engineering."
        currentPage="transformations"
        navigateTo={navigateTo}
      />

      {/* Main Filter & Gallery Section */}
      <section className="py-12 lg:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <AnimatedSection direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 font-['Space_Grotesk'] uppercase tracking-widest">
                <Filter className="w-3.5 h-3.5 text-amber-500" />
                <span>FILTER TRANSFORMATIONS:</span>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveFilter(tab)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-extrabold scale-105'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Showing {filteredProjects.length} of {BEFORE_AFTER_PROJECTS.length} Projects
              </div>
            </div>
          </AnimatedSection>

          {/* Transformations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {filteredProjects.map((project, idx) => (
              <AnimatedSection key={project.id} direction="up" delay={idx * 100}>
                <InteractiveComparisonCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          {/* Empty State Fallback if ever filtered empty */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
              <p className="text-slate-400 text-sm">No transformations found under this category.</p>
              <button
                onClick={() => setActiveFilter('ALL')}
                className="mt-4 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
              >
                Reset Filter
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Technical Delivery Banner */}
      <section className="py-16 bg-[#080a0e] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>Planning a Complex Transformation?</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
              Request a Renovation Feasibility &amp; Structural Audit
            </h3>

            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Before purchasing a commercial property or initiating residential remodeling in Ghana, have our registered civil engineers and architects evaluate structural integrity, MEP load-bearing limits, and spatial viability.
            </p>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('contact', { serviceId: 'civil-engineering' })}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
              >
                <span>Navigate to Renovation Audit Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
