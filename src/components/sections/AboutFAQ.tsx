'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const FAQS = [
  {
    q: 'What is Acadivate Research and Innovation Foundation?',
    a: 'Acadivate Research and Innovation Foundation (ARIF) is a globally oriented academic organisation that promotes research excellence, academic rankings, international conferences, publication pathways, and recognition programs for institutions, scholars, and professionals worldwide.'
  },
  {
    q: 'How can my institution apply for a ranking?',
    a: 'Institutions can apply for an Acadivate ranking by completing the application form on our website. The process involves submitting institutional data across research output, teaching quality, global engagement, and innovation metrics. Our evaluation team reviews submissions based on our published methodology.'
  },
  {
    q: 'Are Acadivate conference papers indexed?',
    a: "Yes. Selected papers from Acadivate conferences are submitted for consideration in Scopus and Web of Science (WoS) indexed journals. Authors can also submit extended versions of their conference papers to Acadivate's partner publication channels."
  },
  {
    q: 'How can I nominate for an Acadivate award?',
    a: 'Nominations for Acadivate awards can be submitted via the awards page on our website. Self-nominations and institutional nominations are both accepted. Selection is based on a merit-driven evaluation by our expert academic jury across 33 award categories.'
  },
  {
    q: 'Does Acadivate partner with international universities?',
    a: 'Absolutely. Acadivate actively partners with universities, research institutions, and academic bodies globally. Past host universities include Abu Dhabi University (UAE) and Manipal University (Malaysia). Institutions interested in partnership can contact us through the Partner With Us form.'
  }
];

export const AboutFAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 bg-app-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-3">Common Questions</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full flex items-center justify-between p-6 text-left rounded-2xl border-2 transition-all duration-300",
                  openIndex === i 
                    ? "bg-app-bg border-navy shadow-sh-md" 
                    : "bg-app-bg border-border-light hover:border-navy/30"
                )}
              >
                <span className="font-bold text-navy text-lg pr-8">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={cn(
                    "text-text-muted transition-transform duration-300 shrink-0",
                    openIndex === i && "rotate-180 text-navy"
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-text-muted leading-relaxed text-[15px]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
