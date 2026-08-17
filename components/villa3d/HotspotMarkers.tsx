'use client';

import { Html } from '@react-three/drei';
import type { Hotspot } from '@/types';

interface Props {
  hotspots: Hotspot[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function HotspotMarkers({ hotspots, activeId, onSelect }: Props) {
  return (
    <>
      {hotspots.map((hotspot) => (
        <Html key={hotspot.id} position={hotspot.position} center distanceFactor={8} zIndexRange={[20, 0]}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(hotspot.id);
            }}
            aria-label={`View ${hotspot.label}`}
            className="group relative flex h-6 w-6 -translate-y-1 items-center justify-center"
          >
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-gold-300 opacity-60 ${
                activeId === hotspot.id ? '' : 'animate-ping'
              }`}
            />
            <span
              className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-ivory-100 shadow-soft transition-colors ${
                activeId === hotspot.id ? 'bg-gold-600' : 'bg-charcoal-950 group-hover:bg-gold-600'
              }`}
            />
          </button>
        </Html>
      ))}
    </>
  );
}
