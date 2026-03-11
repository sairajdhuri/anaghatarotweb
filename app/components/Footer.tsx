import Image from "next/image";
import { Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Anagha", href: "/about" },
  { label: "Tarot Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[rgba(124,58,237,0.1)]">
      <div className="bg-gradient-to-b from-[rgba(60,9,108,0.08)] to-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:px-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo_nobg.png"
                alt="Anagha's Tarot Logo"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <p className="text-2xl font-semibold text-[var(--foreground)]">
                  Anagha's
                </p>
                <p className="text-base uppercase tracking-[0.3em] text-[var(--muted)]">
                  Tarot
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Mystical yet grounded guidance for love, life, and personal
              transformation.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Quick links
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--muted)]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Social
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com/anaghashridhar"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919004037537"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M19.11 17.31c-.28-.14-1.67-.82-1.93-.91-.26-.09-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.62.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.67-1.58-1.95-.17-.28-.02-.44.12-.58.12-.12.28-.32.42-.48.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.35 0 1.39 1.01 2.73 1.15 2.92.14.19 1.99 3.04 4.83 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.67-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33z" />
                  <path d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.38 1.62 6.2L3.2 28.8l6.78-1.78a12.73 12.73 0 0 0 6.03 1.51h.01c7.07 0 12.8-5.73 12.8-12.8 0-7.07-5.73-12.8-12.8-12.8zm0 23.2h-.01c-1.98 0-3.92-.54-5.61-1.57l-.4-.24-4.02 1.06 1.07-3.92-.26-.41a10.64 10.64 0 0 1-1.67-5.59c0-5.9 4.8-10.7 10.7-10.7 5.9 0 10.7 4.8 10.7 10.7 0 5.9-4.8 10.7-10.7 10.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[rgba(124,58,237,0.1)]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
            <p>© 2026 Anagha's Tarot. All rights reserved.</p>
            <p>Designed for clarity, care, and spiritual growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
