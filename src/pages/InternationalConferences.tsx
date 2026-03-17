'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Globe, Users, Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';

const CONFERENCES = [
  {
    id: 1,
    title: 'ICASD 2026 — International Scientific Conference',
    desc: 'Join our call for papers international conference to present your work and network with global experts in Kuala Lumpur.',
    date: '21 May 2026',
    location: 'Kuala Lumpur, Malaysia',
    image: 'https://picsum.photos/seed/conf1/600/400',
    slug: 'icas-2026'
  },
  {
    id: 2,
    title: 'ICGSD 2025 — Academic Innovation Summit',
    desc: 'Global academic summit at Abu Dhabi University with keynote speakers, institutional leaders, and indexed publication opportunities.',
    date: '22 July 2025',
    location: 'Dubai, UAE',
    image: 'https://picsum.photos/seed/conf2/600/400',
    slug: 'icgsd-2025'
  },
  {
    id: 3,
    title: 'Global Research Forum 2026',
    desc: 'A premier gathering of researchers focusing on interdisciplinary studies and sustainable development goals.',
    date: '15 August 2026',
    location: 'Singapore',
    image: 'https://picsum.photos/seed/conf3/600/400',
    slug: 'grf-2026'
  }
];

export const InternationalConferences = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/confhero/1920/1080" alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-b from-navy via-navy/80 to-navy" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-bold tracking-[2px] uppercase text-gold mb-6">
              Global Academic Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              International <span className="text-gold">Conferences</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Connecting scholars, researchers, and industry leaders through world-class academic gatherings across the globe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg">Submit Abstract</Button>
              <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">View Calendar</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-app-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFERENCES.map((conf, idx) => (
              <motion.div
                key={conf.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-app-bg rounded-[2rem] overflow-hidden border border-border-light hover:shadow-sh-lg transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={conf.image} alt={conf.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy/60 border border-white/20 backdrop-blur-md text-[9px] font-bold tracking-wider uppercase text-white">
                    Conference
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-[11px] font-bold text-text-muted uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-gold" /> {conf.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gold" /> {conf.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 leading-tight group-hover:text-gold transition-colors">
                    {conf.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-8 line-clamp-3">
                    {conf.desc}
                  </p>
                  <Link href={`/events/${conf.slug}`}>
                    <Button variant="primary" className="w-full rounded-xl group/btn">
                      Learn More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
