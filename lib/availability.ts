import { bookedRanges } from '@/data/availability';

/** Booked date ranges as JS Dates, for react-day-picker's disabled/modifiers matchers. */
export function getBookedDateRanges() {
  return bookedRanges.map((range) => ({
    from: new Date(`${range.from}T00:00:00`),
    to: new Date(`${range.to}T00:00:00`),
  }));
}

export function isDateBooked(date: Date) {
  return getBookedDateRanges().some((range) => date >= range.from && date <= range.to);
}
