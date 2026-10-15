"use client";

import Image from "next/image";
import {
  FaArrowUpRightFromSquare,
  FaXmark,
  FaCircleCheck,
  FaGithub,
} from "react-icons/fa6";

import type { Project } from "./projects-data";

type ProjectDetailsModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onClose();
        }
      }}
      tabIndex={-1}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-[#34415b] bg-[#080f1e] text-white shadow-[0_0_80px_rgba(124,58,237,0.15)]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <h3
              id="project-modal-title"
              className="text-lg font-bold"
            >
              {project.title}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {project.category}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="ml-4 flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-violet-400/50 hover:text-white"
          >
            <FaXmark size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Project Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#030711]">
            <Image
              src={project.image}
              alt={`${project.title} full preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          {/* Project Information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Project Overview
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            {/* Features */}
            <h4 className="mt-6 text-sm font-semibold">
              Key Features
            </h4>

            <ul className="mt-3 space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm leading-6 text-slate-400"
                >
                  <FaCircleCheck
                    className="mt-1 shrink-0 text-violet-400"
                    size={15}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <h4 className="mt-6 text-sm font-semibold">
              Technologies
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-violet-500/20 bg-violet-500/[0.08] px-2.5 py-1.5 text-[11px] text-violet-200"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 text-xs font-semibold text-white transition hover:brightness-110"
              >
                Live Project
                <FaArrowUpRightFromSquare size={13} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#354158] px-4 text-xs font-semibold text-slate-200 transition hover:border-violet-400/60 hover:text-violet-300"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}