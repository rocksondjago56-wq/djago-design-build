import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/content';
import { 
  Menu, X, Phone, Mail, ChevronRight, ChevronDown, ArrowUpRight, 
  FileText, ArrowLeftRight, Globe, GitBranch, LayoutGrid, Download 
} from 'lucide-react';
import { PageId } from '../types/navigation';
import { usePWA } from '../pwa/usePWA';

interface NavbarProps {
  currentPage: PageId;
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo, onOpenBrochure }) => {
  const { isInstallable, isIOS, isInstalled, installApp } = usePWA();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopWorkOpen, setDesktopWorkOpen] = useState(false);
  const [mobileWorkExpanded, setMobileWorkExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopWorkOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnterWork = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDesktopWorkOpen(true);
  };

  const handleMouseLeaveWork = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDesktopWorkOpen(false);
    }, 150);
  };

  const isWorkActive = ['work', 'transformations', 'map', 'workflow'].includes(currentPage);

  const handleNavigate = (page: PageId) => {
    setDesktopWorkOpen(false);
    setMobileMenuOpen(false);
    navigateTo(page);
  };

  const workSubmenuItems = [
    {
      page: 'transformations' as PageId,
      label: 'Before & After',
      desc: 'Interactive transformation sliders & renovation studies',
      icon: ArrowLeftRight,
      badge: 'Interactive'
    },
    {
      page: 'map' as PageId,
      label: 'Ghana Project Map',
      desc: 'Project footprint across all 16 administrative capital regions',
      icon: Globe,
      badge: '16 Regions'
    },
    {
      page: 'workflow' as PageId,
      label: 'Our Workflow',
      desc: '6-stage design & construction delivery methodology',
      icon: GitBranch,
      badge: 'Process'
    }
  ];

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
            <a href="mailto:Djagodesignbuild@gmail.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
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
          
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="outline-none cursor-pointer flex items-center text-left"
            aria-label="DJAGO Home"
          >
            <Logo size={scrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80">
            {/* HOME */}
            <button
              onClick={() => handleNavigate('home')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Home
            </button>

            {/* ABOUT */}
            <button
              onClick={() => handleNavigate('about')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              About
            </button>

            {/* SECTORS */}
            <button
              onClick={() => handleNavigate('sectors')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === 'sectors'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Sectors
            </button>

            {/* WORK WITH DROPDOWN */}
            <div
              ref={dropdownRef}
              onMouseEnter={handleMouseEnterWork}
              onMouseLeave={handleMouseLeaveWork}
              className="relative"
            >
              {/* Clicking navigates to Portfolio Work; chevron toggles dropdown */}
              <div className={`flex items-center rounded-full transition-all duration-200 ${
                isWorkActive
                  ? 'bg-amber-500 shadow-md shadow-amber-500/25 scale-[1.02]'
                  : 'hover:bg-slate-800/60'
              }`}>
                <button
                  onClick={() => handleNavigate('work')}
                  className={`pl-3.5 pr-1.5 py-1.5 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider cursor-pointer ${
                    isWorkActive ? 'text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                  aria-label="Portfolio Work"
                >
                  Work
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setDesktopWorkOpen(!desktopWorkOpen); }}
                  className={`pr-2.5 py-1.5 cursor-pointer ${
                    isWorkActive ? 'text-slate-950' : 'text-slate-400 hover:text-amber-400'
                  }`}
                  aria-haspopup="true"
                  aria-expanded={desktopWorkOpen}
                  aria-label="Work subpages"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopWorkOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Dropdown Panel — Portfolio Work as parent header + subpages */}
              {desktopWorkOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#0f131a]/98 backdrop-blur-2xl border border-slate-800 shadow-2xl p-2 z-50 animate-scale-in"
                  style={{ transformOrigin: 'top left' }}
                >
                  {/* Parent: Portfolio Work (main page) */}
                  <button
                    onClick={() => handleNavigate('work')}
                    className={`w-full p-3 rounded-xl text-left flex items-center gap-3 transition-all cursor-pointer group mb-1 ${
                      currentPage === 'work'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${
                      currentPage === 'work' ? 'bg-slate-950/20' : 'bg-amber-500/20'
                    }`}>
                      <LayoutGrid className={`w-4 h-4 ${ currentPage === 'work' ? 'text-slate-950' : 'text-amber-400' }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`font-extrabold text-xs font-['Space_Grotesk'] uppercase tracking-wider ${
                          currentPage === 'work' ? 'text-slate-950' : 'text-amber-300'
                        }`}>
                          Portfolio Work
                        </span>
                        <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded shrink-0 ${
                          currentPage === 'work' ? 'bg-slate-950/20 text-slate-950' : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          Main
                        </span>
                      </div>
                      <p className={`text-[11px] truncate mt-0.5 leading-tight ${
                        currentPage === 'work' ? 'text-slate-900' : 'text-slate-400'
                      }`}>
                        All commercial, residential & civic project archives
                      </p>
                    </div>
                  </button>

                  {/* Subpages Divider */}
                  <div className="px-3 py-1.5 text-[10px] font-bold font-['Space_Grotesk'] uppercase tracking-widest text-slate-500 flex items-center gap-2 border-t border-slate-800/80 mt-1 mb-1">
                    <span>Portfolio Sub-Pages</span>
                    <div className="flex-1 border-t border-slate-800/60" />
                    <span className="text-amber-500 font-mono">3</span>
                  </div>

                  <div className="space-y-1">
                    {workSubmenuItems.map((item) => {
                      const isSubActive = currentPage === item.page;
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.page}
                          onClick={() => handleNavigate(item.page)}
                          className={`w-full p-2.5 rounded-xl text-left flex items-start gap-3 transition-all duration-200 cursor-pointer group ${
                            isSubActive
                              ? 'bg-amber-500/15 border border-amber-500/40'
                              : 'hover:bg-slate-900 border border-transparent'
                          }`}
                        >
                          {/* Sub-indent indicator */}
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="w-px h-8 bg-slate-700/60 rounded-full" />
                            <div className={`p-1.5 rounded-lg transition-colors ${
                              isSubActive
                                ? 'bg-amber-500 text-slate-950'
                                : 'bg-slate-800/80 text-amber-400 group-hover:bg-amber-500/20 group-hover:text-amber-300'
                            }`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className={`font-bold text-xs font-['Space_Grotesk'] uppercase tracking-wider transition-colors ${
                                isSubActive ? 'text-amber-300' : 'text-slate-300 group-hover:text-amber-300'
                              }`}>
                                {item.label}
                              </span>
                              <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded shrink-0 ${
                                isSubActive ? 'bg-amber-500/30 text-amber-300' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 truncate mt-0.5 leading-tight">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <button
              onClick={() => handleNavigate('disciplines')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === 'disciplines'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Services
            </button>

            {/* CONTACT */}
            <button
              onClick={() => handleNavigate('contact')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/25 font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Contact
            </button>
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

            {!isInstalled && (isInstallable || isIOS) && (
              <button
                onClick={installApp}
                className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-amber-300 text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer"
                title="Install DJAGO Progressive Web App"
              >
                <Download className="w-3.5 h-3.5" />
                <span>App</span>
              </button>
            )}

            <button
              onClick={() => handleNavigate('contact')}
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
          <div className="lg:hidden flex items-center gap-2">
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

      {/* Mobile Drawer Menu with Accordion */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col pt-20 px-6 pb-8 border-b border-slate-800 overflow-y-auto">
          <div className="flex flex-col gap-2 flex-1">
            {/* HOME */}
            <button
              onClick={() => handleNavigate('home')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all cursor-pointer text-left ${
                currentPage === 'home'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-200 hover:text-amber-400'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            {/* ABOUT */}
            <button
              onClick={() => handleNavigate('about')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all cursor-pointer text-left ${
                currentPage === 'about'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-200 hover:text-amber-400'
              }`}
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            {/* SECTORS */}
            <button
              onClick={() => handleNavigate('sectors')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all cursor-pointer text-left ${
                currentPage === 'sectors'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-200 hover:text-amber-400'
              }`}
            >
              <span>Sectors</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            {/* WORK — Navigate directly + accordion for subpages */}
            <div className="rounded-xl border border-slate-800/80 overflow-hidden bg-slate-900/50">
              {/* Parent row: Work link + expand toggle */}
              <div className={`flex items-center ${
                isWorkActive ? 'bg-amber-500/20' : ''
              }`}>
                <button
                  onClick={() => handleNavigate('work')}
                  className={`flex-1 flex items-center gap-2 p-3.5 text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all cursor-pointer text-left ${
                    currentPage === 'work'
                      ? 'text-amber-300 font-bold'
                      : isWorkActive
                        ? 'text-amber-300'
                        : 'text-slate-200 hover:text-amber-400'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Work</span>
                  {currentPage === 'work' && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/30 text-amber-400">
                      Active
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setMobileWorkExpanded(!mobileWorkExpanded)}
                  className={`px-3.5 py-3.5 border-l border-slate-800 text-xs font-bold font-['Space_Grotesk'] cursor-pointer ${
                    mobileWorkExpanded ? 'text-amber-400 bg-amber-500/10' : 'text-slate-400 hover:text-amber-400'
                  }`}
                  aria-label="Toggle Work subpages"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileWorkExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileWorkExpanded && (
                <div className="bg-slate-950/80 border-t border-slate-800/60">
                  {/* Sub-pages label */}
                  <div className="px-4 py-2 text-[10px] font-bold text-slate-500 font-['Space_Grotesk'] uppercase tracking-widest flex items-center gap-2">
                    <span>Portfolio Sub-Pages</span>
                  </div>
                  <div className="px-2 pb-2 space-y-1">
                    {workSubmenuItems.map((sub) => {
                      const isSubActive = currentPage === sub.page;
                      const Icon = sub.icon;
                      return (
                        <button
                          key={sub.page}
                          onClick={() => handleNavigate(sub.page)}
                          className={`w-full p-2.5 rounded-lg text-left flex items-center justify-between text-xs font-['Space_Grotesk'] transition-all cursor-pointer ${
                            isSubActive
                              ? 'bg-amber-500 text-slate-950 font-bold'
                              : 'text-slate-300 hover:bg-slate-900 hover:text-amber-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-px h-4 bg-slate-700 rounded-full shrink-0" />
                            <Icon className={`w-3.5 h-3.5 shrink-0 ${isSubActive ? 'text-slate-950' : 'text-amber-400'}`} />
                            <span>{sub.label}</span>
                          </div>
                          <span className={`text-[10px] font-mono ${ isSubActive ? 'text-slate-950 opacity-70' : 'text-slate-500' }`}>{sub.badge}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <button
              onClick={() => handleNavigate('disciplines')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all cursor-pointer text-left ${
                currentPage === 'disciplines'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-200 hover:text-amber-400'
              }`}
            >
              <span>Services</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>

            {/* CONTACT */}
            <button
              onClick={() => handleNavigate('contact')}
              className={`flex items-center justify-between p-3.5 rounded-xl border text-xs font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all cursor-pointer text-left ${
                currentPage === 'contact'
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-900/80 border-slate-800/80 text-slate-200 hover:text-amber-400'
              }`}
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
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

            {!isInstalled && (isInstallable || isIOS) && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  installApp();
                }}
                className="w-full py-3 bg-amber-500/10 border border-amber-500/40 hover:bg-amber-500/20 text-amber-300 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Install DJAGO App</span>
              </button>
            )}

            <button
              onClick={() => handleNavigate('contact')}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              <span>Request Consultation</span>
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
