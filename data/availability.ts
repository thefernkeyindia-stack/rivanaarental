import type { BookedRange } from '@/types';

/**
 * Mock availability data. Structured so it can be swapped for a real
 * booking-platform API (e.g. an iCal feed synced from Airbnb, or a
 * property-management-system endpoint) without touching the calendar UI —
 * just replace this static array with a fetched one of the same shape.
 */
export const bookedRanges: BookedRange[] = [
  { from: '2026-08-20', to: '2026-08-25', label: 'Booked' },
  { from: '2026-09-02', to: '2026-09-09', label: 'Booked' },
  { from: '2026-09-18', to: '2026-09-21', label: 'Booked' },
  { from: '2026-10-05', to: '2026-10-12', label: 'Booked' },
  { from: '2026-10-24', to: '2026-10-24', label: 'Owner block' },
  { from: '2026-11-20', to: '2026-11-30', label: 'Booked' },
  { from: '2026-12-20', to: '2027-01-03', label: 'Holiday season — booked' },
];

export const minimumStayNights = 3;
