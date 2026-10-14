
import {
  Code2,
  Server,
  Wrench,
  Layers3,
  Globe,
  Palette,
  Braces,
  Atom,
  Wind,
  Database,
  Zap,
  Flame,
  GitBranch,
  Container,
  Workflow,
  Cloud,
  Smartphone,
  Boxes,
  Network,
  FlaskConical,
  Gauge,
  ArrowUpRight,
} from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Building user interfaces",
    icon: Code2,
    color: "text-violet-400",
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "JavaScript", icon: Braces },
      { name: "React.js", icon: Atom },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server & database",
    icon: Server,
    color: "text-sky-400",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Zap },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Firebase", icon: Flame },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Development workflow",
    icon: Wrench,
    color: "text-fuchsia-400",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: Container },
      { name: "CI/CD", icon: Workflow },
      { name: "GitHub Actions", icon: Cloud },
    ],
  },
  {
    title: "Other Skills",
    subtitle: "Beyond development",
    icon: Layers3,
    color: "text-cyan-400",
    skills: [
      { name: "UI/UX Design", icon: Smartphone },
      { name: "Data Structures", icon: Boxes },
      { name: "System Design", icon: Network },
      { name: "Testing", icon: FlaskConical },
      { name: "Optimization", icon: Gauge },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 size-80 rounded-full bg-primary/[0.08] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-80 rounded-full bg-violet-500/[0.07] blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-7 bg-primary" />
              What I work with
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              My Skills<span className="text-primary">.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              The technologies and tools I use to build modern, responsive,
              and reliable digital experiences.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2.5 text-xs text-muted-foreground backdrop-blur sm:flex">
            <span className="size-2 rounded-full bg-emerald-400" />
            Always learning, always building
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <Card
                key={group.title}
                className="group relative gap-0 overflow-hidden rounded-2xl border border-border/70 bg-card/60 py-0 shadow-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/[0.06]"
              >
                {/* Top accent */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <CardHeader className="flex flex-row items-start gap-3 px-5 pt-5 pb-4">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/70 ${group.color} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <GroupIcon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold tracking-tight">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {group.subtitle}
                    </p>
                  </div>

                  <span className="pt-1 text-[11px] tabular-nums text-muted-foreground/60">
                    0{index + 1}
                  </span>
                </CardHeader>

                <CardContent className="px-5 pb-5">
                  <div className="mb-4 h-px bg-border/60" />

                  <ul className="space-y-1.5">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <li key={skill.name}>
                          <div className="flex items-center gap-3 rounded-lg px-2.5 py-2 transition-colors duration-200 hover:bg-primary/[0.06]">
                            <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-background/80 text-muted-foreground transition-colors duration-200 group-hover:text-primary">
                              <SkillIcon
                                size={15}
                                strokeWidth={1.8}
                              />
                            </span>

                            <span className="text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                              {skill.name}
                            </span>

                            <ArrowUpRight
                              size={13}
                              className="ml-auto shrink-0 text-primary opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-70"
                              aria-hidden="true"
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-border/60 bg-card/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.08] text-primary">
              <Code2 size={17} />
            </div>

            <div>
              <p className="text-sm font-medium">
                Focused on continuous improvement
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Exploring better ways to build, optimize, and deliver.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Explore my projects
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
