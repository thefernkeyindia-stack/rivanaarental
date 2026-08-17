'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

/**
 * A stylized, low-poly stand-in for the villa, built entirely from
 * primitives so the 3D section works with zero external assets.
 *
 * To use a real scan/model instead: export a .glb from your 3D software,
 * drop it at public/media/models/villa.glb, and VillaModel3D will load it
 * automatically (this component is only rendered as a fallback).
 */
export default function ProceduralVilla() {
  const materials = useMemo(
    () => ({
      wall: new THREE.MeshStandardMaterial({ color: '#efe7d8', roughness: 0.85, metalness: 0.05 }),
      roof: new THREE.MeshStandardMaterial({ color: '#221f1c', roughness: 0.6, metalness: 0.1 }),
      deck: new THREE.MeshStandardMaterial({ color: '#8a6b45', roughness: 0.75 }),
      glass: new THREE.MeshPhysicalMaterial({
        color: '#cfe8e6',
        roughness: 0.05,
        metalness: 0,
        transmission: 0.85,
        thickness: 0.2,
        transparent: true,
        opacity: 0.55,
      }),
      water: new THREE.MeshPhysicalMaterial({
        color: '#2f6f74',
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.4,
        transparent: true,
        opacity: 0.9,
      }),
      trunk: new THREE.MeshStandardMaterial({ color: '#4a3a28', roughness: 0.9 }),
      foliage: new THREE.MeshStandardMaterial({ color: '#4f5c3d', roughness: 0.85 }),
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

  return (
    <group position={[0, -0.6, 0]}>
      {/* Ground pad */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} material={materials.ground}>
        <circleGeometry args={[5.5, 48]} />
      </mesh>

      {/* Main volume */}
      <mesh position={[-1, 0.9, 0.4]} material={materials.wall} castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.8, 2.4]} />
      </mesh>
      <mesh position={[-1, 1.85, 0.4]} material={materials.roof} castShadow>
        <boxGeometry args={[2.8, 0.14, 2.6]} />
      </mesh>

      {/* Kitchen / secondary wing */}
      <mesh position={[0.6, 0.75, -1.6]} material={materials.wall} castShadow receiveShadow>
        <boxGeometry args={[1.9, 1.5, 1.5]} />
      </mesh>
      <mesh position={[0.6, 1.55, -1.6]} material={materials.roof} castShadow>
        <boxGeometry args={[2.05, 0.12, 1.65]} />
      </mesh>

      {/* Glass frontage facing the pool */}
      <mesh position={[-1, 0.85, 1.62]} material={materials.glass}>
        <boxGeometry args={[2.2, 1.5, 0.04]} />
      </mesh>

      {/* Master suite wing */}
      <mesh position={[-2.2, 1.1, 0.9]} material={materials.wall} castShadow receiveShadow>
        <boxGeometry args={[1.3, 1.2, 1.6]} />
      </mesh>
      <mesh position={[-2.2, 1.75, 0.9]} material={materials.roof} castShadow>
        <boxGeometry args={[1.45, 0.12, 1.75]} />
      </mesh>

      {/* Deck */}
      <mesh position={[0.6, 0.05, 1.9]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow material={materials.deck}>
        <boxGeometry args={[4.6, 3, 0.1]} />
      </mesh>

      {/* Pool */}
      <mesh position={[2.1, 0.05, 1.8]} rotation={[-Math.PI / 2, 0, 0]} material={materials.water}>
        <boxGeometry args={[2.6, 3.4, 0.1]} />
      </mesh>
      <mesh position={[2.1, -0.05, 1.8]} rotation={[-Math.PI / 2, 0, 0]} material={materials.deck}>
        <boxGeometry args={[3.1, 3.9, 0.05]} />
      </mesh>

      {/* Garden lounge platform */}
      <mesh position={[-2.1, 0.02, -1.6]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow material={materials.deck}>
        <cylinderGeometry args={[1.3, 1.3, 0.08, 24]} />
      </mesh>

      {palm([-3.1, 0, -2.4], 1.1)}
      {palm([-3.4, 0, -0.6], 0.9)}
      {palm([3.3, 0, 2.6], 1)}
      {palm([1.6, 0, -2.6], 0.85)}
    </group>
  );
}
