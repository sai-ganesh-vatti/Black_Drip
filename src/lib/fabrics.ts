import type { FabricPreset } from "@/types/customizer";

/**
 * Black Drip fabric presets.
 * Each entry maps to Three.js MeshStandardMaterial properties.
 * Texture paths live in /public/textures/<id>/  and include:
 *   diffuse.jpg | normal.jpg | roughness.jpg
 */
export const FABRIC_PRESETS: Record<string, FabricPreset> = {
  "heavyweight-cotton": {
    id: "heavyweight-cotton",
    label: "Heavyweight Cotton",
    description: "380gsm tight jersey — matte finish, soft hand-feel.",
    roughness: 0.92,
    metalness: 0.0,
    normalScale: 0.45,
    textureRepeat: 4,
    defaultColor: "#1A1A1A",
  },
  "raw-denim": {
    id: "raw-denim",
    label: "Raw Denim",
    description: "14oz selvedge weave — semi-matte with subtle sheen.",
    roughness: 0.72,
    metalness: 0.04,
    normalScale: 0.7,
    textureRepeat: 6,
    defaultColor: "#1E2B4A",
  },
} as const;

export const FABRIC_IDS = Object.keys(FABRIC_PRESETS) as Array<
  keyof typeof FABRIC_PRESETS
>;
