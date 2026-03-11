import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 120% 70% at 50% 10%, rgba(60, 9, 108, 0.18), transparent 55%), radial-gradient(ellipse 80% 80% at 80% 60%, rgba(124, 58, 237, 0.08), transparent 50%)'
      }} />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="grid gap-8">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              About Anagha
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-[var(--foreground)] sm:text-5xl">
              Transform your life with the wisdom of the stars and tarot
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
              I am Anagha Shridhar Dhuri, a passionate and intuitive astrologer
              with over 15 years of experience helping individuals understand
              their life's blueprint through the stars. I specialize in Vedic
              astrology, crystal healing, birth chart analysis, matchmaking,
              evil eye removals, and personalized predictions with tarot reading.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              I believe tarot is not just about predicting the future, but about
              empowering individuals to make informed choices, heal emotional
              wounds, and align with their true purpose. My approach is
              compassionate, honest, and practical — offering not just answers
              but the tools to move forward with purpose. Book a session today
              and align with your highest potential!
            </p>
          </div>
          <div className="glass mx-auto w-full max-w-sm rounded-3xl p-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
              <Image
                src="/tarotreader.png"
                alt="Anagha tarot reader"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
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
                3+ years of client sessions (Placeholder)
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Vastu fundamentals training (Placeholder)
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                Astrology mentorship program (Placeholder)
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
