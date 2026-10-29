"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GarmentMesh } from "./GarmentMesh";

/**
 * GarmentCanvas
 *
 * React Three Fiber canvas wrapper.
 * - `flat` disables tone-mapping so our CSS color values are accurate.
 * - Environment preset provides IBL lighting matching the Black Drip dark palette.
 * - OrbitControls lets the user rotate/zoom.
 * - ContactShadows gives a ground-plane shadow for depth.
 */
export function GarmentCanvas() {
  return (
    <div className="garment-canvas-wrapper">
      <Canvas
        flat
        shadows="basic"
        camera={{ position: [0, 0, 4.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Ambient fill */}
        <ambientLight intensity={0.3} />

        {/* Key light from upper-left — mimics studio strobe */}
        <directionalLight
          position={[3, 6, 4]}
          intensity={1.4}
          castShadow
        />

        {/* Rim light for depth */}
        <pointLight position={[-4, 2, -3]} intensity={0.6} color="#C5A059" />

        {/* IBL — studio preset keeps colors neutral */}
        <Environment preset="studio" />

        <Suspense fallback={null}>
          <GarmentMesh />
          <ContactShadows
            position={[0, -1.8, 0]}
            opacity={0.45}
            scale={6}
            blur={2.2}
            far={2}
            color="#000000"
          />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2.5}
          maxDistance={8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.6}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
