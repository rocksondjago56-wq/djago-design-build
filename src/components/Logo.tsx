import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const dimensions = {
    sm: 'h-8 width-auto',
    md: 'h-11 width-auto',
    lg: 'h-16 width-auto'
  }[size];

  const fontSize = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  }[size];

  const subSize = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-[14px] tracking-[0.35em]'
  }[size];

  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Dynamic Geometric Monogram Icon */}
      <div className={`relative flex items-center justify-center aspect-square ${size === 'sm' ? 'w-8' : size === 'md' ? 'w-11' : 'w-16'} rounded-lg bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 p-[1.5px] shadow-lg shadow-amber-500/10 transition-transform duration-300 group-hover:scale-105`}>
        <div className="w-full h-full bg-[#0d0f12] rounded-[7px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle grid pattern background in logo mark */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30810_1px,transparent_1px),linear-gradient(to_bottom,#eab30810_1px,transparent_1px)] bg-[size:6px_6px]" />
          
          <svg className="w-3/5 h-3/5 text-amber-400 relative z-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Abstract D & J / Building & Drafting Compass emblem */}
            <path d="M8 8H24C30.6274 8 36 13.3726 36 20C36 26.6274 30.6274 32 24 32H8V8Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 20H24" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            <path d="M16 8V32" stroke="currentColor" strokeWidth="3" strokeDasharray="2 2"/>
            <circle cx="24" cy="20" r="3" fill="#eab308"/>
          </svg>
        </div>
      </div>

      {/* Brand Text Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-extrabold ${fontSize} tracking-wider text-white font-['Syne'] leading-none group-hover:text-amber-400 transition-colors`}>
            DJAGO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse" />
        </div>
        <span className={`font-semibold text-amber-400/90 font-['Space_Grotesk'] ${subSize} uppercase leading-tight mt-1`}>
          Design • Engineering • Interiors
        </span>
      </div>
    </div>
  );
};
