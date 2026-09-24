import { useState, useEffect, useCallback } from 'react';
import { skipWaitingAndReload } from './registerServiceWorker';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const DISMISS_STORAGE_KEY = 'djago_pwa_prompt_dismissed_until';

export function usePWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' ? !navigator.onLine : false);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check if running in standalone display mode
  const checkIsStandalone = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (navigator as unknown as { standalone?: boolean }).standalone === true;
    return Boolean(isStandaloneMode || isIOSStandalone);
  }, []);

  const [isStandalone, setIsStandalone] = useState(checkIsStandalone);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(isIOSDevice);

    // Initial standalone state
    const standalone = checkIsStandalone();
    setIsStandalone(standalone);
    if (standalone) {
      setIsInstalled(true);
    }

    // Check dismissal status in localStorage
    const dismissedUntil = localStorage.getItem(DISMISS_STORAGE_KEY);
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
      setIsDismissed(true);
    }

    // Listen for beforeinstallprompt event (Chromium, Edge, Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
      console.log('[DJAGO PWA] Install prompt captured');
    };

    // Listen for app installed
    const handleAppInstalled = () => {
      console.log('[DJAGO PWA] App installed successfully');
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    // Listen for online / offline events
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    // Listen for custom SW update event
    const handleSWUpdate = () => {
      setNeedRefresh(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('djago-sw-update-available', handleSWUpdate);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('djago-sw-update-available', handleSWUpdate);
    };
  }, [checkIsStandalone]);

  // Trigger browser installation dialog
  const installApp = useCallback(async (): Promise<boolean> => {
    if (!deferredPrompt) {
      return false;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        console.log('[DJAGO PWA] User accepted the installation');
        setIsInstalled(true);
        setIsInstallable(false);
        setDeferredPrompt(null);
        return true;
      } else {
        console.log('[DJAGO PWA] User dismissed the install prompt');
        return false;
      }
    } catch (err) {
      console.error('[DJAGO PWA] Error triggering install prompt:', err);
      return false;
    }
  }, [deferredPrompt]);

  // Dismiss install banner for a period (default 7 days)
  const dismissPrompt = useCallback((durationDays = 7) => {
    const expiresAt = Date.now() + durationDays * 24 * 60 * 60 * 1000;
    try {
      localStorage.setItem(DISMISS_STORAGE_KEY, expiresAt.toString());
    } catch {
      // ignore
    }
    setIsDismissed(true);
  }, []);

  // Update app and reload
  const updateApp = useCallback(() => {
    skipWaitingAndReload();
  }, []);

  return {
    isInstallable,
    isInstalled,
    isOffline,
    needRefresh,
    isIOS,
    isStandalone,
    isDismissed,
    installApp,
    dismissPrompt,
    updateApp,
  };
}
