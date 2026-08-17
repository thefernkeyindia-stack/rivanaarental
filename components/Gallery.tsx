'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';
import { Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { galleryCategories, galleryItems } from '@/data/gallery';
import { cn } from '@/lib/utils';

export default function Gallery() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>('All');
  const [index, setIndex] = useState(-1);

  const filtered = useMemo(
    () => (category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category],
  );

  const slides = useMemo(
    () =>
      filtered.map((item) =>
        item.type === 'video'
          ? {
              type: 'video' as const,
              width: item.width,
              height: item.height,
              poster: item.poster,
              sources: [{ src: item.src, type: 'video/mp4' }],
            }
          : { src: item.src, alt: item.alt, width: item.width, height: item.height },
      ),
    [filtered],
  );

  return (
    <section id="gallery" className="bg-ivory-100 py-24 sm:py-32">
      <div className="container-luxe">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Gallery</p>
          <h2 className="section-heading mt-3">Every Angle, In Detail</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors duration-300',
                category === cat
                  ? 'border-charcoal-950 bg-charcoal-950 text-ivory-100'
                  : 'border-charcoal-900/15 text-charcoal-700 hover:border-gold-500 hover:text-gold-700',
              )}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl bg-charcoal-900 shadow-card"
              style={{ breakInside: 'avoid' }}
              aria-label={`Open ${item.alt} in lightbox`}
            >
              <div className="relative w-full" style={{ aspectRatio: `${item.width} / ${item.height}` }}>
                <Image
                  src={item.type === 'video' ? item.poster ?? item.src : item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  unoptimized
                  className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/0 transition-colors duration-300 group-hover:bg-charcoal-950/20" />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory-100/90 text-charcoal-950 shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Video]}
        styles={{ container: { backgroundColor: 'rgba(11, 10, 9, 0.96)' } }}
      />
    </section>
  );
}
