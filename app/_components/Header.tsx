"use client";

import { useState } from "react";
import { useT } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useT();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#process", label: t.nav.process },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a
          className="flex items-center gap-3 group"
          aria-label={t.nav.home}
          href="#hero"
        >
          <svg
            className="w-8 h-8 text-primary group-hover:animate-pulse-slow"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span className="font-heading font-bold text-xl tracking-wide text-white">
            Azizbek <span className="text-primary">Sultonov</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white bg-transparent border border-primary rounded hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
            href="#contact"
          >
            {t.nav.hireMe}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
            aria-label={t.nav.toggleMenu}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="block py-2 px-4 hover:bg-white/5 rounded text-lg"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="block py-3 px-4 bg-primary/10 text-primary border border-primary/30 rounded text-center font-bold mt-2"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.hireMe}
          </a>
        </div>
      )}
    </header>
  );
}
