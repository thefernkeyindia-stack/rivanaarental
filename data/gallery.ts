import type { GalleryItem } from '@/types';

/**
 * Gallery source of truth — real photography of Ava Villa. Aspect-correct
 * width/height (each image's actual pixel dimensions) keep the masonry grid
 * and lightbox from jumping on load.
 */
export const galleryItems: GalleryItem[] = [
  { id: 'living-1', category: 'Living', type: 'image', src: '/media/gallery/living-1.avif', width: 720, height: 1079, alt: 'Living room with floor-to-ceiling glass onto the terrace' },
  { id: 'living-2', category: 'Living', type: 'image', src: '/media/gallery/living-2.avif', width: 720, height: 481, alt: 'Living room seating area' },
  { id: 'living-3', category: 'Living', type: 'image', src: '/media/gallery/living-3.avif', width: 720, height: 481, alt: 'Living room, view toward the pool deck' },
  { id: 'living-4', category: 'Living', type: 'image', src: '/media/gallery/living-4.avif', width: 1200, height: 801, alt: 'Living pavilion with curated furnishings' },
  { id: 'living-5', category: 'Living', type: 'image', src: '/media/gallery/living-5.avif', width: 720, height: 481, alt: 'Living room lounge seating' },
  { id: 'living-6', category: 'Living', type: 'image', src: '/media/gallery/living-6.webp', width: 720, height: 481, alt: 'Living room, evening light' },
  { id: 'living-7', category: 'Living', type: 'image', src: '/media/gallery/living-7.avif', width: 720, height: 1079, alt: 'Living room detail' },
  { id: 'living-8', category: 'Living', type: 'image', src: '/media/gallery/living-8.avif', width: 720, height: 1079, alt: 'Living room, glass facade' },

  { id: 'bedroom-1-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-1-1.avif', width: 720, height: 481, alt: 'Bedroom 1' },
  { id: 'bedroom-1-2', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-1-2.avif', width: 720, height: 1079, alt: 'Bedroom 1, alternate view' },
  { id: 'bedroom-1-3', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-1-3.avif', width: 720, height: 481, alt: 'Bedroom 1, detail' },
  { id: 'bedroom-1-4', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-1-4.avif', width: 720, height: 1079, alt: 'Bedroom 1, natural light' },
  { id: 'bedroom-2-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-2-1.avif', width: 720, height: 481, alt: 'Bedroom 2' },
  { id: 'bedroom-2-2', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-2-2.webp', width: 720, height: 481, alt: 'Bedroom 2, alternate view' },
  { id: 'bedroom-3-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-3-1.avif', width: 1200, height: 801, alt: 'Bedroom 3' },
  { id: 'bedroom-3-2', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-3-2.avif', width: 720, height: 481, alt: 'Bedroom 3, detail' },
  { id: 'bedroom-3-3', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-3-3.avif', width: 720, height: 481, alt: 'Bedroom 3, seating nook' },
  { id: 'bedroom-3-4', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-3-4.avif', width: 720, height: 481, alt: 'Bedroom 3, alternate view' },
  { id: 'bedroom-3-5', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-3-5.avif', width: 720, height: 1079, alt: 'Bedroom 3, natural light' },
  { id: 'bedroom-3-6', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-3-6.avif', width: 720, height: 481, alt: 'Bedroom 3, en-suite view' },
  { id: 'bedroom-4-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-4-1.avif', width: 1200, height: 801, alt: 'Bedroom 4' },
  { id: 'bedroom-5-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-5-1.avif', width: 1200, height: 801, alt: 'Bedroom 5' },
  { id: 'bedroom-6-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedroom-6-1.avif', width: 1200, height: 801, alt: 'Bedroom 6' },

  { id: 'bathroom-1-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-1-1.avif', width: 1200, height: 1798, alt: 'Bathroom 1, en-suite to Bedroom 1' },
  { id: 'bathroom-2-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-2-1.avif', width: 1200, height: 801, alt: 'Bathroom 2, en-suite to Bedroom 2' },
  { id: 'bathroom-3-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-3-1.avif', width: 1200, height: 900, alt: 'Bathroom 3, en-suite to Bedroom 3' },
  { id: 'bathroom-4-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-4-1.avif', width: 1200, height: 901, alt: 'Bathroom 4, en-suite to Bedroom 4' },
  { id: 'bathroom-5-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-5-1.avif', width: 1200, height: 801, alt: 'Bathroom 5, en-suite to Bedroom 5' },
  { id: 'bathroom-6-1', category: 'Bathrooms', type: 'image', src: '/media/gallery/bathroom-6-1.avif', width: 1200, height: 801, alt: 'Bathroom 6, en-suite to Bedroom 6' },

  { id: 'pool-1', category: 'Pool', type: 'image', src: '/media/gallery/pool-1.avif', width: 1200, height: 927, alt: 'Private pool deck framed by palms' },
  { id: 'pool-2', category: 'Pool', type: 'image', src: '/media/gallery/pool-2.avif', width: 720, height: 1079, alt: 'Pool, view from the deck' },
  { id: 'pool-3', category: 'Pool', type: 'image', src: '/media/gallery/pool-3.avif', width: 720, height: 1079, alt: 'Pool, alternate angle' },

  { id: 'patio-1', category: 'Patio & Terrace', type: 'image', src: '/media/gallery/patio-1.avif', width: 720, height: 481, alt: 'Patio seating area' },
  { id: 'patio-2', category: 'Patio & Terrace', type: 'image', src: '/media/gallery/patio-2.avif', width: 720, height: 481, alt: 'Patio, alternate view' },
  { id: 'terrace-1', category: 'Patio & Terrace', type: 'image', src: '/media/gallery/terrace-1.avif', width: 720, height: 481, alt: 'Terrace' },
  { id: 'terrace-2', category: 'Patio & Terrace', type: 'image', src: '/media/gallery/terrace-2.avif', width: 720, height: 481, alt: 'Terrace, alternate view' },

  { id: 'games-room-1', category: 'Games Room', type: 'image', src: '/media/gallery/games-room-1.avif', width: 1200, height: 1600, alt: 'Games room' },
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
