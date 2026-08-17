import Image from 'next/image';
import { Users, BedDouble, Bath, Ruler, Clock3 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { siteConfig } from '@/config/site';

const facts = [
  { icon: Users, label: 'Guests', value: `${siteConfig.facts.guests}` },
  { icon: BedDouble, label: 'Bedrooms', value: `${siteConfig.facts.bedrooms}` },
  { icon: Bath, label: 'Bathrooms', value: `${siteConfig.facts.bathrooms}` },
  { icon: Ruler, label: 'Property Size', value: `${siteConfig.facts.sqft.toLocaleString()} sq ft` },
  { icon: Clock3, label: 'Check-in / out', value: `${siteConfig.facts.checkIn} · ${siteConfig.facts.checkOut}` },
];

export default function AboutVilla() {
  return (
    <section id="villa" className="bg-ivory-100 py-24 sm:py-32">
      <div className="container-luxe grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <p className="eyebrow">The Villa</p>
          <h2 className="section-heading mt-3">
            A Modern Estate, <span className="italic text-gold-700">Designed to Disappear</span> Into Its Views
          </h2>
          <div className="mt-6 space-y-4 text-charcoal-700">
            <p>
              Set on a private cliffside parcel, Rivanaa Rental is a five-bedroom architectural villa built around
              uninterrupted ocean views. Warm minimalism, natural stone, and hand-selected furnishings create a
              calm, restorative backdrop for a genuinely private escape.
            </p>
            <p>
              Every room opens onto the outdoors — from the ocean-facing living pavilion to the infinity pool
              terrace — blurring the line between architecture and landscape. This is quiet luxury: understated,
              considered, and entirely yours for the duration of your stay.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon className="h-5 w-5 text-gold-600" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-medium text-charcoal-950">{value}</p>
                  <p className="text-xs uppercase tracking-wide text-charcoal-400">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/media/gallery/about-villa.svg"
              alt="Interior living pavilion of Rivanaa Rental"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              unoptimized
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
