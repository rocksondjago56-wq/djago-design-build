import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Contact } from '../components/Contact';
import { PageId } from '../types/navigation';
import { Mail, MessageCircle, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { AnimatedSection } from '../components/AnimatedSection';

interface ContactPageProps {
  initialServiceId?: string;
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
  onOpenBrochure?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialServiceId,
  navigateTo,
  onOpenBrochure
}) => {
  return (
    <div>
      {/* Page Header Screen */}
      <PageHeader
        badge="CONSULTATION & INQUIRY"
        icon={Mail}
        title="Start Your Project With DJAGO Collaborative"
        subtitle="Request a comprehensive structural quotation, architectural feasibility review, or luxury interior proposal. Our team responds within 24 business hours."
        currentPage="contact"
        navigateTo={navigateTo}
      />

      {/* Main Contact Form & Direct Office Information */}
      <Contact initialServiceId={initialServiceId} />

      {/* Direct WhatsApp Quick-Bar */}
      <section className="py-12 bg-[#090b0e] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-['Syne']">
                    Need Immediate Advice on WhatsApp?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Connect directly with our client desk for quick architectural advice or site visit bookings.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/233506471139?text=Hello%20DJAGO%20Team%2C%20I%20would%20like%20to%20consult%20on%20an%20integrated%20design%20%26%20build%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs font-['Space_Grotesk'] tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-emerald-950/50 hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Desk</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};
