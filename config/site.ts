/**
 * Central, editable configuration for the Rivanaa Rental site.
 *
 * The owner can update contact details, links and copy here without touching
 * any component code. Values fall back to `NEXT_PUBLIC_*` env vars where it
 * makes sense to keep secrets/URLs out of source control (see .env.example).
 */

export const siteConfig = {
  name: 'Rivanaa Rental',
  legalName: 'Rivanaa Rental Villa',
  monogram: 'R',
  tagline: 'A Private Sanctuary of Modern Luxury',
  description:
    'Rivanaa Rental is a private luxury villa offering cinematic ocean views, an infinity pool, and quietly indulgent design — an intimate escape for discerning travelers.',
  // Use `||` (not `??`) for every fallback below: Vercel/CI can inject an
  // env var as an empty string rather than leaving it unset, and `??` only
  // falls back on null/undefined — an empty NEXT_PUBLIC_SITE_URL previously
  // reached `new URL('')` in app/layout.tsx and crashed the production build.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.rivanaarental.com',

  // --- Contact & booking channels -----------------------------------------
  airbnbListingUrl:
    process.env.NEXT_PUBLIC_AIRBNB_LISTING_URL || 'https://www.airbnb.com/rooms/00000000',
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '15550123456',
  whatsappMessage: "Hi, I'm interested in Rivanaa Rental",
  contactPhoneDisplay: '+1 (555) 012-3456',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'stay@rivanaarental.com',
  address: {
    line1: '27 Cliffside Cove',
    line2: 'Harbour Point',
    city: 'Nassau',
    country: 'The Bahamas',
  },
  mapEmbedSrc:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114825.7!2d-77.39!3d25.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzAwLjAiTiA3N8KwMjMnMjQuMCJX!5e0!3m2!1sen!2sus!4v1700000000000',

  // --- Social -------------------------------------------------------------
  social: {
    instagram: 'https://instagram.com/rivanaarental',
    facebook: 'https://facebook.com/rivanaarental',
    airbnb: 'https://www.airbnb.com/rooms/00000000',
  },

  // --- Property facts -------------------------------------------------------
  facts: {
    guests: 10,
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 6200,
    checkIn: '3:00 PM',
    checkOut: '11:00 AM',
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'The Villa', href: '#villa' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
