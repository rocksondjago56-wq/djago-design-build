import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, ArrowUpRight, FileText } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenBrochure?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenBrochure }) => {
  return (
    <footer className="bg-[#08090c] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
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
          </div>

          {/* Core Pillars */}
          <div>
            <h4 className="text-xs font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-4">
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Graphic Design &amp; Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Civil Structural Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Interior Spatial Design
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-amber-400 transition-colors">
                  Before &amp; After Transformations
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-amber-400 transition-colors">
                  Ghana Regional Map
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us &amp; Philosophy
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-400 transition-colors">
                  4-Step Methodology
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Request Consultation
                </a>
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
              onClick={onOpenConsultation}
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
          <p className="font-['Space_Grotesk']">
            Designed &amp; Engineered in Accra, Ghana • <strong className="text-amber-400">DJAGO</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};
