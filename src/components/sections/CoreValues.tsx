'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star, Globe, Lightbulb, ArrowRight } from 'lucide-react';

const VALUES = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'Integrity',
    desc: 'Transparent, unbiased evaluations and rankings with clearly defined, data-driven methodologies.',
    color: 'bg-navy/10 text-navy',
    delay: 0.1
  },
  {
    icon: <Star size={28} />,
    title: 'Excellence',
    desc: 'Committed to the highest standards in academic research, event quality, and institutional recognition.',
    color: 'bg-gold-pale text-gold',
    delay: 0.2
  },
  {
    icon: <Globe size={28} />,
    title: 'Collaboration',
    desc: 'Building bridges across institutions, disciplines, and geographies to advance shared academic goals.',
    color: 'bg-teal-2 text-teal',
    delay: 0.3
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'Impact',
    desc: 'Every program, award, and event is designed for measurable, lasting impact on the academic community.',
    color: 'bg-indigo-100 text-indigo-600',
    delay: 0.4
  }
];

export const CoreValues = () => {
  return (
    <section className="py-24 bg-app-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-3">What Drives Us</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Our Core Values</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Every initiative we undertake is grounded in these fundamental principles that guide our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: value.delay }}
              className="group p-8 rounded-3xl bg-app-bg border border-border-light hover:bg-app-bg hover:border-gold/30 hover:shadow-sh-xl transition-all duration-500 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{value.title}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed mb-6">
                {value.desc}
              </p>
              <div className="flex items-center gap-2 text-[13px] font-bold text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                Learn more <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
