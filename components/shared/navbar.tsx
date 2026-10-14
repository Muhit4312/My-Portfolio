
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Download,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

const BRAND = "#1A78B1";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        {/* Left: Logo and Name */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5 text-foreground"
        >
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:bg-[#1A78B1]/15"
            style={{
              borderColor: `${BRAND}55`,
              backgroundColor: `${BRAND}12`,
              color: BRAND,
            }}
          >
            <Code2 size={21} strokeWidth={2} />
          </span>

          <span className="whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl">
            Muhit <span style={{ color: BRAND }}>Ahmed</span>
          </span>
        </Link>

        {/* Right: Navigation, Divider, Theme and Resume */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {/* Navigation Links */}
          <div className="flex items-center gap-4 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[#1A78B1] xl:text-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Brand-colored Divider */}
          <div
            aria-hidden="true"
            className="h-9 w-px shrink-0"
            style={{
              background: `linear-gradient(to bottom, transparent, ${BRAND}, transparent)`,
            }}
          />

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            disabled={!mounted}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDark ? "Light mode" : "Dark mode"}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-sky-200 text-muted-foreground transition-all duration-200 hover:border-[#1A78B1]/60 hover:bg-[#1A78B1]/10 hover:text-[#1A78B1] disabled:opacity-50"
          >
            {mounted && isDark ? (
              <Sun size={18} strokeWidth={1.9} />
            ) : (
              <Moon size={18} strokeWidth={1.9} />
            )}
          </button>

          
          {/* Resume Button */}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-[#1A78B1]/40 bg-[#1A78B1] px-4 text-sm font-semibold text-white shadow-sm shadow-[#1A78B1]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#176B9E] hover:shadow-lg hover:shadow-[#1A78B1]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A78B1] focus-visible:ring-offset-2"
          >
            Resume
            <Download
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          
        </div>

        {/* Mobile Actions */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            disabled={!mounted}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[#1A78B1]/60 hover:text-[#1A78B1] disabled:opacity-50"
          >
            {mounted && isDark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-[#1A78B1]/60 hover:text-[#1A78B1]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border/70 bg-background/95 px-5 py-4 backdrop-blur-xl sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-[#1A78B1]/10 hover:text-[#1A78B1]"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="my-3 h-px w-full"
              style={{
                background: `linear-gradient(to right, transparent, ${BRAND}80, transparent)`,
              }}
            />

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              Download Resume
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
