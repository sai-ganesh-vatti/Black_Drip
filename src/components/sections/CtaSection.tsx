"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, drawLine } from "@/lib/animations";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="section-padding bg-[var(--color-charcoal)] border-t border-[var(--color-border)] overflow-hidden"
      aria-label="Call to action"
    >
      <div className="content-container relative">
        {/* Decorative large background numeral */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] leading-none font-serif text-[var(--color-surface)] select-none pointer-events-none"
          aria-hidden="true"
        >
          F
        </span>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 max-w-2xl"
        >
          <motion.span variants={fadeUp} className="bronze-line" />
          <motion.p variants={fadeUp} className="label-xs mb-6">
            Ready to Begin?
          </motion.p>
          <motion.h2 variants={fadeUp} className="display-lg mb-8">
            Let&apos;s build<br />
            something<br />
            <em className="italic text-[var(--color-bronze)]">extraordinary.</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[var(--color-muted)] leading-relaxed mb-12 max-w-md">
            Whether you have a site, a vision, or simply a feeling —
            reach out. Every great project begins with a conversation.
          </motion.p>

          {/* Animated divider */}
          <motion.div
            variants={drawLine}
            className="h-px bg-[var(--color-bronze)] mb-12 w-full"
          />

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-3
                text-[var(--color-off-white)] hover:text-[var(--color-bronze)]
                transition-colors duration-300
              "
            >
              <span className="display-md font-serif">Start a Conversation</span>
              <div className="w-12 h-12 border border-[var(--color-border)] group-hover:border-[var(--color-bronze)] flex items-center justify-center transition-colors duration-300 shrink-0">
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
