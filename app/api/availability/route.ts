import { NextResponse } from 'next/server';
import { parseIcsBookedRanges } from '@/lib/ical';

// Airbnb's own calendar rarely changes more than a few times a day —
// refetch at most once an hour rather than on every request.
export const revalidate = 3600;

/**
 * Fetches the villa's live Airbnb export calendar (server-side — Airbnb
 * blocks this from being fetched directly in the browser) and returns its
 * booked date ranges. Requires `AIRBNB_ICAL_URL` (see .env.example); with
 * it unset, returns an empty list so the site falls back to the manual
 * dates in data/availability.ts rather than failing.
 */
export async function GET() {
  const url = process.env.AIRBNB_ICAL_URL;
  if (!url) {
    return NextResponse.json({ ranges: [], synced: false });
  }

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`Airbnb calendar responded with ${res.status}`);
    }
    const ics = await res.text();
    const ranges = parseIcsBookedRanges(ics);
    return NextResponse.json({ ranges, synced: true });
  } catch (error) {
    console.error('Airbnb calendar sync failed:', error);
    return NextResponse.json({ ranges: [], synced: false });
  }
}
