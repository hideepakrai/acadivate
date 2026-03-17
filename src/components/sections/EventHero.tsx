'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';

export const EventHero = () => {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-dark to-primary-deep opacity-90" />
        <img 
          src="https://picsum.photos/seed/klskyline/1600/700" 
          alt="Kuala Lumpur" 
          className="w-full h-full object-cover opacity-20 grayscale-[30%]"
        />
      </div>

      {/* Decorative Rings */}
      <div className="absolute -right-48 -bottom-48 w-[700px] h-[700px] rounded-full border border-white/10 pointer-events-none animate-pulse" />
      <div className="absolute -right-24 -bottom-24 w-[500px] h-[500px] rounded-full border border-white/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-2 text-xs font-medium text-white/70 mb-8 overflow-x-auto whitespace-nowrap pb-2 lg:pb-0">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <ChevronRight size={12} className="shrink-0" />
          <a href="/events" className="hover:text-white transition-colors">Events</a>
          <ChevronRight size={12} className="shrink-0" />
          <span className="text-white font-bold">ICAS 2026 Anthropology & Sustainability</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">Academic Blog · ICAS 2026 Series · Malaysia</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 max-w-4xl">
            ICAS 2026 Malaysia — <em className="italic font-serif font-medium">Anthropology & Sustainability</em>: Bridging Cultures and Futures
          </h1>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-white/60 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
              <Calendar size={16} className="text-gold" />
              29 March 2026
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/60 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
              <MapPin size={16} className="text-gold" />
              Petaling Jaya, Malaysia
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/60 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
              <Clock size={16} className="text-gold" />
              9 min read
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
