import React from 'react';
import { HERO_IMAGE } from '../data/mockData';
import { ArrowRight, ChevronDown, Compass, ShieldCheck, Sun, Hammer } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onViewTransformations: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewTransformations }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Background Image Container with Measured High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury outdoor entertaining pavilion in Perth at dusk featuring timber decking, modern pergola, outdoor kitchen, and gas fire table"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep cinematic multi-stop scrim ensuring WCAG AA contrast for text directly over photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121514] via-[#121514]/60 to-black/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-12 md:pt-20">
        <div className="max-w-3xl">
          {/* Subtle Location Trust Tag (quiet unboxed text) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E7E2D7]/90 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DA57B]" />
            <span>Perth, Western Australia</span>
            <span aria-hidden="true">·</span>
            <span>Outdoor Living & Hardscaping</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance mb-6 drop-shadow-md">
            Make More of Your Outdoors.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#E7E2D7] font-normal leading-relaxed max-w-2xl mb-10 drop-shadow">
            Beautifully designed outdoor spaces built for living, entertaining, and relaxing.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onStartProject}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#A66B38] hover:bg-[#8A5427] rounded-md transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 group whitespace-nowrap"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewTransformations}
              className="px-8 py-4 text-sm font-semibold text-white hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-md transition-all active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>View Transformations</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Credentials Strip & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <Sun className="w-4 h-4 text-[#C5BAA9] shrink-0" />
            <span>Built for the WA Climate</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C5BAA9] shrink-0" />
            <span>Licensed WA Builders #104829</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Hammer className="w-4 h-4 text-[#C5BAA9] shrink-0" />
            <span>15+ Years Hardscape Craft</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Compass className="w-4 h-4 text-[#C5BAA9] shrink-0" />
            <span>Turnkey Concept to Handover</span>
          </div>
        </div>

        {/* Subtle Down Indicator */}
        <div className="mt-6 flex justify-center">
          <a
            href="#services"
            className="text-white/60 hover:text-white transition-colors p-2 flex flex-col items-center gap-1 group"
            aria-label="Scroll down to services"
          >
            <span className="text-[10px] tracking-widest uppercase opacity-75 group-hover:opacity-100">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
