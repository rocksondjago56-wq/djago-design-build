import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Sectors } from './components/Sectors';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectsMap } from './components/ProjectsMap';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { BrochureModal } from './components/BrochureModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [consultationServiceId, setConsultationServiceId] = useState<string | undefined>();
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'sectors',
        'services',
        'portfolio',
        'transformations',
        'map',
        'process',
        'testimonials',
        'contact'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (serviceId?: string) => {
    if (serviceId) {
      setConsultationServiceId(serviceId);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-['Plus_Jakarta_Sans']">
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreServices={handleExploreServices}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        <About />

        <Sectors />

        <Services onOpenConsultation={handleOpenConsultation} />

        <Portfolio onOpenConsultation={handleOpenConsultation} />

        {/* Before & After Interactive Transformations Slider */}
        <BeforeAfterSlider onOpenConsultation={() => handleOpenConsultation('civil-engineering')} />

        {/* Interactive Ghana Project Map */}
        <ProjectsMap onOpenConsultation={() => handleOpenConsultation()} />

        <Process />

        <Testimonials />

        <Contact initialServiceId={consultationServiceId} />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Persistent Floating WhatsApp Direct-Chat Widget */}
      <WhatsAppWidget />

      {/* Corporate Capabilities Deck / Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
