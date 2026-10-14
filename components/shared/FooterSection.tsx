import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function FooterSection() {
  return (
    <footer className="border-t border-border/60 bg-background px-5 py-7 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
            <Code2 size={19} />
          </div>

          <div>
            <p className="text-sm font-bold">Muhit Ahmed</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Full-Stack Web Developer
            </p>
          </div>
        </Link>

        <p className="text-xs leading-6 text-muted-foreground">
          © {currentYear} Muhit Ahmed. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <FaGithub size={16} />
          </Link>

          <Link
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <FaLinkedinIn size={16} />
          </Link>

          <Link
            href="#home"
            aria-label="Back to top"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}