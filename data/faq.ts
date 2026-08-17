import type { FaqItem } from '@/types';

export const faqItems: FaqItem[] = [
  {
    id: 'faq-checkin',
    question: 'What are the check-in and check-out times?',
    answer:
      'Check-in is from 3:00 PM and check-out is by 11:00 AM. Early check-in or late check-out can often be arranged for an additional fee, subject to availability — just ask via WhatsApp or the enquiry form.',
  },
  {
    id: 'faq-cancellation',
    question: 'What is your cancellation policy?',
    answer:
      'Full refund for cancellations made at least 30 days before check-in. Cancellations within 30 days are eligible for a 50% refund. Bookings made through Airbnb follow the cancellation policy listed on that listing.',
  },
  {
    id: 'faq-pets',
    question: 'Are pets allowed?',
    answer:
      'Well-behaved pets are welcome with prior approval and a refundable pet deposit. Please mention any pets in your enquiry so we can prepare the villa accordingly.',
  },
  {
    id: 'faq-guests',
    question: 'Can we host extra guests or events?',
    answer:
      'The villa comfortably sleeps up to 10 guests. Additional day guests for small gatherings may be permitted with advance notice — large events or parties are not permitted out of respect for neighboring properties.',
  },
  {
    id: 'faq-deposit',
    question: 'Is a security deposit required?',
    answer:
      'Yes, a refundable security deposit is authorized before check-in and released within 7 days after check-out, provided there is no damage beyond normal wear and tear.',
  },
  {
    id: 'faq-staff',
    question: 'Is housekeeping or a private chef included?',
    answer:
      'Mid-stay housekeeping is included for stays of 7 nights or longer. Daily housekeeping and private chef service can be added for an additional fee — let us know your preferences when you enquire.',
  },
  {
    id: 'faq-transport',
    question: 'Do you offer airport transfers?',
    answer:
      'We can arrange private airport transfers on request. Add this to your enquiry message with your flight details and we will confirm pricing and pickup times.',
  },
];
