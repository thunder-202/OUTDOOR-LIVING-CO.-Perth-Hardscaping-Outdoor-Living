import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, MapPin, Calendar, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#1A1F1E] text-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto border border-white/10 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Header */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1E] via-transparent to-black/30" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A66B38] mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-white/80">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview text */}
          <p className="text-base sm:text-lg text-white/85 leading-relaxed">
            {project.shortDesc}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm">
            <div>
              <span className="text-white/50 block text-[11px] uppercase tracking-wider mb-1">Scale</span>
              <span className="font-semibold text-white">{project.details.dimensions}</span>
            </div>
            <div>
              <span className="text-white/50 block text-[11px] uppercase tracking-wider mb-1">Timeline</span>
              <span className="font-semibold text-white">{project.details.duration}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-white/50 block text-[11px] uppercase tracking-wider mb-1">Engineering</span>
              <span className="font-semibold text-[#8DA57B]">Council Approved WA</span>
            </div>
          </div>

          {/* Key Materials & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#A66B38]" />
                <span>Materials & Finishes</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                {project.details.materials.map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8DA57B] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A66B38]" />
                <span>Architectural Features</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                {project.details.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#A66B38] font-bold">›</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold">
              Site Transformation Case Notes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-black/30 p-4 rounded-lg border border-white/5">
                <span className="text-rose-400 font-bold block mb-1 uppercase tracking-wider text-[11px]">
                  Site Challenge
                </span>
                <p className="text-white/75 leading-relaxed">{project.details.challenge}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-white/5">
                <span className="text-[#8DA57B] font-bold block mb-1 uppercase tracking-wider text-[11px]">
                  Architectural Solution
                </span>
                <p className="text-white/75 leading-relaxed">{project.details.solution}</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/50 text-center sm:text-left">
              Interested in a similar design for your Perth residence?
            </div>
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#A66B38] hover:bg-[#8A5427] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Inquire About This Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
