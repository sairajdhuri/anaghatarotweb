const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Anagha", href: "/about" },
  { label: "Tarot Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:px-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[var(--purple)]/60 to-[var(--accent)]/60" />
              <div>
                <p className="text-base font-semibold text-[var(--foreground)]">
                  Anagha's
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
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
                href="https://instagram.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                aria-label="Instagram"
              >
                <span className="text-sm">IG</span>
              </a>
              <a
                href="https://wa.me/919000000000"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                aria-label="WhatsApp"
              >
                <span className="text-sm">WA</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
            <p>© 2026 Anagha's Tarot. All rights reserved.</p>
            <p>Designed for clarity, care, and spiritual growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
