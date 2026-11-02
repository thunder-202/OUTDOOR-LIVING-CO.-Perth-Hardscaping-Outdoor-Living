import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { CheckCircle2, ChevronRight, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="about" className="py-24 bg-[#F8F7F4] text-[#1A1F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#45543B] mb-3">
            <span>Our Turnkey Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Five-Step Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] tracking-tight mb-4 text-balance">
            From Initial Vision to Sunset Handover.
          </h2>
          <p className="text-base sm:text-lg text-[#555C58] leading-relaxed">
            Every outdoor transformation is managed under a single, accountable project lead. No fragmented subcontractors or hidden price variations.
          </p>
        </div>

        {/* Polished Visual Timeline Container */}
        <div className="relative mb-14">
          {/* Horizontal Connecting Track on Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#D9D2C3] -z-0" />

          {/* 5-Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`cursor-pointer p-6 rounded-xl transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#141716] text-white border-[#141716] shadow-xl scale-[1.02]'
                      : 'bg-white text-[#1A1F1E] border-[#E7E2D7] hover:border-[#A66B38] hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Step Number Circle */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#A66B38] text-white shadow-md'
                            : 'bg-[#F2F0EB] text-[#141716]'
                        }`}
                      >
                        {step.step}
                      </span>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1 ${
                          isSelected ? 'text-[#8DA57B]' : 'text-[#8DA57B]'
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{step.duration}</span>
                      </span>
                    </div>

                    <h3
                      className={`text-lg font-bold tracking-tight mb-1 ${
                        isSelected ? 'text-white' : 'text-[#141716]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`text-xs font-semibold mb-3 ${
                        isSelected ? 'text-[#D9D2C3]' : 'text-[#A66B38]'
                      }`}
                    >
                      {step.subtitle}
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-white/80' : 'text-[#555C58]'
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-medium opacity-80">
                    <span>Phase Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight Focus Box for Selected Step */}
        <div className="bg-[#1D2220] text-white rounded-xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#8DA57B] font-semibold">
              Phase {PROCESS_STEPS[activeStepIndex].step} Deep Dive
            </span>
            <h4 className="text-xl font-bold text-white">
              {PROCESS_STEPS[activeStepIndex].title} — {PROCESS_STEPS[activeStepIndex].subtitle}
            </h4>
            <p className="text-xs sm:text-sm text-white/75 max-w-2xl leading-relaxed">
              {PROCESS_STEPS[activeStepIndex].desc} All plans include Perth council permits and structural engineering sign-offs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#quote"
              className="px-5 py-2.5 bg-[#A66B38] hover:bg-[#8A5427] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap"
            >
              Start Step 01 Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
