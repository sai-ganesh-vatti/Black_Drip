"use client";

import { FABRIC_PRESETS } from "@/lib/fabrics";
import { useCustomizerStore } from "@/store/customizerStore";

/**
 * FabricPicker
 *
 * Renders a card grid of fabric options. Selecting a card calls
 * setActiveFabric → Zustand → GarmentMesh.useFrame picks it up next tick.
 */
export function FabricPicker() {
  const activeFabric = useCustomizerStore((s) => s.activeFabric);
  const setActiveFabric = useCustomizerStore((s) => s.setActiveFabric);
  const setColor = useCustomizerStore((s) => s.setColor);

  function handleSelect(id: string) {
    const preset = FABRIC_PRESETS[id];
    if (!preset) return;
    setActiveFabric(preset.id);
    // Reset to the fabric's default color when switching
    setColor(preset.defaultColor);
  }

  return (
    <div className="fabric-picker">
      <p className="label-xs" style={{ marginBottom: "1rem" }}>
        Fabric
      </p>
      <div className="fabric-picker__grid">
        {Object.values(FABRIC_PRESETS).map((preset) => {
          const active = activeFabric === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelect(preset.id)}
              className={`fabric-card${active ? " fabric-card--active" : ""}`}
              aria-pressed={active}
              title={preset.description}
            >
              {/* Swatch block */}
              <span
                className="fabric-card__swatch"
                style={{ backgroundColor: preset.defaultColor }}
              />
              <span className="fabric-card__label">{preset.label}</span>
              <span className="fabric-card__meta">{preset.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
