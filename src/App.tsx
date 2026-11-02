import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { InspirationSection } from './components/InspirationSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteSection } from './components/QuoteSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Patio & Pergola');

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTransformations = () => {
    const el = document.getElementById('transformations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    scrollToQuote();
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedServiceForQuote(`Project Style: ${projectTitle}`);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1A1F1E] selection:bg-[#45543B] selection:text-white">
      {/* 1. Header / Top Navigation */}
      <Navbar onQuoteClick={scrollToQuote} />

      {/* 2. Hero Section */}
      <main className="flex-1">
        <Hero
          onStartProject={scrollToQuote}
          onViewTransformations={scrollToTransformations}
        />

        {/* 3. Services Showcase (9 Services with varied layouts & large photography) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Project Portfolio (6 Perth Case Studies with detail modals) */}
        <PortfolioSection onInquireProject={handleInquireProject} />

        {/* 5. Before & After Transformations (Draggable Comparison Slider) */}
        <BeforeAfterSlider onStartProject={scrollToQuote} />

        {/* 6. Outdoor Inspiration ("Imagine What Your Backyard Could Become") */}
        <InspirationSection
          onExploreProjects={scrollToProjects}
          onStartProject={scrollToQuote}
        />

        {/* 7. Our Process (5 Steps) */}
        <ProcessSection />

        {/* 8. Why Choose Us? (Craftsmanship, WA Climate Engineering, Proof) */}
        <WhyChooseUs />

        {/* 9. Customer Testimonials (3 Perth Homeowners) */}
        <TestimonialsSection />

        {/* 10. Project Quote Form (Interactive Estimator + Form Validation) */}
        <QuoteSection initialService={selectedServiceForQuote} />
      </main>

      {/* 11. Contact & Footer */}
      <Footer onQuoteClick={scrollToQuote} />
    </div>
  );
}
