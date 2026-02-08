"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const handleWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const inquiry = String(formData.get("inquiry") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const lines = [
      "New inquiry from the website:",
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      inquiry ? `Inquiry: ${inquiry}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const phone = "919004037537";
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-32 px-6 pb-24 pt-32 sm:px-10 lg:px-12">
        <section className="relative grid gap-12 text-center pt-20 pb-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--purple)]/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-soft)_0%,transparent_50%)] -z-10" />
          
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-6 py-2 text-xs uppercase tracking-[0.35em] text-[var(--accent)] motion-safe:animate-fade-up">
              Discover your destiny
            </span>
            
            <h1 className="text-5xl font-bold leading-tight motion-safe:animate-fade-up sm:text-6xl lg:text-7xl [animation-delay:120ms] font-serif">
              <span className="text-[var(--foreground)]">Unlock the secrets of your path with </span>
              <span className="text-gold-gradient block mt-2">Anagha's Tarot Guidance</span>
            </h1>
            
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted)] motion-safe:animate-fade-up sm:text-lg [animation-delay:220ms] font-light">
              A calm, premium reading experience for clarity in love, career,
              and personal growth — intuitive, grounded, and compassionate.
            </p>
            
            <div className="flex flex-col gap-5 sm:flex-row motion-safe:animate-fade-up [animation-delay:320ms] mt-6 justify-center items-center">
              <a
                href="#services"
                className="group relative overflow-hidden rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-10 py-4 text-center text-sm font-semibold uppercase tracking-wider text-[var(--foreground)] transition duration-300 hover:bg-[var(--accent)]/20 hover:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="glass relative rounded-3xl p-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
              <Image
                src="/tarotreader.png"
                alt="Certified tarot reader"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              <span>Certified reader</span>
              <span>4+ years</span>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              About the oracle
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)]">
              Guiding souls through the mysteries of life.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Anagha blends traditional tarot with a grounded, empathetic
              approach. Her readings illuminate patterns, offer clarity, and
              leave you with gentle, actionable guidance.
            </p>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Intuitive insight
                </p>
                <p className="mt-2 text-[var(--foreground)]">
                  Deep connection to spirit guides and symbolism.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Empathic approach
                </p>
                <p className="mt-2 text-[var(--foreground)]">
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
            <div className="mt-6 grid gap-4 text-sm text-[var(--muted)]">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">
                      {reason.title}
                    </p>
                    <p className="text-[var(--muted)]">{reason.body}</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">
                Connect with the reader
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Have a question before booking? Send a message and Anagha will
                respond with availability and next steps.
              </p>
            </div>
            <form className="grid gap-4" onSubmit={handleWhatsAppSubmit}>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Your name
                </label>
                <input
                  name="name"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 transition-colors"
                  placeholder="jane@email.com"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Inquiry type
                </label>
                <select
                  name="inquiry"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-[var(--accent)]/50 transition-colors"
                >
                  <option className="bg-[var(--background)]">General Question</option>
                  <option className="bg-[var(--background)]">Tarot Reading</option>
                  <option className="bg-[var(--background)]">Vastu Consultation</option>
                  <option className="bg-[var(--background)]">Numerology</option>
                  <option className="bg-[var(--background)]">Tarot Classes</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Your message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]/50 transition-colors"
                  placeholder="How can I help you today?"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/30"
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
    image: "/assets/tarot.jpg",
  },
  {
    title: "Vastu",
    body: "Balance your home or workspace for calm, clarity, and energetic flow.",
    image: "/assets/vastu.png",
  },
  {
    title: "Numerology",
    body: "Decode your life path, cycles, and timing with insightful numerology.",
    image: "/assets/num.jpg",
  },
  {
    title: "Tarot Classes",
    body: "Structured learning from foundations to intuitive reading practice.",
    image: "/assets/class.png",
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
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <div className="h-0.5 w-12 rounded-full bg-[var(--accent)]" />
      <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-3xl p-6"
    >
      {tag ? (
        <span className="inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--accent)]">
          {tag}
        </span>
      ) : null}
      <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)] font-serif">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="h-px w-16 bg-white/10" />
        {cta ? (
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] transition-colors">
            {cta}
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}

type ServiceCardProps = {
  title: string;
  body: string;
  image: string;
};

function ServiceCard({ title, body, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card group flex h-full flex-col rounded-3xl p-1 overflow-hidden"
    >
      <div className="h-full rounded-[20px] bg-[var(--background)]/40 p-5 backdrop-blur-md">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 to-transparent" />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[var(--foreground)] font-serif transition-colors group-hover:text-[var(--accent)]">
            {title}
          </h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
      </div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-3xl p-8 text-sm"
    >
      <div className="flex items-center gap-1 text-xs text-[var(--accent)] mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={`${name}-${index}`} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="leading-relaxed italic text-[var(--foreground)]/90 font-light text-base">"{body}"</p>
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--accent)]/30 to-[var(--purple)]/30 flex items-center justify-center text-[var(--foreground)] font-serif font-bold border border-white/10">
             {name[0]}
          </div>
          <span className="text-[var(--accent)]">{name}</span>
        </div>
        <span className="opacity-60">{service}</span>
      </div>
    </motion.div>
  );
}
