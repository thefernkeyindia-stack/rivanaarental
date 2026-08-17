import type { AttractionItem } from '@/types';

export const attractions: AttractionItem[] = [
  {
    id: 'attr-beach',
    name: 'Cliffside Cove Beach',
    category: 'Beach',
    distance: '0.4 mi',
    duration: '5 min walk',
    image: '/media/gallery/attraction-beach.svg',
    description: 'A quiet, powder-white cove favored by locals — steps from the villa gate.',
  },
  {
    id: 'attr-dining',
    name: 'Salt & Sail',
    category: 'Fine Dining',
    distance: '1.2 mi',
    duration: '4 min drive',
    image: '/media/gallery/attraction-restaurant.svg',
    description: 'Chef-driven seafood tasting menu with sunset terrace seating.',
  },
  {
    id: 'attr-marina',
    name: 'Harbour Point Marina',
    category: 'Marina',
    distance: '2.0 mi',
    duration: '7 min drive',
    image: '/media/gallery/attraction-marina.svg',
    description: 'Charter a private yacht or catch the sunset sail departing daily.',
  },
  {
    id: 'attr-town',
    name: 'Old Town Quarter',
    category: 'Culture',
    distance: '3.5 mi',
    duration: '12 min drive',
    image: '/media/gallery/attraction-town.svg',
    description: 'Cobblestone streets, boutique galleries, and colonial-era architecture.',
  },
];
