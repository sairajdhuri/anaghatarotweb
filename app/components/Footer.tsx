const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Anagha", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Tarot Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Tarot Reading", href: "/services/tarot-reading" },
  { label: "Vastu Consultation", href: "/services/vastu" },
  { label: "Numerology", href: "/services/numerology" },
  { label: "Tarot Classes", href: "/services/tarot-classes" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-accent/20">
      <div className="bg-primary text-primaryText">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr] lg:px-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-secondary/80 via-secondary/60 to-accent/70" />
              <div>
                <p className="text-base font-semibold text-primaryText">
                  Anagha
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">
                  Tarot
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-secondaryText">
              Mystical yet grounded guidance for love, life, and personal
              transformation.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">
              Quick links
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-secondaryText">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">
              Services
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-secondaryText">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondaryText">
              Social
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-secondaryText transition hover:border-accent/60 hover:text-accent"
                aria-label="Instagram"
              >
                <span className="text-sm">IG</span>
              </a>
              <a
                href="https://wa.me/919000000000"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 text-secondaryText transition hover:border-accent/60 hover:text-accent"
                aria-label="WhatsApp"
              >
                <span className="text-sm">WA</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-accent/20">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-secondaryText sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
            <p>© 2026 Anagha Tarot. All rights reserved.</p>
            <p>Designed for clarity, care, and spiritual growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
