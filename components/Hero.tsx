'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

const slides = [
  { src: '/media/gallery/hero-1.svg', alt: 'The Fern Key villa exterior in Goa' },
  { src: '/media/gallery/hero-2.svg', alt: 'Villa pool deck framed by palms' },
  { src: '/media/gallery/hero-3.svg', alt: 'Sea-facing terrace at sunset' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex h-[100svh] min-h-[560px] items-end overflow-hidden bg-charcoal-950">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {/* unoptimized: these are vector placeholders — swap for real
                photos and drop `unoptimized` to get full next/image resizing */}
            <Image
              src={slides[active].src}
              alt={slides[active].alt}
              fill
              priority={active === 0}
              sizes="100vw"
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-charcoal-950/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/55 to-charcoal-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/40" />

      <motion.div style={{ opacity }} className="container-luxe relative z-10 pb-24 pt-40 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="eyebrow text-gold-300"
        >
          Luxury Rental Stays
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl text-balance font-serif text-5xl leading-[1.05] text-ivory-100 sm:text-6xl md:text-7xl"
        >
          {siteConfig.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-xl text-balance text-base text-ivory-100/80 sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#booking" className="btn-primary">
            Check Availability
          </a>
          <a
            href={siteConfig.airbnbListingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View on Airbnb
          </a>
        </motion.div>

        <div className="mt-14 flex items-center gap-3">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === active ? 'w-10 bg-gold-400' : 'w-4 bg-ivory-100/40 hover:bg-ivory-100/70'
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#villa"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-ivory-100/70 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-widest2">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
