import type { AttractionItem } from '@/types';

export const attractions: AttractionItem[] = [
  {
    id: 'attr-beach',
    name: 'Anjuna Beach',
    category: 'Beach',
    distance: '3.5 km',
    duration: '10 min drive',
    image: '/media/gallery/attraction-beach.svg',
    description: 'Iconic North Goa beach with the famous Wednesday flea market and beach shacks.',
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
