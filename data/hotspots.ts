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
    description: 'A top-floor suite with floor-to-ceiling glass over the treetops, a soaking tub, and a dedicated dressing room.',
    image: '/media/gallery/hotspot-master-suite.svg',
    position: [0.3, 1.7, 0.55],
  },
  {
    id: 'pool',
    label: 'Pool Deck',
    description: 'A private pool on the ground-floor deck, framed by palms — heated year-round.',
    image: '/media/gallery/hotspot-pool.svg',
    position: [0.4, -0.5, 2.1],
  },
  {
    id: 'garden-lounge',
    label: 'Garden Lounge',
    description: 'A shaded garden among mature palms — the villa’s favorite spot for sunset cocktails.',
    image: '/media/gallery/hotspot-garden-lounge.svg',
    position: [-2.4, 0.3, -1.4],
  },
  {
    id: 'kitchen',
    label: 'Chef Kitchen',
    description: 'An open, glass-fronted kitchen with a marble island, ready for your private chef or your own cooking.',
    image: '/media/gallery/hotspot-kitchen.svg',
    position: [-0.5, -0.1, 0.85],
  },
];
