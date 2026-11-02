import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F8F7F4] text-[#1A1F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#45543B] mb-3">
            <span>Client Perspectives</span>
            <span aria-hidden="true">·</span>
            <span>Demonstration Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141716] tracking-tight mb-4 text-balance">
            Stories From Perth Homeowners.
          </h2>
          <p className="text-base sm:text-lg text-[#555C58] leading-relaxed">
            Read how thoughtful hardscaping and bespoke alfresco design transformed everyday family living across Perth’s premier suburbs.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-8 border border-[#E7E2D7] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Star rating & demonstration badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A66B38] text-[#A66B38]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#45543B] bg-[#F2F0EB] px-2 py-0.5 rounded">
                    Verified Project
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#D9D2C3] mb-4" />

                <p className="text-[#333A37] text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2F0EB]">
                <div className="font-bold text-[#141716] text-sm">
                  {t.client}
                </div>
                <div className="flex items-center gap-1 text-xs text-[#555C58] mt-0.5">
                  <MapPin className="w-3 h-3 text-[#A66B38]" />
                  <span>{t.suburb}</span>
                </div>
                <div className="text-[11px] text-[#8DA57B] font-semibold mt-1">
                  {t.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Demonstration Note Tag */}
        <div className="text-center">
          <p className="text-xs text-[#555C58]/80 max-w-xl mx-auto">
            * Sample demonstration client feedback created for the OUTDOOR LIVING CO. web design presentation.
          </p>
        </div>
      </div>
    </section>
  );
};
