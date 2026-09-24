import React, { useState } from 'react';
import { MapPin, Navigation, Building2, CheckCircle2, ChevronRight, Layers, Globe } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface ProjectHub {
  id: string;
  city: string;
  region: string;
  coords: { x: number; y: number }; // percentage on Ghana SVG map
  projectCount: string;
  focusDisciplines: string[];
  notableDistricts: string[];
  featuredProject: {
    title: string;
    category: string;
    year: string;
    image: string;
    stat: string;
  };
}

const PROJECT_HUBS: ProjectHub[] = [
  {
    id: 'accra',
    city: 'Accra Metropolis',
    region: 'Greater Accra Region',
    coords: { x: 65, y: 80 },
    projectCount: '85+ Projects',
    focusDisciplines: ['Luxury Architecture', 'Corporate Interiors', 'Brand Systems'],
    notableDistricts: ['Airport Residential Area', 'North Ridge', 'Cantonments', 'East Legon', 'Osu'],
    featuredProject: {
      title: 'Apex Financial Center & Ridge Penthouse',
      category: 'Civil Engineering & Luxury Interiors',
      year: '2023 - 2024',
      image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=800&auto=format&fit=crop&q=80',
      stat: '14 Storey High-Rise'
    }
  },
  {
    id: 'tema',
    city: 'Tema Industrial City',
    region: 'Greater Accra Port Zone',
    coords: { x: 72, y: 79 },
    projectCount: '32+ Projects',
    focusDisciplines: ['Heavy Industrial Civil', 'Steel Portal Warehousing', 'Drainage Infrastructure'],
    notableDistricts: ['Tema Heavy Industrial Area', 'Harbour Commercial Gate', 'Free Zones Enclave'],
    featuredProject: {
      title: 'Tema Industrial Logistics & Steel Portal Hub',
      category: 'Heavy Infrastructure & Civil Works',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=800&auto=format&fit=crop&q=80',
      stat: '3,200 sqm Facility'
    }
  },
  {
    id: 'kumasi',
    city: 'Kumasi',
    region: 'Ashanti Region',
    coords: { x: 44, y: 58 },
    projectCount: '28+ Projects',
    focusDisciplines: ['Commercial Plazas', 'Higher Education Research Labs', 'Civic Facilities'],
    notableDistricts: ['Ahodwo Commercial Boulevard', 'KNUST Campus Corridor', 'Asokwa Business District'],
    featuredProject: {
      title: 'Ashanti STEM Innovation Center',
      category: 'Architecture & Civil Engineering',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=800&auto=format&fit=crop&q=80',
      stat: 'Multi-tiered Lab Facility'
    }
  },
  {
    id: 'takoradi',
    city: 'Takoradi & Sekondi',
    region: 'Western Region',
    coords: { x: 35, y: 86 },
    projectCount: '18+ Projects',
    focusDisciplines: ['Energy & Maritime Logistics', 'Coastal Residential Enclaves', 'Soil Remediation'],
    notableDistricts: ['Harbour Business District', 'Beach Road Residences', 'Effia Nkwanta Corridor'],
    featuredProject: {
      title: 'Atlantic Coastal Logistics Head Office',
      category: 'Architectural Branding & Build',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=800&auto=format&fit=crop&q=80',
      stat: 'Marine Grade Concrete'
    }
  },
  {
    id: 'cape-coast',
    city: 'Cape Coast',
    region: 'Central Region',
    coords: { x: 48, y: 84 },
    projectCount: '12+ Projects',
    focusDisciplines: ['Civic Heritage Integration', 'Hospitality & Eco-Resorts', 'Institutional Civil Works'],
    notableDistricts: ['University Hills', 'Coastal Heritage Zone', 'Elmina Corridor'],
    featuredProject: {
      title: 'Central Heritage Cultural Pavilion',
      category: 'Civic Architecture & Restoration',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1763485956292-7b9bed7b3c10?w=800&auto=format&fit=crop&q=80',
      stat: 'Eco-sustainable Timber'
    }
  },
  {
    id: 'tamale',
    city: 'Tamale',
    region: 'Northern Region',
    coords: { x: 52, y: 26 },
    projectCount: '8+ Projects',
    focusDisciplines: ['Solar & Civic Infrastructure', 'Agricultural Logistics', 'Sub-Sahelian Architecture'],
    notableDistricts: ['Tamale Airport Enclave', 'Civic Center Boulevard', 'Industrial Park'],
    featuredProject: {
      title: 'Savannah Climate Research Center',
      category: 'Sustainable Architecture & BIM',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1609605348579-3123e3d40eb8?w=800&auto=format&fit=crop&q=80',
      stat: 'Passive Solar Cooling'
    }
  }
];

interface ProjectsMapProps {
  onOpenConsultation?: () => void;
}

export const ProjectsMap: React.FC<ProjectsMapProps> = ({ onOpenConsultation }) => {
  const [selectedHubId, setSelectedHubId] = useState<string>('accra');

  const selectedHub = PROJECT_HUBS.find((h) => h.id === selectedHubId) || PROJECT_HUBS[0];

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
              <span>National Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Interactive Project Map of Ghana
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Explore DJAGO&apos;s delivered architecture, civil infrastructure, and luxury interiors across Ghana&apos;s commercial hubs. Click any pin to explore localized projects.
            </p>
          </div>
        </AnimatedSection>

        {/* Map & Detail Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Map Graphic */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="right">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative shadow-2xl glass-card">
                
                {/* Map Control Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2 font-['Space_Grotesk'] font-bold text-amber-400 uppercase tracking-wider">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Ghana Project Hubs</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Lat 4.7°N - 11.2°N • Long 3.2°W - 1.2°E
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
                  >
                    <defs>
                      <linearGradient id="ghana-body" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#151b24" />
                        <stop offset="50%" stop-color="#18202b" />
                        <stop offset="100%" stop-color="#12161d" />
                      </linearGradient>
                      <linearGradient id="gulf-water" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#0a121e" stop-opacity="0.3" />
                        <stop offset="100%" stop-color="#070b12" stop-opacity="0.9" />
                      </linearGradient>
                    </defs>

                    {/* Ocean / Gulf of Guinea Accent at bottom */}
                    <path
                      d="M 20 420 Q 200 400 380 430 L 380 480 L 20 480 Z"
                      fill="url(#gulf-water)"
                    />
                    <text x="200" y="460" textAnchor="middle" fill="#334155" fontSize="10" fontFamily="'Space Grotesk'" letterSpacing="3">
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
                      fill="url(#ghana-body)"
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

                    {/* Project Hub Pins */}
                    {PROJECT_HUBS.map((hub) => {
                      const isSelected = selectedHubId === hub.id;
                      // Map coords percentage to SVG viewBox (400x480)
                      const cx = (hub.coords.x / 100) * 400;
                      const cy = (hub.coords.y / 100) * 480;

                      return (
                        <g
                          key={hub.id}
                          className="cursor-pointer group"
                          onClick={() => setSelectedHubId(hub.id)}
                        >
                          {/* Pulsing Radar Ring for Selected Hub */}
                          {isSelected && (
                            <>
                              <circle
                                cx={cx}
                                cy={cy}
                                r="22"
                                fill="#f59e0b"
                                fillOpacity="0.15"
                                className="animate-ping"
                              />
                              <circle
                                cx={cx}
                                cy={cy}
                                r="16"
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
                            r={isSelected ? '9' : '6'}
                            fill={isSelected ? '#f59e0b' : '#1e293b'}
                            stroke={isSelected ? '#ffffff' : '#f59e0b'}
                            strokeWidth="2"
                            className="transition-all duration-300 group-hover:scale-125"
                          />

                          {/* Center Glow Dot */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? '4' : '2.5'}
                            fill={isSelected ? '#ffffff' : '#fbbf24'}
                          />

                          {/* Pin City Label */}
                          <text
                            x={cx + (hub.coords.x > 50 ? 12 : -12)}
                            y={cy + 4}
                            textAnchor={hub.coords.x > 50 ? 'start' : 'end'}
                            fill={isSelected ? '#fbbf24' : '#94a3b8'}
                            fontSize={isSelected ? '12' : '10'}
                            fontWeight={isSelected ? 'bold' : '600'}
                            fontFamily="'Space Grotesk', sans-serif"
                            className="transition-all group-hover:fill-amber-300 drop-shadow"
                          >
                            {hub.city.split(' ')[0]}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* City Quick Pills Selector */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                  {PROJECT_HUBS.map((hub) => (
                    <button
                      key={hub.id}
                      onClick={() => setSelectedHubId(hub.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-['Space_Grotesk'] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        selectedHubId === hub.id
                          ? 'bg-amber-500 text-slate-950 shadow-md'
                          : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                      <span>{hub.city.split(' ')[0]}</span>
                      <span className="text-[10px] opacity-75 font-mono">({hub.projectCount.split('+')[0]}+)</span>
                    </button>
                  ))}
                </div>

              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Selected Hub Details Showcase */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left" delay={150}>
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/25 shadow-2xl relative glass-card space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedHub.region}</span>
                  </div>
                  <span className="text-xl font-extrabold text-white font-['Syne']">
                    {selectedHub.projectCount}
                  </span>
                </div>

                {/* City Title */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                    {selectedHub.city}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Key project hubs and operational coverage across municipal development corridors.
                  </p>
                </div>

                {/* Notable Districts */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 font-['Space_Grotesk'] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Active Development Corridors</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedHub.notableDistricts.map((district, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 text-xs"
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary Disciplines */}
                <div>
                  <h4 className="text-xs font-bold text-slate-300 font-['Space_Grotesk'] uppercase tracking-wider mb-2">
                    Delivered Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {selectedHub.focusDisciplines.map((disc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{disc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Project Card in this Hub */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider font-['Space_Grotesk'] flex items-center justify-between">
                    <span>Spotlight Project</span>
                    <span className="text-slate-400 font-normal">{selectedHub.featuredProject.year}</span>
                  </div>

                  <div className="flex gap-3 items-center">
                    <img
                      src={selectedHub.featuredProject.image}
                      alt={selectedHub.featuredProject.title}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-800 shrink-0"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-white font-['Syne'] line-clamp-1">
                        {selectedHub.featuredProject.title}
                      </h5>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {selectedHub.featuredProject.category}
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {selectedHub.featuredProject.stat}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                {onOpenConsultation && (
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-['Space_Grotesk'] tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>DEVELOP A SITE IN {selectedHub.city.toUpperCase()}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}

              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* National Stats Strip */}
        <AnimatedSection direction="up" delay={250}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-['Syne']">180+</div>
              <div className="text-xs text-slate-400 mt-1 font-['Space_Grotesk'] uppercase tracking-wider">Total Delivered Projects</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">6 Regions</div>
              <div className="text-xs text-slate-400 mt-1 font-['Space_Grotesk'] uppercase tracking-wider">Active Municipal Footprint</div>
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
