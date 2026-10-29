"use client";

import { useId, useCallback } from "react";
import { useCustomizerStore } from "@/store/customizerStore";

/** Brand-aligned color swatches */
const PALETTE: { hex: string; label: string }[] = [
  { hex: "#0D0D0D", label: "Obsidian" },
  { hex: "#1A1A1A", label: "Charcoal" },
  { hex: "#F5F5F7", label: "Off White" },
  { hex: "#C5A059", label: "Bronze" },
  { hex: "#1E2B4A", label: "Indigo" },
  { hex: "#3D2C1E", label: "Tobacco" },
  { hex: "#2E2E2E", label: "Graphite" },
  { hex: "#4A1C1C", label: "Crimson" },
];

/**
 * ColorPicker
 *
 * Two modes:
 * 1. Quick palette — single-click swatches
 * 2. Free hex input — <input type="color"> native picker
 *
 * Both paths call setColor(hex) → Zustand → GarmentMesh.useFrame.
 */
export function ColorPicker() {
  const colorInputId = useId();
  const color = useCustomizerStore((s) => s.color);
  const setColor = useCustomizerStore((s) => s.setColor);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value),
    [setColor]
  );

  return (
    <div className="color-picker">
      <p className="label-xs" style={{ marginBottom: "1rem" }}>
        Color
      </p>

      {/* Palette swatches */}
      <div className="color-picker__swatches">
        {PALETTE.map(({ hex, label }) => (
          <button
            key={hex}
            onClick={() => setColor(hex)}
            className={`color-swatch${color === hex ? " color-swatch--active" : ""}`}
            style={{ backgroundColor: hex }}
            title={label}
            aria-label={label}
          />
        ))}

        {/* Native color wheel — appended after swatches */}
        <label
          htmlFor={colorInputId}
          className="color-swatch color-swatch--wheel"
          title="Custom color"
          aria-label="Open color wheel"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 0 1 0 20" />
            <path d="M2 12h10" />
          </svg>
          <input
            id={colorInputId}
            type="color"
            value={color}
            onChange={handleInput}
            className="color-picker__native-input"
            aria-label="Custom color picker"
          />
        </label>
      </div>

      {/* Hex readout */}
      <p className="color-picker__readout">
        <span className="label-xs">HEX</span>
        <span style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
          {color.toUpperCase()}
        </span>
      </p>
    </div>
  );
}
