import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { BrochureModal } from './components/BrochureModal';

// Separate Page Screens
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SectorsPage } from './pages/SectorsPage';
import { DisciplinesPage } from './pages/DisciplinesPage';
import { WorkPage } from './pages/WorkPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { MapPage } from './pages/MapPage';
import { WorkflowPage } from './pages/WorkflowPage';
import { ContactPage } from './pages/ContactPage';

import { PageId } from './types/navigation';

export default function App() {
  // Resolve initial page from URL path, hash, or query parameter
  const getInitialPage = (): PageId => {
    if (typeof window === 'undefined') return 'home';

    const path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const query = new URLSearchParams(window.location.search).get('page')?.toLowerCase();

    const target = path || hash || query || 'home';

    const validPages: PageId[] = [
      'home',
      'about',
      'sectors',
      'disciplines',
      'work',
      'transformations',
      'map',
      'workflow',
      'contact'
    ];

    if (validPages.includes(target as PageId)) {
      return target as PageId;
    }

    // Aliases
    if (target === 'services') return 'disciplines';
    if (target === 'portfolio') return 'work';
    if (target === 'process') return 'workflow';

    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage());
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Sync with browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const page = getInitialPage();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Central Navigation Handler: switches screen, syncs URL, and scrolls to top
  const navigateTo = (page: PageId, options?: { serviceId?: string }) => {
    setCurrentPage(page);
    if (options?.serviceId) {
      setSelectedServiceId(options.serviceId);
    }

    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-['Plus_Jakarta_Sans'] flex flex-col justify-between">
      {/* Persistent Consistent Header with Active Page Indicator */}
      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Main Viewport: Renders the active separate page/screen */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            navigateTo={navigateTo}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            navigateTo={navigateTo}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}

        {currentPage === 'sectors' && (
          <SectorsPage
            navigateTo={navigateTo}
          />
        )}

        {currentPage === 'disciplines' && (
          <DisciplinesPage
            initialServiceId={selectedServiceId}
            navigateTo={navigateTo}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}

        {currentPage === 'work' && (
          <WorkPage
            navigateTo={navigateTo}
          />
        )}

        {currentPage === 'transformations' && (
          <TransformationsPage
            navigateTo={navigateTo}
          />
        )}

        {currentPage === 'map' && (
          <MapPage
            navigateTo={navigateTo}
          />
        )}

        {currentPage === 'workflow' && (
          <WorkflowPage
            navigateTo={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialServiceId={selectedServiceId}
            navigateTo={navigateTo}
            onOpenBrochure={() => setIsBrochureOpen(true)}
          />
        )}
      </main>

      {/* Persistent Consistent Footer across all pages */}
      <Footer
        navigateTo={navigateTo}
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
