"use client";

import { motion } from "framer-motion";
import { Building2, Layers, Map, Armchair } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const IconMap: Record<string, React.ElementType> = {
  Building2,
  Layers,
  Map,
  Armchair,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-[var(--color-charcoal)]"
      aria-label="Our services"
    >
      <div className="content-container">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.span variants={fadeUp} className="bronze-line" />
          <motion.p variants={fadeUp} className="label-xs mb-3">
            What We Do
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-md max-w-lg">
            Services &amp; Expertise
          </motion.h2>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-[var(--color-border)]"
        >
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon] ?? Building2;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 hover:bg-[var(--color-surface)] px-4 -mx-4 transition-colors duration-300 rounded-sm cursor-pointer"
              >
                {/* Number */}
                <span className="label-xs text-[var(--color-bronze)] w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[var(--color-border)] group-hover:border-[var(--color-bronze)] transition-colors duration-300 rounded-sm">
                  <Icon size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-bronze)] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="heading-sm font-serif shrink-0 w-48">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-px h-8 bg-[var(--color-bronze)]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
