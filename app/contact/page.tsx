export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
            Let's connect
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Share your questions, preferred timing, and the kind of guidance you
            seek. Anagha will respond with next steps and availability.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Contact form</h2>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 transition-colors"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 transition-colors"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Share your question, intent, or preferred timing"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">WhatsApp</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Placeholder number: +91 90000 00000
              </p>
              <a
                href="https://wa.me/919000000000"
                className="mt-4 inline-flex rounded-full bg-[var(--purple)] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Message on WhatsApp
              </a>
            </div>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">Email</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">
                hello@anagha-tarot.com
              </p>
              <a
                href="mailto:hello@anagha-tarot.com"
                className="mt-4 inline-flex rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
              >
                Send an email
              </a>
            </div>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-[var(--foreground)]">Location</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">Mumbai, India</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
