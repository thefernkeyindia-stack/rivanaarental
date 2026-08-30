export type GalleryCategory =
  | 'Living'
  | 'Bedrooms'
  | 'Bathrooms'
  | 'Pool'
  | 'Patio & Terrace'
  | 'Games Room';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** Short badge shown on the tile, e.g. "Bedroom 2" or "Pool". */
  label: string;
  /** Shown as the single representative tile for its category on the "All" filter. */
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  source: 'Airbnb' | 'Google' | 'Direct';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AmenityItem {
  id: string;
  label: string;
  icon: string;
}

export interface AttractionItem {
  id: string;
  name: string;
  category: string;
  distance: string;
  duration: string;
  image: string;
  description: string;
}

export interface BookedRange {
  from: string;
  to: string;
  label?: string;
}
