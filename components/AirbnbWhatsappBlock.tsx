import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getWhatsappUrl } from '@/lib/links';
import { AirbnbIcon, WhatsappIcon } from './icons/BrandIcons';

export default function AirbnbWhatsappBlock() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <a
        href={siteConfig.airbnbListingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 rounded-2xl border border-charcoal-900/10 bg-white px-6 py-5 shadow-card transition-colors duration-300 hover:border-[#FF385C]/40"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF385C]/10 text-[#FF385C]">
            <AirbnbIcon className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-sm font-medium text-charcoal-950">Check on Airbnb</span>
            <span className="block text-xs text-charcoal-500">Live availability &amp; instant booking</span>
          </span>
        </span>
        <ArrowUpRight className="h-4 w-4 text-charcoal-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF385C]" />
      </a>

      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 rounded-2xl border border-charcoal-900/10 bg-white px-6 py-5 shadow-card transition-colors duration-300 hover:border-[#25D366]/50"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#128C4A]">
            <WhatsappIcon className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-sm font-medium text-charcoal-950">Talk to Owner</span>
            <span className="block text-xs text-charcoal-500">Chat directly on WhatsApp</span>
          </span>
        </span>
        <ArrowUpRight className="h-4 w-4 text-charcoal-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#128C4A]" />
      </a>
    </div>
  );
}
