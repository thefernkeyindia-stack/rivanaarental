import type { AmenityItem } from '@/types';

/**
 * `icon` is a lucide-react component name (see components/Amenities.tsx for
 * the lookup map). Add new amenities by picking any icon from
 * https://lucide.dev/icons and adding its PascalCase name here.
 */
export const amenities: AmenityItem[] = [
  { id: 'pool', label: 'Private Infinity Pool', icon: 'Waves' },
  { id: 'wifi', label: 'High-Speed WiFi', icon: 'Wifi' },
  { id: 'ac', label: 'Climate Control', icon: 'Snowflake' },
  { id: 'chef', label: 'Private Chef Service', icon: 'ChefHat' },
  { id: 'housekeeping', label: 'Daily Housekeeping', icon: 'Sparkles' },
  { id: 'parking', label: 'Private Parking', icon: 'Car' },
  { id: 'pet', label: 'Pet Friendly', icon: 'PawPrint' },
  { id: 'security', label: '24/7 Security', icon: 'ShieldCheck' },
  { id: 'tv', label: 'Smart TV & Sound', icon: 'Tv' },
  { id: 'jacuzzi', label: 'Outdoor Jacuzzi', icon: 'Droplets' },
  { id: 'garden', label: 'Private Garden', icon: 'Trees' },
  { id: 'beach', label: 'Beach Access', icon: 'Umbrella' },
];
