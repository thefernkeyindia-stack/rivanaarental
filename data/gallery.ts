import type { GalleryItem } from '@/types';

/**
 * Gallery source of truth. Replace the `src` paths with real photography or
 * video once available — drop files into public/media/gallery (images) or
 * public/media/videos (video) and update the paths below. Aspect-correct
 * width/height keep the masonry grid and lightbox from jumping on load.
 */
export const galleryItems: GalleryItem[] = [
  { id: 'ext-1', category: 'Exterior', type: 'image', src: '/media/gallery/exterior-1.svg', width: 1200, height: 900, alt: 'Villa exterior facade at golden hour' },
  { id: 'ext-2', category: 'Exterior', type: 'image', src: '/media/gallery/exterior-2.svg', width: 1200, height: 1500, alt: 'Villa entrance courtyard' },
  { id: 'ext-3', category: 'Exterior', type: 'image', src: '/media/gallery/exterior-3.svg', width: 1200, height: 900, alt: 'Villa exterior night lighting' },

  { id: 'int-1', category: 'Interior', type: 'image', src: '/media/gallery/interior-1.svg', width: 1200, height: 900, alt: 'Living pavilion with ocean view' },
  { id: 'int-2', category: 'Interior', type: 'image', src: '/media/gallery/interior-2.svg', width: 1200, height: 1500, alt: 'Formal dining space' },
  { id: 'int-3', category: 'Interior', type: 'image', src: '/media/gallery/interior-3.svg', width: 1200, height: 900, alt: 'Lounge with curated furnishings' },

  { id: 'bed-1', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedrooms-1.svg', width: 1200, height: 900, alt: 'Master suite with ocean-facing bed' },
  { id: 'bed-2', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedrooms-2.svg', width: 1200, height: 1500, alt: 'Guest suite with private terrace' },
  { id: 'bed-3', category: 'Bedrooms', type: 'image', src: '/media/gallery/bedrooms-3.svg', width: 1200, height: 900, alt: 'Junior suite with garden view' },

  { id: 'pool-1', category: 'Pool', type: 'image', src: '/media/gallery/pool-1.svg', width: 1200, height: 900, alt: 'Private pool deck framed by palms' },
  { id: 'pool-2', category: 'Pool', type: 'image', src: '/media/gallery/pool-2.svg', width: 1200, height: 1500, alt: 'Pool deck loungers at sunset' },
  { id: 'pool-3', category: 'Pool', type: 'image', src: '/media/gallery/pool-3.svg', width: 1200, height: 900, alt: 'Pool illuminated at night' },

  { id: 'kit-1', category: 'Kitchen', type: 'image', src: '/media/gallery/kitchen-1.svg', width: 1200, height: 900, alt: 'Chef kitchen with marble island' },
  { id: 'kit-2', category: 'Kitchen', type: 'image', src: '/media/gallery/kitchen-2.svg', width: 1200, height: 1500, alt: 'Outdoor dining and grill station' },

  { id: 'view-1', category: 'Views', type: 'image', src: '/media/gallery/views-1.svg', width: 1200, height: 900, alt: 'Panoramic coastline view from the terrace' },
  { id: 'view-2', category: 'Views', type: 'image', src: '/media/gallery/views-2.svg', width: 1200, height: 1500, alt: 'Sunset view from the rooftop deck' },

  {
    id: 'video-1',
    category: 'Video Tour',
    type: 'video',
    // Drop a real MP4 at this path (public/media/videos/villa-tour.mp4) to
    // enable in-lightbox playback. Until then the poster image is shown.
    src: '/media/videos/villa-tour.mp4',
    poster: '/media/gallery/video-tour-poster.svg',
    width: 1600,
    height: 900,
    alt: 'Villa video walkthrough',
    caption: 'Full walkthrough — 3 min',
  },
];

export const galleryCategories = [
  'All',
  'Exterior',
  'Interior',
  'Bedrooms',
  'Pool',
  'Kitchen',
  'Views',
  'Video Tour',
] as const;
