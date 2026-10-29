"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const CATEGORIES = ["All", "Architecture", "Interior Design", "Master Planning"] as const;
type FilterCategory = (typeof CATEGORIES)[number];

export default function WorkPage() {
  const [active, setActive] = useState<FilterCategory>("All");

  const filtered =
    active === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) =>
          p.category.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <div className="pt-[72px]">
      {/* Page header */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="content-container">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUp} className="bronze-line" />
            <motion.p variants={fadeUp} className="label-xs mb-4">Selected Work</motion.p>
            <motion.h1 variants={fadeUp} className="display-lg max-w-2xl">
              Projects &amp; Installations
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[72px] z-30 bg-[var(--color-obsidian)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="content-container px-[var(--gutter)] flex items-center gap-6 h-14 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(cat)}
              className={`
                shrink-0 label-xs transition-colors duration-300
                ${active === cat
                  ? "text-[var(--color-bronze)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-off-white)]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="section-padding">
        <div className="content-container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden"
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <div className={`w-full img-placeholder ${project.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <div className="absolute inset-0 bg-[var(--color-obsidian)]/0 group-hover:bg-[var(--color-obsidian)]/50 transition-all duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="label-xs bronze-text mb-1">{project.category}</p>
                    <h2 className="heading-sm font-serif text-[var(--color-off-white)]">{project.title}</h2>
                    <p className="text-xs text-[var(--color-muted)] mt-1">
                      {project.location} · {project.year}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 bg-[var(--color-bronze)] flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-[var(--color-obsidian)]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-muted)] py-24 label-xs">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
