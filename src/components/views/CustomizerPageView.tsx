"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { FabricPicker } from "@/components/customizer/FabricPicker";
import { ColorPicker } from "@/components/customizer/ColorPicker";
import { useCustomizerStore } from "@/store/customizerStore";

/**
 * GarmentCanvas must be dynamically imported with ssr:false
 * because @react-three/fiber references WebGL APIs unavailable in Node.
 */
const GarmentCanvas = dynamic(
  () =>
    import("@/components/customizer/GarmentCanvas").then(
      (m) => m.GarmentCanvas
    ),
  { ssr: false, loading: () => <CanvasLoader /> }
);

function CanvasLoader() {
  return (
    <div className="canvas-loader">
      <span className="canvas-loader__dot" />
      <span className="canvas-loader__dot" />
      <span className="canvas-loader__dot" />
    </div>
  );
}

export function CustomizerPageView() {
  const triggerExport = useCustomizerStore((s) => s.triggerExport);

  return (
    <main className="customizer-layout">
      {/* ── Left panel: 3D Viewport ──────────────────────────────────────── */}
      <section className="customizer-layout__viewport" aria-label="3D Garment Preview">
        <Suspense fallback={<CanvasLoader />}>
          <GarmentCanvas />
        </Suspense>
        <p className="customizer-layout__viewport-hint">
          Drag to rotate · Scroll to zoom
        </p>
      </section>

      {/* ── Right panel: Controls ────────────────────────────────────────── */}
      <aside className="customizer-layout__panel">
        <header className="customizer-panel-header">
          <span className="label-xs">Black Drip Studio</span>
          <h1 className="customizer-panel-header__title">Customizer</h1>
          <p className="customizer-panel-header__sub">
            Configure your garment and generate print-ready files.
          </p>
        </header>

        <hr className="divider" style={{ margin: "1.5rem 0" }} />

        <FabricPicker />

        <hr className="divider" style={{ margin: "1.5rem 0" }} />

        <ColorPicker />

        <hr className="divider" style={{ margin: "1.5rem 0" }} />

        {/* Export CTA */}
        <div className="customizer-export">
          <button
            className="customizer-export__btn"
            onClick={triggerExport}
            id="customizer-export-btn"
          >
            Generate Print File
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
          <p className="customizer-export__note">
            Exports a 300 DPI PNG ready for vendor queue submission.
          </p>
        </div>
      </aside>
    </main>
  );
}
