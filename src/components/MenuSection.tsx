import React, { useState } from 'react';
import { ALL_MENU_ITEMS } from '../data/cafeData';
import { MenuCategory, MenuItem } from '../types';
import { Search, Sparkles, Filter, Info, X, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES: MenuCategory[] = [
  'All',
  'Coffee',
  'Sandwiches',
  'Pizza',
  'Chicken',
  'Vegetarian',
  'Desserts',
  'Bakery',
  'Shakes',
];

interface MenuSectionProps {
  onOpenReservation: () => void;
  selectedItemModal: MenuItem | null;
  setSelectedItemModal: (item: MenuItem | null) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenReservation,
  selectedItemModal,
  setSelectedItemModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = ALL_MENU_ITEMS.filter((item) => {
    // Category check
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;

    // Search query check
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    // Dietary filter check
    const matchesDietary =
      dietaryFilter === 'all' ||
      (dietaryFilter === 'veg' && item.isVegetarian) ||
      (dietaryFilter === 'non-veg' && !item.isVegetarian);

    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#0A0A0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D8D1C5]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
              Editorial Food & Drink Directory
            </span>
            <span className="h-px w-6 bg-[#D8D1C5]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF]">
            The Rotticious Menu
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8A857D] leading-relaxed">
            A thoughtfully curated selection of comfort dishes, loaded specialties, artisanal brews, and indulgent desserts. Prepared fresh daily at our Royapettah kitchen.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#121214] p-4 sm:p-5 rounded-2xl border border-zinc-800 shadow-xl mb-10 space-y-4">
          
          {/* Top Row: Search & Dietary Filter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, pizza, fries, chicken..."
                className="w-full bg-zinc-900 text-[#F5F2EC] placeholder-zinc-500 pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 focus:border-zinc-500 focus:outline-none text-xs sm:text-sm font-grotesk transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Toggle Pills */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-zinc-900 p-1 rounded-xl border border-zinc-800">
              <button
                id="filter-dietary-all"
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-grotesk font-semibold uppercase tracking-wider transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-[#F5F2EC] text-[#0A0A0B] shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All Diets
              </button>
              <button
                id="filter-dietary-veg"
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-grotesk font-semibold uppercase tracking-wider transition-all ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-emerald-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Veg</span>
              </button>
              <button
                id="filter-dietary-nonveg"
                onClick={() => setDietaryFilter('non-veg')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-grotesk font-semibold uppercase tracking-wider transition-all ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-red-400'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Category Filter Chips */}
          <div className="overflow-x-auto pb-1 scrollbar-none flex items-center gap-2 pt-2 border-t border-zinc-800/80">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  id={`cat-filter-${category.toLowerCase()}`}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs uppercase font-bold tracking-wider font-grotesk whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#0A0A0B] shadow-md scale-105'
                      : 'bg-zinc-900/90 text-[#D8D1C5]/80 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#121214] rounded-2xl border border-zinc-800">
            <p className="text-lg font-bold text-white font-display">No dishes match your filter</p>
            <p className="text-sm text-zinc-500 mt-1">Try selecting 'All' or searching for another crave-worthy item.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs uppercase font-grotesk font-bold rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItemModal(item)}
                className="group bg-[#121214] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50 cursor-pointer"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />

                    {/* Dietary badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0A0A0B]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-zinc-700/60">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isVegetarian ? 'bg-emerald-500' : 'bg-red-500'
                        }`}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-wider font-grotesk text-zinc-300">
                        {item.isVegetarian ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    {/* Category */}
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider font-grotesk px-2.5 py-1 rounded bg-[#0A0A0B]/90 text-[#F5F2EC] border border-zinc-700/60">
                      {item.category}
                    </span>
                  </div>

                  {/* Body details */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#FFFFFF] group-hover:text-[#F5F2EC] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    
                    <p className="mt-2 text-xs sm:text-sm text-[#8A857D] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-zinc-800/60 text-xs font-grotesk text-zinc-400">
                  <span className="text-[11px] text-[#D8D1C5]/70">Dine-In & Café Menu</span>
                  <span className="text-xs font-bold text-[#FFFFFF] group-hover:text-[#F5F2EC] flex items-center gap-1">
                    <span>View Recipe Details</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Note indicating browsing only */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#D8D1C5] font-grotesk font-semibold">
            Freshly Prepared Upon Order
          </p>
          <p className="text-sm text-[#8A857D] mt-1">
            Our menu is designed for a memorable dine-in experience. Drop by Rotticious on Thiruvika Road or reserve your table in advance.
          </p>
        </div>

      </div>

      {/* Item Detail Modal (Pure discovery & ingredients info, NO checkout!) */}
      <AnimatePresence>
        {selectedItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#121214] border border-zinc-700 rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemModal(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center border border-zinc-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 w-full bg-zinc-900">
                <img
                  src={selectedItemModal.image}
                  alt={selectedItemModal.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest font-grotesk px-2.5 py-1 rounded bg-[#0A0A0B]/90 text-[#F5F2EC] border border-zinc-700">
                    {selectedItemModal.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
                    {selectedItemModal.name}
                  </h3>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider font-grotesk px-2.5 py-1 rounded-full border ${
                      selectedItemModal.isVegetarian
                        ? 'border-emerald-500/50 text-emerald-400 bg-emerald-950/40'
                        : 'border-red-500/50 text-red-400 bg-red-950/40'
                    }`}
                  >
                    {selectedItemModal.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#D8D1C5]/90 leading-relaxed">
                  {selectedItemModal.description}
                </p>

                {selectedItemModal.pairingRecommendation && (
                  <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800 text-xs text-[#D8D1C5] font-grotesk">
                    <span className="font-bold text-white uppercase tracking-wider block mb-1">
                      Chef's Suggested Pairing:
                    </span>
                    {selectedItemModal.pairingRecommendation}
                  </div>
                )}

                <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedItemModal(null);
                      onOpenReservation();
                    }}
                    className="flex-1 py-3.5 bg-[#F5F2EC] hover:bg-white text-[#0A0A0B] text-xs uppercase font-bold tracking-widest font-grotesk rounded-full flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve a Table to Taste</span>
                  </button>
                  <button
                    onClick={() => setSelectedItemModal(null)}
                    className="py-3.5 px-5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs uppercase font-bold tracking-wider font-grotesk rounded-full border border-zinc-800 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
