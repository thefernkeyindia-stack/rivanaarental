import type { BookedRange } from '@/types';

/**
 * Minimal iCal (.ics) parser for Airbnb's host calendar export — just enough
 * to pull VEVENT date ranges out, no external dependency needed for a feed
 * this simple. Not a general-purpose iCal parser.
 */
export function parseIcsBookedRanges(ics: string): BookedRange[] {
  const events = ics.split('BEGIN:VEVENT').slice(1);

  return events
    .map((event): BookedRange | null => {
      const startMatch = event.match(/DTSTART;VALUE=DATE:(\d{8})/);
      const endMatch = event.match(/DTEND;VALUE=DATE:(\d{8})/);
      const summaryMatch = event.match(/SUMMARY:(.+)/);
      if (!startMatch || !endMatch) return null;

      const from = toIsoDate(startMatch[1]);
      // DTEND is exclusive per the iCal spec (the checkout/departure day) —
      // subtract a day so `to` lines up with how the calendar's disabled
      // ranges are matched elsewhere (inclusive on both ends).
      const to = toIsoDate(endMatch[1], -1);
      const label = summaryMatch?.[1].trim().startsWith('Reserved') ? 'Booked' : 'Blocked';

      return { from, to, label };
    })
    .filter((range): range is BookedRange => range !== null);
}

function toIsoDate(yyyymmdd: string, dayOffset = 0): string {
  const year = Number(yyyymmdd.slice(0, 4));
  const month = Number(yyyymmdd.slice(4, 6));
  const day = Number(yyyymmdd.slice(6, 8));
  const date = new Date(Date.UTC(year, month - 1, day + dayOffset));
  return date.toISOString().slice(0, 10);
}
