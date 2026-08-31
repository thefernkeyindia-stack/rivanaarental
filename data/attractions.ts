import type { AttractionItem } from '@/types';

export const attractions: AttractionItem[] = [
  {
    id: 'attr-beach',
    name: 'Candolim Beach',
    category: 'Beach',
    distance: '8 km',
    duration: '18 min drive',
    image: '/media/gallery/attraction-beach.svg',
    description: 'A calmer, upscale North Goa beach lined with shacks and beach clubs, minutes from Fort Aguada.',
  },
  {
    id: 'attr-dining',
    name: 'Thalassa',
    category: 'Fine Dining',
    distance: '5 km',
    duration: '12 min drive',
    image: '/media/gallery/attraction-restaurant.svg',
    description: 'Cliffside Greek taverna in Vagator with sweeping sunset views over the Arabian Sea.',
  },
  {
    id: 'attr-fort',
    name: 'Chapora Fort',
    category: 'Landmark',
    distance: '6 km',
    duration: '15 min drive',
    image: '/media/gallery/attraction-marina.svg',
    description: 'A laterite hilltop fort with panoramic coastal views, best at sunset.',
  },
  {
    id: 'attr-village',
    name: 'Assagao Village',
    category: 'Culture',
    distance: '2.5 km',
    duration: '7 min drive',
    image: '/media/gallery/attraction-town.svg',
    description: 'Boutique cafés, design stores, and art galleries along quiet, palm-lined lanes.',
  },
];
