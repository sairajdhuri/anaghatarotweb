"use client";

import { useState } from "react";

const menuItems = [
  { label: "Home", href: "#top" },
  { label: "About Anagha", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tarot Classes", href: "#classes" },
  { label: "Book a Reading", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-accent/20 bg-primary/95 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <a
            href="#top"
            className="group flex items-center gap-3 text-primaryText"
          >
            <span className="h-9 w-9 rounded-full bg-gradient-to-br from-secondary/80 via-secondary/60 to-accent/70" />
            <span className="text-base font-semibold tracking-wide">
              Anagha
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-secondaryText group-hover:text-primaryText transition">
              Tarot
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-secondaryText md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative transition hover:text-accent"
              >
                <span className="after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-primaryText transition hover:border-accent/60 hover:text-accent md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-5 bg-current transition ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-current transition ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {open && (
          <div className="border-t border-accent/20 px-6 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-secondaryText">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-accent/20 bg-primary/30 px-4 py-3 transition hover:border-accent/60 hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
