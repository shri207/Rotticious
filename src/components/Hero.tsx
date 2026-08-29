import React from 'react';
import { ArrowDown, MapPin, Sparkles, Coffee, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { RotticiousLogo } from './RotticiousLogo';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* High-Resolution Gourmet Café / Food Spread Photographic Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
          alt="Rotticious Café atmosphere and gourmet food spread"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Editorial Multi-layer Dark Gradient & Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/75 to-[#0A0A0B]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0B]/60 to-[#0A0A0B]" />
      </div>

      {/* Subtle Noise / Grid Accent */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center relative z-10">
        
        {/* Location & Status Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-md mb-6 shadow-xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D8D1C5] font-grotesk flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            Royapettah, Chennai
          </span>
          <span className="text-zinc-600 text-xs">•</span>
          <span className="text-[11px] text-zinc-400 font-grotesk hidden sm:inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-zinc-500" /> Open Daily · 11 AM - 11 PM
          </span>
        </motion.div>

        {/* Centerpiece Rotticious Brand Wordmark & Animated Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-6 px-4"
        >
          <div className="flex justify-center items-center py-2">
            <RotticiousLogo className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" variant="white" />
          </div>
        </motion.div>

        {/* Hero Tagline Copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF] font-display uppercase leading-[1.05] drop-shadow-md">
            Good Food. Good Coffee. Good Vibes.
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#D8D1C5]/90 font-normal leading-relaxed max-w-2xl mx-auto">
            A cozy café in the heart of Royapettah serving comfort food, coffee, indulgent desserts and everything in between.
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
        >
          <button
            id="hero-explore-menu-btn"
            onClick={() => scrollTo('menu')}
            className="w-full sm:w-auto px-8 py-4 bg-[#F5F2EC] hover:bg-[#FFFFFF] text-[#0A0A0B] font-bold text-xs uppercase tracking-widest font-grotesk rounded-full shadow-2xl transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Coffee className="w-4 h-4 text-zinc-900" />
            <span>Explore Menu</span>
          </button>
          
          <button
            id="hero-visit-us-btn"
            onClick={() => scrollTo('visit')}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-[#F5F2EC] border border-zinc-700 font-bold text-xs uppercase tracking-widest font-grotesk rounded-full backdrop-blur-md transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-zinc-400" />
            <span>Visit Us</span>
          </button>
        </motion.div>

        {/* Micro highlights pill bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-zinc-800/80 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-[#8A857D]"
        >
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-[#F5F2EC] font-grotesk">100%</span>
            <span className="text-xs uppercase tracking-wider font-grotesk">Specialty Arabica</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-[#F5F2EC] font-grotesk">Freshly Baked</span>
            <span className="text-xs uppercase tracking-wider font-grotesk">Daily Croissants</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-[#F5F2EC] font-grotesk">Crispy & Loaded</span>
            <span className="text-xs uppercase tracking-wider font-grotesk">Nashville Chicken</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-[#F5F2EC] font-grotesk">Work & Unwind</span>
            <span className="text-xs uppercase tracking-wider font-grotesk">Cozy Ambiance</span>
          </div>
        </motion.div>

        {/* Bottom scroll down indicator */}
        <button
          id="hero-scroll-indicator"
          onClick={() => scrollTo('about')}
          className="mt-10 p-2 text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer animate-bounce focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <ArrowDown className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};
