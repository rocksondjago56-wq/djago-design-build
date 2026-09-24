import React from 'react';
import { ChevronRight, Home, LucideIcon } from 'lucide-react';
import { PageId } from '../types/navigation';
import { AnimatedSection } from './AnimatedSection';

interface PageHeaderProps {
  badge: string;
  icon?: LucideIcon;
  title: string;
  subtitle: string;
  currentPage: PageId;
  navigateTo: (page: PageId) => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  icon: Icon,
  title,
  subtitle,
  currentPage,
  navigateTo
}) => {
  return (
    <div className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#0a0c0f] border-b border-slate-800/80 overflow-hidden">
      {/* Background Architectural Grid Lines & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="down">
          {/* Breadcrumb Bar */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-['Space_Grotesk'] mb-6" aria-label="Breadcrumb">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-bold uppercase tracking-wider">
              {currentPage.replace('-', ' ')}
            </span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4">
            {Icon && <Icon className="w-3.5 h-3.5 text-amber-400" />}
            <span>{badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};
