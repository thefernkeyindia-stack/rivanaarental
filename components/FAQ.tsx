'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" className="bg-ivory-100 py-24 sm:py-32">
      <div className="container-luxe max-w-3xl">
        <ScrollReveal className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-heading mt-3">Good to Know</h2>
        </ScrollReveal>

        <div className="mt-12 divide-y divide-charcoal-900/10 border-y border-charcoal-900/10">
          {faqItems.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <ScrollReveal key={item.id} delay={i * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-serif text-lg text-charcoal-950 sm:text-xl">{item.question}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-sm leading-relaxed text-charcoal-600">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
