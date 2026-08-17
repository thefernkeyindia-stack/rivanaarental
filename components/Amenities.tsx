import {
  Waves,
  Wifi,
  Snowflake,
  ChefHat,
  Sparkles,
  Car,
  PawPrint,
  ShieldCheck,
  Tv,
  Droplets,
  Trees,
  Umbrella,
  type LucideIcon,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { amenities } from '@/data/amenities';

const ICONS: Record<string, LucideIcon> = {
  Waves,
  Wifi,
  Snowflake,
  ChefHat,
  Sparkles,
  Car,
  PawPrint,
  ShieldCheck,
  Tv,
  Droplets,
  Trees,
  Umbrella,
};

export default function Amenities() {
  return (
    <section id="amenities" className="bg-charcoal-950 py-24 sm:py-32">
      <div className="container-luxe">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-400">Amenities</p>
          <h2 className="section-heading mt-3 text-ivory-100">Everything, Effortlessly</h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((amenity, i) => {
            const Icon = ICONS[amenity.icon] ?? Sparkles;
            return (
              <ScrollReveal key={amenity.id} delay={(i % 4) * 0.06}>
                <div className="group flex h-full flex-col items-start gap-4 rounded-xl border border-ivory-100/10 bg-ivory-100/[0.03] p-6 transition-colors duration-300 hover:border-gold-500/40 hover:bg-ivory-100/[0.06]">
                  <Icon className="h-6 w-6 text-gold-400 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  <p className="text-sm text-ivory-100/90">{amenity.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
