
import Image from "next/image";
import {
  ArrowUpRight,
  Brain,
  Code2,
  GraduationCap,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solver",
  },
  {
    icon: Users,
    title: "Team Player",
  },
  {
    icon: Brain,
    title: "Continuous Learner",
  },
  {
    icon: GraduationCap,
    title: "Computer Science",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border/60 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
          </div>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Let&apos;s work together
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h3 className="max-w-2xl capitalize text-xl font-semibold leading-relaxed sm:text-2xl">
              I build digital experiences that combine{" "}
              <span className="text-primary">thoughtful design</span> with
              reliable engineering.
            </h3>

            <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 sm:text-base">
              <p>
                I&apos;m Muhit Ahmed, a passionate full-stack web developer
                focused on building modern, responsive, and user-friendly web
                applications.
              </p>

              <p>
                I work with technologies like Next.js, React, TypeScript,
                Node.js, Express, and PostgreSQL to turn ideas into practical
                digital solutions.
              </p>

              <p>
                I enjoy solving real-world problems, writing clean and
                maintainable code, and continuously learning new technologies
                to improve my development skills.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="rounded-xl border-b-2 border-primary bg-card/60 p-3 transition-colors hover:border hover:border-primary/50"
                >
                  <Icon className="mb-3 size-5 text-primary" />
                  <p className="text-xs font-medium leading-5 text-foreground">
                    {title}
                  </p>
                </div>
              ))}
            </div>


          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/pic-424b3a84-0bbe-447a-acd1-412b87fa9e69c.jpg"
                  alt="Developer workspace with computer and coding setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between gap-4 p-4">
                <div>
                  <p className="font-semibold">
                    Learning. Building. Growing.
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Focused on meaningful web experiences
                  </p>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Code2 className="size-5 text-primary" />
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 size-24 rounded-2xl border border-primary/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
