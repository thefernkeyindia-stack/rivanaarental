'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import { RotateCw, X, Image as ImageIcon, Box } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ErrorBoundary from './ErrorBoundary';
import ProceduralVilla from './villa3d/ProceduralVilla';
import GLTFModel from './villa3d/GLTFModel';
import HotspotMarkers from './villa3d/HotspotMarkers';
import Static360Carousel from './villa3d/Static360Carousel';
import { hotspots } from '@/data/hotspots';

function detectWebgl(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function detectLowPower(): boolean {
  if (typeof navigator === 'undefined') return false;
  const cores = navigator.hardwareConcurrency ?? 8;
  // @ts-expect-error -- deviceMemory is not in all TS lib DOM versions
  const memory = navigator.deviceMemory ?? 8;
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  return cores <= 2 || memory <= 2 || !!reducedMotion;
}

function BrandedSpinner() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-charcoal-950">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border border-gold-400/30" />
        <div className="absolute inset-0 animate-spin rounded-full border-t border-gold-400" />
        <div className="absolute inset-0 flex items-center justify-center font-serif text-lg text-gold-300">R</div>
      </div>
      <p className="text-xs uppercase tracking-widest2 text-ivory-100/60">Loading the villa</p>
    </div>
  );
}

export default function VillaModel3D() {
  const [supportsWebgl, setSupportsWebgl] = useState<boolean | null>(null);
  const [preferLite, setPreferLite] = useState(false);
  const [manualOverride, setManualOverride] = useState<'auto' | '3d' | 'lite'>('auto');
  const [ready, setReady] = useState(false);
  const [modelFailed, setModelFailed] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  useEffect(() => {
    setSupportsWebgl(detectWebgl());
    setPreferLite(detectLowPower());
  }, []);

  const showLite =
    manualOverride === 'lite' || (manualOverride === 'auto' && (supportsWebgl === false || preferLite));

  const activeHotspotData = hotspots.find((h) => h.id === activeHotspot) ?? null;

  return (
    <section id="villa-3d" className="bg-charcoal-950 py-24 sm:py-32">
      <div className="container-luxe">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-400">Explore in 3D</p>
          <h2 className="section-heading mt-3 text-ivory-100">Step Inside, Virtually</h2>
          <p className="mt-4 text-ivory-100/70">
            Drag to rotate, scroll to zoom, and tap the glowing markers to explore the master suite, pool
            deck, garden lounge and kitchen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="relative mt-12">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ivory-100/10 shadow-soft sm:aspect-[16/9]">
            {supportsWebgl === null ? (
              <BrandedSpinner />
            ) : showLite ? (
              <Static360Carousel />
            ) : (
              <>
                {!ready && <BrandedSpinner />}
                <Canvas
                  shadows
                  dpr={[1, 1.75]}
                  camera={{ position: [5.4, 3.2, 6.4], fov: 42 }}
                  onCreated={() => setReady(true)}
                  className="!touch-none"
                >
                  <color attach="background" args={['#123522']} />
                  <fog attach="fog" args={['#123522', 9, 18]} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 6, 3]} intensity={1.4} castShadow shadow-mapSize={[1024, 1024]} />
                  <hemisphereLight args={['#faf4e7', '#123522', 0.5]} />

                  <ErrorBoundary fallback={<ProceduralVilla />} onError={() => setModelFailed(true)}>
                    <GLTFModel />
                  </ErrorBoundary>

                  <HotspotMarkers hotspots={hotspots} activeId={activeHotspot} onSelect={setActiveHotspot} />

                  <ContactShadows position={[0, -0.6, 0]} opacity={0.55} scale={12} blur={2.4} far={4} />

                  <OrbitControls
                    makeDefault
                    autoRotate
                    autoRotateSpeed={0.6}
                    enablePan={false}
                    target={[0, 0.6, 0]}
                    minDistance={4}
                    maxDistance={11}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI / 2.05}
                  />
                </Canvas>
              </>
            )}

            {/* View toggle */}
            <div className="absolute right-4 top-4 z-10 flex overflow-hidden rounded-full border border-ivory-100/20 bg-charcoal-950/70 text-xs text-ivory-100 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setManualOverride('3d')}
                className={`flex items-center gap-1.5 px-3.5 py-2 transition-colors ${
                  !showLite ? 'bg-gold-600 text-charcoal-950' : 'hover:text-gold-300'
                }`}
              >
                <Box className="h-3.5 w-3.5" /> 3D
              </button>
              <button
                type="button"
                onClick={() => setManualOverride('lite')}
                className={`flex items-center gap-1.5 px-3.5 py-2 transition-colors ${
                  showLite ? 'bg-gold-600 text-charcoal-950' : 'hover:text-gold-300'
                }`}
              >
                <ImageIcon className="h-3.5 w-3.5" /> 360° Photos
              </button>
            </div>

            {!showLite && (
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full bg-charcoal-950/60 px-3.5 py-1.5 text-[11px] text-ivory-100/80 backdrop-blur-sm">
                <RotateCw className="h-3 w-3" /> Drag to rotate · Scroll to zoom
              </div>
            )}
          </div>

          {/* Hotspot info card */}
          <AnimatePresence>
            {activeHotspotData && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-1/2 z-20 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 overflow-hidden rounded-xl bg-ivory-100 shadow-soft sm:left-6 sm:translate-x-0"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={activeHotspotData.image}
                    alt={activeHotspotData.label}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setActiveHotspot(null)}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal-950/70 text-ivory-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-charcoal-950">{activeHotspotData.label}</h3>
                  <p className="mt-2 text-sm text-charcoal-700">{activeHotspotData.description}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>

        {modelFailed && (
          <p className="mt-4 text-center text-xs text-ivory-100/40">
            Showing a stylized preview — add a real model at public/media/models/villa.glb to replace it.
          </p>
        )}
      </div>
    </section>
  );
}
