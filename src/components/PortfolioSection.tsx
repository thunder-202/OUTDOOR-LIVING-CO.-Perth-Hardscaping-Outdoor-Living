import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/mockData';
import { MapPin, ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  onInquireProject: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'alfresco', label: 'Alfresco & Patios' },
    { key: 'decking', label: 'Hardwood Decking' },
    { key: 'kitchens', label: 'Outdoor Kitchens' },
    { key: 'courtyards', label: 'Courtyards & Pools' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 bg-[#141716] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8DA57B] mb-3">
              <span>Perth Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Western Suburbs & Coastal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Featured Outdoor Living Transformations.
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Explore bespoke residential retreats designed, engineered, and constructed across Western Australia. Click any project to inspect architectural specifications.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs text-white/50">
            <span>6 Completed Case Studies</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Functional category tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 rounded-lg border border-white/10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#A66B38] text-white shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Suburb Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by suburb (e.g. Cottesloe)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#A66B38] transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/70 text-sm mb-4">No projects found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-semibold rounded text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group cursor-pointer bg-[#1D2220] rounded-xl overflow-hidden border border-white/10 hover:border-[#A66B38]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2220] via-transparent to-black/20" />
                    <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-white/90">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#8DA57B] font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E7E2D7] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-white/40">
                    {project.details.duration}
                  </span>
                  <span className="text-xs font-semibold text-[#A66B38] group-hover:text-[#C58348] flex items-center gap-1 transition-colors">
                    <span>Inspect Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Inspector */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={(title) => {
          onInquireProject(title);
        }}
      />
    </section>
  );
};
