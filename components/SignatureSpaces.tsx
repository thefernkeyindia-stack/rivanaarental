'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const words = [
  'Private Pool',
  'Glass-Fronted Living',
  '6 Bedrooms',
  'Sangolda, North Goa',
  'Terracotta Stone Accents',
  'Sunset Balcony',
  'Family-Sized Luxury',
];

const spaces = [
  {
    id: 'pool',
    title: 'The Pool Deck',
    description: 'A private pool framed by palms, right off the ground-floor living room.',
    image: '/media/gallery/pool-1.svg',
    featured: true,
  },
  {
    id: 'facade',
    title: 'Facade at Dusk',
    description: 'Floor-to-ceiling glass and a terracotta stone accent, lit warm at sundown.',
    image: '/media/gallery/exterior-1.svg',
  },
  {
    id: 'terrace',
    title: 'Sunset Balcony',
    description: 'The top-floor balcony catches the last light over the treetops.',
    image: '/media/gallery/views-1.svg',
  },
  {
    id: 'courtyard',
    title: 'Garden Courtyard',
    description: 'A shaded palm courtyard between the villa and the street gate.',
    image: '/media/gallery/exterior-2.svg',
  },
];

function MarqueeBand() {
  const row = (
    <span className="flex shrink-0 items-center gap-8 pr-8">
      {words.map((word) => (
        <span key={word} className="flex items-center gap-8">
          <span className="font-serif text-lg italic text-ivory-100/90 sm:text-xl">{word}</span>
          <span className="text-gold-400/60" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-ivory-100/15 py-5">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row}
        {row}
      </div>
    </div>
  );
}

export default function SignatureSpaces() {
  return (
    <section id="signature-spaces" className="overflow-hidden bg-charcoal-950 py-20 sm:py-28">
      <MarqueeBand />

      <div className="container-luxe mt-16">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-400">Signature Spaces</p>
          <h2 className="section-heading mt-3 text-ivory-100">Rooms Worth Traveling For</h2>
          <p className="mt-4 text-ivory-100/70">A closer look at the spaces that define a stay here.</p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {spaces.map((space, i) => (
            <ScrollReveal
              key={space.id}
              delay={i * 0.1}
              className={space.featured ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
            >
              <div
                className={`group relative h-full overflow-hidden rounded-2xl ${
                  space.featured ? 'aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:min-h-[420px]' : 'aspect-[4/3] lg:min-h-[200px]'
                }`}
              >
                <motion.div
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className={`font-serif text-ivory-100 ${space.featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
                    {space.title}
                  </h3>
                  <p
                    className={`mt-1.5 text-ivory-100/70 ${
                      space.featured ? 'max-w-sm text-sm' : 'text-xs'
                    } ${space.featured ? '' : 'hidden sm:block'}`}
                  >
                    {space.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
