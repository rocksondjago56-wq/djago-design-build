import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, ArrowLeftRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface TransformationItem {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  keySpecs: string[];
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'boardroom',
    title: 'Ridge Executive Headquarters Boardroom',
    category: 'Interior Design & Turnkey Fit-Out',
    location: 'North Ridge, Accra',
    duration: '8 Weeks Turnaround',
    description: 'Transformation of a raw, unfinished high-rise concrete shell with exposed wiring into an acoustically isolated, luxury executive boardroom featuring custom fluted walnut millwork and recessed ambient lighting.',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Unfinished Concrete Shell',
    afterLabel: 'AFTER: DJAGO Turnkey Executive Fit-Out',
    keySpecs: ['180 sqm Area', 'Acoustic Slat Baffles', 'Smart Conference Integration']
  },
  {
    id: 'villa',
    title: 'Cantonments Contemporary Minimalist Villa',
    category: 'Architecture & Civil Structural Build',
    location: 'Cantonments, Accra',
    duration: '14 Months Turnkey Build',
    description: 'From deep structural foundation excavation and high-tensile steel rebar cages to a completed multi-level private residence with cantilevered post-tensioned slabs and expansive floor-to-ceiling glass.',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Foundation & Structural Rebar Framing',
    afterLabel: 'AFTER: Completed Luxury Minimalist Villa',
    keySpecs: ['650 sqm Footprint', 'Cantilevered Decks', 'Integrated Storm Drainage']
  },
  {
    id: 'logistics',
    title: 'Tema Industrial Logistics & Steel Portal Hub',
    category: 'Civil Infrastructure & Heavy Engineering',
    location: 'Heavy Industrial Area, Tema',
    duration: '6 Months Fast-Track',
    description: 'Conversion of raw unpaved coastal soil into a heavy-duty 40-tonne axle rated concrete industrial facility with precision fabricated structural steel portal frames.',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1600&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=1600&auto=format&fit=crop&q=80',
    beforeLabel: 'BEFORE: Raw Earthworks & Subgrade Grading',
    afterLabel: 'AFTER: Engineered Portal Frame & Concrete Apron',
    keySpecs: ['3,200 sqm Floor Space', 'Heavy Axle Pavement', 'BIM Quality Verified']
  }
];

interface BeforeAfterSliderProps {
  onOpenConsultation?: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenConsultation }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = TRANSFORMATIONS[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(x, rect.width));
    const percentage = Math.round((clamped / rect.width) * 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    } else if ('clientX' in e) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#0b0d10] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4">
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Measurable Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Before &amp; After: The DJAGO Impact
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Drag the interactive slider below to see raw foundations, bare concrete shells, and undeveloped sites transformed into architectural and engineering landmarks.
            </p>
          </div>
        </AnimatedSection>

        {/* Project Selector Tabs */}
        <AnimatedSection direction="up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {TRANSFORMATIONS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItemIndex(index);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs font-['Space_Grotesk'] tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                  activeItemIndex === index
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Comparison Component */}
        <AnimatedSection direction="up" delay={200}>
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 lg:p-8 shadow-2xl glass-card">
            
            {/* Top Info Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-['Space_Grotesk'] uppercase tracking-wider mb-1">
                  <span>{activeItem.category}</span>
                  <span>•</span>
                  <span className="text-slate-400">{activeItem.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
                  {activeItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
                  {activeItem.duration}
                </span>
                {/* Preset Position Buttons */}
                <div className="hidden md:flex items-center gap-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-[11px] font-bold">
                  <button
                    onClick={() => setSliderPosition(25)}
                    className={`px-2 py-1 rounded ${sliderPosition === 25 ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                  >
                    25%
                  </button>
                  <button
                    onClick={() => setSliderPosition(50)}
                    className={`px-2 py-1 rounded ${sliderPosition === 50 ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                  >
                    50%
                  </button>
                  <button
                    onClick={() => setSliderPosition(75)}
                    className={`px-2 py-1 rounded ${sliderPosition === 75 ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                  >
                    75%
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Image Container */}
            <div
              ref={containerRef}
              onMouseDown={handlePointerDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handlePointerUp}
              onMouseLeave={handlePointerUp}
              onTouchStart={handlePointerDown}
              onTouchMove={handleTouchMove}
              onTouchEnd={handlePointerUp}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[540px] mt-6 rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-800 group shadow-inner"
            >
              {/* AFTER Image (Base Layer - Complete delivery) */}
              <img
                src={activeItem.afterImage}
                alt={activeItem.afterLabel}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* BEFORE Image (Clipped Overlay Layer) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt={activeItem.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Draggable Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 pointer-events-none shadow-[0_0_15px_rgba(245,158,11,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Circular Thumb Handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 text-slate-950 shadow-2xl flex items-center justify-center border-2 border-white ring-4 ring-amber-500/30 group-hover:scale-110 transition-transform">
                  <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5 font-bold" />
                </div>
              </div>

              {/* Badges on Top of Images */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-slate-300 font-['Space_Grotesk'] tracking-wider shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  {activeItem.beforeLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="px-3 py-1.5 rounded-lg bg-amber-500/90 backdrop-blur-md border border-amber-400/80 text-[11px] font-bold text-slate-950 font-['Space_Grotesk'] tracking-wider shadow-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                  {activeItem.afterLabel}
                </span>
              </div>

              {/* Bottom Instruction Tip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-[10px] text-slate-300 font-medium border border-slate-800/80 shadow">
                  Drag slider horizontally to compare
                </span>
              </div>
            </div>

            {/* Bottom Details & Key Specs */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeItem.description}
                </p>
                
                {/* Specs Chips */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {activeItem.keySpecs.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/70 text-slate-300 text-xs font-['Space_Grotesk'] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                {onOpenConsultation && (
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-['Space_Grotesk'] tracking-wider shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>REQUEST RENOVATION AUDIT</span>
                    <Building2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
