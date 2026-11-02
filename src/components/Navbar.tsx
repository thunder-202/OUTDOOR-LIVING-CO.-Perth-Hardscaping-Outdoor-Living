import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Outdoor Ideas', href: '#inspiration' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#141716]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-lg md:text-xl font-bold tracking-tight text-white uppercase whitespace-nowrap shrink-0 group flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 bg-[#8DA57B] rounded-full inline-block group-hover:scale-125 transition-transform" />
              <span>OUTDOOR LIVING CO.</span>
            </a>

            {/* Zone 2: 4-6 clean single-line nav links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/85">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#A66B38] after:scale-x-0 hover:after:scale-x-100 after:transition-transform whitespace-nowrap shrink-0"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href="tel:0893804120"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8DA57B]" />
                <span>(08) 9380 4120</span>
              </a>

              <button
                onClick={onQuoteClick}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A66B38] hover:bg-[#8A5427] rounded-md transition-all shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onQuoteClick}
                className="sm:hidden px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A66B38] rounded transition-all whitespace-nowrap shrink-0"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-xs bg-[#171B19] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#8DA57B] font-semibold">
                Perth, Western Australia
              </div>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-base font-medium text-white/90 hover:text-white py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <a
                href="tel:0893804120"
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#8DA57B]" />
                <span>(08) 9380 4120</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#A66B38] hover:bg-[#8A5427] rounded-md transition-colors shadow"
              >
                Request a Project Quote
              </button>
              <p className="text-[11px] text-white/50 text-center">
                Portfolio demonstration for Perth, WA
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
