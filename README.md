# The Fern Key

A premium, single-property luxury villa rental website for a Goa villa, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
app/                    Next.js App Router pages, layout, metadata, sitemap/robots
components/              All UI sections and shared components
  icons/                 Small hand-drawn brand glyphs (WhatsApp, Airbnb, logo mark)
config/site.ts           Single source of truth for editable site details
data/                    Mock content: gallery, testimonials, FAQ, amenities,
                          nearby attractions, availability
lib/                     Small helpers (cn, availability, wa.me link builder)
public/media/
  gallery/                Generated placeholder images (SVG)
  videos/                 Drop real video files here
scripts/generate-placeholders.mjs   Regenerates the placeholder art
```

## Editing site details (no code changes needed)

Open `config/site.ts` and update:

- `name`, `tagline`, `description`
- `airbnbListingUrl`, `whatsappPhone`, `whatsappMessage`
- `contactPhoneDisplay`, `contactEmail`, `address`
- `mapEmbedSrc` (paste a Google Maps "Embed a map" iframe `src`)
- `social` links
- `facts` (guest/bedroom/bathroom counts, size, check-in/out times)

Several of these also read from environment variables first (see
`.env.example` — copy it to `.env.local` and fill in real values), which is
handy if you don't want URLs/phone numbers committed to source control.

## Swapping in the real logo

`components/Logo.tsx` currently renders a hand-drawn line-art emblem
(`components/icons/BrandMark.tsx` — a palm, villa, and waves) next to a
script wordmark, built to evoke the brand without a source file to work
from. Once you have the real logo as an image file:

1. Drop it at `public/media/brand/logo.svg` (or `.png`).
2. In `components/Logo.tsx`, replace the `<BrandMark />` + text spans with
   an `<Image src="/media/brand/logo.svg" .../>` (or, for an SVG, inline it
   directly for crisp scaling and easy recoloring).
3. Do the same for `public/favicon.svg` and `public/media/brand/og-image.svg`
   (currently also hand-drawn) if the real logo should be used there too.

## Photos & video

`data/gallery.ts` now points at real photography of Ava Villa in
`public/media/gallery/` (Living, Bedrooms 1–6, Bathrooms 1–6, Pool,
Patio & Terrace, Games Room), and the hero banner plays a real looping
background video — `public/media/videos/hero-reel.mp4`, wired up in
`components/Hero.tsx`.

To add or swap photos:

1. Drop the new image into `public/media/gallery/`.
2. Add/update its entry in `data/gallery.ts` — `src`, real `width`/`height`
   (so the masonry grid and lightbox don't jump), `category`, and `alt`
   text. Categories are typed in `types/index.ts` (`GalleryCategory`).
3. `data/attractions.ts` and `data/testimonials.ts` still use placeholder
   SVGs for nearby attractions and guest avatars — swap those the same way
   if real photos become available.

To swap the hero video, replace `public/media/videos/hero-reel.mp4`
(keep the filename, or update the `<source>` `src` in `Hero.tsx`). A 16:9
clip, muted-friendly (no dialogue), H.264/AAC MP4 works best — that's the
one universally-supported combo across Chrome, Safari, and Firefox for
autoplay video.

The `dangerouslyAllowSVG` block in `next.config.mjs` is still needed for the
remaining SVG placeholders (avatars, attractions, brand assets) — remove it
once those are all replaced with real raster photos too.

## Availability & booking

`data/availability.ts` holds a mock array of booked date ranges. It's
intentionally shaped so it can be swapped for a real feed later — e.g. sync
an iCal export from Airbnb, or call a property-management-system API — by
replacing the static array with data fetched the same shape.

The enquiry form (`components/BookingEnquiryForm.tsx`) validates with
Zod + React Hook Form and currently "submits" via a mocked async function
(`submitEnquiry`) that just logs to the console after a short delay. Swap
that function for a real request (e.g. `fetch('/api/enquiry', { method:
'POST', ... })` backed by a Next.js Route Handler, or a third-party form
service) — the idle/submitting/success/error UI states already support it.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom palm-green / sand / gold beach-villa design system)
- Framer Motion (scroll reveals, marquee/parallax motion, page/menu transitions)
- react-day-picker (availability calendar)
- react-hook-form + zod (booking enquiry form)
- yet-another-react-lightbox (+ video plugin) for the gallery
- lucide-react for iconography

## Notes on this environment

Placeholder imagery is generated locally as SVG rather than hot-linked from
a stock photo service, so the site has no external asset dependencies and
looks polished immediately after `npm install`.
