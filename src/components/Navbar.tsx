import React, { useState, useEffect } from 'react';
import { RotticiousLogo } from './RotticiousLogo';
import { Menu, X, Calendar, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'menu', 'gallery', 'reviews', 'visit'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0A0A0B]/90 via-[#0A0A0B]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo on Left */}
          <a
            href="#home"
            id="nav-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="h-10 w-28 sm:h-11 sm:w-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <RotticiousLogo className="w-full h-full" variant="white" />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm uppercase tracking-widest font-grotesk font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-[#FFFFFF] font-bold'
                      : 'text-[#D8D1C5]/70 hover:text-[#FFFFFF]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Table Reservation CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-reserve-btn"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 bg-[#F5F2EC] text-[#0A0A0B] hover:bg-[#FFFFFF] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider font-grotesk transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/40 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              id="mobile-reserve-quick-btn"
              onClick={onOpenReservation}
              className="bg-[#F5F2EC] text-[#0A0A0B] px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider font-grotesk cursor-pointer"
            >
              Reserve
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F2EC] hover:text-white rounded-lg bg-zinc-900/80 border border-zinc-800 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0A0A0B]/98 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wider uppercase font-grotesk text-[#F5F2EC] hover:bg-zinc-800/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-500 text-xs">→</span>
                </a>
              ))}

              <div className="pt-4 border-t border-zinc-800 mt-2 space-y-3">
                <button
                  id="mobile-menu-reserve-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 bg-[#F5F2EC] text-[#0A0A0B] font-bold text-xs uppercase tracking-widest font-grotesk rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve a Table
                </button>
                
                <div className="flex items-center justify-between text-xs text-[#8A857D] px-2 pt-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Royapettah, Chennai</span>
                  </div>
                  <a
                    href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-1.5 text-[#D8D1C5] hover:text-white"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{CAFE_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
