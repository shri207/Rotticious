import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CAFE_INFO } from '../data/cafeData';
import { TableReservation } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<TableReservation>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingPreference: 'Indoor AC',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeSlots = [
    '11:30 AM', '12:30 PM', '01:30 PM', '02:30 PM', '04:00 PM',
    '05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM', '09:30 PM', '10:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ref = `ROT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFFFFF', '#D8D1C5', '#F5F2EC', '#8A857D'],
      });
    } catch {
      // safe fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleWhatsAppNotify = () => {
    const text = encodeURIComponent(
      `Hello Rotticious! I would like to confirm my table reservation (Ref: ${bookingRef}) for ${formData.guests} guests on ${formData.date} around ${formData.time}. Name: ${formData.name}.`
    );
    window.open(`https://wa.me/918754449754?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#121214] border border-zinc-700 rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center border border-zinc-700 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="h-px w-5 bg-[#D8D1C5]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8D1C5] font-grotesk">
                  Table Booking
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
                Reserve Your Table
              </h3>
              <p className="text-xs text-[#8A857D] font-grotesk mt-1">
                Rotticious · Thiruvika Rd, Peters Colony, Royapettah
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider font-grotesk text-zinc-400 mb-1.5">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditi Sharma"
                    className="w-full bg-zinc-900 text-white pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 focus:border-zinc-500 focus:outline-none text-xs sm:text-sm font-grotesk"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider font-grotesk text-zinc-400 mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 087544 49754"
                    className="w-full bg-zinc-900 text-white pl-10 pr-4 py-2.5 rounded-xl border border-zinc-800 focus:border-zinc-500 focus:outline-none text-xs sm:text-sm font-grotesk"
                  />
                </div>
              </div>

              {/* Date & Guests Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider font-grotesk text-zinc-400 mb-1.5">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-zinc-900 text-white pl-10 pr-3 py-2.5 rounded-xl border border-zinc-800 focus:border-zinc-500 focus:outline-none text-xs font-grotesk"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider font-grotesk text-zinc-400 mb-1.5">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-zinc-900 text-white pl-10 pr-3 py-2.5 rounded-xl border border-zinc-800 focus:border-zinc-500 focus:outline-none text-xs font-grotesk"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '10+'].map((num) => (
                        <option key={num} value={num}>
                          {num} {Number(num) === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Time Slot Preference */}
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider font-grotesk text-zinc-400 mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.slice(0, 8).map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 px-1 text-center rounded-lg text-[11px] font-grotesk font-semibold transition-all ${
                        formData.time === slot
                          ? 'bg-[#F5F2EC] text-[#0A0A0B] font-bold'
                          : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider font-grotesk text-zinc-400 mb-1.5">
                  Seating Preference
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Indoor AC', 'Cozy Corner', 'Work Friendly', 'No Preference'] as const).map((pref) => (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => setFormData({ ...formData, seatingPreference: pref })}
                      className={`py-2 px-3 text-left rounded-xl text-xs font-grotesk transition-all border ${
                        formData.seatingPreference === pref
                          ? 'bg-zinc-800 border-zinc-500 text-white font-semibold'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#F5F2EC] hover:bg-white text-[#0A0A0B] font-bold text-xs uppercase tracking-widest font-grotesk rounded-full shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Confirm Table Request
                </button>
                <p className="text-[10px] text-center text-zinc-500 font-grotesk mt-2">
                  Our team will prepare your table at our Royapettah branch.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#D8D1C5] font-grotesk">
                Reservation Confirmed
              </span>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white mt-1">
                We're Saving Your Table!
              </h3>
              <p className="text-sm text-[#8A857D] mt-2">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your table for {formData.guests} on {formData.date} ({formData.time}) has been logged.
              </p>
            </div>

            {/* Reference Card */}
            <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800 text-left space-y-2 text-xs font-grotesk">
              <div className="flex justify-between pb-2 border-b border-zinc-800">
                <span className="text-zinc-500">Booking Reference</span>
                <span className="text-white font-bold tracking-wider">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Location</span>
                <span className="text-[#D8D1C5]">Thiruvika Rd, Royapettah</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Preference</span>
                <span className="text-[#D8D1C5]">{formData.seatingPreference}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              <button
                onClick={handleWhatsAppNotify}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider font-grotesk rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notify via WhatsApp</span>
              </button>
              
              <button
                onClick={handleReset}
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider font-grotesk rounded-full border border-zinc-800 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
