'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const TEAM = [
  {
    name: 'Dr. Arjun Sharma',
    role: 'Founder & Chairman',
    desc: 'PhD in International Education Policy. 20+ years in global academic leadership.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    color: 'text-gold',
    delay: 0.1
  },
  {
    name: 'Dr. Priya Nair',
    role: 'CEO & Director',
    desc: "Expert in research innovation and global academic partnership development.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    color: 'text-teal',
    delay: 0.2
  },
  {
    name: 'Prof. Rajan Mehta',
    role: 'Head of Research',
    desc: 'Specialises in interdisciplinary research methodology and publication strategy.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    color: 'text-indigo-600',
    delay: 0.3
  },
  {
    name: 'Ms. Ananya Kapoor',
    role: 'Events & Partnerships',
    desc: 'Manages international conferences and institutional collaboration across Asia and Europe.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    color: 'text-amber-600',
    delay: 0.4
  }
];

export const LeadershipTeam = () => {
  return (
    <section className="py-24 bg-app-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-3">Leadership</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              Meet the Team Behind Acadivate
            </h2>
          </div>
          <Button variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white">
            Join Our Team
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: member.delay }}
              className="group bg-app-bg rounded-3xl overflow-hidden border border-border-light shadow-sh-sm hover:shadow-sh-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                  <SocialBtn icon={<Linkedin size={18} />} />
                  <SocialBtn icon={<Mail size={18} />} />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-navy mb-1">{member.name}</h4>
                <div className={`text-[12px] font-bold uppercase tracking-wider mb-4 ${member.color}`}>
                  {member.role}
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {member.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-bold text-navy opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  View Profile <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-navy transition-all">
    {icon}
  </button>
);
