"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", href: "#top" },
  { label: "About Anagha", href: "#about" },
  { label: "Tarot Classes", href: "#classes" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <a
            href="#top"
            className="group flex items-center gap-3 text-[var(--foreground)]"
          >
            <Image
              src="/logo_nobg.png"
              alt="Anagha's Tarot Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-base font-semibold tracking-wide">
              Anagha's
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition">
              Tarot
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative transition hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-white/5 md:hidden"
            >
              <div className="flex flex-col gap-2 px-6 pb-6 pt-4 text-sm text-[var(--muted)]">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
