/**
 * DJAGO PWA Service Worker Registration
 */

let registration: ServiceWorkerRegistration | null = null;

export function registerSW(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return Promise.resolve(null);
  }

  // Register once page loads
  return new Promise((resolve) => {
    const handleLoad = async () => {
      try {
        const reg = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });
        registration = reg;
        console.log('[DJAGO PWA] Service Worker registered with scope:', reg.scope);

        // Check for updates periodically (every 1 hour)
        setInterval(() => {
          reg.update().catch((err) => console.debug('[DJAGO PWA] SW update check failed:', err));
        }, 60 * 60 * 1000);

        // Detect update ready
        reg.addEventListener('updatefound', () => {
          const installingWorker = reg.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New update available!
                console.log('[DJAGO PWA] New version available.');
                window.dispatchEvent(new CustomEvent('djago-sw-update-available'));
              } else {
                // Content cached for offline use
                console.log('[DJAGO PWA] Content cached for offline use.');
                window.dispatchEvent(new CustomEvent('djago-sw-cached'));
              }
            }
          });
        });

        resolve(reg);
      } catch (error) {
        console.error('[DJAGO PWA] Service Worker registration failed:', error);
        resolve(null);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
  });
}

export function skipWaitingAndReload() {
  if (registration && registration.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
  // Reload page once controller changes
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}
