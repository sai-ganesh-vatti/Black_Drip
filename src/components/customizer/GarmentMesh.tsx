"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomizerStore } from "@/store/customizerStore";
import { FABRIC_PRESETS } from "@/lib/fabrics";

/**
 * GarmentMesh
 *
 * Renders the T-shirt geometry and directly mutates the Three.js material
 * properties when Zustand state changes — bypassing React re-renders for
 * zero-lag fabric / color swapping.
 *
 * Material update strategy:
 *   - useFrame runs every tick; we check a dirty flag instead of subscribing
 *     inside the component so we don't break R3F's render loop.
 *   - Zustand subscribeWithSelector pushes changes into a mutable ref object
 *     that useFrame reads — the "external store → ref → material" pattern.
 */
export function GarmentMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  // Mutable snapshot read by useFrame without React re-renders
  const snapshot = useRef({
    color: useCustomizerStore.getState().color,
    fabric: useCustomizerStore.getState().activeFabric,
    dirty: true,
  });

  // Subscribe to store slices — write to ref, never setState
  useEffect(() => {
    const unsub1 = useCustomizerStore.subscribe(
      (s) => s.color,
      (color) => {
        snapshot.current.color = color;
        snapshot.current.dirty = true;
      }
    );
    const unsub2 = useCustomizerStore.subscribe(
      (s) => s.activeFabric,
      (fabric) => {
        snapshot.current.fabric = fabric;
        snapshot.current.dirty = true;
      }
    );
    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  // Apply material changes on the GPU tick — only when dirty
  useFrame(() => {
    if (!snapshot.current.dirty || !matRef.current) return;
    const preset = FABRIC_PRESETS[snapshot.current.fabric];
    if (!preset) return;

    const mat = matRef.current;
    mat.color.set(snapshot.current.color);
    mat.roughness = preset.roughness;
    mat.metalness = preset.metalness;
    mat.needsUpdate = true;

    snapshot.current.dirty = false;
  });

  // Slow idle rotation for the hero preview
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/*
       * Placeholder geometry — replace with <primitive object={gltf.scene} />
       * once you have the actual T-shirt GLB in /public/models/tshirt.glb.
       * The torus-knot gives a good sense of fabric shading in the meantime.
       */}
      <torusKnotGeometry args={[1.1, 0.38, 200, 32]} />
      <meshStandardMaterial
        ref={matRef}
        color="#1A1A1A"
        roughness={0.92}
        metalness={0.0}
        envMapIntensity={0.6}
      />
    </mesh>
  );
}
