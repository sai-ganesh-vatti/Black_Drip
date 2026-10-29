"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="section-padding border-t border-[var(--color-border)]"
      aria-label="Client testimonials"
    >
      <div className="content-container">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp} className="bronze-line" />
          <motion.p variants={fadeUp} className="label-xs mb-12">
            Client Voices
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Quote area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Quote
                  size={40}
                  className="text-[var(--color-bronze)]/30 mb-8"
                  strokeWidth={1}
                />
                <blockquote className="display-md font-serif italic text-[var(--color-off-white)] leading-snug mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-medium text-[var(--color-off-white)]">
                    {current.author}
                  </p>
                  <p className="label-xs mt-1">{current.title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-6">
            {/* Progress indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  id={`testimonial-dot-${i}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-300 ${
                    i === index
                      ? "w-8 h-0.5 bg-[var(--color-bronze)]"
                      : "w-2 h-0.5 bg-[var(--color-border)]"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                id="testimonial-prev"
                onClick={prev}
                aria-label="Previous testimonial"
                className="
                  w-11 h-11 border border-[var(--color-border)]
                  flex items-center justify-center
                  hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)]
                  text-[var(--color-muted)] transition-all duration-300
                "
              >
                <ChevronLeft size={16} />
              </button>
              <button
                id="testimonial-next"
                onClick={next}
                aria-label="Next testimonial"
                className="
                  w-11 h-11 border border-[var(--color-border)]
                  flex items-center justify-center
                  hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)]
                  text-[var(--color-muted)] transition-all duration-300
                "
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <p className="label-xs text-[var(--color-muted)]">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
