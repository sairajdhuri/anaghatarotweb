const services = [
  {
    title: "Tarot Reading",
    description:
      "Intuitive spreads for clarity on love, career, and life direction.",
    href: "/services/tarot-reading",
  },
  {
    title: "Vastu Consultation",
    description:
      "Harmonize your home or workplace to invite balance and calm.",
    href: "/services/vastu",
  },
  {
    title: "Numerology",
    description:
      "Decode your life path, timing, and soul lessons through numbers.",
    href: "/services/numerology",
  },
  {
    title: "Tarot Classes",
    description:
      "Learn tarot from foundations to intuitive reading with guided practice.",
    href: "/services/tarot-classes",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="grid gap-6">
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-primaryText sm:text-5xl">
              Choose the support that feels aligned
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-secondaryText">
              Each service is designed to bring clarity, balance, and a calm
              sense of direction. Explore the details and find the best fit for
              your journey.
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 motion-safe:animate-fade-up"
            >
              <h2 className="text-2xl font-semibold text-primaryText">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-secondaryText">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
                <span>Learn more</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
