import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#08090c] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-4">
              <strong>DJAGO Design & Build</strong> is Ghana’s premier multidisciplinary firm uniting Graphic Design & Branding, Civil Engineering, and Interior Design under one executive standard.
            </p>
            <div className="text-xs text-amber-400 font-['Space_Grotesk'] font-bold">
              {COMPANY_INFO.slogan}
            </div>
          </div>

          {/* Core Pillars */}
          <div>
            <h4 className="text-xs font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-4">
              Core Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Graphic Design & Branding
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
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Turnkey Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  3D Photorealistic Renderings
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
                  About Us & Philosophy
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
              className="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <span>Get Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} DJAGO Design & Build Ltd. All rights reserved.</p>
          <p className="font-['Space_Grotesk']">
            Designed & Engineered in Accra, Ghana • <strong className="text-amber-400">DJAGO</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};
