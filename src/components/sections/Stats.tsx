'use client';

import * as React from 'react';
import { Calendar, Globe, Users, FileText, Trophy } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const STATS = [
  { icon: <Calendar size={22} />, value: 25, label: 'Conferences' },
  { icon: <Globe size={22} />, value: 12, label: 'Countries' },
  { icon: <Users size={22} />, value: 500, label: 'Global Delegates' },
  { icon: <FileText size={22} />, value: 300, label: 'Papers Presented' },
  { icon: <Trophy size={22} />, value: 33, label: 'Award Laureates' }
];

export const Stats = () => {
  return (
    <section className="py-20 bg-linear-to-r from-primary-deep via-primary-dark to-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_65%_70%_at_85%_50%,rgba(197,147,58,0.1)_0%,transparent_65%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className="text-center px-4 lg:border-r border-white/10 last:border-none"
            >
              <div className="text-white/60 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 flex justify-center items-baseline">
                <Counter value={stat.value} />
                <span className="text-gold-2 ml-1">+</span>
              </div>
              <div className="text-[11px] font-bold tracking-widest uppercase text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};
