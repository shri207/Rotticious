import React from 'react';
import { RotticiousLogo } from './RotticiousLogo';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin, Phone, Instagram, Facebook, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <footer className="bg-[#050506] text-[#F5F2EC] border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-zinc-800/80 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-36">
                <RotticiousLogo className="w-full h-full" variant="white" />
              </div>
            </div>
            
            <p className="text-xl font-bold font-display uppercase tracking-tight text-white mt-3">
              {CAFE_INFO.tagline}
            </p>
            
            <p className="text-xs sm:text-sm text-[#8A857D] leading-relaxed max-w-sm">
              A contemporary café and relaxed gathering space located on Thiruvika Road, Peters Colony, Royapettah, Chennai. Serving comfort food, specialty coffee, and good vibes daily.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CAFE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-zinc-800 flex items-center justify-center transition-all duration-200"
                aria-label="Rotticious Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CAFE_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-zinc-800 flex items-center justify-center transition-all duration-200"
                aria-label="Rotticious Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#8A857D] hover:text-white transition-colors font-grotesk"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenReservation}
                  className="text-xs sm:text-sm text-[#D8D1C5] hover:text-white font-bold transition-colors font-grotesk cursor-pointer"
                >
                  Table Reservation →
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
              Royapettah Café
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#8A857D] font-grotesk">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D8D1C5] shrink-0 mt-0.5" />
                <span>
                  {CAFE_INFO.address.street}, {CAFE_INFO.address.locality}, {CAFE_INFO.address.city}, Tamil Nadu {CAFE_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8D1C5] shrink-0" />
                <a
                  href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:underline font-bold"
                >
                  {CAFE_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-xs text-zinc-500">
                <span>Timings: Mon – Sun (11:00 AM – 11:00 PM)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 rounded-full text-xs font-bold font-grotesk uppercase tracking-wider transition-colors cursor-pointer"
              >
                Book Your Table
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A857D] font-grotesk">
          <p>© 2026 Rotticious. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Thiruvika Rd, Royapettah, Chennai</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
