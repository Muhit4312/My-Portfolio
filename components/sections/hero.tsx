"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-72px)] scroll-mt-20 items-center overflow-hidden bg-background text-foreground"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 size-96 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12">
        {/* Left Content */}
        <div className="order-2 max-w-xl md:order-1">


          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-5xl">
            Hi, I'm Muhit Ahmed
            <span className="mt-4 block text-lg font-semibold sm:text-xl lg:text-2xl">
              <Typewriter
                words={[
                  "Full-Stack Web Developer",
                  "Full-Stack Engineer",
                  "Backend Developer",
                  "WordPress Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 sm:text-lg sm:leading-8">
            I develop scalable web applications using Next.js, TypeScript, React, and Node.js. I focus on writing clean, maintainable code, solving real-world problems, and building reliable digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/resume.pdf"
              download
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download size={17} />
              Download Resume
            </Link>


            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-y-2 border-primary px-5 text-sm font-semibold text-foreground transition-colors hover:border-sky-500 hover:text-primary"
            >
              Get In Touch
              <ArrowUpRight size={17} />
            </Link>

          </div>

          {/* Social Links */}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">
              Connect with me
            </span>

            <Link
              href="https://github.com/Muhit4312"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <FaGithub className="size-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/muhitwebdevs/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <FaLinkedinIn className="size-5" />
            </Link>

            <Link
              href="mailto:muhit.hossain4312@gmail.com"
              aria-label="Send email"
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <Mail className="size-5" />
            </Link>
          </div>


        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex justify-center md:order-2 lg:justify-end">
          <div className="relative">
            <div className="absolute inset-5 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative size-64 overflow-hidden rounded-full border border-border bg-muted shadow-2xl shadow-primary/10 sm:size-80 lg:size-[400px]">
              <Image
                src="/pic-8443a0c8-ad66-4cf8-be48-de205966232e.jpg"
                alt="Muhit Ahmed — Full-Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 380px"
                className="object-cover"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 size-28 rounded-full border border-primary/30"
            />

            <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-xl border border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur sm:left-0 sm:translate-x-0">
              <p className="text-sm font-semibold text-foreground">
                Full-Stack Developer
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Building web applications with purpose
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}