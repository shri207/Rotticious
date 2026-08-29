import React from 'react';
import { Coffee, Utensils, Sparkles, HeartHandshake, Wifi, Music2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const CafeExperience: React.FC = () => {
  const experiencePillars = [
    {
      icon: Coffee,
      title: 'Great Coffee',
      description: 'Thoughtfully prepared café favorites from specialty espresso brews to velvety iced lattes.',
      tag: 'Handcrafted',
    },
    {
      icon: Utensils,
      title: 'Comfort Food',
      description: 'Sandwiches, pizzas, loaded fries, crispy fried chicken, and artisanal sweet cravings.',
      tag: 'Freshly Prepared',
    },
    {
      icon: Sparkles,
      title: 'Cozy Atmosphere',
      description: 'A relaxed space for conversations, easy afternoons, deep work, and leisurely downtime.',
      tag: 'Aesthetic & Calm',
    },
    {
      icon: HeartHandshake,
      title: 'Friendly Service',
      description: 'Warm, attentive, and humble hospitality that makes you feel right at home every visit.',
      tag: 'Heartfelt Hospitality',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0E0E10] relative overflow-hidden border-t border-b border-zinc-800/80">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full opacity-10 bg-[radial-gradient(#D8D1C5_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D8D1C5]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
              The Café Atmosphere
            </span>
            <span className="h-px w-6 bg-[#D8D1C5]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF] leading-[1.1]">
            Come for the Food. Stay for the Vibe.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#D8D1C5]/85 leading-relaxed">
            Whether you're catching up with friends, getting some work done, or simply looking for a cozy place to slow down, Rotticious is made for easy afternoons and relaxed evenings.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiencePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#141417] p-8 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-[#F5F2EC] group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider font-grotesk px-2.5 py-1 rounded bg-zinc-900/80 text-zinc-400 border border-zinc-800">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-[#FFFFFF]">
                    {pillar.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#8A857D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 font-grotesk">
                  <span>0{idx + 1}</span>
                  <span className="h-1 w-6 bg-zinc-800 rounded group-hover:bg-[#D8D1C5] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Wide Editorial Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden border border-zinc-800 h-80 sm:h-96 group">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
              alt="People enjoying coffee and work at Rotticious"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 max-w-md">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D8D1C5] font-grotesk bg-[#0A0A0B]/80 px-3 py-1 rounded-md border border-zinc-700">
                Work · Dine · Connect
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-display uppercase text-white mt-2">
                Your Everyday Royapettah Hangout
              </h4>
            </div>
          </div>

          <div className="md:col-span-4 relative rounded-2xl overflow-hidden border border-zinc-800 h-80 sm:h-96 group">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
              alt="Artisan pour over coffee at Rotticious"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase font-grotesk tracking-widest text-[#D8D1C5]">
                Freshly Brewed
              </p>
              <p className="text-lg font-bold font-display uppercase text-white mt-1">
                Artisanal Specialty Beans
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
