import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getWhatsappUrl } from '@/lib/links';
import Logo from './Logo';
import { AirbnbIcon, WhatsappIcon } from './icons/BrandIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal-950 pt-20 text-ivory-100/80">
      <div className="container-luxe grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-ivory-100/60">
            A private luxury villa offering quiet, considered indulgence — the sanctuary your next escape deserves.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/15 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/15 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Airbnb"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-100/15 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <AirbnbIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest2 text-ivory-100/40">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-gold-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest2 text-ivory-100/40">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <a href={`tel:+${siteConfig.whatsappPhone}`} className="transition-colors hover:text-gold-400">
                {siteConfig.contactPhoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <a href={`mailto:${siteConfig.contactEmail}`} className="transition-colors hover:text-gold-400">
                {siteConfig.contactEmail}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest2 text-ivory-100/40">Book Direct</p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={siteConfig.airbnbListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory-100/15 px-4 py-2.5 text-xs transition-colors hover:border-[#FF385C]/50 hover:text-[#FF385C]"
            >
              <AirbnbIcon className="h-4 w-4" /> Check on Airbnb
            </a>
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ivory-100/15 px-4 py-2.5 text-xs transition-colors hover:border-[#25D366]/50 hover:text-[#25D366]"
            >
              <WhatsappIcon className="h-4 w-4" /> Talk to Owner
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory-100/10 py-6">
        <p className="container-luxe text-center text-xs text-ivory-100/40">
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
