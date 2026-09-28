import React, { useState } from 'react';
import djagoHorizontal from '../assets/djago-horizontal-lockup.png';
import djagoStacked from '../assets/djago-full-lockup.png';
import djagoEmblem from '../assets/djago-emblem.png';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked' | 'emblem';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  layout = 'horizontal',
  className = '' 
}) => {
  const [hasError, setHasError] = useState(false);

  // Height classes based on layout and size
  const horizontalHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-13 sm:h-15',
    xl: 'h-18 sm:h-22'
  }[size];

  const stackedHeights = {
    sm: 'h-14 sm:h-16',
    md: 'h-20 sm:h-22',
    lg: 'h-24 sm:h-28',
    xl: 'h-32 sm:h-36'
  }[size];

  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }[size];

  // Elegant typographic fallback if image fails to render
  const renderFallback = () => {
    return (
      <div className={`flex items-center gap-2.5 select-none ${className}`}>
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center p-[1px] shadow-md shadow-amber-500/20">
          <div className="w-full h-full bg-[#0d0f12] rounded-[7px] flex items-center justify-center">
            <span className="font-['Space_Grotesk'] font-extrabold text-amber-400 text-lg tracking-tighter">D</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-['Space_Grotesk'] font-extrabold text-white text-base tracking-wider leading-none">DJAGO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </div>
          <span className="text-[9px] font-['Space_Grotesk'] font-semibold text-slate-400 tracking-[0.2em] uppercase mt-0.5">DESIGN &amp; BUILD</span>
        </div>
      </div>
    );
  };

  if (hasError) {
    return renderFallback();
  }

  if (layout === 'emblem') {
    return (
      <div className={`relative flex items-center justify-center aspect-square ${emblemSizes} rounded-lg bg-gradient-to-br from-amber-500/80 via-yellow-500/70 to-amber-600/80 p-[1.5px] shadow-lg shadow-amber-500/10 transition-transform duration-300 group-hover:scale-105 select-none ${className}`}>
        <div className="w-full h-full bg-[#0d0f12] rounded-[7px] flex items-center justify-center relative overflow-hidden p-1.5">
          <img 
            src={djagoEmblem} 
            alt="DJAGO Monogram" 
            onError={() => setHasError(true)}
            className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_2px_8px_rgba(217,119,6,0.35)]" 
          />
        </div>
      </div>
    );
  }

  if (layout === 'stacked') {
    return (
      <div className={`flex flex-col items-start group cursor-pointer select-none transition-transform duration-300 group-hover:scale-[1.02] ${className}`}>
        <img 
          src={djagoStacked} 
          alt="DJAGO Design & Build" 
          onError={() => setHasError(true)}
          className={`${stackedHeights} w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.22)] transition-all duration-300 group-hover:brightness-110`}
        />
      </div>
    );
  }

  // Default: Horizontal Lockup (ideal for Navbar & compact corporate headers)
  return (
    <div className={`flex items-center group cursor-pointer select-none transition-transform duration-300 group-hover:scale-[1.02] ${className}`}>
      <img 
        src={djagoHorizontal} 
        alt="DJAGO Design & Build" 
        onError={() => setHasError(true)}
        className={`${horizontalHeights} w-auto max-w-none object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all duration-300 group-hover:brightness-110`}
      />
    </div>
  );
};
