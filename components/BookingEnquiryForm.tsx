'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import type { DateRange } from 'react-day-picker';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const enquirySchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  checkIn: z.string().min(1, 'Select your dates in the calendar above'),
  checkOut: z.string().min(1, 'Select your dates in the calendar above'),
  guests: z.coerce.number().min(1, 'At least 1 guest').max(20, 'Contact us for larger groups'),
  message: z.string().optional(),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

interface Props {
  range: DateRange | undefined;
  guests: number;
}

/**
 * Mock submission handler. Replace this with a real request (e.g.
 * `fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(values) })`)
 * once a booking backend/API is wired up — the form state machine below
 * (idle/submitting/success/error) already supports that swap with no
 * other changes.
 */
async function submitEnquiry(values: EnquiryValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1100));
  console.info('Enquiry submitted (mock):', values);
}

export default function BookingEnquiryForm({ range, guests }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: '', email: '', phone: '', checkIn: '', checkOut: '', guests, message: '' },
  });

  useEffect(() => {
    setValue('checkIn', range?.from ? format(range.from, 'yyyy-MM-dd') : '', { shouldValidate: true });
    setValue('checkOut', range?.to ? format(range.to, 'yyyy-MM-dd') : '', { shouldValidate: true });
  }, [range, setValue]);

  useEffect(() => {
    setValue('guests', guests);
  }, [guests, setValue]);

  const onSubmit = async (values: EnquiryValues) => {
    setStatus('submitting');
    try {
      await submitEnquiry(values);
      setStatus('success');
      reset({ ...values, name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-gold-500/30 bg-gold-50 px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-600" strokeWidth={1.5} />
        <h3 className="mt-4 font-serif text-2xl text-charcoal-950">Enquiry Sent</h3>
        <p className="mt-2 max-w-xs text-sm text-charcoal-600">
          Thank you — we typically respond within a few hours. Check your email for confirmation.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-lg border border-charcoal-900/15 px-4 py-3">
          <p className="text-[11px] uppercase tracking-wide text-charcoal-400">Check-in</p>
          <p className="text-sm text-charcoal-900">{range?.from ? format(range.from, 'MMM d, yyyy') : 'Select on calendar'}</p>
        </div>
        <div className="rounded-lg border border-charcoal-900/15 px-4 py-3">
          <p className="text-[11px] uppercase tracking-wide text-charcoal-400">Check-out</p>
          <p className="text-sm text-charcoal-900">{range?.to ? format(range.to, 'MMM d, yyyy') : 'Select on calendar'}</p>
        </div>
      </div>
      {(errors.checkIn || errors.checkOut) && (
        <p className="-mt-2 text-xs text-red-600">{errors.checkIn?.message ?? errors.checkOut?.message}</p>
      )}

      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-wide text-charcoal-500">
          Full name
        </label>
        <input
          id="name"
          {...register('name')}
          className="w-full rounded-lg border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-950 outline-none transition-colors focus:border-gold-500"
          placeholder="Jane Doe"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-wide text-charcoal-500">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full rounded-lg border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-950 outline-none transition-colors focus:border-gold-500"
            placeholder="jane@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-wide text-charcoal-500">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full rounded-lg border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-950 outline-none transition-colors focus:border-gold-500"
            placeholder="+1 555 012 3456"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="guests" className="mb-1.5 block text-xs uppercase tracking-wide text-charcoal-500">
          Guests
        </label>
        <input
          id="guests"
          type="number"
          min={1}
          max={20}
          {...register('guests')}
          className="w-full rounded-lg border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-950 outline-none transition-colors focus:border-gold-500"
        />
        {errors.guests && <p className="mt-1 text-xs text-red-600">{errors.guests.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wide text-charcoal-500">
          Message <span className="text-charcoal-300">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          {...register('message')}
          className="w-full rounded-lg border border-charcoal-900/15 bg-white px-4 py-3 text-sm text-charcoal-950 outline-none transition-colors focus:border-gold-500"
          placeholder="Occasion, arrival time, special requests…"
        />
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" /> Something went wrong sending your enquiry. Please try again.
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>
    </form>
  );
}
