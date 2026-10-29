"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ProjectsGrid() {
  return (
    <section id="projects" className="section-padding" aria-label="Featured projects">
      <div className="content-container">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <motion.span variants={fadeUp} className="bronze-line" />
            <motion.p variants={fadeUp} className="label-xs mb-3">Selected Work</motion.p>
            <motion.h2 variants={fadeUp} className="display-md">
              Recent Projects
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link
              href="/work"
              className="group flex items-center gap-2 label-xs text-[var(--color-muted)] hover:text-[var(--color-bronze)] transition-colors"
            >
              View All Projects
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? "md:col-span-1" : "md:col-span-1"
              }`}
            >
              <Link href={`/work/${project.slug}`} className="block">
                {/* Image placeholder */}
                <div
                  className={`
                    w-full img-placeholder overflow-hidden
                    ${project.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[16/10]"}
                  `}
                >
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--color-obsidian)]/0 group-hover:bg-[var(--color-obsidian)]/40 transition-all duration-500" />
                </div>

                {/* Info strip */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="label-xs bronze-text mb-1">{project.category}</p>
                      <h3 className="heading-sm text-[var(--color-off-white)] font-serif">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[var(--color-muted)] mt-1">
                        {project.location} · {project.year}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 rounded-full border border-[var(--color-bronze)] flex items-center justify-center">
                        <ArrowUpRight size={16} className="text-[var(--color-bronze)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
