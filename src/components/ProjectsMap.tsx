import React, { useState } from 'react';
import { MapPin, Navigation, CheckCircle2, ChevronRight, Layers, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { GHANA_MAP_DATA, GhanaCityMarker } from '../data/content';
import { PageId } from '../types/navigation';

interface ProjectsMapProps {
  onOpenConsultation?: () => void;
  navigateTo?: (page: PageId, options?: { serviceId?: string }) => void;
}

export const ProjectsMap: React.FC<ProjectsMapProps> = ({ onOpenConsultation, navigateTo }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('accra');

  const selectedCity: GhanaCityMarker =
    GHANA_MAP_DATA.cities.find((c) => c.id === selectedCityId) || GHANA_MAP_DATA.cities[0];

  return (
    <section id="map" className="py-20 lg:py-28 bg-[#0d0f12] relative overflow-hidden border-t border-slate-800/60">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4">
              <Globe className="w-3.5 h-3.5" />
              <span>National Footprint • All 16 Regions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Interactive Ghana Project Hubs
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Explore DJAGO&apos;s delivered architecture, civil infrastructure, and luxury interiors across all 16 administrative capital regions of Ghana. Click any pin to inspect localized projects.
            </p>
          </div>
        </AnimatedSection>

        {/* Map & Detail Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Vector Map Graphic */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="right">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative shadow-2xl glass-card">
                
                {/* Map Control Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-amber-400 uppercase tracking-wider">
                    <Navigation className="w-3.5 h-3.5 text-amber-500" />
                    <span>16 Administrative Capital Regions</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Lat {selectedCity.latitude} • Long {selectedCity.longitude}
                  </span>
                </div>

                {/* SVG Map Container */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-h-[500px] bg-[#0a0c0f] rounded-2xl border border-slate-800/80 overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Subtle Drafting Grid */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                  {/* Ghana SVG Silhouette */}
                  <svg
                    viewBox="0 0 400 480"
                    className="w-full h-full max-w-[380px] max-h-[460px] filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                    aria-label="Interactive Ghana map with 16 regional capitals"
                  >
                    <defs>
                      <linearGradient id="ghana-body-hubs" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#151b24" />
                        <stop offset="50%" stopColor="#18202b" />
                        <stop offset="100%" stopColor="#12161d" />
                      </linearGradient>
                      <linearGradient id="gulf-water-hubs" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0a121e" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#070b12" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>

                    {/* Ocean / Gulf of Guinea Accent at bottom */}
                    <path
                      d="M 20 420 Q 200 400 380 430 L 380 480 L 20 480 Z"
                      fill="url(#gulf-water-hubs)"
                    />
                    <text x="200" y="460" textAnchor="middle" fill="#334155" fontSize="9" fontFamily="'Space Grotesk'" letterSpacing="3">
                      GULF OF GUINEA (ATLANTIC OCEAN)
                    </text>

                    {/* Ghana Main Land Boundary Polygon */}
                    <path
                      d="
                        M 140 30 
                        L 240 30 
                        L 280 60 
                        L 295 100 
                        L 275 140 
                        L 300 180 
                        L 330 220 
                        L 320 280 
                        L 340 330 
                        L 310 370 
                        L 280 400 
                        L 250 395 
                        L 200 400 
                        L 150 415 
                        L 110 400 
                        L 90 350 
                        L 115 310 
                        L 95 260 
                        L 110 200 
                        L 135 150 
                        L 120 90 
                        Z
                      "
                      fill="url(#ghana-body-hubs)"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeOpacity="0.4"
                      strokeLinejoin="round"
                    />

                    {/* Regional Outline Hints */}
                    <path
                      d="M 120 180 Q 200 190 320 210"
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      strokeOpacity="0.4"
                    />
                    <path
                      d="M 110 310 Q 200 300 330 310"
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      strokeOpacity="0.4"
                    />
                    <path
                      d="M 200 300 L 230 400"
                      fill="none"
                      stroke="#334155"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      strokeOpacity="0.4"
                    />

                    {/* Lake Volta Feature Shape */}
                    <path
                      d="M 260 220 C 275 250 280 290 285 330 C 275 340 265 330 260 310 C 255 280 250 250 260 220 Z"
                      fill="#0d1b2a"
                      stroke="#38bdf8"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                    />
                    <text x="270" y="275" fill="#38bdf8" fontSize="8" fontFamily="'Space Grotesk'" opacity="0.6">
                      Volta
                    </text>

                    {/* All 16 Regional Capital Pins */}
                    {GHANA_MAP_DATA.cities.map((city) => {
                      const isSelected = selectedCityId === city.id;
                      const cx = (city.coords.x / 100) * 400;
                      const cy = (city.coords.y / 100) * 480;

                      return (
                        <g
                          key={city.id}
                          className="cursor-pointer group"
                          onClick={() => setSelectedCityId(city.id)}
                        >
                          {/* Pulsing Radar Ring for Selected Hub */}
                          {isSelected && (
                            <>
                              <circle
                                cx={cx}
                                cy={cy}
                                r="20"
                                fill="#f59e0b"
                                fillOpacity="0.18"
                                className="animate-ping"
                              />
                              <circle
                                cx={cx}
                                cy={cy}
                                r="14"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="1.5"
                                strokeOpacity="0.6"
                              />
                            </>
                          )}

                          {/* Outer Pin Circle */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? '8' : '5.5'}
                            fill={isSelected ? '#f59e0b' : '#1e293b'}
                            stroke={isSelected ? '#ffffff' : '#f59e0b'}
                            strokeWidth="2"
                            className="transition-all duration-300 group-hover:scale-125"
                          />

                          {/* Center Glow Dot */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? '3.5' : '2'}
                            fill={isSelected ? '#ffffff' : '#fbbf24'}
                          />

                          {/* Pin City Label */}
                          <text
                            x={cx + (city.coords.x > 50 ? 10 : -10)}
                            y={cy + 3}
                            textAnchor={city.coords.x > 50 ? 'start' : 'end'}
                            fill={isSelected ? '#fbbf24' : '#94a3b8'}
                            fontSize={isSelected ? '11' : '9'}
                            fontWeight={isSelected ? 'bold' : '600'}
                            fontFamily="'Space Grotesk', sans-serif"
                            className="transition-all group-hover:fill-amber-300 drop-shadow pointer-events-none select-none"
                          >
                            {city.name}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* 16 Capital Region Quick Selector Pills */}
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-bold text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider mb-2.5">
                    Select Capital Region ({GHANA_MAP_DATA.cities.length}):
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1 custom-scrollbar">
                    {GHANA_MAP_DATA.cities.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => setSelectedCityId(city.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-['Space_Grotesk'] font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                          selectedCityId === city.id
                            ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                            : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span>{city.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Selected Hub Details Showcase */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left" delay={150}>
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/25 shadow-2xl relative glass-card space-y-5">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedCity.region}</span>
                  </div>
                  <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 font-bold">
                    {selectedCity.projectCount}
                  </span>
                </div>

                {/* City Title & Coordinates */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                    {selectedCity.name} Hub
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Lat {selectedCity.latitude} • Long {selectedCity.longitude}
                  </p>
                </div>

                {/* Featured Project Card in this Hub */}
                <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800/90 space-y-3 shadow-inner">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider font-['Space_Grotesk'] flex items-center justify-between">
                    <span>Landmark Regional Project</span>
                    <span className="text-slate-400 font-mono text-[10px]">{selectedCity.project.year}</span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <img
                      src={selectedCity.project.thumbnail}
                      alt={selectedCity.project.name}
                      className="w-20 h-20 rounded-xl object-cover border border-slate-800 shrink-0"
                    />
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white font-['Syne'] line-clamp-1">
                        {selectedCity.project.name}
                      </h4>
                      <p className="text-[11px] text-amber-300 font-medium line-clamp-1">
                        {selectedCity.project.type}
                      </p>
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {selectedCity.project.description}
                      </p>
                    </div>
                  </div>

                  {/* Disciplines */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {selectedCity.project.disciplines.map((d, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-['Space_Grotesk']"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Links to Specific Places */}
                <div className="space-y-2 pt-2">
                  {/* Link 1: View Portfolio / Projects Page for this Location */}
                  {navigateTo && (
                    <button
                      onClick={() => navigateTo('work')}
                      className="w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 hover:text-white font-bold text-xs font-['Space_Grotesk'] tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4 text-amber-400" />
                      <span>Explore Delivered Projects in {selectedCity.name}</span>
                    </button>
                  )}

                  {/* Link 2: Commission Project / Book Consultation in this Region */}
                  <button
                    onClick={() => {
                      if (onOpenConsultation) {
                        onOpenConsultation();
                      } else if (navigateTo) {
                        navigateTo('contact');
                      }
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-['Space_Grotesk'] tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Commission Build in {selectedCity.region}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Link 3: View Full Ghana Technical Map Page */}
                  {navigateTo && (
                    <button
                      onClick={() => navigateTo('map')}
                      className="w-full py-2 text-center text-xs font-semibold text-amber-400/90 hover:text-amber-300 font-['Space_Grotesk'] tracking-wider uppercase flex items-center justify-center gap-1 pt-1 cursor-pointer"
                    >
                      <span>Open Complete Technical Map Screen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* National Stats Strip */}
        <AnimatedSection direction="up" delay={250}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-['Syne']">180+</div>
              <div className="text-xs text-slate-400 mt-1 font-['Space_Grotesk'] uppercase tracking-wider">Delivered Projects</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">16 Regions</div>
              <div className="text-xs text-slate-400 mt-1 font-['Space_Grotesk'] uppercase tracking-wider">All Ghana Capital Hubs</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-['Syne']">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-['Space_Grotesk'] uppercase tracking-wider">Ghana Structural Compliance</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">12+ Years</div>
              <div className="text-xs text-slate-400 mt-1 font-['Space_Grotesk'] uppercase tracking-wider">Engineering Synergy</div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

