
"use client";

import type { ElementType } from "react";
import {
  FaWordpress,
  FaBriefcase,
  FaCode,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const wordpress = {
  title: "WordPress Developer",
  company: "Freelance / Personal Projects",
  period: "2019 – 2025",
};

const experience = {
  title: "Data Entry Operator",
  type: "Full-Time",
  company: "IIML Company",
  period: "1 Year",
};

const fullStackLearning = {
  title: "Full-Stack Web Developer",
  company: "Programming Hero Level 2",
  period: "2 Years",
};

type DetailItemProps = {
  icon: ElementType;
  title: string;
  subtitle: string;
  period: string;
};

function DetailItem({
  icon: Icon,
  title,
  subtitle,
  period,
}: DetailItemProps) {
  return (
    <div className="group flex min-w-0 items-start gap-3">
      {/* Icon */}
      <div className="relative flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.08] text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/15">
        <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
        <Icon className="relative size-5" />
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="break-words text-sm font-semibold leading-5 text-foreground transition-colors duration-200 group-hover:text-primary">
            {title}
          </h3>

          <span className="inline-flex shrink-0 rounded-md border border-primary/20 bg-primary/[0.07] px-2 py-0.5 text-[10px] font-medium text-primary">
            {period}
          </span>
        </div>

        <p className="mt-1 break-words text-xs leading-5 text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="group mb-5 flex min-w-0 items-center gap-2.5">
      <span className="h-5 w-1 shrink-0 rounded-full bg-primary" />

      <h3 className="text-base font-bold tracking-tight text-primary sm:text-lg">
        {title}
      </h3>

      <FaArrowUpRightFromSquare className="ml-auto size-3.5 shrink-0 text-muted-foreground/60 transition-colors duration-200 group-hover:text-primary" />
    </div>
  );
}

export default function WordPressExperienceSection() {
  return (
    <section
      id="wordpress"
      className="scroll-mt-20 border-t border-border/60 bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 md:py-14 lg:px-12">
        {/* Section Header */}
        <div className="mb-8">
          
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Experiences
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            My professional experience, development journey, and technical
            expertise.
          </p>
        </div>

       
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          
          <div className="min-w-0 rounded-lg border-l border-primary bg-card/40 p-4 transition-colors duration-300 hover:border-primary/30 sm:p-5">
            <SectionHeading title="Full-Stack Development" />

            <DetailItem
              icon={FaCode}
              title={fullStackLearning.title}
              subtitle={fullStackLearning.company}
              period={fullStackLearning.period}
            />
          </div>

          <div className="min-w-0 rounded-lg border-l border-primary bg-card/40 p-4 transition-colors duration-300 hover:border-primary/30 sm:p-5">
            <SectionHeading title="CMS" />

            <DetailItem
              icon={FaWordpress}
              title={wordpress.title}
              subtitle={wordpress.company}
              period={wordpress.period}
            />
          </div>

          
          <div className="min-w-0 rounded-lg border-l border-primary bg-card/40 p-4 transition-colors duration-300 hover:border-primary/30 sm:col-span-2 sm:p-5 lg:col-span-1">
            <SectionHeading title="Work Experience" />

            <DetailItem
              icon={FaBriefcase}
              title={`${experience.title} (${experience.type})`}
              subtitle={experience.company}
              period={experience.period}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
