'use client';

import * as React from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    text: "The quality of peer-reviewed sessions at ICGSD 2025 in Dubai was exceptional. The indexing pathways Acadivate provides have genuinely elevated our institution's global research visibility.",
    name: "Prof. Rashida Ahmed",
    role: "University of Kuala Lumpur · 2025 Excellence Laureate",
    avatar: "https://picsum.photos/seed/t1/80/80"
  },
  {
    text: "Manipal International University's Institutional Excellence Award from Acadivate is displayed in our main hall. It has been instrumental in our global outreach.",
    name: "Prof. David Tan",
    role: "Manipal International University · Malaysia",
    avatar: "https://picsum.photos/seed/t2/80/80"
  },
  {
    text: "Winning the Young Researcher Award from Acadivate completely transformed my career trajectory. The process was rigorous and the recognition genuine.",
    name: "Dr. Lin Wei",
    role: "Tsinghua University · Young Researcher Laureate 2025",
    avatar: "https://picsum.photos/seed/t3/80/80"
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = React.useState(0);

  return (
    <section className="py-24 bg-app-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-pale border border-gold/30 text-[9.5px] font-bold tracking-[2px] uppercase text-gold mb-4">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-4">
            Voices of Our <em className="italic font-serif">Academic Community</em>
          </h2>
          <div className="w-12 h-0.5 bg-linear-to-r from-gold to-gold-2 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-app-bg border-1.5 border-border-light rounded-3xl p-8 hover:shadow-sh-md hover:border-border-2 transition-all"
              >
                <Quote className="absolute top-6 right-6 text-gold opacity-15" size={38} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-[16.5px] font-serif italic text-navy leading-relaxed mb-8">
                  "{testi.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-border-light shrink-0">
                    <img src={testi.avatar} alt={testi.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-bold text-navy">{testi.name}</div>
                    <div className="text-[12px] text-text-muted">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-3 mt-10">
            <button className="w-10 h-10 rounded-full border-1.5 border-border-light flex items-center justify-center text-text-muted hover:border-gold hover:text-gold hover:bg-gold-pale transition-all">
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border-1.5 border-border-light flex items-center justify-center text-text-muted hover:border-gold hover:text-gold hover:bg-gold-pale transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
