import React, { useState } from 'react';
import { Download, X, Share2, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { usePWA } from '../pwa/usePWA';

interface PWAInstallPromptProps {
  // Allow manual trigger from anywhere (e.g. Navbar or Footer)
  forceShow?: boolean;
  onClose?: () => void;
}

export const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ forceShow = false, onClose }) => {
  const {
    isInstallable,
    isInstalled,
    isIOS,
    isStandalone,
    isDismissed,
    needRefresh,
    installApp,
    dismissPrompt,
    updateApp,
  } = usePWA();

  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If running in standalone mode, don't show install banner (only show update banner if needed)
  if (isStandalone && !needRefresh && !forceShow) {
    return null;
  }

  // Handle Update Available Banner
  if (needRefresh) {
    return (
      <aside 
        aria-label="Application updates"
        className="fixed bottom-20 left-4 sm:left-6 z-50 max-w-sm w-[calc(100%-2rem)] bg-[#12151c]/95 border border-amber-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-300"
      >
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
            <RefreshCw className="w-5 h-5 animate-spin" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-['Space_Grotesk']">
                Update Available
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              A fresh update to DJAGO’s portfolio and projects catalog is ready.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={updateApp}
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-['Space_Grotesk'] transition-all flex items-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Refresh Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  // If already installed and not forced, don't show
  if (isInstalled && !forceShow) {
    return null;
  }

  // If dismissed and not manually forced, hide
  if (isDismissed && !forceShow) {
    return null;
  }

  // If neither installable nor iOS, and not forced, hide
  if (!isInstallable && !isIOS && !forceShow) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    if (isInstallable) {
      setIsInstalling(true);
      const success = await installApp();
      setIsInstalling(false);
      if (success) {
        setInstallSuccess(true);
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      }
    } else {
      setShowIOSModal(true);
    }
  };

  const handleDismiss = () => {
    dismissPrompt(7); // Dismiss for 7 days
    if (onClose) onClose();
  };

  return (
    <>
      {/* Floating Bottom Card */}
      <aside 
        aria-label="Install DJAGO Application"
        className="fixed bottom-24 sm:bottom-8 left-4 sm:left-6 z-40 max-w-sm w-[calc(100%-2rem)] bg-[#101318]/95 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-6"
      >
        <div className="flex items-start gap-3.5">
          {/* DJAGO Icon */}
          <div className="relative shrink-0">
            <img
              src="/icons/icon-192.png"
              alt="DJAGO App Icon"
              className="w-12 h-12 rounded-xl border border-amber-500/30 object-cover shadow-md shadow-amber-500/10"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-bold shadow-sm">
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 font-['Space_Grotesk']">
                Install Official App
              </span>
            </div>
            <h3 className="text-sm font-bold text-white font-['Space_Grotesk'] truncate">
              DJAGO Design &amp; Build
            </h3>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              Install for instant offline browsing of our architecture, engineering, and luxury interior projects.
            </p>

            {/* Actions */}
            <div className="mt-3.5 flex items-center gap-2">
              <button
                onClick={handleInstallClick}
                disabled={isInstalling || installSuccess}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-['Space_Grotesk'] transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer disabled:opacity-75"
              >
                {installSuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                    Installed!
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    {isIOS ? 'How to Install' : 'Install App'}
                  </>
                )}
              </button>

              <button
                onClick={handleDismiss}
                className="px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium transition-colors cursor-pointer"
              >
                Later
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Close install prompt"
            className="text-slate-500 hover:text-slate-300 p-1 -mr-1 -mt-1 rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* iOS Installation Instructions Modal */}
      {showIOSModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-modal-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-[#101318] border border-amber-500/30 rounded-3xl max-w-sm w-full p-6 text-slate-100 shadow-2xl relative">
            <button
              onClick={() => setShowIOSModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/icons/icon-192.png"
                alt="DJAGO"
                className="w-12 h-12 rounded-2xl border border-amber-500/30"
              />
              <div>
                <h3 id="ios-modal-title" className="font-bold text-base font-['Space_Grotesk'] text-white">
                  Add DJAGO to Home Screen
                </h3>
                <p className="text-xs text-amber-400">iOS Safari Installation Guide</p>
              </div>
            </div>

            <ol className="space-y-3.5 text-xs text-slate-300 my-5">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  1
                </span>
                <span>
                  Tap the <strong className="text-white">Share</strong> button <Share2 className="w-3.5 h-3.5 inline mx-1 text-amber-400" /> at the bottom or top of Safari.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  2
                </span>
                <span>
                  Scroll down the options list and select <strong className="text-white">"Add to Home Screen"</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                  3
                </span>
                <span>
                  Tap <strong className="text-white">"Add"</strong> in the top-right corner to launch DJAGO as a dedicated standalone app!
                </span>
              </li>
            </ol>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-['Space_Grotesk'] transition-all cursor-pointer shadow-lg shadow-amber-500/20"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
};
