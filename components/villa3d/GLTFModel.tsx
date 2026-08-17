'use client';

import { useGLTF } from '@react-three/drei';

export const MODEL_PATH = '/media/models/villa.glb';

/**
 * Loads a real .glb villa model via drei's useGLTF (Suspense + cache).
 * If public/media/models/villa.glb does not exist, the fetch 404s and the
 * thrown error is caught by the ErrorBoundary in VillaModel3D, which
 * renders <ProceduralVilla /> instead — so this component only needs to
 * handle the "happy path" of a real asset being present.
 *
 * To use your own model: export a web-optimized .glb (Draco/meshopt
 * compression recommended, ideally under a few MB) and place it at
 * public/media/models/villa.glb. Adjust `scale`/`position` below to taste,
 * and re-plot data/hotspots.ts positions to match.
 */
export default function GLTFModel() {
  const { scene } = useGLTF(MODEL_PATH);
  return <primitive object={scene} scale={1} position={[0, -0.6, 0]} />;
}

useGLTF.preload(MODEL_PATH);
