export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <section className="relative grid gap-12 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary/20 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-accent motion-safe:animate-fade-up">
              Discover your destiny
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-primaryText motion-safe:animate-fade-up sm:text-5xl lg:text-6xl [animation-delay:120ms]">
              Unlock the secrets of your path with Anagha’s tarot guidance.
            </h1>
            <p className="text-base leading-relaxed text-secondaryText motion-safe:animate-fade-up sm:text-lg [animation-delay:220ms]">
              A calm, premium reading experience for clarity in love, career,
              and personal growth — intuitive, grounded, and compassionate.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row motion-safe:animate-fade-up [animation-delay:320ms]">
              <a
                href="#contact"
                className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-darkText transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Book a Reading
              </a>
              <a
                href="#services"
                className="rounded-full bg-secondary px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                View services
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="glass relative rounded-3xl p-6">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-secondaryText">
              <span>Certified reader</span>
              <span>8+ years</span>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              About the oracle
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-primaryText">
              Guiding souls through the mysteries of life.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-secondaryText">
              Anagha blends traditional tarot with a grounded, empathetic
              approach. Her readings illuminate patterns, offer clarity, and
              leave you with gentle, actionable guidance.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-secondaryText sm:grid-cols-2">
              <div className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Intuitive insight
                </p>
                <p className="mt-2 text-primaryText">
                  Deep connection to spirit guides and symbolism.
                </p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-primary/20 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Empathic approach
                </p>
                <p className="mt-2 text-primaryText">
                  Gentle, ethical readings focused on empowerment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="grid gap-10">
          <SectionHeading
            eyebrow="Sacred offerings"
            title="Choose your reading"
            description="Select the session that resonates. Each offering is tailored to your current journey."
            center
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-8">
            <SectionHeading
              eyebrow="Why choose Anagha"
              title="Experience, intuition, and ethical care"
              description="Anagha creates a sacred, supportive space for insight, healing, and empowered decisions."
            />
            <div className="mt-6 grid gap-4 text-sm text-secondaryText">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <div>
                    <p className="font-semibold text-primaryText">
                      {reason.title}
                    </p>
                    <p className="text-secondaryText">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <InfoCard
              title="Intuitive guidance"
              body="Clear, compassionate readings that blend tarot symbolism with your lived experience."
            />
            <InfoCard
              title="Ethical readings"
              body="Centered on consent, confidentiality, and empowering you to make your own choices."
            />
          </div>
        </section>

        <section id="classes" className="grid gap-10">
          <SectionHeading
            eyebrow="Tarot Classes"
            title="Learn tarot with structure and intuition"
            description="Small-group classes that build confidence from foundations to advanced readings."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {classHighlights.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="grid gap-10">
          <SectionHeading
            eyebrow="Whispers from the soul"
            title="Kind words from clients"
            description="Static placeholders for now — replace with real feedback when ready."
            center
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </section>

        <section id="contact" className="glass rounded-3xl p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-primaryText">
                Connect with the divine
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-secondaryText">
                Have a question before booking? Send a message and Anagha will
                respond with availability and next steps.
              </p>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-accent">
                  Your name
                </label>
                <input
                  className="w-full rounded-2xl border border-accent/30 bg-primary/20 px-4 py-3 text-sm text-primaryText outline-none placeholder:text-secondaryText focus:border-accent"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-accent">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-accent/30 bg-primary/20 px-4 py-3 text-sm text-primaryText outline-none placeholder:text-secondaryText focus:border-accent"
                  placeholder="jane@email.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-accent">
                  Inquiry type
                </label>
                <select className="w-full rounded-2xl border border-accent/30 bg-primary/20 px-4 py-3 text-sm text-primaryText outline-none focus:border-accent">
                  <option className="bg-[#23049d]">General Question</option>
                  <option className="bg-[#23049d]">Tarot Reading</option>
                  <option className="bg-[#23049d]">Vastu Consultation</option>
                  <option className="bg-[#23049d]">Numerology</option>
                  <option className="bg-[#23049d]">Tarot Classes</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-accent">
                  Your message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-accent/30 bg-primary/20 px-4 py-3 text-sm text-primaryText outline-none placeholder:text-secondaryText focus:border-accent"
                  placeholder="How can I help you today?"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-darkText transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

const services = [
  {
    title: "Tarot Reading",
    body: "In-depth spreads for love, career, and life direction with clear takeaways.",
    price: "$85",
    tag: "Popular",
    cta: "Book now",
  },
  {
    title: "Vastu",
    body: "Balance your home or workspace for calm, clarity, and energetic flow.",
    price: "$120",
    cta: "Book now",
  },
  {
    title: "Numerology",
    body: "Decode your life path, cycles, and timing with insightful numerology.",
    price: "$95",
    cta: "Book now",
  },
  {
    title: "Tarot Classes",
    body: "Structured learning from foundations to intuitive reading practice.",
    price: "$150",
    cta: "Book now",
  },
];

const reasons = [
  {
    title: "Experience",
    body: "Years of guiding seekers through love, career shifts, and spiritual growth.",
  },
  {
    title: "Intuitive guidance",
    body: "Insightful interpretations that balance mysticism with practical clarity.",
  },
  {
    title: "Ethical readings",
    body: "A grounded, compassionate approach that respects your autonomy.",
  },
];

const classHighlights = [
  {
    title: "Foundations",
    body: "Card meanings, symbolism, and structured spreads to build confidence.",
  },
  {
    title: "Intuition",
    body: "Develop your intuitive language with guided practices and prompts.",
  },
  {
    title: "Live practice",
    body: "Interactive sessions with feedback to strengthen reading flow.",
  },
  {
    title: "Ethical reading",
    body: "Clear boundaries, consent, and compassionate guidance in every reading.",
  },
];

const testimonials = [
  {
    name: "Aarohi",
    body: "“Anagha’s reading felt calm and incredibly accurate. I left with clarity and peace.”",
    service: "Tarot Reading",
    rating: 5,
  },
  {
    name: "Rohit",
    body: "“The session was gentle yet powerful. The guidance helped me make a confident choice.”",
    service: "Career Clarity",
    rating: 5,
  },
  {
    name: "Meera",
    body: "“A beautiful experience — intuitive, respectful, and deeply supportive.”",
    service: "Numerology",
    rating: 5,
  },
];

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  center,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        center ? "items-center text-center" : ""
      }`}
    >
      <p className="text-xs uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-primaryText sm:text-4xl">
        {title}
      </h2>
      <div className="h-1 w-12 rounded-full bg-accent" />
      <p className="max-w-2xl text-sm leading-relaxed text-secondaryText">
        {description}
      </p>
    </div>
  );
}

type InfoCardProps = {
  title: string;
  body: string;
  tag?: string;
  cta?: string;
};

function InfoCard({ title, body, tag, cta }: InfoCardProps) {
  return (
    <div className="glass rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 motion-safe:animate-fade-up">
      {tag ? (
        <span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-accent">
          {tag}
        </span>
      ) : null}
      <h3 className="mt-4 text-xl font-semibold text-primaryText">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-secondaryText">{body}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="h-1 w-16 rounded-full bg-accent" />
        {cta ? (
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            {cta}
          </span>
        ) : null}
      </div>
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  body: string;
  tag?: string;
  cta?: string;
  price?: string;
};

function ServiceCard({ title, body, tag, cta, price }: ServiceCardProps) {
  return (
    <div className="glass group flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 motion-safe:animate-fade-up">
      <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-secondaryText">
            {title}
          </span>
          {tag ? (
            <span className="rounded-full border border-highlight/40 bg-highlight/10 px-2 py-1 text-[10px] uppercase tracking-[0.3em] text-highlight">
              {tag}
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-4 aspect-[4/3] overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-primary/40 via-secondary/20 to-transparent" />
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primaryText">{title}</h3>
        {price ? (
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-1 text-xs text-accent">
            {price}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-secondaryText">{body}</p>
      <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
        <span>{cta ?? "Learn more"}</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
}

type TestimonialCardProps = {
  name: string;
  body: string;
  service: string;
  rating: number;
};

function TestimonialCard({ name, body, service, rating }: TestimonialCardProps) {
  return (
    <div className="glass rounded-3xl p-6 text-sm text-secondaryText">
      <div className="flex items-center gap-1 text-xs text-accent">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={`${name}-${index}`}>★</span>
        ))}
      </div>
      <p className="leading-relaxed">{body}</p>
      <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-secondaryText">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full border border-accent/20 bg-primary/30" />
          <span>{name}</span>
        </div>
        <span>{service}</span>
      </div>
    </div>
  );
}
