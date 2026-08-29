import React from 'react';
import { REVIEWS_DATA, CAFE_INFO } from '../data/cafeData';
import { Star, Quote, CheckCircle, ThumbsUp, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#0A0A0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Prominent Rating Box */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#D8D1C5]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
                Guest Impressions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-[#FFFFFF]">
              Loved by the Rotticious Crowd
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8A857D] max-w-xl">
              Authentic words from our vibrant community of food lovers, students, coffee enthusiasts, and regular patrons.
            </p>
          </div>

          {/* Prominent Overall Rating Card */}
          <div className="bg-[#141416] p-6 sm:p-7 rounded-2xl border border-zinc-800 shadow-2xl flex items-center gap-6 self-start lg:self-auto">
            <div className="text-center pr-6 border-r border-zinc-800">
              <div className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                {CAFE_INFO.rating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center gap-1 text-amber-400 mt-1.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <Star className="w-4 h-4 fill-amber-400/30 text-amber-400" />
              </div>
            </div>

            <div>
              <div className="text-base font-bold font-grotesk text-white">
                {CAFE_INFO.totalReviews}+ Verified Reviews
              </div>
              <p className="text-xs text-[#8A857D] font-grotesk mt-0.5">
                Royapettah, Chennai Community
              </p>
              <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-grotesk mt-2">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Consistently High Customer Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#121214] p-7 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    {review.rating % 1 !== 0 && (
                      <Star className="w-3.5 h-3.5 fill-amber-400/50 text-amber-400" />
                    )}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
                </div>

                {/* Highlight Tag */}
                {review.highlightTag && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider font-grotesk px-2 py-0.5 rounded bg-zinc-800 text-[#D8D1C5] mb-3">
                    {review.highlightTag}
                  </span>
                )}

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#F5F2EC]/90 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author & Role Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider font-grotesk text-white">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-[#8A857D] font-grotesk">
                    {review.role || 'Guest'}
                  </p>
                </div>

                {review.date && (
                  <span className="text-[10px] text-zinc-500 font-grotesk">
                    {review.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ambient Community Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <MessageSquare className="w-5 h-5 text-[#F5F2EC]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-grotesk">
                Have you enjoyed a meal at Rotticious?
              </p>
              <p className="text-xs text-[#8A857D]">
                We love hearing feedback from our Chennai neighbors and travelers alike.
              </p>
            </div>
          </div>
          <a
            href={CAFE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase font-bold tracking-wider font-grotesk text-[#F5F2EC] hover:text-white px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer border border-zinc-700 whitespace-nowrap"
          >
            Leave a Review on Google
          </a>
        </div>

      </div>
    </section>
  );
};
