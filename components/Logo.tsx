import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import BrandMark from './icons/BrandMark';

interface LogoProps {
  light?: boolean;
  /** Icon above a centered wordmark + "RENTAL STAYS" line — for the footer and loading screen. */
  stacked?: boolean;
  className?: string;
}

export default function Logo({ light = false, stacked = false, className }: LogoProps) {
  const iconColor = light ? 'text-gold-300' : 'text-gold-600';
  const wordColor = light ? 'text-ivory-100' : 'text-charcoal-900';
  const subColor = light ? 'text-ivory-100/60' : 'text-charcoal-600';

  if (stacked) {
    return (
      <span className={cn('inline-flex flex-col items-center gap-2', className)}>
        <BrandMark className={cn('h-14 w-auto', iconColor)} />
        <span className={cn('font-script text-3xl leading-none', wordColor)}>{siteConfig.name}</span>
        <span className={cn('text-[11px] font-medium uppercase tracking-widest2', subColor)}>Rental Stays</span>
      </span>
    );
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <BrandMark className={cn('h-9 w-auto shrink-0', iconColor)} />
      <span className={cn('font-script text-2xl leading-none', wordColor)}>{siteConfig.name}</span>
    </span>
  );
}
