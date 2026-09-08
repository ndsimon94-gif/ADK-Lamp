"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "./logo-mark";
import { NAV_LINKS, SITE_SHORT } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-lg text-navy"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-9 w-9 shrink-0 text-maroon" />
          <span className="leading-tight tracking-[0.02em]">
            ADK <span className="text-maroon">Loving Awareness</span>
            <br className="hidden sm:block" /> Meditation Project
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-[0.04em] transition-colors hover:text-maroon ${
                pathname === link.href ? "text-maroon" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/support"
            className="rounded-sm border border-maroon bg-maroon px-4 py-2 text-sm uppercase tracking-[0.08em] text-cream transition-colors hover:bg-maroon-dark"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-navy transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 w-6 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-navy transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-maroon/10 bg-cream px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-maroon/10 py-3 font-body text-base ${
                pathname === link.href ? "text-maroon" : "text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/support"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-sm border border-maroon bg-maroon px-4 py-3 text-center text-sm uppercase tracking-[0.08em] text-cream"
          >
            Donate
          </Link>
          <span className="mt-2 text-center text-xs text-navy/50">{SITE_SHORT}</span>
        </nav>
      )}
    </header>
  );
}
