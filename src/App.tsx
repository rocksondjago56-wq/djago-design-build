import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Sectors } from './components/Sectors';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [consultationServiceId, setConsultationServiceId] = useState<string | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'sectors', 'services', 'portfolio', 'process', 'testimonials', 'contact'];
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
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreServices={handleExploreServices}
        />

        <About />

        <Sectors />

        <Services onOpenConsultation={handleOpenConsultation} />

        <Portfolio onOpenConsultation={handleOpenConsultation} />

        <Process />

        <Testimonials />

        <Contact initialServiceId={consultationServiceId} />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />
    </div>
  );
}
