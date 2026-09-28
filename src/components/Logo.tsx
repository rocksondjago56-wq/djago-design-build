import React from 'react';
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

  if (layout === 'emblem') {
    return (
      <div className={`relative flex items-center justify-center aspect-square ${emblemSizes} rounded-lg bg-gradient-to-br from-amber-500/80 via-yellow-500/70 to-amber-600/80 p-[1.5px] shadow-lg shadow-amber-500/10 transition-transform duration-300 group-hover:scale-105 select-none ${className}`}>
        <div className="w-full h-full bg-[#0d0f12] rounded-[7px] flex items-center justify-center relative overflow-hidden p-1.5">
          <img 
            src={djagoEmblem} 
            alt="DJAGO Monogram" 
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
        className={`${horizontalHeights} w-auto max-w-none object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)] transition-all duration-300 group-hover:brightness-110`}
      />
    </div>
  );
};
