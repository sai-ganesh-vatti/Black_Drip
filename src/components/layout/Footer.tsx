"use client";

import Link from "next/link";
import { NAV_LINKS, SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/constants";

// Lucide removed brand icons — using minimal inline SVGs instead
const IconInstagram = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconLinkedin = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconX = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-charcoal)]">
      <div className="content-container section-padding grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <p className="label-xs text-[var(--color-off-white)]">{SITE_NAME}</p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-[280px]">
            Architecture &amp; Interior Design studio crafting spaces of enduring beauty.
          </p>
          <div className="flex items-center gap-4">
            {[
              { Icon: IconInstagram, href: "#", label: "Instagram" },
              { Icon: IconLinkedin, href: "#", label: "LinkedIn" },
              { Icon: IconX, href: "#", label: "X / Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-bronze)] hover:border-[var(--color-bronze)] transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 md:col-start-6">
          <p className="label-xs mb-6">Navigation</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-off-white)] animated-underline transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3 md:col-start-10">
          <p className="label-xs mb-6">Contact</p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-bronze)] transition-colors duration-300 animated-underline"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-bronze)] transition-colors duration-300"
            >
              {CONTACT_PHONE}
            </a>
            <address className="text-sm text-[var(--color-muted)] not-italic whitespace-pre-line leading-relaxed">
              {CONTACT_ADDRESS}
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="content-container px-[var(--gutter)] pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="label-xs">© {year} {SITE_NAME}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="label-xs hover:text-[var(--color-bronze)] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="label-xs hover:text-[var(--color-bronze)] transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
