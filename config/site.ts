/**
 * Central, editable configuration for The Fern Key site.
 *
 * The owner can update contact details, links and copy here without touching
 * any component code. Values fall back to `NEXT_PUBLIC_*` env vars where it
 * makes sense to keep secrets/URLs out of source control (see .env.example).
 */

export const siteConfig = {
  name: 'The Fern Key',
  legalName: 'The Fern Key Rental Stays',
  tagline: 'A Private Sanctuary on the Goa Coast',
  description:
    'The Fern Key is a private luxury villa in Goa offering cinematic sea-facing views, a pool, and quietly indulgent design — an intimate escape for discerning travelers.',
  // Use `||` (not `??`) for every fallback below: Vercel/CI can inject an
  // env var as an empty string rather than leaving it unset, and `??` only
  // falls back on null/undefined — an empty NEXT_PUBLIC_SITE_URL previously
  // reached `new URL('')` in app/layout.tsx and crashed the production build.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thefernkey.com',

  // --- Contact & booking channels -----------------------------------------
  airbnbListingUrl:
    process.env.NEXT_PUBLIC_AIRBNB_LISTING_URL || 'https://www.airbnb.com/rooms/00000000',
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '919820123456',
  whatsappMessage: "Hi, I'm interested in The Fern Key",
  contactPhoneDisplay: '+91 98201 23456',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'stay@thefernkey.com',
  address: {
    line1: 'Fern Key Villa',
    line2: 'Anjuna',
    city: 'North Goa',
    country: 'India',
  },
  mapEmbedSrc:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.0!2d73.740!3d15.5735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM0JzI0LjYiTiA3M8KwNDQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000',

  // --- Social -------------------------------------------------------------
  social: {
    instagram: 'https://instagram.com/thefernkey',
    facebook: 'https://facebook.com/thefernkey',
    airbnb: 'https://www.airbnb.com/rooms/00000000',
  },

  // --- Property facts -------------------------------------------------------
  facts: {
    guests: 8,
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 3800,
    checkIn: '2:00 PM',
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
