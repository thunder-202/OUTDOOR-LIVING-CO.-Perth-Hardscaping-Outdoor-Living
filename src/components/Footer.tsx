import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SERVICES, PROJECTS } from '../data/mockData';

interface FooterProps {
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick }) => {
  const serviceAreas = [
    'Cottesloe & Swanbourne',
    'City Beach & Floreat',
    'Dalkeith & Nedlands',
    'Subiaco & Shenton Park',
    'Applecross & South Perth',
    'Fremantle & East Fremantle',
    'Sorrento & Hillarys',
    'Perth Hills & Kalamunda',
  ];

  return (
    <footer id="contact" className="bg-[#101312] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Perth Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xl font-bold tracking-tight text-white uppercase flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#8DA57B] rounded-full inline-block" />
              <span>OUTDOOR LIVING CO.</span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Perth’s premier outdoor living, hardscaping, and backyard transformation studio. Creating extraordinary alfresco entertaining spaces designed for the Western Australian climate.
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1">
              <div>WA Registered Builder: #104829 (Demo)</div>
              <div>Master Builders WA Member (Demo)</div>
              <div>ABN: 84 928 301 928</div>
            </div>

            <div className="pt-2">
              <button
                onClick={onQuoteClick}
                className="px-5 py-2.5 bg-[#A66B38] hover:bg-[#8A5427] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold">
              Specialist Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {SERVICES.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#A66B38]">›</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Across Perth */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold">
              Perth Service Areas
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#8DA57B] rounded-full shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#E7E2D7] font-semibold">
              Studio & Yard
            </h4>

            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A66B38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Design Studio</div>
                  <div>184 Stirling Highway, Nedlands WA 6009</div>
                  <div className="text-white/50 text-[11px] mt-0.5">Yard: Collingwood St, Osborne Park</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A66B38] shrink-0" />
                <div>
                  <a href="tel:0893804120" className="hover:text-white transition-colors">
                    (08) 9380 4120
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A66B38] shrink-0" />
                <div>
                  <a href="mailto:info@outdoorlivingco.com.au" className="hover:text-white transition-colors">
                    info@outdoorlivingco.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#8DA57B] shrink-0 mt-0.5" />
                <div className="text-[11px] text-white/60 leading-relaxed">
                  <div>Mon – Fri: 7:30 AM – 5:00 PM</div>
                  <div>Saturday: 8:30 AM – 1:00 PM</div>
                  <div>Sunday: Closed for site maintenance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Portfolio Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} OUTDOOR LIVING CO. All rights reserved. Perth, Western Australia.
          </div>

          <div className="text-center md:text-right text-[11px] text-white/40">
            Portfolio demonstration for web design presentation · Built with HTML, CSS & JavaScript
          </div>
        </div>
      </div>
    </footer>
  );
};
