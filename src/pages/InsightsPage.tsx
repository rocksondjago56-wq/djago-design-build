import React from 'react';
import { ArrowRight, BookOpen, CalendarDays, Clock3 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageId } from '../types/navigation';

interface InsightsPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
}

const articles = [
  { category: 'Project Planning', title: 'Starting a design-and-build project: the information to prepare', summary: 'A concise checklist for aligning your site, budget, timeline, and project goals before the first consultation.', readTime: '4 min read' },
  { category: 'Construction', title: 'Why coordinated design and engineering reduce site changes', summary: 'How a shared process can surface structural, spatial, and finishes decisions early in a project.', readTime: '5 min read' },
  { category: 'Interiors', title: 'Designing resilient interiors for everyday use', summary: 'A practical look at circulation, materials, lighting, and maintenance in residential and workplace spaces.', readTime: '3 min read' },
];

export const InsightsPage: React.FC<InsightsPageProps> = ({ navigateTo }) => (
  <div className="bg-[#0b0e13] min-h-screen">
    <PageHeader badge="DJAGO INSIGHTS" icon={BookOpen} title="Notes on Design, Building & Better Project Decisions" subtitle="Practical guidance and practice updates from the DJAGO Design & Build team." currentPage="insights" navigateTo={navigateTo} />
    <section className="py-16 lg:py-20"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection direction="up"><p className="text-sm text-slate-400 max-w-2xl mb-10">This is the home for future project announcements, case studies, and client resources. Add new posts in <code className="text-amber-300">src/pages/InsightsPage.tsx</code> until a CMS is introduced.</p></AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{articles.map((article, index) => (
        <AnimatedSection key={article.title} direction="up" delay={index * 90}><article className="h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-7 flex flex-col hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-wider font-['Space_Grotesk']"><span className="text-amber-400">{article.category}</span><span className="text-slate-500 flex gap-1 items-center"><Clock3 className="w-3.5 h-3.5" />{article.readTime}</span></div>
          <h2 className="mt-5 text-xl font-bold text-white font-['Syne'] leading-snug">{article.title}</h2><p className="mt-4 text-sm text-slate-400 leading-relaxed flex-1">{article.summary}</p>
          <div className="mt-7 pt-5 border-t border-slate-800 flex items-center justify-between"><span className="text-xs text-slate-500 flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" />Coming soon</span><button onClick={() => navigateTo('contact')} className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex gap-1.5 items-center">Discuss a project <ArrowRight className="w-3.5 h-3.5" /></button></div>
        </article></AnimatedSection>
      ))}</div>
    </div></section>
  </div>
);
