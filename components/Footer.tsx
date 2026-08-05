"use client";

import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ backgroundColor: "var(--color-ink-mid)", borderColor: "var(--color-border)" }}
    >
      <div className="container-content py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-1 focus-ring rounded mb-4">
              <span className="heading-5 font-bold" style={{ color: "var(--color-sand)" }}>Futurive</span>
              <span className="label" style={{ color: "var(--color-gold)" }}>.ai</span>
            </Link>
            <p className="body-small max-w-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              AI voice agents and triage systems for insurance, legal, and healthcare — in English and Arabic.
              Based in Dubai Silicon Oasis.
            </p>
            <p className="body-small mt-4" style={{ color: "var(--color-text-faint)" }}>
              Dubai Digital Park, DSO · contact@futurive.ai
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p className="label mb-4" style={{ color: "var(--color-gold)" }}>Solutions</p>
            <ul className="space-y-2">
              {[
                { href: "/insurance",  label: "Insurance AI" },
                { href: "/legal",      label: "Legal AI" },
                { href: "/healthcare", label: "Healthcare AI" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="body-small transition-colors duration-150 focus-ring rounded" style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="label mb-4" style={{ color: "var(--color-gold)" }}>Company</p>
            <ul className="space-y-2">
              {[
                { href: "/about",   label: "About" },
                { href: "/#how-it-works", label: "How it works" },
                { href: "/contact", label: "Contact" },
                { href: "https://calendly.com/contact-futurive/30min", label: "Book a call", external: true },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="body-small transition-colors duration-150 focus-ring rounded"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-sand)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="body-small" style={{ color: "var(--color-text-faint)" }}>
            &copy; {year} Futurive FZ-LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/company/futurive-ai"
              target="_blank" rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring rounded transition-colors duration-150"
              style={{ color: "var(--color-text-faint)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/futurive_ai"
              target="_blank" rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="focus-ring rounded transition-colors duration-150"
              style={{ color: "var(--color-text-faint)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a
              href="mailto:contact@futurive.ai"
              aria-label="Email"
              className="focus-ring rounded transition-colors duration-150"
              style={{ color: "var(--color-text-faint)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-faint)")}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
