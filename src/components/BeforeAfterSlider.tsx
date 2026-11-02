import React, { useState, useRef, useCallback, useEffect } from 'react';
import { BEFORE_AFTER_STORIES } from '../data/mockData';
import { Sliders, Sparkles, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  onStartProject: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onStartProject }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const story = BEFORE_AFTER_STORIES[0];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  return (
    <section id="transformations" className="py-24 bg-[#E7E2D7] text-[#1A1F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#45543B] mb-3">
            <span>Before & After Case Study</span>
            <span aria-hidden="true">·</span>
            <span>Perth Site Overhaul</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] tracking-tight mb-4">
            See the Difference Precision Craftsmanship Makes.
          </h2>
          <p className="text-base sm:text-lg text-[#555C58] leading-relaxed">
            Drag the interactive slider horizontally to reveal how an unlevel, cracked concrete block in City Beach was reimagined into a modern entertaining pavilion.
          </p>
        </div>

        {/* Interactive Slider Showcase */}
        <div className="bg-[#141716] rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/10 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8DA57B] font-semibold mb-1">
                {story.location}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {story.title}
              </h3>
            </div>

            {/* Quick Preset Buttons for easy viewing on touch/mouse */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSliderPosition(0)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  sliderPosition === 0 ? 'bg-[#A66B38] text-white' : 'bg-white/10 hover:bg-white/20 text-white/80'
                }`}
              >
                Before (100%)
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  sliderPosition === 50 ? 'bg-[#A66B38] text-white' : 'bg-white/10 hover:bg-white/20 text-white/80'
                }`}
              >
                50 / 50 Split
              </button>
              <button
                onClick={() => setSliderPosition(100)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  sliderPosition === 100 ? 'bg-[#A66B38] text-white' : 'bg-white/10 hover:bg-white/20 text-white/80'
                }`}
              >
                After (100%)
              </button>
            </div>
          </div>

          {/* Interactive Image Container */}
          <div
            ref={containerRef}
            className="relative w-full h-[340px] sm:h-[480px] md:h-[580px] rounded-xl overflow-hidden select-none cursor-ew-resize shadow-2xl border border-white/10"
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onTouchStart={(e) => {
              if (e.touches.length > 0) handlePointerDown(e.touches[0].clientX);
            }}
          >
            {/* Base "After" Image (Full Width under layer) */}
            <img
              src={story.afterImage}
              alt="Transformed modern luxury outdoor pavilion in Perth"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-[#8DA57B] pointer-events-none border border-white/10">
              Completed Transformation
            </div>

            {/* Clipped "Before" Image (Top Layer) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={story.beforeImage}
                alt="Neglected cracked suburban backyard before transformation"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none pointer-events-none"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : '100%',
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-amber-400 pointer-events-none border border-white/10">
                Original Condition (Before)
              </div>
            </div>

            {/* Draggable Divider Line and Knob */}
            <div
              className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* Vertical hairline */}
              <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)]" />

              {/* Central handle knob */}
              <div className="absolute w-10 h-10 sm:w-12 sm:h-12 bg-white text-[#141716] rounded-full shadow-2xl flex items-center justify-center border-2 border-[#A66B38] pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                <Sliders className="w-5 h-5 text-[#A66B38]" />
              </div>
            </div>
          </div>

          {/* Accessible Native Range Slider for touch & assistive tech */}
          <div className="mt-4 px-2 flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-white/50 whitespace-nowrap">
              Drag to Compare:
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Comparison slider position"
              className="w-full accent-[#A66B38] cursor-pointer h-1.5 bg-white/20 rounded-lg appearance-none"
            />
            <span className="text-xs font-mono text-white/70 w-12 text-right">
              {Math.round(sliderPosition)}%
            </span>
          </div>

          {/* Transformation Details & Highlights */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>The Original Site State</span>
              </h4>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                {story.description}
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#8DA57B]" />
                <span>Scope Delivered</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                {story.transformationHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#A66B38] font-bold">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onStartProject}
                  className="text-xs font-bold uppercase tracking-wider text-[#A66B38] hover:text-[#C58348] flex items-center gap-1.5 transition-colors"
                >
                  <span>Discuss Your Yard Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
