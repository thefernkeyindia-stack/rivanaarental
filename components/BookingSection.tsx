'use client';

import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import ScrollReveal from './ScrollReveal';
import AvailabilityCalendar from './AvailabilityCalendar';
import BookingEnquiryForm from './BookingEnquiryForm';
import AirbnbWhatsappBlock from './AirbnbWhatsappBlock';

export default function BookingSection() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);

  return (
    <section id="booking" className="bg-ivory-50 py-24 sm:py-32">
      <div className="container-luxe">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Availability</p>
          <h2 className="section-heading mt-3">Plan Your Stay</h2>
          <p className="mt-4 text-charcoal-600">
            Choose your dates and send an enquiry — we&apos;ll confirm availability and pricing directly.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal className="rounded-2xl border border-charcoal-900/10 bg-white p-6 shadow-card sm:p-10">
            <AvailabilityCalendar range={range} onRangeChange={setRange} guests={guests} onGuestsChange={setGuests} />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="rounded-2xl border border-charcoal-900/10 bg-white p-6 shadow-card sm:p-10">
            <h3 className="font-serif text-2xl text-charcoal-950">Send a Booking Enquiry</h3>
            <p className="mt-2 text-sm text-charcoal-500">We reply personally, usually within a few hours.</p>
            <div className="mt-6">
              <BookingEnquiryForm range={range} guests={guests} />
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10">
          <AirbnbWhatsappBlock />
        </div>
      </div>
    </section>
  );
}
