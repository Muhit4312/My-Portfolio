
import {
  Code2,
  Server,
  Wrench,
  Layers3,
  Smartphone,
  Boxes,
  Network,
  FlaskConical,
  Gauge,
  ArrowUpRight,
  CreditCard,
} from "lucide-react";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiNextdotjs,
  SiShadcnui,
  SiTypescript,
  SiPrisma,
  SiVercel,
} from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Frontend",
    subtitle: "Building user interfaces",
    icon: Code2,
    color: "text-violet-400",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#000000" },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server & database",
    icon: Server,
    color: "text-sky-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#888888" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Payment Gateway", icon: CreditCard, color: "#0EA5E9" },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Development workflow",
    icon: Wrench,
    color: "text-fuchsia-400",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#888888" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "CI/CD", icon: Wrench, color: "#A78BFA" },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
      },
    ],
  },
  {
    title: "Other Skills",
    subtitle: "Beyond development",
    icon: Layers3,
    color: "text-cyan-400",
    skills: [
      { name: "Data Structures", icon: Boxes, color: "#60A5FA" },
      { name: "System Design", icon: Network, color: "#22D3EE" },
      { name: "Testing", icon: FlaskConical, color: "#34D399" },
      { name: "Optimization", icon: Gauge, color: "#FBBF24" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-border/60 bg-background text-foreground"
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

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-7 bg-primary" />
              My Skills
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              What I work with
              <span className="text-primary">.</span>
            </h2>

            <p className="mt-3 max-w-xl text-lg leading-7 sm:text-base">
              Tools and technologies I use to build better web experiences.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2.5 text-xs text-muted-foreground backdrop-blur sm:flex">
            <span className="size-2 font-semibold rounded-full bg-emerald-400" />
            Always learning, always building
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon;

            return (

              <Card
                key={group.title}
                className="group relative gap-0 overflow-hidden rounded-2xl border-b-2 border-primary/70 bg-card py-0 shadow-sm transition-colors duration-300 hover:border-primary/30 hover:bg-card"
              >
                <CardHeader className="flex flex-row items-start gap-3 px-5 pt-5 pb-4">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-background/70 ${group.color}`}
                  >
                    <GroupIcon size={20} strokeWidth={1.8} />
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

                  <ul className="space-y-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <li key={skill.name}>
                          <div className="flex items-center gap-3 rounded-lg px-2.5 py-2 transition-colors duration-200 hover:bg-muted/60">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background/80">
                              <SkillIcon
                                size={19}
                                color={skill.color}
                                aria-hidden="true"
                              />
                            </span>

                            <span className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                              {skill.name}
                            </span>

                            <ArrowUpRight
                              size={14}
                              className="ml-auto shrink-0 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-60"
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
      </div>
    </section>
  );
}
