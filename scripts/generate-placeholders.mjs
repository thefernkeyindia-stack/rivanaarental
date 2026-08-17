#!/usr/bin/env node
/**
 * Generates elegant, on-brand SVG placeholder imagery so the site runs and
 * looks polished before real villa photography/video is available.
 *
 * Run: npm run generate:placeholders
 *
 * Swap for real assets later by dropping files with matching names into
 * public/media/** (jpg/png/webp/mp4 all work) and updating the paths in
 * the corresponding data/*.ts file. See README.md for details.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public', 'media');

const PALETTE = {
  charcoal: '#141312',
  charcoalDeep: '#0b0a09',
  ivory: '#f7f3ec',
  gold: '#b78a4a',
  goldLight: '#e4cb98',
  olive: '#6b6b4d',
};

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Builds a cinematic gradient placeholder with a subtle grid texture,
 * a centered serif label, and a small monogram mark — standing in for a
 * real photograph until one is supplied.
 */
function sceneSvg({
  width,
  height,
  label,
  sublabel = 'RIVANAA RENTAL',
  from = PALETTE.charcoal,
  to = PALETTE.charcoalDeep,
  accent = PALETTE.gold,
  id,
  // Fraction of height where the label sits. Default centers it; hero
  // slides push it near the top so it never collides with real page copy
  // (the H1/tagline/CTAs that sit over the lower two-thirds of the hero).
  labelY = 0.5,
  labelOpacity = 0.9,
}) {
  const fontSize = Math.max(22, Math.min(width, height) * 0.055);
  const subFontSize = fontSize * 0.32;
  const textY = height * labelY;
  const lineCount = 6;
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const y = (height / (lineCount + 1)) * (i + 1);
    return `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${accent}" stroke-opacity="0.05" stroke-width="1"/>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="glow-${id}" cx="50%" cy="35%" r="75%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad-${id})"/>
  <rect width="${width}" height="${height}" fill="url(#glow-${id})"/>
  ${lines}
  <rect x="0" y="0" width="${width}" height="${height}" fill="none" stroke="${accent}" stroke-opacity="0.35" stroke-width="1"/>
  <g opacity="${labelOpacity}" font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="${width / 2}" y="${textY}" fill="${PALETTE.ivory}" font-size="${fontSize}" letter-spacing="2">${escapeXml(
      label,
    )}</text>
    <text x="${width / 2}" y="${textY + fontSize * 0.9}" fill="${accent}" font-family="Helvetica, Arial, sans-serif" font-size="${subFontSize}" letter-spacing="6">${escapeXml(
      sublabel,
    )}</text>
  </g>
  <g opacity="0.75">
    <circle cx="${width - 46}" cy="46" r="22" fill="none" stroke="${accent}" stroke-width="1"/>
    <text x="${width - 46}" y="53" fill="${accent}" font-family="Georgia, serif" font-size="20" text-anchor="middle">R</text>
  </g>
</svg>`;
}

function avatarSvg({ initials, id, accent = PALETTE.gold }) {
  const size = 200;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="ag-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${PALETTE.charcoal}"/>
      <stop offset="100%" stop-color="${PALETTE.charcoalDeep}"/>
    </linearGradient>
  </defs>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="url(#ag-${id})" stroke="${accent}" stroke-opacity="0.4"/>
  <text x="50%" y="53%" fill="${PALETTE.ivory}" font-family="Georgia, serif" font-size="64" text-anchor="middle" dominant-baseline="middle">${escapeXml(
    initials,
  )}</text>
</svg>`;
}

function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${PALETTE.charcoal}"/>
  <text x="32" y="42" fill="${PALETTE.gold}" font-family="Georgia, serif" font-size="34" text-anchor="middle">R</text>
</svg>`;
}

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, 'utf8');
  console.log('wrote', path.replace(join(__dirname, '..') + '/', ''));
}

// --- Hero slides -----------------------------------------------------------
[
  { id: 'hero-1', label: 'Villa Exterior at Dusk', from: PALETTE.charcoal, to: PALETTE.charcoalDeep },
  { id: 'hero-2', label: 'The Infinity Pool', from: '#101414', to: PALETTE.charcoalDeep, accent: PALETTE.gold },
  { id: 'hero-3', label: 'Ocean-View Terrace', from: PALETTE.charcoal, to: '#1a1611', accent: PALETTE.goldLight },
].forEach(({ id, ...rest }) =>
  write(
    join(PUBLIC, 'gallery', `${id}.svg`),
    sceneSvg({ width: 1920, height: 1080, id, labelY: 0.16, labelOpacity: 0.45, ...rest }),
  ),
);

// --- About section -----------------------------------------------------------
write(
  join(PUBLIC, 'gallery', 'about-villa.svg'),
  sceneSvg({ width: 1200, height: 1500, id: 'about', label: 'Living Pavilion', from: PALETTE.charcoal, to: '#1c1712' }),
);

// --- Gallery grid ------------------------------------------------------------
const galleryPlan = [
  ['exterior', 'Exterior', 3],
  ['interior', 'Interior', 3],
  ['bedrooms', 'Bedrooms', 3],
  ['pool', 'Pool', 3],
  ['kitchen', 'Kitchen', 2],
  ['views', 'Views', 2],
];
galleryPlan.forEach(([slug, label, count]) => {
  for (let i = 1; i <= count; i += 1) {
    write(
      join(PUBLIC, 'gallery', `${slug}-${i}.svg`),
      sceneSvg({
        width: 1200,
        height: i % 2 === 0 ? 1500 : 900,
        id: `${slug}-${i}`,
        label: `${label} ${i}`,
        from: PALETTE.charcoal,
        to: '#1a1712',
      }),
    );
  }
});

write(
  join(PUBLIC, 'gallery', 'video-tour-poster.svg'),
  sceneSvg({ width: 1600, height: 900, id: 'video-poster', label: 'Villa Video Tour', from: '#161311', to: PALETTE.charcoalDeep }),
);

// --- 3D hotspot thumbnails -----------------------------------------------
[
  ['hotspot-master-suite', 'Master Suite'],
  ['hotspot-infinity-pool', 'Infinity Pool'],
  ['hotspot-garden-lounge', 'Garden Lounge'],
  ['hotspot-kitchen', 'Chef Kitchen'],
].forEach(([id, label]) =>
  write(join(PUBLIC, 'gallery', `${id}.svg`), sceneSvg({ width: 640, height: 480, id, label, from: PALETTE.charcoal, to: '#1a1611' })),
);

// --- 360 fallback frames for low-power devices -----------------------------
for (let i = 1; i <= 8; i += 1) {
  write(
    join(PUBLIC, 'gallery', `villa-360-${i}.svg`),
    sceneSvg({ width: 1600, height: 1000, id: `360-${i}`, label: `360° View ${i} / 8`, from: PALETTE.charcoal, to: '#1a1611' }),
  );
}

// --- Testimonial avatars ------------------------------------------------------
[
  ['avatar-1', 'JM'],
  ['avatar-2', 'AS'],
  ['avatar-3', 'CL'],
  ['avatar-4', 'RK'],
  ['avatar-5', 'ET'],
  ['avatar-6', 'NB'],
].forEach(([id, initials]) => write(join(PUBLIC, 'gallery', `${id}.svg`), avatarSvg({ id, initials })));

// --- Attractions --------------------------------------------------------------
[
  ['attraction-beach', 'Private Beach Cove'],
  ['attraction-restaurant', 'Seaside Fine Dining'],
  ['attraction-marina', 'Harbour Marina'],
  ['attraction-town', 'Historic Old Town'],
].forEach(([id, label]) =>
  write(join(PUBLIC, 'gallery', `${id}.svg`), sceneSvg({ width: 800, height: 600, id, label, from: PALETTE.charcoal, to: '#1a1712' })),
);

// --- OG image -------------------------------------------------------------
write(
  join(PUBLIC, 'brand', 'og-image.svg'),
  sceneSvg({
    width: 1200,
    height: 630,
    id: 'og',
    label: 'Rivanaa Rental',
    sublabel: 'A PRIVATE SANCTUARY OF MODERN LUXURY',
    from: PALETTE.charcoal,
    to: PALETTE.charcoalDeep,
  }),
);

// --- Favicon ----------------------------------------------------------------
write(join(PUBLIC, '..', 'favicon.svg'), faviconSvg());

console.log('\nPlaceholder media generated. Replace files in public/media/** with real photography whenever ready.');
