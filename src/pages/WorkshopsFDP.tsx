'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, ArrowRight, CheckCircle2, Play, Users, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

const WORKSHOPS = [
  {
    id: 1,
    title: 'Advanced Statistical Tools for Research',
    desc: 'Master SPSS, R, and AMOS for high-impact research data analysis.',
    duration: '3 Days',
    participants: '500+',
    image: 'https://picsum.photos/seed/ws1/600/400'
  },
  {
    id: 2,
    title: 'Academic Writing & Publishing',
    desc: 'Learn the secrets of getting published in Scopus and WoS indexed journals.',
    duration: '2 Days',
    participants: '1.2k+',
    image: 'https://picsum.photos/seed/ws2/600/400'
  },
  {
    id: 3,
    title: 'Digital Pedagogy in 21st Century',
    desc: 'Transform your teaching with modern digital tools and engagement strategies.',
    duration: '5 Days',
    participants: '800+',
    image: 'https://picsum.photos/seed/ws3/600/400'
  }
];

export const WorkshopsFDP = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-linear-to-r from-primary-deep to-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://picsum.photos/seed/whero/800/800" alt="Pattern" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-[2px] uppercase text-gold mb-6">
                Capacity Building
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Workshops & <span className="text-gold">FDPs</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Empowering educators and researchers through specialized Faculty Development Programmes and hands-on technical workshops.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg" className="gap-2">
                  <Play size={18} fill="currentColor" /> Watch Demo
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">Browse Courses</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-app-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureItem 
              icon={<GraduationCap size={32} />} 
              title="Expert Mentors" 
              desc="Learn from globally recognized academics and industry experts." 
            />
            <FeatureItem 
              icon={<BookOpen size={32} />} 
              title="Hands-on Training" 
              desc="Practical sessions with real-world datasets and case studies." 
            />
            <FeatureItem 
              icon={<Award size={32} />} 
              title="Certified Learning" 
              desc="Receive internationally recognized certificates upon completion." 
            />
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-24 bg-app-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Featured Programmes</h2>
            <p className="text-text-muted">Accelerate your academic career with our specialized training</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORKSHOPS.map((ws, idx) => (
              <motion.div
                key={ws.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-app-bg rounded-[2rem] overflow-hidden border border-border-light hover:shadow-sh-lg transition-all duration-500"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={ws.image} alt={ws.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-app-bg/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold text-navy shadow-sh-sm">
                    {ws.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 leading-tight group-hover:text-gold transition-colors">
                    {ws.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-8">
                    {ws.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-border-light">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-navy">
                        <Users size={14} className="text-gold" /> {ws.participants}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-navy">
                        <Clock size={14} className="text-gold" /> {ws.duration}
                      </div>
                    </div>
                    <Button variant="primary" size="sm" className="rounded-xl group/btn">
                      Enroll <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our <span className="text-gold">FDPs?</span></h2>
              <div className="space-y-6">
                {[
                  'Curriculum designed by top 1% academic experts',
                  'Interactive live sessions with Q&A',
                  'Access to exclusive research resources and tools',
                  'Networking opportunities with global peer groups',
                  'Post-workshop mentorship and support'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-white/80 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button variant="gold" size="lg" className="mt-12">Register for Next Batch</Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-[2rem] overflow-hidden shadow-sh-xl border border-white/10">
                <img src="https://picsum.photos/seed/ws-vid/800/450" alt="Workshop Video" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-gold text-navy flex items-center justify-center hover:scale-110 transition-transform shadow-sh-lg">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="text-center">
    <div className="w-16 h-16 rounded-2xl bg-gold-pale flex items-center justify-center text-gold mx-auto mb-6 shadow-sh-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
    <p className="text-text-muted leading-relaxed">{desc}</p>
  </div>
);
