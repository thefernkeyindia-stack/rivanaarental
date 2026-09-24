import type { BookedRange } from '@/types';

/**
 * Manually-set booked/blocked dates — kept even after the live Airbnb sync
 * (see app/api/availability/route.ts) is wired up, for dates the Airbnb
 * feed doesn't cover: e.g. owner use, maintenance, or bookings taken
 * directly rather than through Airbnb. The live feed and this list are
 * merged (see lib/availability.ts).
 *
 * Seeded below from the villa's actual Airbnb export as of 2026-09-24 —
 * update this file directly for anything not already synced automatically.
 */
export const bookedRanges: BookedRange[] = [
  { from: '2026-09-21', to: '2026-09-21', label: 'Blocked' },
  { from: '2026-10-01', to: '2026-10-03', label: 'Booked' },
  { from: '2026-10-13', to: '2026-10-17', label: 'Blocked' },
  { from: '2026-12-27', to: '2026-12-29', label: 'Blocked' },
  { from: '2026-12-30', to: '2027-01-01', label: 'Booked' },
  { from: '2027-06-20', to: '2027-09-23', label: 'Blocked' },
];

// No enforced minimum — single-night stays are bookable.
export const minimumStayNights = 1;

// Upper bound for the booking enquiry form's guest stepper. Independent of
// siteConfig.facts.guests (the villa's stated sleeping capacity shown in
// the About section) — this just caps how high the "+" button counts, for
// enquiries about larger gatherings.
export const maxBookingGuests = 20;
