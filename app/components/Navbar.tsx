"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Anagha", href: "/about" },
  { label: "Tarot Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 text-[var(--foreground)]"
          >
            <Image
              src="/logo_nobg.png"
              alt="Anagha's Tarot Logo"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full object-cover"
            />
            <span className="text-2xl font-semibold tracking-wide">
              Anagha's
            </span>
            <span className="text-base uppercase tracking-[0.3em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition">
              Tarot
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-xl text-[var(--muted)] md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative transition hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={32} /> : <Menu size={32} />}
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
              <div className="flex flex-col gap-2 px-6 pb-6 pt-4 text-xl text-[var(--muted)]">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
