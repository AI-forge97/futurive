"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800 sticky top-0" style={{zIndex: 'var(--z-sticky)'}}>
      <div className="container-content py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center focus-ring rounded">
            <span className="heading-5 gradient-text">
              Futurive.ai
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <ul className="flex gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="body-small text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </nav>

        {/* Mobile Menu Button & Theme Switch */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitch />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus-ring"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-content pb-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block body-base text-gray-800 dark:text-white px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
