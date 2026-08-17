'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  const t = testimonials[index];

  return (
    <section id="reviews" className="bg-charcoal-950 py-24 sm:py-32">
      <div className="container-luxe">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-400">Guest Reviews</p>
          <h2 className="section-heading mt-3 text-ivory-100">Stories From Our Guests</h2>
        </ScrollReveal>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <Quote className="mx-auto h-8 w-8 text-gold-500/50" />

          <div className="relative mt-6 min-h-[220px] sm:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="mx-auto mt-5 max-w-xl text-balance font-serif text-xl italic leading-relaxed text-ivory-100 sm:text-2xl">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill unoptimized className="object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-ivory-100">{t.name}</p>
                    <p className="text-xs text-ivory-100/50">
                      {t.location} · {t.source}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => step(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/20 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-gold-400' : 'w-1.5 bg-ivory-100/30'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => step(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-100/20 text-ivory-100 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
