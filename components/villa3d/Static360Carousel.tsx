'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FRAMES = Array.from({ length: 8 }, (_, i) => `/media/gallery/villa-360-${i + 1}.svg`);

/**
 * Lightweight fallback for devices without WebGL or with limited GPU power:
 * a manually-navigable "360" image sequence instead of a live 3D canvas.
 * Swap the frame set for real rendered/photographed 360 frames when ready.
 */
export default function Static360Carousel() {
  const [frame, setFrame] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const step = (dir: 1 | -1) => setFrame((f) => (f + dir + FRAMES.length) % FRAMES.length);

  return (
    <div
      className="relative h-full w-full select-none overflow-hidden rounded-2xl bg-charcoal-950"
      onPointerDown={(e) => {
        dragStartX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (dragStartX.current === null) return;
        const delta = e.clientX - dragStartX.current;
        if (Math.abs(delta) > 30) step(delta > 0 ? -1 : 1);
        dragStartX.current = null;
      }}
    >
      <Image
        src={FRAMES[frame]}
        alt={`360 view of the villa, frame ${frame + 1} of ${FRAMES.length}`}
        fill
        sizes="100vw"
        unoptimized
        className="object-cover"
        priority
      />

      <button
        type="button"
        aria-label="Rotate left"
        onClick={() => step(-1)}
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-100/90 text-charcoal-950 shadow-soft transition hover:bg-ivory-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Rotate right"
        onClick={() => step(1)}
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory-100/90 text-charcoal-950 shadow-soft transition hover:bg-ivory-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-charcoal-950/60 px-4 py-1.5 text-xs tracking-wide text-ivory-100">
        Drag or use arrows to look around · {frame + 1}/{FRAMES.length}
      </div>
    </div>
  );
}
