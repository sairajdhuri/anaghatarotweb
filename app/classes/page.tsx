export default function ClassesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Tarot Classes
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-primaryText sm:text-5xl">
            Learn tarot with clarity, intuition, and structure
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-secondaryText">
            Anagha’s tarot classes blend symbolism, practical spreads, and
            intuitive development. Whether you are beginning your journey or
            deepening your practice, you will learn to read with confidence and
            integrity.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-primaryText">Course overview</h2>
            <p className="mt-4 text-sm leading-relaxed text-secondaryText">
              The curriculum is designed to build strong foundations and
              gradually develop intuitive fluency. Lessons include card
              meanings, symbolism, spread design, and ethical practice.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-accent">
              <span>Small groups</span>
              <span>Practice-based</span>
              <span>Supportive</span>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-primaryText">Class format</h2>
            <p className="mt-4 text-sm leading-relaxed text-secondaryText">
              Placeholder formats can be updated. Sessions are offered online
              and offline, with flexible timings and guided exercises.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-secondaryText">
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Online live sessions (Placeholder)
              </li>
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                In-person workshops (Placeholder)
              </li>
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Recordings and guided practice (Placeholder)
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-primaryText">Beginner level</h2>
            <p className="mt-4 text-sm leading-relaxed text-secondaryText">
              Ideal for newcomers who want a clear foundation, card meanings,
              and confidence with simple spreads.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-secondaryText">
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Major & Minor Arcana basics
              </li>
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Foundational spreads
              </li>
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Journaling and intuition exercises
              </li>
            </ul>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-primaryText">
              Intermediate level
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-secondaryText">
              For learners who know the basics and want to deepen intuition,
              narrative flow, and client-style readings.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-secondaryText">
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Advanced spread design
              </li>
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Reading patterns and storytelling
              </li>
              <li className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
                Ethical practice for clients
              </li>
            </ul>
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-primaryText">
            What students will learn
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-secondaryText sm:grid-cols-2">
            <div className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
              Card symbolism and intuitive vocabulary
            </div>
            <div className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
              Building spreads for different questions
            </div>
            <div className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
              Integrating intuition with practical guidance
            </div>
            <div className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3">
              Ethical, compassionate reading practices
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Enroll
              </p>
              <p className="mt-2 text-sm text-secondaryText">
                Request the latest class schedule and availability.
              </p>
            </div>
            <a
              href="mailto:hello@anagha-tarot.com"
              className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-darkText transition hover:scale-[1.02]"
            >
              Enroll now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
