"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const solutions = [
  { href: "/insurance", label: "Insurance AI", sub: "Claims intake, triage & reminders" },
  { href: "/legal",     label: "Legal AI",      sub: "Contracts, research & matter intake" },
  { href: "/healthcare",label: "Healthcare AI",  sub: "Booking agents & patient triage" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/8"
      style={{ backgroundColor: "var(--color-ink)", borderColor: "var(--color-border)" }}
    >
      <div className="container-content py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="focus-ring rounded flex items-center gap-2">
          <span className="heading-5 font-bold" style={{ color: "var(--color-sand)" }}>
            Futurive
          </span>
          <span className="label" style={{ color: "var(--color-gold)" }}>
            .ai
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {/* Solutions dropdown */}
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen((o) => !o)}
              onBlur={() => setTimeout(() => setSolutionsOpen(false), 150)}
              className="body-small px-4 py-2 rounded-md transition-colors duration-200 focus-ring flex items-center gap-1"
              style={{ color: "var(--color-text-muted)" }}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {solutionsOpen && (
              <div
                className="absolute top-full start-0 mt-2 w-72 rounded-xl border p-2 shadow-2xl animate-fade-in"
                style={{ backgroundColor: "var(--color-ink-mid)", borderColor: "var(--color-border)" }}
                role="menu"
              >
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    role="menuitem"
                    className="flex flex-col gap-0.5 px-4 py-3 rounded-lg transition-colors duration-150 focus-ring"
                    style={{
                      color: pathname === s.href ? "var(--color-gold)" : "var(--color-sand)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-ink-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <span className="font-semibold text-sm">{s.label}</span>
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>{s.sub}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/#how-it-works" current={pathname}>How it works</NavLink>
          <NavLink href="/about" current={pathname}>About</NavLink>
          <NavLink href="/contact" current={pathname}>Contact</NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn btn-primary btn-sm">
            Book a consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus-ring rounded p-2"
          style={{ color: "var(--color-sand)" }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ borderTop: mobileOpen ? "1px solid var(--color-border)" : "none" }}
      >
        <nav className="container-content py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          <p className="label px-4 py-2" style={{ color: "var(--color-text-faint)" }}>Solutions</p>
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className="body-small px-4 py-3 rounded-lg focus-ring"
              style={{ color: "var(--color-sand)" }}
            >
              {s.label}
            </Link>
          ))}
          <div className="my-2" style={{ borderTop: "1px solid var(--color-border)" }} />
          <Link href="/#how-it-works" onClick={() => setMobileOpen(false)} className="body-small px-4 py-3 rounded-lg focus-ring" style={{ color: "var(--color-sand)" }}>How it works</Link>
          <Link href="/about"         onClick={() => setMobileOpen(false)} className="body-small px-4 py-3 rounded-lg focus-ring" style={{ color: "var(--color-sand)" }}>About</Link>
          <Link href="/contact"       onClick={() => setMobileOpen(false)} className="body-small px-4 py-3 rounded-lg focus-ring" style={{ color: "var(--color-sand)" }}>Contact</Link>
          <div className="mt-3 px-4">
            <Link href="/contact" className="btn btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
              Book a consultation
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children, current }: { href: string; children: React.ReactNode; current: string }) {
  const isActive = current === href || current === href.replace("/#", "#");
  return (
    <Link
      href={href}
      className="body-small px-4 py-2 rounded-md transition-colors duration-200 focus-ring"
      style={{ color: isActive ? "var(--color-gold)" : "var(--color-text-muted)" }}
    >
      {children}
    </Link>
  );
}
