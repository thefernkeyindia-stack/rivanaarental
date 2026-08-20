'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

/**
 * A stylized, low-poly stand-in for the real villa: a tall glass-fronted
 * volume in setback stories, a terracotta-stone accent column, a
 * cantilevered balcony, a dark sloped roof, and a small rectangular pool at
 * the base — a rough massing study of the actual building, not a replica.
 *
 * To use a real scan/model instead: export a .glb from your 3D software,
 * drop it at public/media/models/villa.glb, and VillaModel3D will load it
 * automatically (this component is only rendered as a fallback).
 */
export default function ProceduralVilla() {
  const materials = useMemo(
    () => ({
      stucco: new THREE.MeshStandardMaterial({ color: '#f2ede0', roughness: 0.85, metalness: 0.05 }),
      stone: new THREE.MeshStandardMaterial({ color: '#8a3f2d', roughness: 0.8, metalness: 0.08 }),
      roof: new THREE.MeshStandardMaterial({ color: '#1c3b28', roughness: 0.55, metalness: 0.15 }),
      glass: new THREE.MeshPhysicalMaterial({
        color: '#bfe0d6',
        roughness: 0.06,
        metalness: 0,
        transmission: 0.82,
        thickness: 0.15,
        transparent: true,
        opacity: 0.6,
      }),
      mullion: new THREE.MeshStandardMaterial({ color: '#1c2b22', roughness: 0.6 }),
      rail: new THREE.MeshStandardMaterial({ color: '#c29a54', roughness: 0.4, metalness: 0.5 }),
      water: new THREE.MeshPhysicalMaterial({
        color: '#2f7f8c',
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.4,
        transparent: true,
        opacity: 0.9,
      }),
      deck: new THREE.MeshStandardMaterial({ color: '#8a6b45', roughness: 0.8 }),
      trunk: new THREE.MeshStandardMaterial({ color: '#4a3a28', roughness: 0.9 }),
      foliage: new THREE.MeshStandardMaterial({ color: '#2f5c40', roughness: 0.85 }),
      ground: new THREE.MeshStandardMaterial({ color: '#dcd3c2', roughness: 1 }),
    }),
    [],
  );

  const palm = (position: [number, number, number], scale = 1) => (
    <group position={position} scale={scale}>
      <mesh material={materials.trunk} position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.09, 1.2, 6]} />
      </mesh>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          material={materials.foliage}
          position={[Math.cos((i / 5) * Math.PI * 2) * 0.18, 1.25, Math.sin((i / 5) * Math.PI * 2) * 0.18]}
          rotation={[0.3, (i / 5) * Math.PI * 2, 0]}
          castShadow
        >
          <coneGeometry args={[0.12, 0.55, 4]} />
        </mesh>
      ))}
    </group>
  );

  // Thin vertical mullion bars overlaid on a glass panel, to read as a
  // floor-to-ceiling window grid rather than a single flat pane.
  const windowGrid = (width: number, height: number, position: [number, number, number], bars = 4) => (
    <group position={position}>
      <mesh material={materials.glass}>
        <boxGeometry args={[width, height, 0.04]} />
      </mesh>
      {Array.from({ length: bars + 1 }, (_, i) => (
        <mesh key={i} material={materials.mullion} position={[-width / 2 + (width / bars) * i, 0, 0.025]}>
          <boxGeometry args={[0.025, height, 0.02]} />
        </mesh>
      ))}
    </group>
  );

  return (
    <group position={[0, -0.6, 0]}>
      {/* Ground pad */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} material={materials.ground}>
        <circleGeometry args={[5.5, 48]} />
      </mesh>

      {/* Ground floor */}
      <mesh position={[0, 0.5, 0]} material={materials.stucco} castShadow receiveShadow>
        <boxGeometry args={[2.4, 1.0, 1.6]} />
      </mesh>
      {windowGrid(2.0, 0.8, [0, 0.5, 0.82], 5)}

      {/* Terracotta stone accent column */}
      <mesh position={[0.95, 0.95, 0.83]} material={materials.stone} castShadow>
        <boxGeometry args={[0.5, 1.9, 0.08]} />
      </mesh>

      {/* Floor 2 (set back slightly) */}
      <mesh position={[-0.1, 1.45, -0.03]} material={materials.stucco} castShadow receiveShadow>
        <boxGeometry args={[2.0, 0.9, 1.4]} />
      </mesh>
      {windowGrid(1.6, 0.7, [-0.1, 1.45, 0.68], 4)}

      {/* Cantilevered balcony + railing */}
      <mesh position={[-0.6, 1.02, 1.0]} material={materials.deck} castShadow>
        <boxGeometry args={[0.9, 0.06, 0.5]} />
      </mesh>
      <mesh position={[-0.6, 1.27, 1.24]} material={materials.glass}>
        <boxGeometry args={[0.9, 0.5, 0.03]} />
      </mesh>
      <mesh position={[-0.6, 1.5, 1.24]} material={materials.rail}>
        <boxGeometry args={[0.9, 0.03, 0.04]} />
      </mesh>

      {/* Floor 3 (top, narrower) */}
      <mesh position={[0, 2.3, -0.1]} material={materials.stucco} castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.9, 1.2]} />
      </mesh>
      {windowGrid(1.35, 0.68, [0, 2.3, 0.51], 4)}

      {/* Gabled roof */}
      <mesh position={[0, 2.98, -0.1]} rotation={[0, Math.PI / 2, 0]} material={materials.roof} castShadow>
        <coneGeometry args={[1.05, 0.8, 4]} />
      </mesh>
      <mesh position={[0, 2.62, -0.1]} material={materials.roof} castShadow>
        <boxGeometry args={[1.85, 0.06, 1.35]} />
      </mesh>

      {/* Entrance canopy */}
      <mesh position={[-1.05, 1.02, 0.6]} material={materials.roof}>
        <boxGeometry args={[0.5, 0.05, 0.9]} />
      </mesh>

      {/* Pool deck + pool */}
      <mesh position={[0.4, 0.02, 2.1]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow material={materials.deck}>
        <boxGeometry args={[2.6, 3.4, 0.05]} />
      </mesh>
      <mesh position={[0.4, 0.07, 2.1]} rotation={[-Math.PI / 2, 0, 0]} material={materials.water}>
        <boxGeometry args={[1.3, 2.8, 0.06]} />
      </mesh>

      {/* Garden / palms */}
      {palm([-2.3, 0, -1.4], 1.1)}
      {palm([-2.6, 0, 0.4], 0.9)}
      {palm([2.1, 0, 1.6], 1)}
      {palm([1.7, 0, -1.6], 0.85)}
    </group>
  );
}
