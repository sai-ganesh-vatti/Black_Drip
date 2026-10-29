"use client";

import { motion } from "framer-motion";
import { Building2, Layers, Map, Armchair } from "lucide-react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const IconMap: Record<string, React.ElementType> = { Building2, Layers, Map, Armchair };

const PROCESS_STEPS = [
  "Initial Consultation & Site Visit",
  "Schematic Design & Concept Presentation",
  "Design Development & Material Selection",
  "Construction Documentation",
  "Contractor Bidding & Procurement",
  "Construction Administration & Site Visits",
  "Final Walkthrough & Handover",
];

export function ServicesPageView() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="content-container">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUp} className="bronze-line" />
            <motion.p variants={fadeUp} className="label-xs mb-4">What We Offer</motion.p>
            <motion.h1 variants={fadeUp} className="display-lg max-w-2xl">
              Services &amp;<br />
              <em className="italic text-[var(--color-bronze)]">Expertise</em>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding">
        <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {SERVICES.map((service, i) => {
            const Icon = IconMap[service.icon] ?? Building2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 border border-[var(--color-border)] hover:border-[var(--color-bronze)]/30 transition-colors duration-300 group"
              >
                {/* Image placeholder */}
                <div className="w-full aspect-[16/9] img-placeholder mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-obsidian)]/0 group-hover:bg-[var(--color-obsidian)]/20 transition-all duration-500" />
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-bronze)] transition-colors duration-300">
                    <Icon size={18} className="text-[var(--color-muted)] group-hover:text-[var(--color-bronze)] transition-colors duration-300" />
                  </div>
                  <h2 className="heading-sm font-serif">{service.title}</h2>
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-padding bg-[var(--color-charcoal)] border-t border-[var(--color-border)]">
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bronze-line"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-xs mb-4"
            >
              How a Project Unfolds
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="display-md mb-6"
            >
              The Design<br />
              <em className="italic text-[var(--color-bronze)]">Journey</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm"
            >
              Our seven-phase process ensures every decision is intentional,
              every material considered, and every detail resolved — before a
              single stone is laid.
            </motion.p>
          </div>

          <div className="flex flex-col gap-0 relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-0 bottom-0 w-px bg-[var(--color-border)]" />
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-6 pb-8 relative"
              >
                <div className="w-6 h-6 rounded-full border border-[var(--color-border)] bg-[var(--color-charcoal)] flex items-center justify-center shrink-0 mt-0.5 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-bronze)]" />
                </div>
                <div>
                  <p className="label-xs bronze-text mb-1">{String(i + 1).padStart(2, "0")}</p>
                  <p className="text-sm text-[var(--color-off-white)]">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-[var(--color-border)]">
        <div className="content-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="display-md mb-6">
              Ready to discuss your <em className="italic text-[var(--color-bronze)]">project?</em>
            </h2>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-bronze">
              Get in Touch
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
