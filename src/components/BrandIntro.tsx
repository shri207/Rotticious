import React from 'react';
import { Star, IndianRupee, MapPin, Sparkles, HeartHandshake, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';
import { CAFE_INFO } from '../data/cafeData';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0E0E10] relative overflow-hidden border-t border-b border-zinc-800/60">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D8D1C5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmospheric Editorial Café Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Cozy modern cafe interior */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Rotticious Café cozy interior on Thiruvika Road"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent" />
                
                {/* Floating Image Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0A0A0B]/85 backdrop-blur-md border border-zinc-700/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#D8D1C5] font-grotesk font-semibold">
                      Peters Colony, Royapettah
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      Your Cozy Neighborhood Gathering Spot
                    </p>
                  </div>
                  <span className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4 text-[#F5F2EC]" />
                  </span>
                </div>
              </div>

              {/* Overlapping secondary image badge (Offset) */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 h-44 rounded-xl overflow-hidden border-2 border-[#0A0A0B] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                  alt="Freshly brewed espresso at Rotticious"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-zinc-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
                The Rotticious Experience
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF] leading-[1.1] mb-6">
              Made for Cravings. Built for Good Times.
            </h2>

            {/* Paragraph copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#D8D1C5]/85 leading-relaxed">
              <p>
                Rotticious is a relaxed café created as a haven in the heart of Royapettah. Whether you are meeting up with friends after class, settling in for a productive afternoon of remote work, or simply craving soul-satisfying comfort food, this is your everyday retreat.
              </p>
              <p className="text-sm sm:text-base text-[#8A857D] leading-relaxed">
                We blend a warm, cozy atmosphere with attentive, humble hospitality, an expansive menu of handcrafted favorites, and genuinely approachable pricing. From our famous Nashville fried chicken fries to velvety Spanish lattes, every item is crafted with passion.
              </p>
            </div>

            {/* Small subtle statistics row */}
            <div className="mt-8 pt-8 border-t border-zinc-800/80 grid grid-cols-3 gap-4 sm:gap-6">
              {/* Stat 1 */}
              <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-1 text-amber-400 font-bold font-grotesk text-xl sm:text-2xl">
                  <span>{CAFE_INFO.rating}</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#8A857D] font-grotesk mt-1">
                  {CAFE_INFO.totalReviews}+ Reviews
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                <div className="text-xl sm:text-2xl font-bold font-grotesk text-[#FFFFFF]">
                  {CAFE_INFO.priceRange}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#8A857D] font-grotesk mt-1">
                  {CAFE_INFO.spendLabel}
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                <div className="text-lg sm:text-xl font-bold font-grotesk text-[#FFFFFF] truncate">
                  Royapettah
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[#8A857D] font-grotesk mt-1">
                  Chennai, TN
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
