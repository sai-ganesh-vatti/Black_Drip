"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STUDIO_STATS } from "@/lib/constants";
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

export function StudioSection() {
  return (
    <section
      id="studio"
      className="section-padding border-t border-[var(--color-border)]"
      aria-label="About the studio"
    >
      <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center"
        >
          <motion.span variants={fadeUp} className="bronze-line" />
          <motion.p variants={fadeUp} className="label-xs mb-4">The Studio</motion.p>
          <motion.h2 variants={slideInLeft} className="display-md mb-8">
            Precision in<br />
            <em className="italic text-[var(--color-bronze)]">every detail.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[var(--color-muted)] leading-relaxed mb-6 max-w-md">
            Founded in New York and operating globally, FORMA Studio brings together
            architects, interior designers, and material specialists united by a shared
            belief: that exceptional space changes how people feel, work, and live.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-[var(--color-muted)] leading-relaxed mb-10 max-w-md">
            Our process is rigorous and deeply collaborative — every project is treated as
            a unique problem demanding an original solution, never a formula.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/studio"
              className="group flex items-center gap-2 label-xs text-[var(--color-off-white)] hover:text-[var(--color-bronze)] transition-colors"
            >
              Meet the Team
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Stats + Image */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-8"
        >
          {/* Studio image placeholder */}
          <motion.div
            variants={slideInRight}
            className="w-full aspect-[4/3] img-placeholder rounded-sm overflow-hidden"
          />

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-[var(--color-border)]">
            {STUDIO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="bg-[var(--color-obsidian)] p-6 group hover:bg-[var(--color-charcoal)] transition-colors duration-300"
              >
                <p className="display-md text-[var(--color-bronze)] mb-1">{stat.value}</p>
                <p className="label-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
