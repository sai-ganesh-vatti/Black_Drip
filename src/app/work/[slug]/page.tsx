"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="pt-[72px]">
      {/* Back link */}
      <div className="content-container px-[var(--gutter)] pt-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 label-xs text-[var(--color-muted)] hover:text-[var(--color-bronze)] transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          All Projects
        </Link>
      </div>

      {/* Hero image */}
      <section className="mt-8 w-full h-[70vh] img-placeholder" aria-hidden="true" />

      {/* Project header */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="label-xs bronze-text mb-4">
              {project.category}
            </motion.p>
            <motion.h1 variants={fadeUp} className="display-lg">
              {project.title}
            </motion.h1>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-end gap-6"
          >
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {[
                { Icon: MapPin, label: "Location", value: project.location },
                { Icon: Calendar, label: "Year", value: project.year },
                { Icon: Tag, label: "Type", value: project.category },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <Icon size={14} className="text-[var(--color-bronze)] shrink-0" />
                  <span className="label-xs w-20">{label}</span>
                  <span className="text-sm text-[var(--color-muted)]">{value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project description */}
      <section className="section-padding">
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-[var(--color-muted)] leading-relaxed"
          >
            A landmark project exploring the intersection of structural honesty
            and material warmth. Conceived as a dialogue between landscape and
            interior, this commission pushed every discipline within the studio
            to find a new level of resolution.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-[var(--color-muted)] leading-relaxed"
          >
            The palette — pale limestone, raw blackened steel, and reclaimed
            oak — speaks to the site's coastal character while providing the
            quiet backdrop against which life unfolds without ceremony.
          </motion.p>
        </div>
      </section>

      {/* Image gallery placeholders */}
      <section className="section-padding pt-0">
        <div className="content-container flex flex-col gap-4">
          <div className="w-full aspect-[16/9] img-placeholder" />
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square img-placeholder" />
            <div className="aspect-square img-placeholder" />
          </div>
          <div className="w-full aspect-[21/9] img-placeholder" />
        </div>
      </section>

      {/* Next project */}
      <section className="section-padding bg-[var(--color-charcoal)] border-t border-[var(--color-border)]">
        <div className="content-container text-center">
          <p className="label-xs mb-4">Next Project</p>
          <Link href="/work" className="display-md font-serif hover:text-[var(--color-bronze)] transition-colors">
            Back to All Work →
          </Link>
        </div>
      </section>
    </div>
  );
}
