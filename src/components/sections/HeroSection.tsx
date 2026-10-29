"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!videoRef.current) return;
      const y = window.scrollY * 0.35;
      videoRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex flex-col justify-end overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image placeholder with gradient */}
      <div
        ref={videoRef}
        className="
          absolute inset-0 img-placeholder
          [background-image:linear-gradient(160deg,#1A1A1A_0%,#0D0D0D_40%,#111108_100%)]
        "
        aria-hidden="true"
      />

      {/* Gradient veil */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/30 to-transparent"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 content-container px-[var(--gutter)] pb-16 md:pb-24">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="label-xs bronze-text mb-6"
          >
            Architecture & Interior Design Studio — Est. 2006
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="display-xl text-[var(--color-off-white)] mb-8"
          >
            Space that{" "}
            <em className="italic text-[var(--color-bronze)]">endures.</em>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[var(--color-muted)] max-w-xl leading-relaxed mb-12"
          >
            We design residences, cultural institutions, and commercial environments
            that balance material richness with spatial precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link href="/work" className="btn-primary group flex items-center gap-2">
              View Our Work
              <ArrowDownRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
              />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-[var(--gutter)] flex flex-col items-center gap-3"
      >
        <span className="label-xs muted-text rotate-90 origin-center">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-bronze)] to-transparent" />
      </motion.div>
    </section>
  );
}
