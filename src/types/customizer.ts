// ─── Fabric Types ─────────────────────────────────────────────────────────────

export type FabricId = "heavyweight-cotton" | "raw-denim";

export interface FabricPreset {
  id: FabricId;
  label: string;
  /** Tailwind-style description shown in UI */
  description: string;
  /** PBR material params */
  roughness: number;
  metalness: number;
  /** 0–1: how much the normal map shows weave detail */
  normalScale: number;
  /** Repeats of the texture tile across the UV */
  textureRepeat: number;
  /** Base tint applied when no user color is set */
  defaultColor: string;
}

// ─── Garment Types ────────────────────────────────────────────────────────────

export type GarmentType = "tshirt" | "hoodie" | "bomber";

export interface GarmentVariant {
  id: GarmentType;
  label: string;
  modelPath: string;
}

// ─── Decal / Print Types ──────────────────────────────────────────────────────

export interface Decal {
  id: string;
  imageDataUrl: string;
  /** Normalized UV position [0,1] */
  positionU: number;
  positionV: number;
  scale: number;
  rotation: number;
}

// ─── Customizer Store State ───────────────────────────────────────────────────

export interface CustomizerState {
  // Garment
  activeGarment: GarmentType;
  setActiveGarment: (g: GarmentType) => void;

  // Fabric
  activeFabric: FabricId;
  setActiveFabric: (f: FabricId) => void;

  // Color
  color: string; // hex
  setColor: (hex: string) => void;

  // Decals
  decals: Decal[];
  addDecal: (d: Decal) => void;
  removeDecal: (id: string) => void;
  updateDecal: (id: string, patch: Partial<Omit<Decal, "id">>) => void;

  // Export
  exportTriggered: boolean;
  triggerExport: () => void;
  resetExport: () => void;
}
