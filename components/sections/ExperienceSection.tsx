import {
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    role: "Junior Web Developer",
    company: "Your Company Name",
    type: "Remote",
    period: "2025 — Present",
    description:
      "Developing responsive web applications and reusable UI components using React, Next.js, TypeScript, and modern web technologies.",
    achievements: [
      "Building responsive and accessible user interfaces.",
      "Integrating REST APIs and managing application state.",
      "Writing maintainable code and improving performance.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border/60 bg-background px-5 py-20 text-foreground sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Where I have worked
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience<span className="text-primary">.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            My professional journey, the problems I have worked on, and the
            skills I continue to develop.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <BriefcaseBusiness size={23} />
              </div>

              <p className="mt-7 text-sm text-muted-foreground">
                My professional focus
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-snug">
                Turning ideas into
                <span className="block text-primary">
                  practical solutions.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                I enjoy collaborating with others, solving technical
                challenges, and building digital products that provide
                meaningful user experiences.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {experiences.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-border/70 bg-card/50 p-5 transition-all duration-300 hover:border-primary/40 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                    <BriefcaseBusiness size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {item.role}
                    </h3>

                    <p className="mt-1 text-sm text-primary">
                      {item.company} · {item.type}
                    </p>

                    <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays size={13} />
                      {item.period}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted-foreground"
                  />
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background/70 px-2.5 py-1.5 text-[11px] text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}