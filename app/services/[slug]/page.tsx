type Service = {
  title: string;
  description: string;
  who: string[];
  expect: string[];
  ctaLabel: string;
};

const services: Record<string, Service> = {
  "tarot-reading": {
    title: "Tarot Reading",
    description:
      "Intuitive tarot spreads for clarity on love, career, and life direction. Sessions are compassionate, grounded, and tailored to your questions.",
    who: [
      "You feel stuck at a crossroads",
      "You want clarity around relationships or career",
      "You seek spiritual guidance with a practical lens",
    ],
    expect: [
      "A calm, confidential conversation",
      "A focused spread aligned to your question",
      "Clear takeaways and gentle next steps",
    ],
    ctaLabel: "Book a tarot reading",
  },
  vastu: {
    title: "Vastu Consultation",
    description:
      "Align your home or workspace to promote balance, harmony, and ease. Vastu guidance helps you create a supportive environment for daily life.",
    who: [
      "You want a more peaceful living or working space",
      "You are moving into a new home",
      "You seek energetic balance in your environment",
    ],
    expect: [
      "A review of your space and intentions",
      "Simple adjustments for flow and harmony",
      "Practical recommendations you can apply",
    ],
    ctaLabel: "Book a vastu session",
  },
  numerology: {
    title: "Numerology",
    description:
      "Discover your life path, personal cycles, and soul lessons through numbers. Numerology reveals timing, tendencies, and opportunities.",
    who: [
      "You want insight into life themes and timing",
      "You are planning a new chapter or decision",
      "You’re curious about your unique energetic blueprint",
    ],
    expect: [
      "Your key numbers and meanings",
      "Timing insights for upcoming cycles",
      "Gentle guidance for aligned decisions",
    ],
    ctaLabel: "Book a numerology session",
  },
  "tarot-classes": {
    title: "Tarot Classes",
    description:
      "Learn tarot with structure and intuition. Classes blend card meanings, symbolism, and hands-on practice to build confident readers.",
    who: [
      "You’re new to tarot and want a clear foundation",
      "You want to strengthen intuitive reading",
      "You enjoy learning in a supportive community",
    ],
    expect: [
      "Foundational teachings and guided practice",
      "Live feedback and Q&A",
      "Ethical reading guidelines",
    ],
    ctaLabel: "Request class details",
  },
};

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug];

  if (!service) {
    return (
      <div className="relative overflow-hidden">
        <div className="stars" />
        <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Service not found
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-primaryText">
              We couldn’t find that service.
            </h1>
            <p className="mt-3 text-sm text-secondaryText">
              Please return to the services page to explore available offerings.
            </p>
            <a
              href="/services"
              className="mt-6 inline-flex rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white"
            >
              View services
            </a>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-primaryText sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-secondaryText">
            {service.description}
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-primaryText">Who it’s for</h2>
            <ul className="mt-4 grid gap-3 text-sm text-secondaryText">
              {service.who.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-primaryText">
              What to expect
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-secondaryText">
              {service.expect.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="glass rounded-3xl p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Ready to begin?
              </p>
              <p className="mt-2 text-sm text-secondaryText">
                Share your focus area and preferred timing for a personalized
                response.
              </p>
            </div>
            <a
              href="mailto:hello@anagha-tarot.com"
              className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-darkText transition hover:scale-[1.02]"
            >
              {service.ctaLabel}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}
