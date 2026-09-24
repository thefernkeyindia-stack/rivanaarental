import { bookedRanges } from '@/data/availability';
import type { BookedRange } from '@/types';

function toDateRange(range: BookedRange) {
  return {
    from: new Date(`${range.from}T00:00:00`),
    to: new Date(`${range.to}T00:00:00`),
  };
}

/** Manual/static booked date ranges as JS Dates, for react-day-picker's disabled/modifiers matchers. */
export function getBookedDateRanges() {
  return bookedRanges.map(toDateRange);
}

/** Combines the manual ranges with ones fetched live from the Airbnb sync API (see app/api/availability). */
export function mergeBookedDateRanges(liveRanges: BookedRange[]) {
  return [...bookedRanges, ...liveRanges].map(toDateRange);
}

export function isDateBooked(date: Date) {
  return getBookedDateRanges().some((range) => date >= range.from && date <= range.to);
}
