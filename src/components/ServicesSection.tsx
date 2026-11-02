import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { ArrowUpRight, Check, Shield, Flame, Trees, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#F2F0EB] text-[#1A1F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#45543B] mb-3">
            <span>Our Hardscaping & Alfresco Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Perth Master Builders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] tracking-tight text-balance mb-4">
            Custom Outdoor Living Built for Western Australian Lifestyles.
          </h2>
          <p className="text-base sm:text-lg text-[#555C58] leading-relaxed">
            Rather than generic modular kits, we engineer bespoke outdoor spaces suited to your block’s solar orientation, sandy soils, and prevailing afternoon coastal breezes.
          </p>
        </div>

        {/* Varied Showcase Layout 1: Marquee Asymmetric Feature (Outdoor Kitchens) */}
        <div className="bg-[#141716] text-white rounded-xl overflow-hidden shadow-2xl mb-14 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[500px]">
              <img
                src={SERVICES[3].image}
                alt={SERVICES[3].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#141716]/80 backdrop-blur-md px-3 py-1.5 rounded text-xs font-semibold text-[#D9D2C3] uppercase tracking-wider">
                Featured Alfresco Architecture
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#8DA57B] font-semibold mb-2">
                  01. Culinary Alfresco Spaces
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                  {SERVICES[3].title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                  {SERVICES[3].description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="border-t border-white/10 pt-4">
                    <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">
                      Key Materials
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-white/90">
                      {SERVICES[3].materials.map((mat) => (
                        <span key={mat} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#8DA57B]" />
                          <span>{mat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <span className="text-xs uppercase tracking-wider text-white/50 block mb-1">
                      Perth Climate Durability
                    </span>
                    <p className="text-xs text-[#D9D2C3] leading-relaxed">
                      {SERVICES[3].climateBenefit}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectService(SERVICES[3].title)}
                className="w-full sm:w-auto px-6 py-3 bg-[#A66B38] hover:bg-[#8A5427] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 self-start"
              >
                <span>Inquire About Outdoor Kitchens</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Varied Showcase Layout 2: Split 2-Column Architectural Contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Card A: Timber Decking */}
          <div className="group relative bg-[#1D2220] rounded-xl overflow-hidden shadow-xl border border-white/10 flex flex-col">
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src={SERVICES[1].image}
                alt={SERVICES[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2220] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider rounded">
                Hardwood Craftsmanship
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#8DA57B] font-semibold mb-1">
                  02. Hardwood & Pool Surrounds
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {SERVICES[1].title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  {SERVICES[1].description}
                </p>

                <div className="bg-black/30 rounded-lg p-4 mb-6 border border-white/5 space-y-2">
                  <div className="text-xs text-white/50 uppercase tracking-wider">Perth Species Specified:</div>
                  <div className="text-xs text-[#E7E2D7] font-medium">
                    Kiln-dried Australian Spotted Gum, Jarrah & Millboard composites with hidden Camo stainless fastenings.
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-white/60">Rot & termite resistant</span>
                <button
                  onClick={() => onSelectService(SERVICES[1].title)}
                  className="text-xs font-bold uppercase tracking-wider text-[#A66B38] hover:text-[#C58348] flex items-center gap-1 transition-colors"
                >
                  <span>Explore Decking</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card B: Pergola & Patio Construction */}
          <div className="group relative bg-[#1D2220] rounded-xl overflow-hidden shadow-xl border border-white/10 flex flex-col">
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src={SERVICES[0].image}
                alt={SERVICES[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2220] via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider rounded">
                Climate Engineering
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#8DA57B] font-semibold mb-1">
                  03. Patios & Motorized Pergolas
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {SERVICES[0].title} & Pergola Installation
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  {SERVICES[0].description} Engineered with motorized 180° pivoting aluminum louvers, automated rain sensors, and concealed drainage downpipes.
                </p>

                <div className="bg-black/30 rounded-lg p-4 mb-6 border border-white/5 space-y-2">
                  <div className="text-xs text-white/50 uppercase tracking-wider">Sun & Rain Control:</div>
                  <div className="text-xs text-[#E7E2D7] font-medium">
                    100% watertight when closed with automated rain sensors, and full heat dissipation when open.
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-white/60">Council Shire Approved</span>
                <button
                  onClick={() => onSelectService(SERVICES[0].title)}
                  className="text-xs font-bold uppercase tracking-wider text-[#A66B38] hover:text-[#C58348] flex items-center gap-1 transition-colors"
                >
                  <span>Explore Patios</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Comprehensive Service Explorer (All 9 Services Covered) */}
        <div className="bg-white rounded-xl shadow-lg border border-[#E7E2D7] p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E7E2D7]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141716] tracking-tight">
                Explore All 9 Outdoor Living Services
              </h3>
              <p className="text-xs sm:text-sm text-[#555C58]">
                Select any discipline to view technical specifications, material selections, and WA climate benefits.
              </p>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#45543B]">
              Fixed Price Guarantee
            </div>
          </div>

          {/* Interactive Filter / Tab Bar */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist">
            {SERVICES.map((srv) => {
              const isSelected = srv.id === activeTab;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#141716] text-white shadow-sm'
                      : 'bg-[#F2F0EB] text-[#555C58] hover:text-[#141716] hover:bg-[#E7E2D7]'
                  }`}
                >
                  <span>{srv.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A66B38] block mb-1">
                  {activeService.tagline}
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#141716]">
                  {activeService.title}
                </h4>
              </div>

              <p className="text-[#333A37] text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#45543B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#141716] block">Perth Climate Consideration</span>
                    <span className="text-xs text-[#555C58] leading-relaxed">{activeService.climateBenefit}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#A66B38] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#141716] block">Recommended Materials</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {activeService.materials.map((m) => (
                        <span key={m} className="text-[11px] bg-[#F2F0EB] text-[#141716] px-2 py-0.5 rounded">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#141716] hover:bg-[#272E2B] rounded-md transition-colors flex items-center gap-2"
                >
                  <span>Start Quote for {activeService.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 h-72 sm:h-96 rounded-xl overflow-hidden shadow-inner border border-[#E7E2D7] relative group">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold text-[#E7E2D7] uppercase tracking-wider mb-0.5">
                  Application
                </div>
                <div className="text-sm font-medium">
                  {activeService.idealFor}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
