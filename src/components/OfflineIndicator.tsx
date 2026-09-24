import React, { useState, useEffect, useRef } from 'react';
import { WifiOff, Wifi, CheckCircle } from 'lucide-react';
import { usePWA } from '../pwa/usePWA';

export const OfflineIndicator: React.FC = () => {
  const { isOffline } = usePWA();
  const [showRestored, setShowRestored] = useState(false);
  const prevOfflineRef = useRef(isOffline);

  useEffect(() => {
    // Detect reconnection
    if (prevOfflineRef.current && !isOffline) {
      setShowRestored(true);
      const timer = setTimeout(() => {
        setShowRestored(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
    prevOfflineRef.current = isOffline;
  }, [isOffline]);

  if (!isOffline && !showRestored) {
    return null;
  }

  return (
    <div 
      role="status"
      aria-live="polite"
      className="fixed top-20 right-4 sm:right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-none"
    >
      {isOffline ? (
        <div className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#12151c]/95 border border-amber-500/40 text-amber-300 shadow-xl backdrop-blur-md text-xs font-semibold font-['Space_Grotesk']">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <WifiOff className="w-3.5 h-3.5 text-amber-400" />
          <span>Offline Mode Active • Cached Portfolio Available</span>
        </div>
      ) : showRestored ? (
        <div className="pointer-events-auto flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d1f14]/95 border border-emerald-500/40 text-emerald-300 shadow-xl backdrop-blur-md text-xs font-semibold font-['Space_Grotesk']">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Connection Restored • Synchronized</span>
        </div>
      ) : null}
    </div>
  );
};
