import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin, Phone, Clock, Calendar, Navigation, Sparkles, ExternalLink, Car, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface LocationSectionProps {
  onOpenReservation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="visit" className="py-20 md:py-28 bg-[#0E0E10] relative overflow-hidden border-t border-zinc-800/80">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D8D1C5]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
              Find Your Way
            </span>
            <span className="h-px w-6 bg-[#D8D1C5]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF]">
            Your Next Coffee Stop?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D8D1C5]/85 leading-relaxed">
            Find us on Thiruvika Road, Peters Colony, Royapettah, Chennai. We can't wait to serve you.
          </p>
        </div>

        {/* Main Grid: Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address & Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Address Box */}
            <div className="bg-[#141417] p-8 rounded-3xl border border-zinc-800 shadow-2xl space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#FFFFFF]">
                    {CAFE_INFO.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider font-grotesk px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                    Open Daily
                  </span>
                </div>
                <p className="text-xs text-[#8A857D] font-grotesk uppercase tracking-wider mt-1">
                  Café & Comfort Dining Space
                </p>
              </div>

              {/* Exact Address Block */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#F5F2EC]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider font-grotesk text-[#8A857D]">
                    Physical Address
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-[#FFFFFF] mt-1 leading-snug">
                    {CAFE_INFO.address.street}
                  </p>
                  <p className="text-xs sm:text-sm text-[#D8D1C5] mt-0.5">
                    {CAFE_INFO.address.locality}, {CAFE_INFO.address.city}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5 font-grotesk">
                    {CAFE_INFO.address.state} — {CAFE_INFO.address.pincode}
                  </p>
                </div>
              </div>

              {/* Direct Phone Block */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                    <Phone className="w-5 h-5 text-[#F5F2EC]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider font-grotesk text-[#8A857D]">
                      Direct Telephone
                    </h4>
                    <a
                      href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold font-grotesk text-[#FFFFFF] hover:text-[#D8D1C5] transition-colors"
                    >
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${CAFE_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold font-grotesk uppercase rounded-lg text-[#F5F2EC] transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="visit-reserve-table-btn"
                  onClick={onOpenReservation}
                  className="py-3.5 px-4 bg-[#F5F2EC] hover:bg-white text-[#0A0A0B] font-bold text-xs uppercase tracking-wider font-grotesk rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>

                <a
                  id="visit-get-directions-btn"
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-[#F5F2EC] border border-zinc-700 font-bold text-xs uppercase tracking-wider font-grotesk rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-zinc-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Neighboring Highlights */}
              <div className="pt-2 text-xs text-[#8A857D] font-grotesk flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-zinc-500" />
                  Two-wheeler & Car Parking nearby
                </span>
                <span>•</span>
                <span>Near Express Avenue</span>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#141417] p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/10 text-white">
                    <Clock className="w-4 h-4 text-[#F5F2EC]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white">
                      Come Say Hello
                    </h3>
                    <p className="text-[11px] text-[#8A857D] font-grotesk uppercase tracking-wider">
                      Weekly Opening Hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-grotesk bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-800/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open Now</span>
                </div>
              </div>

              {/* Schedule list */}
              <div className="divide-y divide-zinc-800/80">
                {CAFE_INFO.hours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="py-2.5 flex items-center justify-between text-xs sm:text-sm font-grotesk"
                  >
                    <span className="text-[#D8D1C5] font-medium">{schedule.day}</span>
                    <span className="text-white font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Map Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#141417] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl p-3 sm:p-4 flex flex-col h-full"
          >
            {/* Map Container */}
            <div className="relative w-full h-[450px] sm:h-[520px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <iframe
                title="Rotticious Café Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6669460265697!2d80.257000!3d13.056000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266395b0b0001%3A0x123456789!2sRoyapettah%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-85"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Location Stamp Pin */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#0A0A0B]/90 backdrop-blur-md border border-zinc-700/80 shadow-2xl max-w-xs pointer-events-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D8D1C5] font-grotesk">
                    Rotticious Café Pin
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-display uppercase">
                  Thiruvika Rd, Peters Colony
                </h4>
                <p className="text-xs text-[#8A857D] font-grotesk mt-0.5">
                  Royapettah, Chennai 600014
                </p>
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-white uppercase tracking-wider font-grotesk hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Helpful visitor info strip */}
            <div className="p-4 bg-zinc-900/60 rounded-2xl mt-3 border border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-[#8A857D] font-grotesk">
              <span>📍 Landmark: Near Peters Colony, Royapettah</span>
              <span>⚡ Wi-Fi Available for Work & Study</span>
              <span>❄️ Air Conditioned Indoor Seating</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
