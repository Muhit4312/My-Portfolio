
"use client";

import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { projects } from "./projects-data";
import type { Project } from "./projects-data";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function ProjectsSectionNew() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border/60 px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>


            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
              <span className="text-primary">.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              With 2 years of learning and experience in full-stack web development, I’ve also completed 100+ WordPress websites, combining technical skills with practical experience to build modern, user-friendly web experiences.
            </p>
          </div>


          <a
            href="https://github.com/Muhit4312"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-full border border-border/70 bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:shadow-md sm:inline-flex"
          >
            GitHub Profile
            <FaArrowUpRightFromSquare
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group min-w-0 overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Project Preview */}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
                className="relative m-3 block aspect-[16/10] w-[calc(100%-1.5rem)] overflow-hidden rounded-xl bg-muted/40 text-left"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <span className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute bottom-3 right-3 flex size-10 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <FaArrowUpRightFromSquare size={14} />
                </span>
              </button>

              {/* Project Information */}
              <div className="px-4 pb-5 pt-2 sm:px-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {project.category}
                    </p>
                  </div>

                  <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary">
                    <FaArrowUpRightFromSquare size={13} />
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-border/60 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
                  >
                    View Details
                    <FaArrowUpRightFromSquare
                      size={11}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border/80 px-5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    Live Demo
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
