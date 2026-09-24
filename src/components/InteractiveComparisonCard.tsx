import React, { useState, useRef, useCallback } from 'react';
import { TransformationProject } from '../data/content';
import { ArrowLeftRight, CheckCircle2, Sparkles, MapPin, Tag } from 'lucide-react';

interface InteractiveComparisonCardProps {
  project: TransformationProject;
  priority?: boolean;
}

export const InteractiveComparisonCard: React.FC<InteractiveComparisonCardProps> = ({ project }) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(x, rect.width));
    const percentage = Math.round((clamped / rect.width) * 100);
    setPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e && e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    } else if ('clientX' in e) {
      handleMove(e.clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <article className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 p-5 sm:p-7 shadow-2xl glass-card transition-all duration-300">
      
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-['Space_Grotesk'] uppercase tracking-wider mb-1">
            <span>{project.category}</span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-amber-500" />
              {project.location}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne']">
            {project.name}
          </h3>
        </div>

        {/* Quick Position Presets */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-[11px] font-bold font-['Space_Grotesk']">
          <span className="text-slate-500 px-2 text-[10px] uppercase">Wipe:</span>
          <button
            type="button"
            onClick={() => setPosition(25)}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              position === 25 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            25%
          </button>
          <button
            type="button"
            onClick={() => setPosition(50)}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              position === 50 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            50%
          </button>
          <button
            type="button"
            onClick={() => setPosition(75)}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              position === 75 ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            75%
          </button>
        </div>
      </div>

      {/* Interactive Drag Slider Viewport */}
      <div
        ref={containerRef}
        onMouseDown={handlePointerDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handlePointerUp}
        className="relative w-full aspect-[16/10] sm:aspect-[21/10] max-h-[500px] mt-6 rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-800/90 shadow-inner group"
      >
        {/* AFTER Layer (Base - Complete Delivery) */}
        <img
          src={project.afterImage}
          alt={project.afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />

        {/* BEFORE Layer (Clipped Overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={project.beforeImage}
            alt={project.beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Draggable Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 pointer-events-none shadow-[0_0_15px_rgba(245,158,11,0.8)]"
          style={{ left: `${position}%` }}
        >
          {/* Circular Center Thumb */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-500 text-slate-950 shadow-2xl flex items-center justify-center border-2 border-white ring-4 ring-amber-500/30 group-hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4 font-bold" />
          </div>
        </div>

        {/* Labels Overlaid */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-[10px] sm:text-[11px] font-bold text-slate-200 font-['Space_Grotesk'] tracking-wider shadow-lg flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            {project.beforeLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-amber-500/90 backdrop-blur-md border border-amber-400 text-[10px] sm:text-[11px] font-bold text-slate-950 font-['Space_Grotesk'] tracking-wider shadow-lg flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
            {project.afterLabel}
          </span>
        </div>

        {/* Bottom drag helper tip */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] text-slate-300 font-medium border border-slate-800 font-['Space_Grotesk']">
            ◀ Drag handle horizontally to compare ▶
          </span>
        </div>
      </div>

      {/* Bottom Description & Services Provided */}
      <div className="mt-6 space-y-4">
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Services Provided Tags */}
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2 font-['Space_Grotesk']">
            SERVICES PROVIDED:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.servicesProvided.map((service, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-[11px] font-['Space_Grotesk'] flex items-center gap-1.5"
              >
                <Tag className="w-3 h-3 text-amber-400" />
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Project Key Metrics if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/60">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/80 text-center">
                <div className="text-xs sm:text-sm font-bold text-white font-['Syne']">
                  {metric.value}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-['Space_Grotesk'] truncate">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </article>
  );
};
