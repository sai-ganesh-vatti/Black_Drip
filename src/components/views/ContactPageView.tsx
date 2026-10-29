"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Input, Textarea, Select, Checkbox } from "@/components/ui/FormFields";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

const PROJECT_TYPE_OPTIONS = [
  { value: "architecture", label: "Architecture" },
  { value: "interior-design", label: "Interior Design" },
  { value: "master-planning", label: "Master Planning" },
  { value: "bespoke", label: "Bespoke Furnishings" },
  { value: "other", label: "Other / Undecided" },
];

const BUDGET_OPTIONS = [
  { value: "under-250k", label: "Under $250,000" },
  { value: "250k-1m", label: "$250K – $1M" },
  { value: "1m-5m", label: "$1M – $5M" },
  { value: "5m-plus", label: "$5M+" },
  { value: "undisclosed", label: "Prefer not to say" },
];

export function ContactPageView() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Replace with actual API call / form submission
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

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
            <motion.p variants={fadeUp} className="label-xs mb-4">Get in Touch</motion.p>
            <motion.h1 variants={fadeUp} className="display-lg max-w-xl">
              Let&apos;s build something{" "}
              <em className="italic text-[var(--color-bronze)]">together.</em>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Content grid */}
      <section className="section-padding">
        <div className="content-container grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact info column */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-10"
          >
            {/* Address */}
            <motion.div variants={fadeUp}>
              <p className="label-xs mb-4">Studio</p>
              <address className="text-sm text-[var(--color-muted)] not-italic leading-relaxed whitespace-pre-line">
                {CONTACT_ADDRESS}
              </address>
            </motion.div>

            <div className="h-px bg-[var(--color-border)]" />

            {/* Email */}
            <motion.div variants={fadeUp}>
              <p className="label-xs mb-4">Email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-bronze)] animated-underline transition-colors duration-300"
              >
                {CONTACT_EMAIL}
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp}>
              <p className="label-xs mb-4">Phone</p>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[\s\-().]/g, "")}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-bronze)] transition-colors duration-300"
              >
                {CONTACT_PHONE}
              </a>
            </motion.div>

            <div className="h-px bg-[var(--color-border)]" />

            {/* Office hours */}
            <motion.div variants={fadeUp}>
              <p className="label-xs mb-4">Hours</p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Monday – Friday<br />
                9:00 AM – 6:00 PM EST
              </p>
            </motion.div>
          </motion.div>

          {/* Form column */}
          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-6 py-16"
              >
                <CheckCircle2 size={48} className="text-[var(--color-bronze)]" strokeWidth={1} />
                <h2 className="display-md font-serif">Message received.</h2>
                <p className="text-base text-[var(--color-muted)] leading-relaxed max-w-md">
                  Thank you for reaching out. A member of our team will be in
                  touch within two business days.
                </p>
              </motion.div>
            ) : (
              <motion.form
                id="contact-form"
                variants={staggerContainer(0.08)}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-8"
              >
                {/* Name row */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    id="contact-first-name"
                    label="First Name"
                    placeholder="Elara"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                  />
                  <Input
                    id="contact-last-name"
                    label="Last Name"
                    placeholder="Voss"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                  />
                </motion.div>

                {/* Contact row */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    id="contact-email"
                    label="Email Address"
                    type="email"
                    placeholder="hello@example.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <Input
                    id="contact-phone"
                    label="Phone (optional)"
                    type="tel"
                    placeholder="+1 212 555 0174"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </motion.div>

                {/* Project type + budget */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Select
                    id="contact-project-type"
                    label="Project Type"
                    options={PROJECT_TYPE_OPTIONS}
                    error={errors.projectType?.message}
                    {...register("projectType")}
                  />
                  <Select
                    id="contact-budget"
                    label="Budget Range"
                    options={BUDGET_OPTIONS}
                    error={errors.budget?.message}
                    {...register("budget")}
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeUp}>
                  <Textarea
                    id="contact-message"
                    label="Tell Us About Your Project"
                    placeholder="Share your vision, the site, your timeline, or simply how you feel about the space you're imagining..."
                    error={errors.message?.message}
                    {...register("message")}
                  />
                </motion.div>

                {/* Consent */}
                <motion.div variants={fadeUp}>
                  <Checkbox
                    id="contact-consent"
                    label={
                      <>
                        I agree to FORMA Studio&apos;s{" "}
                        <a href="/privacy" className="text-[var(--color-bronze)] animated-underline">
                          Privacy Policy
                        </a>{" "}
                        and consent to being contacted about my inquiry.
                      </>
                    }
                    error={errors.consent?.message}
                    {...register("consent")}
                  />
                </motion.div>

                {/* Submit */}
                <motion.div variants={fadeUp}>
                  <Button
                    id="contact-submit"
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
