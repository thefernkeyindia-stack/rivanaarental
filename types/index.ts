export type GalleryCategory =
  | 'Exterior'
  | 'Interior'
  | 'Bedrooms'
  | 'Pool'
  | 'Kitchen'
  | 'Views'
  | 'Video Tour';

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
