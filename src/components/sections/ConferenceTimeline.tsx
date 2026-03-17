'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const TIMELINE = [
  {
    year: '2024',
    location: 'Thailand',
    title: 'ICGSD 2024 – Global Sustainable Development',
    desc: 'International Conference on Global Sustainable Development with participation from multiple countries and strong academic engagement. Speakers from 8 nations shared groundbreaking research findings.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    stats: [
      { label: 'Countries', value: '8' },
      { label: 'Delegates', value: '120' },
      { label: 'Papers', value: '65' }
    ]
  },
  {
    year: '2025',
    location: 'Dubai, UAE',
    title: 'ICGSD 2025 – Academic Innovation Summit',
    desc: 'Hosted at Abu Dhabi University with global delegates, keynote speakers, and indexed publication opportunities. A landmark event for cross-disciplinary academic exchange.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    stats: [
      { label: 'Countries', value: '11' },
      { label: 'Delegates', value: '210' },
      { label: 'Papers', value: '98' }
    ]
  },
  {
    year: '2026',
    location: 'Malaysia',
    title: 'ICASD 2026 – Advancing Sustainable Development',
    desc: '3rd International Conference on Advancing Sustainable Development — focusing on innovation, intelligence, and global impact. Expected 300+ delegates from 15+ countries.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    stats: [
      { label: 'Countries', value: '15+' },
      { label: 'Expected', value: '300+' },
      { label: 'Date', value: 'May 21–22' }
    ]
  }
];

export const ConferenceTimeline = () => {
  const [activeYear, setActiveYear] = React.useState('2024');
  const activeData = TIMELINE.find(t => t.year === activeYear)!;

  return (
    <section className="py-24 bg-app-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-3">Our Journey</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Conference Milestones</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Explore our growing portfolio of international academic conferences and global collaborations.
          </p>
        </div>

        {/* Year Tabs */}
        <div className="flex justify-center gap-3 mb-16">
          {TIMELINE.map((item) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold border-2 transition-all duration-300 ${
                activeYear === item.year
                  ? 'bg-linear-to-br from-navy to-navy-md text-white border-navy shadow-sh-lg scale-105'
                  : 'bg-app-bg border-border-light text-text-muted hover:border-navy hover:text-navy'
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-sh-xl aspect-video">
                <img 
                  src={activeData.image} 
                  alt={activeData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase">
                {activeData.location}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy text-[10px] font-bold tracking-[2px] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                {activeYear} · {activeData.location}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                {activeData.title}
              </h3>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                {activeData.desc}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {activeData.stats.map((stat, i) => (
                  <div key={i} className="bg-app-bg border border-border-light rounded-2xl p-5 text-center shadow-sh-sm hover:shadow-sh-md transition-shadow">
                    <div className="text-2xl font-extrabold text-navy mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  {activeYear === '2026' ? 'Register Now' : 'View Details'}
                </Button>
                <Button variant="outline" size="lg">
                  View Gallery
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
