import type { GalleryItem } from '@/types';

/**
 * Gallery source of truth — real photography of Ava Villa, sourced from the
 * owner's rental brochure. Aspect-correct width/height (each image's actual
 * pixel dimensions) keep the masonry grid and lightbox from jumping on load.
 * `label` is the on-image badge; exactly one item per category is
 * `featured`, used as that category's tile on the "All" filter.
 */
export const galleryItems: GalleryItem[] = [
  { id: 'living-1', category: 'Living', type: 'image', src: '/media/gallery/living-1.webp', width: 955, height: 1400, alt: 'Double-height living room with floor-to-ceiling glass and open staircase', label: 'Living Room', featured: true },
  { id: 'living-2', category: 'Living', type: 'image', src: '/media/gallery/living-2.webp', width: 1059, height: 1400, alt: 'Double-height living room, sunrise light through the glass facade', label: 'Living Room' },
  { id: 'living-3', category: 'Living', type: 'image', src: '/media/gallery/living-3.webp', width: 1400, height: 969, alt: 'Living room seating area opening onto the terrace', label: 'Living Room' },
  { id: 'living-4', category: 'Living', type: 'image', src: '/media/gallery/living-4.webp', width: 1400, height: 1013, alt: 'Living room, aerial view toward the terrace loungers', label: 'Living Room' },
  { id: 'living-5', category: 'Living', type: 'image', src: '/media/gallery/living-5.webp', width: 1212, height: 1400, alt: 'Open dining and kitchen area', label: 'Dining & Kitchen' },

  { id: 'bedroom-1-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-1-1.webp', width: 1400, height: 1039, alt: 'Bedroom 1, four-poster bed', label: 'Bedroom 1', featured: true },
  { id: 'bedroom-2-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-2-1.webp', width: 1400, height: 969, alt: 'Bedroom 2, four-poster bed with floral headboard', label: 'Bedroom 2' },
  { id: 'bedroom-3-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-3-1.webp', width: 1400, height: 969, alt: 'Bedroom 3, four-poster bed and wardrobe', label: 'Bedroom 3' },
  { id: 'bedroom-4-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-4-1.webp', width: 1400, height: 926, alt: 'Bedroom 4, canopy bed and sitting area', label: 'Bedroom 4' },
  { id: 'bedroom-5-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-5-1.webp', width: 1400, height: 946, alt: 'Bedroom 5, four-poster bed with balcony access', label: 'Bedroom 5' },
  { id: 'bedroom-6-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-6-1.webp', width: 1400, height: 875, alt: 'Bedroom 6, rattan headboard bed', label: 'Bedroom 6' },

  { id: 'bathroom-1-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-1-1.webp', width: 1151, height: 722, alt: 'Bathroom 1, freestanding stone soaking tub', label: 'Bathroom 1', featured: true },
  { id: 'bathroom-4-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-4-1.webp', width: 1400, height: 916, alt: 'Bathroom 4, freestanding soaking tub', label: 'Bathroom 4' },

  { id: 'pool-1', category: 'Pool', type: 'image', src: '/media/gallery/pool-1.webp', width: 1083, height: 1400, alt: 'Private infinity pool facing dense greenery, aerial view', label: 'Pool', featured: true },

  { id: 'terrace-1', category: 'Patio & Terrace', type: 'image', src: '/media/gallery/terrace-1.webp', width: 1400, height: 847, alt: 'Terrace lounge seating at sunset', label: 'Terrace', featured: true },
  { id: 'terrace-2', category: 'Patio & Terrace', type: 'image', src: '/media/gallery/terrace-2.webp', width: 1189, height: 779, alt: 'Rooftop terrace lounge', label: 'Terrace' },
  { id: 'terrace-3', category: 'Patio & Terrace', type: 'image', src: '/media/gallery/terrace-3.webp', width: 926, height: 1400, alt: 'Terrace staircase landing with garden views', label: 'Terrace' },

  { id: 'games-room-1', category: 'Games Room', type: 'image', src: '/media/gallery/games-room-1.webp', width: 1400, height: 857, alt: 'Games room with pool table and carom board', label: 'Pool Table & Carom', featured: true },
  { id: 'games-room-2', category: 'Games Room', type: 'image', src: '/media/gallery/games-room-2.webp', width: 1400, height: 893, alt: 'Lounge and entertainment room', label: 'Lounge' },
];

export const galleryCategories = [
  'All',
  'Living',
  'Bedrooms',
  'Bathrooms',
  'Pool',
  'Patio & Terrace',
  'Games Room',
] as const;
