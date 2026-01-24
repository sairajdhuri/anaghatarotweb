export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="grid gap-8">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              About Anagha
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
              A warm, grounded guide for spiritual clarity
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
              Anagha is a tarot reader and spiritual mentor known for her calm
              presence and practical wisdom. Her sessions blend intuitive insight
              with grounded guidance, helping seekers feel supported as they
              navigate love, career, healing, and life transitions.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Her journey with tarot
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Anagha's path began with a fascination for symbolism and the quiet
              language of intuition. What started as personal exploration soon
              became a lifelong devotion to understanding the stories within the
              cards and the courage they inspire. Over the years, she has guided
              clients through meaningful questions with empathy and clarity.
            </p>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Philosophy & ethics
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Every reading is rooted in consent, confidentiality, and
              empowerment. Anagha believes tarot should illuminate your choices
              rather than replace them. She offers a sacred space for reflection,
              encouraging you to trust your inner wisdom while making grounded
              decisions.
            </p>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Certifications & experience
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Placeholder credentials can be added here, such as:
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Certified Tarot Practitioner (Placeholder)
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                8+ years of client sessions (Placeholder)
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Vastu fundamentals training (Placeholder)
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Numerology mentorship program (Placeholder)
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
