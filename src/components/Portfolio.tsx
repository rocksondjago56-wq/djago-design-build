import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/content';
import { Briefcase, MapPin, Calendar, ExternalLink, Filter, ArrowUpRight, X } from 'lucide-react';

interface PortfolioProps {
  onOpenConsultation: (serviceId?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Categories');
  const [activeSectorFilter, setActiveSectorFilter] = useState<string>('All Sectors');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All Categories', 'Graphic Design', 'Civil Engineering', 'Interior Design'];
  const sectorFilters = ['All Sectors', 'Corporate & Workplace', 'Civic & Community', 'Higher Education', 'Luxury Residential'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = activeCategory === 'All Categories' || p.category === activeCategory;
    const matchesSector = activeSectorFilter === 'All Sectors' || p.sector === activeSectorFilter;
    return matchesCategory && matchesSector;
  });

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#11141a] relative overflow-hidden border-t border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-widest mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Selected Works & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Syne'] tracking-tight">
              Featured Ghana Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Explore our portfolio across luxury residential, commercial civil infrastructure, and corporate brand identities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-500 self-center font-['Space_Grotesk'] mr-2">Discipline:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-500 self-center font-['Space_Grotesk'] mr-2">Sector:</span>
              {sectorFilters.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setActiveSectorFilter(sec)}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold font-['Space_Grotesk'] tracking-wider uppercase transition-all ${
                    activeSectorFilter === sec
                      ? 'bg-amber-500/20 border border-amber-500 text-amber-400 font-bold'
                      : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold font-['Space_Grotesk'] border border-slate-800">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 font-['Space_Grotesk'] font-bold">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Card Text */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-['Syne'] group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[11px] font-['Space_Grotesk']"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#11141a] border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8 relative">
            
            {/* Modal Header Image */}
            <div className="relative h-72 sm:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11141a] via-transparent to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 text-slate-200 hover:text-white flex items-center justify-center border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-extrabold font-['Space_Grotesk'] uppercase tracking-wider mb-2 inline-block">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 block font-['Space_Grotesk']">Client</span>
                  <span className="text-white font-semibold mt-0.5 block">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-['Space_Grotesk']">Location</span>
                  <span className="text-white font-semibold mt-0.5 block">{selectedProject.location}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-['Space_Grotesk']">Year Delivered</span>
                  <span className="text-amber-400 font-semibold mt-0.5 block">{selectedProject.year}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white font-['Space_Grotesk'] uppercase tracking-wider mb-2">
                  Project Scope & Overview
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.stats && (
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.stats.map((st, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                      <div className="text-lg font-bold text-amber-400 font-['Syne']">{st.value}</div>
                      <div className="text-xs text-slate-400 font-['Space_Grotesk']">{st.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation(selectedProject.category);
                  }}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-['Space_Grotesk'] text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Request Similar Build or Design</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
