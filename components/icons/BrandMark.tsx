/**
 * Hand-drawn line-art emblem for The Fern Key: a coastal villa with an
 * arched entry, a palm leaning over the roofline, and waves at the base.
 * Single-weight stroke, no fill — renders in `currentColor` so it can be
 * recolored per-context (gold on dark, deep green on ivory, etc).
 */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* palm fronds */}
      <path d="M90 34 C90 34 78 26 66 29" />
      <path d="M90 34 C90 34 80 20 68 18" />
      <path d="M90 34 C90 34 90 18 82 8" />
      <path d="M90 34 C90 34 100 20 112 18" />
      <path d="M90 34 C90 34 102 27 114 30" />
      {/* palm trunk */}
      <path d="M90 34 C86 46 84 58 88 74" />

      {/* main gabled roof + wall */}
      <path d="M40 46 L58 24 L76 46" />
      <path d="M43 46 L43 72 L73 72 L73 46" />

      {/* side flat-roofed wing */}
      <path d="M16 52 L16 72 L43 72" />
      <path d="M16 52 L43 52" />

      {/* arched windows on the wing */}
      <path d="M22 72 V63 A3.5 3.5 0 0 1 29 63 V72" />
      <path d="M32 72 V63 A3.5 3.5 0 0 1 39 63 V72" />

      {/* arched entry on the main volume */}
      <path d="M53 72 V60 A5 5 0 0 1 63 60 V72" />

      {/* waterline / waves */}
      <path d="M6 84 Q14 79 22 84 T38 84 T54 84 T70 84 T86 84 T102 84 T114 84" />
      <path d="M6 91 Q14 86 22 91 T38 91 T54 91 T70 91 T86 91 T102 91 T114 91" opacity="0.55" />
    </svg>
  );
}
