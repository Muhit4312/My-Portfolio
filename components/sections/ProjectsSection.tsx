
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "DistrictFix",
    category: "Service Management Platform",
    image: "/projects/districtfix.png",
    description:
      "A service management platform designed to organize requests, track progress, and improve service delivery through a clean dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    features: [
      "User authentication and role-based access",
      "Service request management",
      "Responsive dashboard and analytics",
      "Clean and intuitive user interface",
    ],
    demo: "https://example.com",
    github: "https://github.com/YOUR_USERNAME/districtfix",
  },
  {
    title: "RentNest",
    category: "Rental Property Platform",
    image: "/projects/rentnest.png",
    description:
      "A rental property platform that helps users explore available properties, review details, and discover suitable rental options.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
    features: [
      "Property listings and search",
      "Property details and filtering",
      "Responsive property cards",
      "Organized rental discovery experience",
    ],
    demo: "https://example.com",
    github: "https://github.com/YOUR_USERNAME/rentnest",
  },
  {
    title: "Portfolio Website",
    category: "Personal Portfolio",
    image: "/projects/portfolio.png",
    description:
      "A modern developer portfolio showcasing technical skills, professional experience, and selected projects with a distinctive dark aesthetic.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide"],
    features: [
      "Responsive and accessible layout",
      "Interactive project details",
      "Smooth navigation between sections",
      "Contact information and social links",
    ],
    demo: "https://example.com",
    github: "https://github.com/YOUR_USERNAME/portfolio",
  },
];

export default function ProjectsSectionOld() {
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/[0.06] bg-[#030711] px-5 py-20 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Selected work
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
              <span className="text-sky-400">.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              A few projects that reflect my development skills,
              creativity, and approach to solving problems.
            </p>
          </div>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-violet-400 sm:inline-flex"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-[#24334b] bg-gradient-to-b from-[#111c30] to-[#080f1e] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-[0_12px_40px_rgba(124,58,237,0.12)]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
                className="relative m-3 block aspect-[16/10] w-[calc(100%-1.5rem)] overflow-hidden rounded-lg border border-white/[0.08] bg-[#050b16] text-left"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/70 px-2.5 py-1 text-[10px] font-medium text-violet-200 backdrop-blur">
                  PROJECT 0{index + 1}
                </span>
              </button>

              <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
                <p className="text-[11px] font-medium text-violet-400">
                  {project.category}
                </p>

                <h3 className="mt-1.5 text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[#29364b] bg-[#0c1526] px-2 py-1 text-[10px] text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-3 text-xs font-semibold text-white transition hover:brightness-110"
                  >
                    View Details <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#354158] px-3 text-xs font-medium text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedProject(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-[#34415b] bg-[#080f1e] shadow-[0_0_80px_rgba(124,58,237,0.15)]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
              <div>
                <h3
                  id="project-modal-title"
                  className="text-lg font-bold"
                >
                  {selectedProject.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {selectedProject.category}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-violet-400/50 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#030711]">
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} full preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                  Project overview
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {selectedProject.description}
                </p>

                <h4 className="mt-6 text-sm font-semibold">
                  Key Features
                </h4>

                <ul className="mt-3 space-y-3">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-400"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-violet-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 text-sm font-semibold">
                  Technologies
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-violet-500/20 bg-violet-500/[0.08] px-2.5 py-1.5 text-[11px] text-violet-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 text-xs font-semibold text-white transition hover:brightness-110"
                  >
                    Live Project <ArrowUpRight size={15} />
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#354158] px-4 text-xs font-semibold text-slate-200 transition hover:border-violet-400/60 hover:text-violet-300"
                  >
                    <FaGithub size={15} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
