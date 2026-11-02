import React, { useState } from 'react';
import { HERO_IMAGE, COASTAL_IMAGE, KITCHEN_IMAGE, MATERIAL_SHOWCASE } from '../data/mockData';
import { Sparkles, ArrowRight, Layers, Compass, Sun, Wind } from 'lucide-react';

interface InspirationSectionProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
}

export const InspirationSection: React.FC<InspirationSectionProps> = ({
  onExploreProjects,
  onStartProject,
}) => {
  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState<number>(0);

  const currentMaterial = MATERIAL_SHOWCASE[selectedMaterialIndex];

  return (
    <section id="inspiration" className="py-24 bg-[#1D2220] text-white relative overflow-hidden">
      {/* Editorial Backdrop with Large Architectural Visual */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8DA57B] mb-3">
            <span>Outdoor Inspiration & Materiality</span>
            <span aria-hidden="true">·</span>
            <span>Perth Coastal Living</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 text-balance">
            Imagine What Your Backyard Could Become.
          </h2>
          <p className="text-lg sm:text-xl text-[#E7E2D7] font-normal leading-relaxed max-w-2xl">
            A harmonious integration of tactile natural stone, warm Australian hardwoods, architectural louvers, and subtle twilight illumination crafted for seamless year-round living.
          </p>
        </div>

        {/* Large Editorial Card with Text Overlay & Direct Project Links */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16 border border-white/10 min-h-[460px] md:min-h-[560px] flex flex-col justify-end">
          <img
            src={COASTAL_IMAGE}
            alt="Perth coastal outdoor inspiration with bleached timber pergola, travertine paving, and sunken fire pit"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141716] via-[#141716]/60 to-black/20" />

          {/* Overlay Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-3xl">
            <div className="bg-[#A66B38] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded inline-block mb-3">
              Design Philosophy
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Spaces Designed to Breathe With the Afternoon "Fremantle Doctor" Breeze.
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              In Perth, our outdoor spaces aren’t secondary extensions; they are the heart of the home. We orient structural pergolas to catch cooling sea breezes while buffering winter squalls, ensuring 300+ days of effortless entertaining.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3.5 bg-white text-[#141716] hover:bg-[#E7E2D7] text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center gap-2 shadow-lg"
              >
                <span>View Coastal Transformations</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartProject}
                className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center gap-2"
              >
                <span>Book a Design Workshop</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tactile Material & Craftsmanship Gallery */}
        <div className="bg-[#141716] rounded-xl p-6 sm:p-10 border border-white/10 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8DA57B] font-semibold block mb-1">
                Authentic Specimen Palette
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Engineered for Perth Sun, Sand & Salt.
              </h3>
            </div>
            <span className="text-xs text-white/50">
              Interactive Material Selector
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Material Selector List */}
            <div className="lg:col-span-5 space-y-2">
              {MATERIAL_SHOWCASE.map((item, idx) => {
                const isSelected = selectedMaterialIndex === idx;
                return (
                  <button
                    key={item.name}
                    onClick={() => setSelectedMaterialIndex(idx)}
                    className={`w-full text-left p-4 rounded-lg transition-all border ${
                      isSelected
                        ? 'bg-[#1D2220] border-[#A66B38] text-white shadow-md'
                        : 'bg-white/5 border-transparent text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{item.name}</span>
                      {isSelected && (
                        <span className="text-xs text-[#A66B38] font-bold">Active</span>
                      )}
                    </div>
                    <div className="text-xs text-white/50 mt-1">{item.type}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Material Deep Dive */}
            <div className="lg:col-span-7 bg-[#1D2220] rounded-xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A66B38] mb-2">
                <Layers className="w-4 h-4" />
                <span>Selected Specification</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">
                {currentMaterial.name}
              </h4>
              <div className="text-xs text-[#8DA57B] font-medium mb-4">
                Sourced: {currentMaterial.origin}
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                {currentMaterial.qualities}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-2">
                  <Sun className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">UV & Heat Resistance</span>
                    <span className="text-white/60">Non-fading, thermal stabilizing properties.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Wind className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Coastal Salt Tolerance</span>
                    <span className="text-white/60">Corrosion proof for WA beachside suburbs.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
