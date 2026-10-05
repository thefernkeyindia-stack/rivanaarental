import type { AttractionItem } from '@/types';

export const attractions: AttractionItem[] = [
  {
    id: 'attr-beach',
    name: 'Candolim Beach',
    category: 'Beach',
    distance: '8 km',
    duration: '18 min drive',
    image: '/media/gallery/attraction-candolim-beach.webp',
    description: 'A calmer, upscale North Goa beach lined with shacks and beach clubs, minutes from Fort Aguada.',
  },
  {
    id: 'attr-dining',
    name: 'Thalassa',
    category: 'Fine Dining',
    distance: '13 km',
    duration: '25 min drive',
    image: '/media/gallery/attraction-thalassa.jpg',
    description: 'Cliffside Greek taverna in Vagator with sweeping sunset views over the Arabian Sea.',
  },
  {
    id: 'attr-fort',
    name: 'Chapora Fort',
    category: 'Landmark',
    distance: '13 km',
    duration: '25 min drive',
    image: '/media/gallery/attraction-chapora-fort.jpg',
    description: 'A laterite hilltop fort with panoramic coastal views, best at sunset.',
  },
  {
    id: 'attr-village',
    name: 'Assagao Village',
    category: 'Culture',
    distance: '10 km',
    duration: '20 min drive',
    image: '/media/gallery/attraction-assagao-village.jpg',
    description: 'Boutique cafés, design stores, and art galleries along quiet, palm-lined lanes.',
  },
];
