"use client";

import { useEffect, useRef } from "react";

/**
 * Smooth custom cursor — bronze dot + ring follower.
 * Only activates on pointer-capable devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let rafId: number;
    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dotRef.current?.style.setProperty("width", "0px");
      dotRef.current?.style.setProperty("height", "0px");
      ringRef.current?.style.setProperty("width", "64px");
      ringRef.current?.style.setProperty("height", "64px");
      ringRef.current?.style.setProperty("border-color", "var(--color-bronze)");
    };
    const onLeaveLink = () => {
      dotRef.current?.style.setProperty("width", "8px");
      dotRef.current?.style.setProperty("height", "8px");
      ringRef.current?.style.setProperty("width", "36px");
      ringRef.current?.style.setProperty("height", "36px");
      ringRef.current?.style.setProperty("border-color", "rgba(197,160,89,0.5)");
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
