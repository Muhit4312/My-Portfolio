
import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function FooterSection() {
  return (
    <footer className="border-t border-border/60 bg-background px-5 py-8 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <Code2 size={21} strokeWidth={2.5} />
          </div>

          <div>
            <p className="text-base font-extrabold tracking-tight">
              Muhit Ahmed<span className="text-primary">.</span>
            </p>
            <p className="mt-1 text-xs font-semibold tracking-wide text-muted-foreground">
              FULL-STACK WEB DEVELOPER
            </p>
          </div>
        </Link>

        {/* Copyright */}
        <p className="text-[17px] font-medium leading-6 text-foreground sm:text-center">
          © {currentYear}{" "}
          <span className="font-bold">
            Muhit Ahmed.
          </span>{" "}
          All rights reserved.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Muhit4312"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/5 text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
          >
            <FaGithub size={17} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhitwebdevs/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/5 text-muted-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
          >
            <FaLinkedinIn size={17} />
          </Link>

          <Link
            href="#home"
            aria-label="Back to top"
            className="flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/5 text-primary transition-colors hover:border-primary/60 hover:bg-primary/10"
          >
            <ArrowUp size={17} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
