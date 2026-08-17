import type { Hotspot } from '@/types';

/**
 * Hotspot positions are 3D coordinates ([x, y, z]) placed relative to the
 * procedural villa model's origin (see components/VillaModel3D.tsx). If you
 * swap in a real .glb model, re-plot these coordinates to match the new
 * model's scale/origin — the easiest way is to temporarily render axis
 * helpers and nudge the numbers until each marker sits on the right spot.
 */
export const hotspots: Hotspot[] = [
  {
    id: 'master-suite',
    label: 'Master Suite',
    description: 'A private wing with ocean-facing floor-to-ceiling glass, a soaking tub, and a dedicated dressing room.',
    image: '/media/gallery/hotspot-master-suite.svg',
    position: [-1.6, 1.35, 0.9],
  },
  {
    id: 'infinity-pool',
    label: 'Infinity Pool',
    description: 'A 16-meter infinity-edge pool that appears to spill into the horizon, heated year-round.',
    image: '/media/gallery/hotspot-infinity-pool.svg',
    position: [2.1, 0.12, 1.8],
  },
  {
    id: 'garden-lounge',
    label: 'Garden Lounge',
    description: 'A shaded outdoor lounge among mature palms — the villa’s favorite spot for sunset cocktails.',
    image: '/media/gallery/hotspot-garden-lounge.svg',
    position: [-2.0, 0.55, -1.6],
  },
  {
    id: 'kitchen',
    label: 'Chef Kitchen',
    description: 'A fully equipped chef kitchen with a marble island, ready for your private chef or your own cooking.',
    image: '/media/gallery/hotspot-kitchen.svg',
    position: [0.4, 1.05, -1.9],
  },
];
