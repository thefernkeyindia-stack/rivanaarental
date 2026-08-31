'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-[max(100svh,560px)] items-end overflow-hidden bg-charcoal-950"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/gallery/hero-1.svg"
          className="h-full w-full object-cover"
          aria-hidden
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/media/videos/hero-reel.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* No tint/gradient over the video at all — legibility comes purely
          from a single, soft drop shadow on the text itself. */}

      <motion.div
        style={{ opacity }}
        className="container-luxe relative z-10 pb-16 pt-28 [text-shadow:0_2px_6px_rgba(0,0,0,0.55),0_8px_28px_rgba(0,0,0,0.4)] sm:pb-24 sm:pt-32 lg:pt-40"
      >
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
          className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-[1.1] text-ivory-100 sm:text-6xl sm:leading-[1.05] md:text-7xl"
        >
          {siteConfig.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-xl text-balance text-base text-ivory-100/90 sm:text-lg"
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
