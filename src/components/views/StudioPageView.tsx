"use client";

import { motion } from "framer-motion";
import { TEAM_MEMBERS, STUDIO_STATS } from "@/lib/constants";
import { fadeUp, staggerContainer, slideInLeft } from "@/lib/animations";

export function StudioPageView() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUp} className="bronze-line" />
            <motion.p variants={fadeUp} className="label-xs mb-4">The Studio</motion.p>
            <motion.h1 variants={slideInLeft} className="display-lg">
              Built on Craft,<br />
              <em className="italic text-[var(--color-bronze)]">Driven by Vision.</em>
            </motion.h1>
          </motion.div>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-end gap-6"
          >
            <motion.p variants={fadeUp} className="text-base text-[var(--color-muted)] leading-relaxed">
              FORMA Studio was founded with a simple conviction: that the built
              environment shapes human experience in profound, lasting ways.
              Eighteen years on, that belief remains the compass for every project
              we undertake — from a Montauk cliffside residence to a cultural pavilion
              in Oslo.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base text-[var(--color-muted)] leading-relaxed">
              Our team of twenty-two spans architecture, interior design, landscape,
              and product design — a deliberately small, focused practice that allows
              each principal to be personally invested in every commission.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Studio image placeholder */}
      <section className="w-full h-[60vh] img-placeholder" aria-hidden="true" />

      {/* Stats */}
      <section className="section-padding border-b border-[var(--color-border)] bg-[var(--color-charcoal)]">
        <div className="content-container grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]">
          {STUDIO_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[var(--color-charcoal)] p-10"
            >
              <p className="display-md text-[var(--color-bronze)] mb-2">{stat.value}</p>
              <p className="label-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="content-container">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="bronze-line" />
            <motion.p variants={fadeUp} className="label-xs mb-3">The People</motion.p>
            <motion.h2 variants={fadeUp} className="display-md">Leadership</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                {/* Portrait placeholder */}
                <div className="w-full aspect-[3/4] img-placeholder mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-bronze)]/0 group-hover:bg-[var(--color-bronze)]/5 transition-all duration-500" />
                </div>
                <div className="h-px bg-[var(--color-border)] mb-5" />
                <h3 className="heading-sm font-serif mb-1">{member.name}</h3>
                <p className="label-xs bronze-text mb-4">{member.role}</p>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[var(--color-charcoal)] border-t border-[var(--color-border)]">
        <div className="content-container">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16"
          >
            <motion.span variants={fadeUp} className="bronze-line" />
            <motion.p variants={fadeUp} className="label-xs mb-3">How We Work</motion.p>
            <motion.h2 variants={fadeUp} className="display-md max-w-lg">Our Process</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
            {[
              { step: "01", title: "Discovery", desc: "Deep-listening sessions to understand your life, aspirations, and the unique character of the site." },
              { step: "02", title: "Concept", desc: "We develop three distinct spatial narratives — each a coherent response to what we've heard." },
              { step: "03", title: "Design Development", desc: "The selected concept evolves into a complete, detailed design across all scales and systems." },
              { step: "04", title: "Delivery", desc: "We steward construction through to completion, ensuring the built result honors the design intent." },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="p-8"
              >
                <p className="label-xs bronze-text mb-6">{phase.step}</p>
                <h3 className="heading-sm font-serif mb-4">{phase.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
