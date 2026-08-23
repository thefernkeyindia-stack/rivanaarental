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
    process.env.NEXT_PUBLIC_AIRBNB_LISTING_URL ||
    'https://www.airbnb.co.in/rooms/1749125444674594460?guests=1&adults=1&s=67&unique_share_id=674af636-93ce-4bef-9163-393de6c4d0f7',
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '919820956888',
  whatsappMessage: "Hi, I'm interested in The Fern Key",
  contactPhoneDisplay: '+91 98209 56888',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'thefernkeyindia@gmail.com',
  address: {
    line1: 'Ava Villa',
    line2: 'Sangolda',
    city: 'North Goa',
    country: 'India',
  },
  // No-API-key embeddable Google Maps URL, built from the villa's actual
  // coordinates (Sangolda, Porvorim, North Goa 403501).
  mapEmbedSrc:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
    'https://www.google.com/maps?q=15.5432353,73.8176067&z=16&output=embed',

  // --- Social -------------------------------------------------------------
  social: {
    instagram: 'https://instagram.com/thefernkey',
    facebook: 'https://facebook.com/thefernkey',
    airbnb:
      'https://www.airbnb.co.in/rooms/1749125444674594460?guests=1&adults=1&s=67&unique_share_id=674af636-93ce-4bef-9163-393de6c4d0f7',
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
