
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "muhit.hossain4312@gmail.com",
    icon: Mail,
    href: "mailto:muhit.hossain4312@gmail.com",
  },
  {
    title: "WhatsApp",
    value: "Let's talk",
    icon: MessageCircle,
    href: "https://wa.me/01323770905",
  },
];

const socials = [
  {
    title: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Muhit4312",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/muhitwebdevs/?isSelfProfile=true",
  },
];

const cardClass =
  "group flex min-w-0 items-center gap-3 rounded-xl border border-sky-500/40 bg-black/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/80 hover:bg-sky-500/5 sm:p-5";

const iconClass =
  "flex size-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 transition-colors duration-300 group-hover:border-sky-400/60 group-hover:bg-sky-500/20";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#08090c] text-white"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('/JavaScript-58acbb8a3df78c345bad32c2.jpg')",
          backgroundPosition: "center center",
        }}
      />

      {/* Black overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-black/70"
      />

      {/* Blue ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 size-96 rounded-full bg-[#0084D1]/10 blur-[130px]"
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 md:py-16 lg:px-12">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
            Get in touch
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Contact Us<span className="text-sky-400">.</span>
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
            Have a project in mind? Let’s turn your ideas into reality.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                target={item.title === "WhatsApp" ? "_blank" : undefined}
                rel={
                  item.title === "WhatsApp"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-sky-400/70 bg-sky-500/5 p-4 backdrop-blur-sm sm:p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/60 bg-sky-500/20 text-sky-400">
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-sky-300">
                    {item.title}
                  </h3>

                  <p className="mt-1 break-words text-xs text-white/60">
                    {item.value}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 translate-x-0.5 -translate-y-0.5 text-sky-400"
                />
              </Link>
            );
          })}

          {/* Social links */}
          {socials.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-sky-400/70 bg-sky-500/5 p-4 backdrop-blur-sm sm:p-5"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/60 bg-sky-500/20 text-sky-400">
                  <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-sky-300">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/60">
                    Connect with me
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="shrink-0 translate-x-0.5 -translate-y-0.5 text-sky-400"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
