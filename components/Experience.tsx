import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { attractions } from '@/data/attractions';
import { siteConfig } from '@/config/site';

export default function Experience() {
  return (
    <section id="location" className="bg-ivory-100 py-24 sm:py-32">
      <div className="container-luxe">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Experience</p>
          <h2 className="section-heading mt-3">Nearby, Worth the Trip</h2>
          <p className="mt-4 text-charcoal-600">
            A short drive from the villa, curated for guests who want more than the property itself.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {attractions.map((place, i) => (
            <ScrollReveal key={place.id} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-xl bg-white shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-widest2 text-gold-600">{place.category}</p>
                  <h3 className="mt-1.5 font-serif text-lg text-charcoal-950">{place.name}</h3>
                  <p className="mt-2 text-sm text-charcoal-600">{place.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-charcoal-500">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {place.distance}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {place.duration}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-charcoal-900/10 shadow-card">
            <iframe
              title={`Map showing the location of ${siteConfig.name}`}
              src={siteConfig.mapEmbedSrc}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full grayscale-[15%]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
