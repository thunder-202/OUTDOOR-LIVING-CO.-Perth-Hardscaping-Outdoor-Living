import React, { useState } from 'react';
import { HERO_IMAGE, PERTH_SUBURBS } from '../data/mockData';
import { QuoteFormData } from '../types';
import { Send, CheckCircle2, Calculator, Info, Phone, Mail, ShieldAlert } from 'lucide-react';

interface QuoteSectionProps {
  initialService?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    suburb: '',
    projectTypes: initialService ? [initialService] : ['Patio & Pergola'],
    budget: '$45,000 - $80,000',
    timeframe: 'Next 1-3 Months',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  // Estimator Widget State
  const [estimatorScope, setEstimatorScope] = useState<'patio' | 'deck' | 'kitchen' | 'full'>('full');
  const [estimatorSize, setEstimatorSize] = useState<'compact' | 'medium' | 'large'>('medium');

  const getEstimatedRange = () => {
    if (estimatorScope === 'deck') {
      if (estimatorSize === 'compact') return '$18,000 – $28,000';
      if (estimatorSize === 'medium') return '$28,000 – $45,000';
      return '$45,000 – $75,000';
    }
    if (estimatorScope === 'patio') {
      if (estimatorSize === 'compact') return '$22,000 – $35,000';
      if (estimatorSize === 'medium') return '$35,000 – $58,000';
      return '$58,000 – $95,000';
    }
    if (estimatorScope === 'kitchen') {
      if (estimatorSize === 'compact') return '$24,000 – $38,000';
      if (estimatorSize === 'medium') return '$38,000 – $65,000';
      return '$65,000 – $110,000';
    }
    // Full transformation
    if (estimatorSize === 'compact') return '$40,000 – $65,000';
    if (estimatorSize === 'medium') return '$65,000 – $120,000';
    return '$120,000 – $220,000+';
  };

  const projectTypeOptions = [
    'Patio & Pergola',
    'Timber Decking',
    'Outdoor Kitchen',
    'Stone Paving & Travertine',
    'Retaining Walls',
    'Garden Lighting',
    'Full Backyard Transformation',
  ];

  const budgetOptions = [
    '$25,000 - $45,000',
    '$45,000 - $80,000',
    '$80,000 - $140,000',
    '$140,000+',
  ];

  const timeframeOptions = [
    'Immediate (Next 4 Weeks)',
    'Next 1-3 Months',
    'Next 3-6 Months',
    'Planning Ahead / Later this Year',
  ];

  const handleCheckboxToggle = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(type);
      const newTypes = exists
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type];
      return {
        ...prev,
        projectTypes: newTypes.length > 0 ? newTypes : [type],
      };
    });
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your Australian contact number';
    } else if (!/^[0-9\s+()-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 0412 345 678)';
    }

    if (!formData.suburb.trim()) {
      newErrors.suburb = 'Please select or enter your Perth property suburb';
    }

    if (formData.projectTypes.length === 0) {
      newErrors.projectTypes = 'Select at least one project discipline';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of your backyard vision';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please write at least 15 characters describing your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      suburb: '',
      projectTypes: ['Patio & Pergola'],
      budget: '$45,000 - $80,000',
      timeframe: 'Next 1-3 Months',
      description: '',
    });
    setErrors({});
  };

  return (
    <section id="quote" className="py-24 bg-[#141716] relative overflow-hidden text-white">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Outdoor living backdrop"
          className="w-full h-full object-cover opacity-25 filter blur-xs"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716] via-[#141716]/90 to-[#141716]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8DA57B] mb-3">
            <span>Start Your Outdoor Project</span>
            <span aria-hidden="true">·</span>
            <span>Perth Fixed-Price Proposals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
            Request an On-Site Consultation & Quote.
          </h2>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed">
            Share your property location and outdoor vision. We will review your site orientation and prepare an initial architectural concept and budget schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Instant Project Budget Estimator & Perth Studio Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Estimator Card */}
            <div className="bg-[#1D2220] rounded-xl p-6 border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A66B38] mb-2">
                <Calculator className="w-4 h-4" />
                <span>Perth Hardscape Budget Guide</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Quick Project Cost Estimator
              </h3>
              <p className="text-xs text-white/70 mb-5 leading-relaxed">
                Ballpark investment ranges for Western Australian residential conditions, including earthworks, materials, and licensed installation.
              </p>

              {/* Scope buttons */}
              <div className="space-y-3 mb-5">
                <span className="text-xs uppercase tracking-wider text-white/50 block">1. Select Scope</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setEstimatorScope('deck')}
                    className={`px-3 py-2 text-xs font-medium rounded text-left transition-colors ${
                      estimatorScope === 'deck' ? 'bg-[#A66B38] text-white font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Timber Decking
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstimatorScope('patio')}
                    className={`px-3 py-2 text-xs font-medium rounded text-left transition-colors ${
                      estimatorScope === 'patio' ? 'bg-[#A66B38] text-white font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Patio / Louvered Pergola
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstimatorScope('kitchen')}
                    className={`px-3 py-2 text-xs font-medium rounded text-left transition-colors ${
                      estimatorScope === 'kitchen' ? 'bg-[#A66B38] text-white font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Outdoor Kitchen
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstimatorScope('full')}
                    className={`px-3 py-2 text-xs font-medium rounded text-left transition-colors ${
                      estimatorScope === 'full' ? 'bg-[#A66B38] text-white font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Full Transformation
                  </button>
                </div>
              </div>

              {/* Size buttons */}
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-wider text-white/50 block">2. Approximate Scale</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setEstimatorSize('compact')}
                    className={`px-2.5 py-1.5 text-xs rounded transition-colors text-center ${
                      estimatorSize === 'compact' ? 'bg-white text-[#141716] font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Compact (≤35m²)
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstimatorSize('medium')}
                    className={`px-2.5 py-1.5 text-xs rounded transition-colors text-center ${
                      estimatorSize === 'medium' ? 'bg-white text-[#141716] font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Medium (35–80m²)
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstimatorSize('large')}
                    className={`px-2.5 py-1.5 text-xs rounded transition-colors text-center ${
                      estimatorSize === 'large' ? 'bg-white text-[#141716] font-bold' : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    Large (80m²+)
                  </button>
                </div>
              </div>

              {/* Output */}
              <div className="p-4 bg-black/40 rounded-lg border border-white/5 flex items-center justify-between">
                <span className="text-xs text-white/60">Estimated Guide:</span>
                <span className="text-base sm:text-lg font-bold text-[#8DA57B] tabular-nums">
                  {getEstimatedRange()}
                </span>
              </div>
            </div>

            {/* Direct Perth Studio Information */}
            <div className="bg-[#1D2220] rounded-xl p-6 border border-white/10 text-xs space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold">
                Direct Inquiries
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 text-[#A66B38]" />
                <span>Call (08) 9380 4120 — Mon to Fri 7:30am - 5:00pm</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-[#A66B38]" />
                <span>projects@outdoorlivingco.com.au</span>
              </div>
              <div className="pt-2 text-white/50 text-[11px] leading-relaxed">
                Registered WA Building Practitioner #104829 · Fully Insured Hardscaping Contractor
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form or Demonstration Success Feedback */}
          <div className="lg:col-span-7 bg-[#1D2220] rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
            {isSubmitted && submittedData ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 bg-[#45543B]/40 text-[#8DA57B] rounded-full mx-auto flex items-center justify-center border border-[#8DA57B]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Quote Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{submittedData.fullName}</strong>. In a live production deployment, our Perth Senior Outdoor Architect would review your site orientation in <strong className="text-white">{submittedData.suburb}</strong> and call you within 24 business hours.
                  </p>
                </div>

                {/* Demonstration Notice Badge */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-amber-200/90 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-amber-300 mb-0.5">
                      Portfolio Demonstration Notice
                    </strong>
                    <span>
                      This is a web agency portfolio demonstration. No real inquiry has been transmitted to an external database.
                    </span>
                  </div>
                </div>

                {/* Summary of submitted inputs */}
                <div className="bg-white/5 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2 text-white/80 border border-white/5">
                  <div><span className="text-white/40">Name:</span> {submittedData.fullName}</div>
                  <div><span className="text-white/40">Contact:</span> {submittedData.email} · {submittedData.phone}</div>
                  <div><span className="text-white/40">Suburb:</span> {submittedData.suburb}</div>
                  <div><span className="text-white/40">Scope:</span> {submittedData.projectTypes.join(', ')}</div>
                  <div><span className="text-white/40">Budget:</span> {submittedData.budget}</div>
                  <div><span className="text-white/40">Timeframe:</span> {submittedData.timeframe}</div>
                </div>

                <div>
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white rounded transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Tell Us About Your Property
                  </h3>
                  <p className="text-xs text-white/60">
                    Complete the details below for a customized outdoor assessment.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lachlan Davies"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white/5 border rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500 bg-rose-500/5' : 'border-white/10 focus:border-[#A66B38]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="lachlan@example.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white/5 border rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 bg-rose-500/5' : 'border-white/10 focus:border-[#A66B38]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Phone & Suburb Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0412 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-white/5 border rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500 bg-rose-500/5' : 'border-white/10 focus:border-[#A66B38]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Property Suburb (Perth) <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-[#171B19] border rounded-lg text-sm text-white focus:outline-none transition-colors ${
                        errors.suburb ? 'border-rose-500' : 'border-white/10 focus:border-[#A66B38]'
                      }`}
                    >
                      <option value="">Select Perth Suburb...</option>
                      {PERTH_SUBURBS.map((sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                    {errors.suburb && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.suburb}</span>
                    )}
                  </div>
                </div>

                {/* Project Types (Multi-select check buttons) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Project Disciplines Required <span className="text-rose-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypeOptions.map((type) => {
                      const isChecked = formData.projectTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleCheckboxToggle(type)}
                          className={`p-2 text-xs rounded-md text-left transition-colors border flex items-center justify-between ${
                            isChecked
                              ? 'bg-[#A66B38]/30 border-[#A66B38] text-white font-medium'
                              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          <span className="truncate">{type}</span>
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#A66B38] shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                  {errors.projectTypes && (
                    <span className="text-[11px] text-rose-400 mt-1 block">{errors.projectTypes}</span>
                  )}
                </div>

                {/* Budget & Timeframe Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171B19] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#A66B38]"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-1.5">
                      Preferred Timeframe
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171B19] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#A66B38]"
                    >
                      {timeframeOptions.map((tf) => (
                        <option key={tf} value={tf}>
                          {tf}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                      Project Description & Vision <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[11px] text-white/40 tabular-nums">
                      {formData.description.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Describe your current backyard space, desired features (e.g. fire pit, BBQ, timber deck, shade louvers), and how you like to entertain..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-white/5 border rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors ${
                      errors.description ? 'border-rose-500 bg-rose-500/5' : 'border-white/10 focus:border-[#A66B38]'
                    }`}
                  />
                  {errors.description && (
                    <span className="text-[11px] text-rose-400 mt-1 block">{errors.description}</span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-white/50 text-center sm:text-left">
                    Demonstration form with client validation.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#A66B38] hover:bg-[#8A5427] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Submit Project Quote Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
