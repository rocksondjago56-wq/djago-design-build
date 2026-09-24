import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/content';
import { Menu, X, Phone, Mail, ChevronRight, ArrowUpRight, FileText } from 'lucide-react';
import { PageId } from '../types/navigation';

interface NavbarProps {
  currentPage: PageId;
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo, onOpenBrochure }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Sectors', page: 'sectors' },
    { label: 'Disciplines', page: 'disciplines' },
    { label: 'Work', page: 'work' },
    { label: 'Before & After', page: 'transformations' },
    { label: 'Ghana Map', page: 'map' },
    { label: 'Workflow', page: 'workflow' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageId) => {
    setMobileMenuOpen(false);
    navigateTo(page);
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#141820] border-b border-slate-800 text-slate-400 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:0506471139" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href="mailto:info@djagodesignbuild.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 font-medium">Accra, Ghana • High Precision Design &amp; Build</span>
          </div>

          <div className="flex items-center gap-4">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer text-[11px] font-semibold font-['Space_Grotesk']"
              >
                <FileText className="w-3 h-3 text-amber-400" />
                <span>Download Capabilities Deck (PDF)</span>
              </button>
            )}
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              Accepting Commissions
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d0f12]/95 backdrop-blur-md border-b border-slate-800/80 py-2.5 shadow-2xl shadow-black/50'
            : 'bg-[#0d0f12]/80 backdrop-blur-sm py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Navigates to Home */}
          <button
            onClick={() => handleNavClick('home')}
            className="outline-none cursor-pointer flex items-center text-left"
            aria-label="DJAGO Home"
          >
            <Logo size={scrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-bold scale-[1.02]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Brochure</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('contact')}
              className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 p-[1px] focus:outline-none cursor-pointer"
            >
              <span className={`flex items-center gap-1.5 px-4 py-2 rounded-[7px] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                currentPage === 'contact'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-[#0d0f12] text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950'
              }`}>
                <span>Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="xl:hidden flex items-center gap-2">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="sm:hidden p-2 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 text-xs"
                title="Download Brochure"
              >
                <FileText className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-amber-400 focus:outline-none border border-slate-700 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md xl:hidden flex flex-col pt-20 px-6 pb-8 border-b border-slate-800 overflow-y-auto">
          <div className="flex flex-col gap-1.5 flex-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                      : 'bg-slate-900/80 border-slate-800/80 text-slate-200 hover:text-amber-400 hover:bg-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5 mt-4">
            {onOpenBrochure && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full py-3 bg-slate-900 border border-amber-500/40 text-amber-300 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Download Capabilities Deck (PDF)</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>Navigate to Consultation Screen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center text-[11px] text-slate-500 mt-1">
              {COMPANY_INFO.address}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
