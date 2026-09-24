import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, ArrowUpRight, FileText } from 'lucide-react';
import { PageId } from '../types/navigation';
import { SocialIcons } from './SocialIcons';

interface FooterProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo, onOpenBrochure }) => {
  return (
    <footer className="bg-[#08090c] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigateTo('home')}
              className="outline-none cursor-pointer flex items-center text-left"
              aria-label="DJAGO Home"
            >
              <Logo size="md" />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-4">
              <strong>DJAGO Design &amp; Build</strong> is Ghana’s premier multidisciplinary firm uniting Graphic Design &amp; Branding, Civil Engineering, and Interior Design under one executive standard.
            </p>
            <div className="text-xs text-amber-400 font-['Space_Grotesk'] font-bold">
              {COMPANY_INFO.slogan}
            </div>
            {onOpenBrochure && (
              <div className="pt-2">
                <button
                  onClick={onOpenBrochure}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-semibold font-['Space_Grotesk'] transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Corporate Capabilities Deck</span>
                </button>
              </div>
            )}

            {/* Social Media Icons */}
            <div className="pt-3">
              <p className="text-[10px] font-bold text-slate-500 font-['Space_Grotesk'] uppercase tracking-widest mb-2">Follow DJAGO</p>
              <SocialIcons variant="pill" size="sm" className="flex-wrap" />
            </div>
          </div>

          {/* Core Pillars / Screens */}
          <div>
            <h4 className="text-xs font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-4">
              Separate Screens
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => navigateTo('disciplines', { serviceId: 'graphic-design' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Graphic Design &amp; Branding Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('disciplines', { serviceId: 'civil-engineering' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Civil Structural Engineering Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('disciplines', { serviceId: 'interior-design' })}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Interior Spatial Design Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('transformations')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Before &amp; After Transformations Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('map')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Ghana Regional Map Screen
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-4">
              Pages Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  About Us &amp; Philosophy Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('sectors')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Market Sectors Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('work')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Work &amp; Portfolio Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('workflow')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Workflow &amp; Methodology Screen
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Consultation Screen
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-xs font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-4">
              Headquarters
            </h4>
            <address className="not-italic space-y-2.5 text-xs text-slate-400 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </p>
            </address>

            <button
              onClick={() => navigateTo('contact')}
              className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} DJAGO Design &amp; Build Ltd. All rights reserved.</p>
          <SocialIcons variant="ghost" size="sm" className="gap-0.5" />
          <p className="font-['Space_Grotesk']">
            Designed &amp; Engineered in Accra, Ghana • <strong className="text-amber-400">DJAGO</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};
