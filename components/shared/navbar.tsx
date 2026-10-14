
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
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
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="shrink-0 text-xl font-bold tracking-tight text-foreground"
        >
          Muhit<span className="text-primary">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            disabled={!mounted}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDark ? "Light mode" : "Dark mode"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-foreground disabled:opacity-50 sm:size-10"
          >
            {mounted && isDark ? (
              <Sun size={17} strokeWidth={1.8} />
            ) : (
              <Moon size={17} strokeWidth={1.8} />
            )}
          </button>

          {/* Resume */}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90 sm:inline-flex"
          >
            Resume
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent md:hidden sm:size-10"
          >
            {isOpen ? (
              <X size={19} strokeWidth={1.8} />
            ) : (
              <Menu size={19} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border/70 bg-background px-5 py-4 sm:px-8 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:hidden"
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
