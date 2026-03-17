'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { BookOpen, MessageSquare, Share2, ArrowRight, Star, Quote, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

const FORUMS = [
  {
    id: 1,
    title: 'Sustainability & Social Impact Forum',
    desc: 'A dedicated space for discussing the intersection of environmental policies and social equity in developing nations.',
    members: '1.2k',
    topics: 45,
    image: 'https://picsum.photos/seed/forum1/600/400'
  },
  {
    id: 2,
    title: 'Advanced Research Methodology',
    desc: 'Connecting researchers to share best practices in qualitative and quantitative data analysis and statistical tools.',
    members: '2.5k',
    topics: 128,
    image: 'https://picsum.photos/seed/forum2/600/400'
  },
  {
    id: 3,
    title: 'AI in Higher Education',
    desc: 'Exploring the transformative role of artificial intelligence in curriculum design, assessment, and student engagement.',
    members: '3.1k',
    topics: 215,
    image: 'https://picsum.photos/seed/forum3/600/400'
  }
];

export const ResearchForums = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-linear-to-br from-navy via-primary-dark to-primary overflow-hidden">
        <div className="absolute -right-48 -bottom-48 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-bold tracking-[2px] uppercase text-gold mb-6">
                Collaborative Knowledge
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Research <span className="text-gold">Forums</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Join specialized academic communities to share insights, collaborate on research projects, and engage in meaningful scholarly discourse.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="lg">Join Community</Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">Start Discussion</Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="bg-app-bg border border-border-light rounded-[2.5rem] p-8 relative z-10">
                <Quote size={48} className="text-gold/20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
                    <img src="https://picsum.photos/seed/user1/100/100" alt="User" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Dr. Sarah Jenkins</div>
                    <div className="text-white/50 text-xs">Senior Researcher, Oxford</div>
                  </div>
                </div>
                <p className="text-white/80 italic leading-relaxed mb-6">
                  "The Acadivate Research Forums have been instrumental in connecting me with co-authors for my latest sustainability project. The depth of discussion is unparalleled."
                </p>
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-full blur-3xl opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forums Grid */}
      <section className="py-24 bg-app-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Explore Communities</h2>
            <p className="text-text-muted">Find the right forum for your research discipline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FORUMS.map((forum, idx) => (
              <motion.div
                key={forum.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-app-bg rounded-[2rem] overflow-hidden border border-border-light hover:shadow-sh-lg transition-all duration-500"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={forum.image} alt={forum.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 leading-tight group-hover:text-gold transition-colors">
                    {forum.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-8">
                    {forum.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-border-light">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-navy">
                        <Users size={14} className="text-gold" /> {forum.members}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-navy">
                        <MessageSquare size={14} className="text-gold" /> {forum.topics}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary font-bold gap-2 group/btn">
                      Enter <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
