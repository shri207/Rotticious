import React from 'react';
import { SIGNATURE_FAVORITES } from '../data/cafeData';
import { MenuItem } from '../types';
import { ArrowRight, Sparkles, Flame, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

interface SignatureFavoritesProps {
  onSelectMenuItem?: (item: MenuItem) => void;
  onViewAllMenu: () => void;
}

export const SignatureFavorites: React.FC<SignatureFavoritesProps> = ({
  onSelectMenuItem,
  onViewAllMenu,
}) => {
  return (
    <section id="favorites" className="py-20 md:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-[#D8D1C5]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
                Curated Specials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF]">
              A Few Rotticious Favorites
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#8A857D] max-w-xl">
              Hand-picked comforting classics, loaded fries, artisanal brews, and wood-baked pizzas that define our kitchen.
            </p>
          </div>

          <button
            id="view-full-menu-top-btn"
            onClick={onViewAllMenu}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-grotesk text-[#F5F2EC] hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-6 py-3 rounded-full transition-all duration-200 cursor-pointer self-start md:self-auto"
          >
            <span>Explore All 25+ Items</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Signature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SIGNATURE_FAVORITES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => onSelectMenuItem && onSelectMenuItem(item)}
              className="group bg-[#121214] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col cursor-pointer"
            >
              {/* Image Container with Aspect Ratio and Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />

                {/* Dietary badge (Veg / Non-Veg standard green/red box indicator) */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0A0A0B]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-zinc-700/60">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.isVegetarian ? 'bg-emerald-500' : 'bg-red-500'
                    }`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-grotesk text-zinc-300">
                    {item.isVegetarian ? 'Veg' : 'Non-Veg'}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider font-grotesk px-2.5 py-1 rounded-md bg-[#0A0A0B]/90 text-[#F5F2EC] border border-zinc-700/60">
                    {item.category}
                  </span>
                </div>

                {item.isSignature && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#F5F2EC] text-[#0A0A0B] text-[10px] font-bold uppercase tracking-wider font-grotesk px-2.5 py-0.5 rounded-full shadow-md">
                    <Sparkles className="w-3 h-3 text-[#0A0A0B]" />
                    <span>Signature</span>
                  </div>
                )}
              </div>

              {/* Card Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#FFFFFF] group-hover:text-[#F5F2EC] transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#8A857D] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Action Row */}
                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-wrap">
                    {item.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-grotesk tracking-wider px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-400 border border-zinc-700/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-[#D8D1C5] group-hover:text-white font-grotesk flex items-center gap-1 transition-colors">
                    <span>Details</span>
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Bottom Button */}
        <div className="mt-14 text-center">
          <button
            id="view-full-menu-bottom-btn"
            onClick={onViewAllMenu}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#F5F2EC] hover:bg-[#FFFFFF] text-[#0A0A0B] font-bold text-xs uppercase tracking-widest font-grotesk rounded-full shadow-2xl transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>Browse The Complete Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
