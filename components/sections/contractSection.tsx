import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Let's chat",
    href: "https://wa.me/YOUR_PHONE_NUMBER",
    icon: MessageCircle,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-border/60 bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 -z-10 size-80 rounded-full bg-primary/10 blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Have an idea?
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch<span className="text-primary">.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            Have a project in mind, want to collaborate, or just want to say
            hello? I would love to hear from you.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/60 p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Send size={22} />
              </div>

              <h3 className="mt-6 max-w-lg text-2xl font-bold leading-snug sm:text-3xl">
                Let&apos;s build something
                <span className="text-primary"> meaningful.</span>
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                I am interested in exciting projects, collaboration, and
                opportunities to create useful digital experiences.
              </p>

              <Link
                href="mailto:your.email@example.com?subject=Project%20Inquiry"
                className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a Conversation
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Contact Information</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Choose your preferred way to reach me.
            </p>

            <div className="mt-6 space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      item.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/60 p-3.5 transition-colors hover:border-primary/40"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.08] text-primary">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 truncate text-sm font-medium">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-muted-foreground"
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 border-t border-border/60 pt-5">
              <p className="text-xs font-medium text-muted-foreground">
                Find me online
              </p>

              <div className="mt-3 flex gap-3">
                <Link
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <FaGithub size={18} />
                </Link>

                <Link
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <FaLinkedinIn size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}