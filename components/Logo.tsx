import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 font-serif', className)}>
      <span
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-full border text-base',
          light ? 'border-ivory-100/50 text-ivory-100' : 'border-charcoal-950/30 text-charcoal-950',
        )}
        aria-hidden
      >
        {siteConfig.monogram}
      </span>
      <span className={cn('text-lg tracking-wide', light ? 'text-ivory-100' : 'text-charcoal-950')}>
        {siteConfig.name}
      </span>
    </span>
  );
}
