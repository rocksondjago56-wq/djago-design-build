import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { GHANA_MAP_DATA, GhanaCityMarker } from '../data/content';
import { PageId } from '../types/navigation';
import { Globe, MapPin, Navigation, Building2, CheckCircle2, ArrowRight, ExternalLink, Compass, Layers, X } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

interface MapPageProps {
  navigateTo: (page: PageId, options?: { serviceId?: string }) => void;
}

export const MapPage: React.FC<MapPageProps> = ({ navigateTo }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('accra');
  const [modalProject, setModalProject] = useState<GhanaCityMarker['project'] | null>(null);

  const selectedCity = GHANA_MAP_DATA.cities.find((c) => c.id === selectedCityId) || GHANA_MAP_DATA.cities[0];

  return (
    <div className="bg-[#0b0e13]">
      {/* Page Header Screen */}
      <PageHeader
        badge="GEOGRAPHIC FOOTPRINT"
        icon={Globe}
        title={GHANA_MAP_DATA.heading}
        subtitle={GHANA_MAP_DATA.supportingText}
        currentPage="map"
        navigateTo={navigateTo}
      />

      {/* Main Architectural Map & Details Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        {/* Subtle Architectural Drafting Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Statistics Bar */}
          <AnimatedSection direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {GHANA_MAP_DATA.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center glass-card hover:border-amber-500/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-['Syne']">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-['Space_Grotesk'] uppercase tracking-widest font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Interactive Map & Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Clean Architectural Vector Map of Ghana */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="right">
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/85 border border-slate-800 relative shadow-2xl glass-card">
                  
                  {/* Technical Header with Coordinates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-amber-400 uppercase tracking-wider">
                      <Compass className="w-4 h-4 text-amber-500" />
                      <span>REPUBLIC OF GHANA • TECHNICAL SURVEY GRID</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {selectedCity.latitude} • {selectedCity.longitude}
                    </span>
                  </div>

                  {/* SVG Map Container */}
                  <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-h-[520px] bg-[#080b0f] rounded-2xl border border-slate-800/90 overflow-hidden flex items-center justify-center p-4">
                    
                    {/* Architectural Drafting Lines */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                      <div className="w-full h-full border border-dashed border-amber-500/20" />
                    </div>

                    {/* Vector Map */}
                    <svg
                      viewBox="0 0 400 480"
                      className="w-full h-full max-w-[380px] max-h-[460px] filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                      aria-label="Map of Ghana showing DJAGO project locations"
                    >
                      <defs>
                        <linearGradient id="ghana-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stop-color="#141a24" />
                          <stop offset="50%" stop-color="#182230" />
                          <stop offset="100%" stop-color="#111620" />
                        </linearGradient>
                      </defs>

                      {/* Gulf of Guinea / Atlantic Shoreline Hint */}
                      <path
                        d="M 20 420 Q 200 405 380 430 L 380 480 L 20 480 Z"
                        fill="#070a0f"
                        opacity="0.8"
                      />
                      <text x="200" y="465" textAnchor="middle" fill="#334155" fontSize="9" fontFamily="'Space Grotesk'" letterSpacing="3">
                        ATLANTIC COASTLINE (GULF OF GUINEA)
                      </text>

                      {/* Ghana Accurate Boundary Silhouette */}
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
                        fill="url(#ghana-fill)"
                        stroke="#f59e0b"
                        strokeWidth="1.8"
                        strokeOpacity="0.4"
                        strokeLinejoin="round"
                      />

                      {/* Lake Volta Contour */}
                      <path
                        d="M 260 220 C 275 250 280 290 285 330 C 275 340 265 330 260 310 C 255 280 250 250 260 220 Z"
                        fill="#0b1726"
                        stroke="#38bdf8"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                      />
                      <text x="272" y="275" fill="#38bdf8" fontSize="8" fontFamily="'Space Grotesk'" opacity="0.6">
                        Volta
                      </text>

                      {/* Major Technical Coordinate Grid Lines */}
                      <line x1="80" y1="30" x2="80" y2="450" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3,3" />
                      <line x1="200" y1="30" x2="200" y2="450" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3,3" />
                      <line x1="320" y1="30" x2="320" y2="450" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3,3" />
                      <line x1="30" y1="150" x2="370" y2="150" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3,3" />
                      <line x1="30" y1="300" x2="370" y2="300" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3,3" />

                      {/* 8 City Markers */}
                      {GHANA_MAP_DATA.cities.map((city) => {
                        const isSelected = selectedCityId === city.id;
                        const cx = (city.coords.x / 100) * 400;
                        const cy = (city.coords.y / 100) * 480;

                        return (
                          <g
                            key={city.id}
                            className="cursor-pointer group"
                            onClick={() => setSelectedCityId(city.id)}
                            onMouseEnter={() => setSelectedCityId(city.id)}
                          >
                            {/* Selected Pulsing Radar Wave */}
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

                            {/* Center Marker Circle */}
                            <circle
                              cx={cx}
                              cy={cy}
                              r={isSelected ? '8' : '5.5'}
                              fill={isSelected ? '#f59e0b' : '#1e293b'}
                              stroke={isSelected ? '#ffffff' : '#f59e0b'}
                              strokeWidth="2"
                              className="transition-all duration-200 group-hover:scale-125"
                            />

                            {/* Inner Dot */}
                            <circle
                              cx={cx}
                              cy={cy}
                              r={isSelected ? '3.5' : '2'}
                              fill={isSelected ? '#ffffff' : '#fbbf24'}
                            />

                            {/* City Label */}
                            <text
                              x={cx + (city.coords.x > 50 ? 11 : -11)}
                              y={cy + 4}
                              textAnchor={city.coords.x > 50 ? 'start' : 'end'}
                              fill={isSelected ? '#fbbf24' : '#cbd5e1'}
                              fontSize={isSelected ? '12' : '10'}
                              fontWeight={isSelected ? 'bold' : '600'}
                              fontFamily="'Space Grotesk', sans-serif"
                              className="transition-all group-hover:fill-amber-300 drop-shadow select-none"
                            >
                              {city.name}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* 8 City Pills Selector */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                    {GHANA_MAP_DATA.cities.map((city) => {
                      const isSelected = selectedCityId === city.id;
                      return (
                        <button
                          key={city.id}
                          onClick={() => setSelectedCityId(city.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-['Space_Grotesk'] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                              : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <MapPin className="w-3 h-3 text-amber-500" />
                          <span>{city.name}</span>
                        </button>
                      );
                    })}
                  </div>

                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Selected Location Project Card */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="left" delay={120}>
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/30 shadow-2xl relative glass-card space-y-6">
                  
                  {/* City & Region Heading */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{selectedCity.region}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {selectedCity.projectCount}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                      {selectedCity.name} Hub
                    </h3>
                    <div className="text-[11px] font-mono text-amber-400/90 mt-1">
                      Coordinates: {selectedCity.latitude} • {selectedCity.longitude}
                    </div>
                  </div>

                  {/* Project Showcase Card */}
                  <div className="rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={selectedCity.project.thumbnail}
                        alt={selectedCity.project.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-[10px] font-bold text-amber-400 uppercase tracking-wider font-['Space_Grotesk'] border border-slate-800">
                        {selectedCity.project.type}
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between">
                        <span>DELIVERED: {selectedCity.project.year}</span>
                        <span className="text-amber-400">DJAGO COLLABORATIVE</span>
                      </div>

                      <h4 className="text-lg font-bold text-white font-['Syne'] leading-tight">
                        {selectedCity.project.name}
                      </h4>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {selectedCity.project.description}
                      </p>

                      {/* Disciplines Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {selectedCity.project.disciplines.map((d, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-['Space_Grotesk'] uppercase"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <div className="pt-3">
                        <button
                          onClick={() => setModalProject(selectedCity.project)}
                          className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 hover:border-amber-400 text-slate-200 text-xs font-bold font-['Space_Grotesk'] tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                        >
                          <span>View Project Details</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Trigger */}
                  <button
                    onClick={() => navigateTo('contact')}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-['Space_Grotesk'] tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Commission Project in {selectedCity.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              </AnimatedSection>
            </div>

          </div>

        </div>
      </section>

      {/* Project Modal Preview */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0f131a] border border-amber-500/40 p-6 sm:p-8 shadow-2xl overflow-hidden animate-scale-in space-y-4">
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-800">
              <img
                src={modalProject.thumbnail}
                alt={modalProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-['Space_Grotesk'] uppercase">
              {modalProject.type}
            </span>

            <h3 className="text-2xl font-bold text-white font-['Syne']">
              {modalProject.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {modalProject.description}
            </p>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-500 font-mono">Status: Verified Built</span>
              <button
                onClick={() => {
                  setModalProject(null);
                  navigateTo('contact');
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs font-['Space_Grotesk'] tracking-wider uppercase hover:bg-amber-400"
              >
                Inquire About Similar Build
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
