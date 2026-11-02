import React from 'react';
import { DECK_IMAGE, PATIO_IMAGE } from '../data/mockData';
import { Compass, Award, CheckCircle, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Thoughtful Outdoor Planning',
      desc: 'We map sun paths, afternoon heat spikes, and Fremantle Doctor breeze corridors so your alfresco remains inviting across all four seasons.',
      stat: '100% Custom Orientation'
    },
    {
      icon: Award,
      title: 'Quality Construction Materials',
      desc: 'Only kiln-dried Class 1 Australian hardwoods, marine-grade 316 stainless steel, and natural honed travertine built to withstand coastal salt air.',
      stat: 'Class 1 Hardwoods & Stone'
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      desc: 'Flush transitions between indoor and outdoor flooring, concealed stainless fasteners, mitered stone coping, and architectural low-glare lighting channels.',
      stat: 'Concealed Fastening Systems'
    },
    {
      icon: ShieldCheck,
      title: 'Practical Design Solutions',
      desc: 'Engineered for real everyday use: integrated drainage preventing pool flooding, low-maintenance finishes, and automated rain-sensing pergolas.',
      stat: '10-Year Structural Warranty'
    },
    {
      icon: MessageSquare,
      title: 'Professional Communication',
      desc: 'A dedicated licensed site supervisor, weekly video updates, clear fixed-price contracts, and zero surprise variations.',
      stat: '98% On-Time Completion'
    }
  ];

  return (
    <section className="py-24 bg-[#F2F0EB] text-[#1A1F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#45543B] mb-3">
            <span>Why Perth Homeowners Trust Us</span>
            <span aria-hidden="true">·</span>
            <span>Uncompromising Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] tracking-tight mb-4 text-balance">
            Craftsmanship That Endures the Western Australian Sun.
          </h2>
          <p className="text-base sm:text-lg text-[#555C58] leading-relaxed">
            Perth backyards experience intense UV radiation, sandy soils, and coastal salt spray. We engineer our structures with materials and details that look magnificent for decades, not just years.
          </p>
        </div>

        {/* 2-Column Split: Image Showcase on Left, Pillars List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D9D2C3] h-[480px]">
              <img
                src={DECK_IMAGE}
                alt="Australian Spotted Gum deck craftsmanship around plunge pool"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D9D2C3] font-semibold block mb-1">
                  Master Carpentry
                </span>
                <p className="text-sm font-medium">
                  Class 1 Spotted Gum multi-tier deck with recessed stair riser warm LED illumination in Applecross, WA.
                </p>
              </div>
            </div>

            {/* Proof Badge overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#141716] text-white p-5 rounded-xl shadow-xl border border-white/10 max-w-xs">
              <div className="text-2xl font-extrabold text-[#A66B38]">280+</div>
              <div className="text-xs text-white/80 font-medium">
                Perth outdoor living & hardscape transformations delivered with a 10-year structural warranty.
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-[#E7E2D7] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="p-3 bg-[#F2F0EB] text-[#A66B38] rounded-lg shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-base font-bold text-[#141716]">
                        {pillar.title}
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#45543B]">
                        {pillar.stat}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quantitative Proof Strip */}
        <div className="bg-[#141716] text-white rounded-xl p-6 sm:p-8 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#A66B38] tabular-nums">15+</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Years in Perth</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#8DA57B] tabular-nums">280+</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Completed Yards</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">98%</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#A66B38] tabular-nums">10 Yrs</div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Structural Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
};
