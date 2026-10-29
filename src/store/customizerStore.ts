import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import type { CustomizerState, FabricId, GarmentType, Decal } from "@/types/customizer";

/**
 * Black Drip Customizer Store
 *
 * Uses `subscribeWithSelector` so the R3F canvas can subscribe to
 * individual slices (e.g. color, fabric) without triggering full re-renders.
 *
 * Usage:
 *   const color = useCustomizerStore((s) => s.color);
 *   const setColor = useCustomizerStore((s) => s.setColor);
 */
export const useCustomizerStore = create<CustomizerState>()(
  subscribeWithSelector((set) => ({
    // ── Garment ────────────────────────────────────────────────────────────────
    activeGarment: "tshirt" as GarmentType,
    setActiveGarment: (g) => set({ activeGarment: g }),

    // ── Fabric ─────────────────────────────────────────────────────────────────
    activeFabric: "heavyweight-cotton" as FabricId,
    setActiveFabric: (f) => set({ activeFabric: f }),

    // ── Color ──────────────────────────────────────────────────────────────────
    color: "#1A1A1A",
    setColor: (hex) => set({ color: hex }),

    // ── Decals ─────────────────────────────────────────────────────────────────
    decals: [],
    addDecal: (d) => set((s) => ({ decals: [...s.decals, d] })),
    removeDecal: (id) =>
      set((s) => ({ decals: s.decals.filter((d) => d.id !== id) })),
    updateDecal: (id, patch) =>
      set((s) => ({
        decals: s.decals.map((d) => (d.id === id ? { ...d, ...patch } : d)),
      })),

    // ── Export ─────────────────────────────────────────────────────────────────
    exportTriggered: false,
    triggerExport: () => set({ exportTriggered: true }),
    resetExport: () => set({ exportTriggered: false }),
  }))
);
