import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';
import { Maximize2, X, Sparkles, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0E0E10] relative border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D8D1C5]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
              Atmosphere & Moments
            </span>
            <span className="h-px w-6 bg-[#D8D1C5]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF]">
            A Taste of Rotticious
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D1C5]/85 leading-relaxed">
            From steaming artisanal espresso and sizzling fried chicken to relaxed conversations and cozy table setups on Thiruvika Road.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setActivePhoto(item)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-zinc-800/90 shadow-xl bg-zinc-950 ${
                item.spanClass || 'col-span-12 md:col-span-4'
              } min-h-[260px] md:min-h-[300px]`}
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              
              {/* Subtle Dark Vignette & Dynamic Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/30 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Badge / Title / Action */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex justify-end">
                  <span className="w-10 h-10 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-white shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest font-grotesk px-2.5 py-1 rounded bg-[#F5F2EC] text-[#0A0A0B] shadow">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white mt-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D8D1C5]/80 font-grotesk mt-0.5">
                    Rotticious Royapettah
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Subtitle / Social tag */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs font-grotesk uppercase tracking-widest text-[#8A857D]">
          <Camera className="w-4 h-4 text-zinc-500" />
          <span>Tag your visits with @rotticious on social</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121214] border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-zinc-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[#121214] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider font-grotesk text-[#D8D1C5]">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-xl font-bold font-display uppercase text-white mt-0.5">
                    {activePhoto.title}
                  </h3>
                </div>
                <div className="text-xs text-zinc-400 font-grotesk text-right hidden sm:block">
                  <span>Rotticious Café · Royapettah</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
