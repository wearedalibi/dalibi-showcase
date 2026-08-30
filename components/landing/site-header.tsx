"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Documentation", href: "/documentation" },
];

const GITHUB_URL = "https://github.com/wearedalibi/dalibi";

/** En-tête unique du site (logo + navigation), réutilisable sur toutes les pages. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0" aria-label="Dalibi">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dalibi.svg" alt="Dalibi" className="h-7 w-auto block dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dalibi-blanc.svg" alt="Dalibi" className="h-7 w-auto hidden dark:block" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted hover:text-foreground transition">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted hover:text-foreground transition"
          >
            <SiGithub className="w-[18px] h-[18px]" />
          </a>
          <ThemeToggle />
          <div className="hidden lg:block">
            <Link href="/contact" className="btn btn-primary text-sm py-2.5">
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1 max-w-6xl mx-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-surface transition"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-surface transition inline-flex items-center gap-2"
            >
              <SiGithub className="w-4 h-4" /> GitHub
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-3">
              Demander un devis <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
