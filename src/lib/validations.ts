import { z } from "zod";

// ─── Contact Form Schema ──────────────────────────────────────────────────────

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters.")
    .max(50),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters.")
    .max(50),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?[1-9]\d{1,14}$/.test(val.replace(/[\s\-().]/g, "")),
      "Please enter a valid phone number."
    ),
  projectType: z.enum(
    ["architecture", "interior-design", "master-planning", "bespoke", "other"],
    { errorMap: () => ({ message: "Please select a project type." }) }
  ),
  budget: z.enum(
    ["under-250k", "250k-1m", "1m-5m", "5m-plus", "undisclosed"],
    { errorMap: () => ({ message: "Please select a budget range." }) }
  ),
  message: z
    .string()
    .min(20, "Please share at least 20 characters about your project.")
    .max(2000),
  consent: z
    .boolean()
    .refine((val) => val === true, "You must accept the privacy policy."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// ─── Newsletter Schema ────────────────────────────────────────────────────────

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
