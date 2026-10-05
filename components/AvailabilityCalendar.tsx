'use client';

import { useEffect, useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Minus, Plus, Users } from 'lucide-react';
import { getBookedDateRanges, mergeBookedDateRanges } from '@/lib/availability';
import { minimumStayNights, maxBookingGuests } from '@/data/availability';
import type { BookedRange } from '@/types';
import { siteConfig } from '@/config/site';

interface Props {
  range: DateRange | undefined;
  onRangeChange: (range: DateRange | undefined) => void;
  guests: number;
  onGuestsChange: (guests: number) => void;
}

export default function AvailabilityCalendar({ range, onRangeChange, guests, onGuestsChange }: Props) {
  // Starts with the manual/static dates, then layers in the live Airbnb
  // feed once it loads (app/api/availability) — falls back silently to the
  // static list alone if that fetch fails or isn't configured.
  const [bookedRanges, setBookedRanges] = useState(() => getBookedDateRanges());
  useEffect(() => {
    fetch('/api/availability')
      .then((res) => res.json())
      .then((data: { ranges: BookedRange[]; synced: boolean }) => {
        if (data.synced && data.ranges.length > 0) {
          setBookedRanges(mergeBookedDateRanges(data.ranges));
        }
      })
      .catch(() => {
        // Keep the static fallback already in state.
      });
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // The booking card sits in a 2-column grid from `lg` (1024px) up, which
  // actually makes its column narrower than the full-width card below
  // that breakpoint — so a 2-month calendar has room to breathe only once
  // the page's max-width container caps out (container-luxe: max-w-8xl =
  // 1440px, giving each column enough width). Below that — including the
  // 1024-1439px range where the grid has already split into two narrow
  // columns — a single month avoids the calendar overflowing its card.
  const [numberOfMonths, setNumberOfMonths] = useState(1);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1440px)');
    const update = () => setNumberOfMonths(mq.matches ? 2 : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <DayPicker
          mode="range"
          numberOfMonths={numberOfMonths}
          pagedNavigation
          selected={range}
          onSelect={onRangeChange}
          // react-day-picker's `min` prop has a real bug at min=1: it
          // computes a disabled interval of {after: from, before: from}
          // (equal bounds). Since `before` isn't *strictly* after `after`,
          // the library's matcher treats that as an inverted/open interval
          // — "disabled outside this range" — which for a zero-width range
          // disables literally every other date, making it impossible to
          // pick a check-out at all. min=1 means "no real constraint"
          // anyway, so just omit the prop in that case; only pass it when
          // there's an actual multi-night minimum to enforce.
          min={minimumStayNights > 1 ? minimumStayNights : undefined}
          disabled={[{ before: today }, ...bookedRanges]}
          modifiers={{ booked: bookedRanges }}
          modifiersClassNames={{ booked: 'rdp-day_booked' }}
          className="!mx-auto w-fit"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-charcoal-600">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-charcoal-950" /> Selected
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-charcoal-300 bg-ivory-200" /> Booked
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-gold-400" /> Available
        </span>
      </div>

      <div className="mx-auto mt-8 flex max-w-xs items-center justify-between rounded-full border border-charcoal-900/15 px-5 py-3">
        <span className="inline-flex items-center gap-2 text-sm text-charcoal-800">
          <Users className="h-4 w-4 text-gold-600" /> Guests
        </span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Decrease guests"
            onClick={() => onGuestsChange(Math.max(1, guests - 1))}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-charcoal-900/20 text-charcoal-700 hover:border-gold-500 hover:text-gold-700"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-4 text-center text-sm font-medium">{guests}</span>
          <button
            type="button"
            aria-label="Increase guests"
            onClick={() => onGuestsChange(Math.min(maxBookingGuests, guests + 1))}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-charcoal-900/20 text-charcoal-700 hover:border-gold-500 hover:text-gold-700"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-sm text-center text-xs text-charcoal-900/55">
        From a single night to a full season, every date shown here is bookable. For instant booking, check live
        availability on{' '}
        <a href={siteConfig.airbnbListingUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold-700">
          Airbnb
        </a>
        .
      </p>
    </div>
  );
}
