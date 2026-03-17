'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

const COUNTRIES = [
  {
    flag: '🇺🇸',
    name: 'USA',
    desc: 'Academic conferences & collaborations',
    engagement: 72,
    color: 'from-gold to-gold-lt',
    delay: 0.1
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    desc: 'Research partnerships & events',
    engagement: 65,
    color: 'from-teal to-teal',
    delay: 0.2
  },
  {
    flag: '🇦🇺',
    name: 'Australia',
    desc: 'Global academic engagement',
    engagement: 58,
    color: 'from-indigo-400 to-indigo-500',
    delay: 0.3
  },
  {
    flag: '🇮🇳',
    name: 'India',
    desc: 'Conferences, workshops & awards',
    engagement: 88,
    color: 'from-amber-400 to-gold',
    delay: 0.4
  }
];

const EXTRA_COUNTRIES = [
  { flag: '🇦🇪', name: 'UAE', label: 'Conference Hub' },
  { flag: '🇲🇾', name: 'Malaysia', label: 'ICASD 2026 Host' },
  { flag: '🇸🇬', name: 'Singapore', label: 'Research Partners' },
  { flag: '🇲🇺', name: 'Mauritius', label: 'GCSD 2026 Host' }
];

export const GlobalFootprint = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Globe Rings */}
      <div className="absolute -right-60 -top-60 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-3">Global Presence</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Academic Footprint</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Acadivate actively engages with academic institutions and research bodies across four continents.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {COUNTRIES.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: country.delay }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-gold/30 transition-all duration-500 cursor-pointer"
            >
              <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 inline-block">
                {country.flag}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{country.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                {country.desc}
              </p>
              
              <div className="space-y-3">
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${country.engagement}%` }}
                    transition={{ duration: 1.5, delay: country.delay + 0.2 }}
                    className={`h-full bg-linear-to-r ${country.color}`}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-white/30">Engagement</span>
                  <span className="text-gold">{country.engagement}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {EXTRA_COUNTRIES.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="text-2xl mb-2">{country.flag}</div>
              <div className="text-sm font-bold text-white/90 mb-1">{country.name}</div>
              <div className="text-[10px] font-medium text-white/30 uppercase tracking-wider">{country.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
