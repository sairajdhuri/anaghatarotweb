export default function ClassesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 140% 90% at 50% 30%, rgba(60, 9, 108, 0.22), transparent 65%), radial-gradient(ellipse 80% 100% at -10% 50%, rgba(60, 9, 108, 0.15), transparent 55%), radial-gradient(ellipse 80% 100% at 110% 50%, rgba(124, 58, 237, 0.12), transparent 55%), radial-gradient(ellipse 120% 60% at 50% 80%, rgba(60, 9, 108, 0.10), transparent 50%)'
      }} />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Tarot Classes
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
            Learn tarot with clarity, intuition, and structure
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Anagha's tarot classes blend symbolism, practical spreads, and
            intuitive development. Whether you are beginning your journey or
            deepening your practice, you will learn to read with confidence and
            integrity.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Course overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              The curriculum is designed to build strong foundations and
              gradually develop intuitive fluency. Lessons include card
              meanings, symbolism, spread design, and ethical practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              <span>Small groups</span>
              <span>Practice-based</span>
              <span>Supportive</span>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Class format</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Placeholder formats can be updated. Sessions are offered online
              and offline, with flexible timings and guided exercises.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Online live sessions (Placeholder)
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                In-person workshops (Placeholder)
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Recordings and guided practice (Placeholder)
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Beginner level</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Ideal for newcomers who want a clear foundation, card meanings,
              and confidence with simple spreads.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Major & Minor Arcana basics
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Foundational spreads
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Journaling and intuition exercises
              </li>
            </ul>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Intermediate level
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              For learners who know the basics and want to deepen intuition,
              narrative flow, and client-style readings.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Advanced spread design
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Reading patterns and storytelling
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Ethical practice for clients
              </li>
            </ul>
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            What students will learn
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
              Card symbolism and intuitive vocabulary
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
              Building spreads for different questions
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
              Integrating intuition with practical guidance
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
              Ethical, compassionate reading practices
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Enroll
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Request the latest class schedule and availability.
              </p>
            </div>
            <a
              href="mailto:hello@anagha-tarot.com"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
            >
              Enroll now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
