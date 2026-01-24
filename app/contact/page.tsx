export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="stars" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-12 px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <section className="glass rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-primaryText sm:text-5xl">
            Let’s connect
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-secondaryText">
            Share your questions, preferred timing, and the kind of guidance you
            seek. Anagha will respond with next steps and availability.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-primaryText">Contact form</h2>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-accent">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-accent/30 bg-primary/20 px-4 py-3 text-sm text-primaryText outline-none placeholder:text-secondaryText focus:border-accent"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-accent">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-accent/30 bg-primary/20 px-4 py-3 text-sm text-primaryText outline-none placeholder:text-secondaryText focus:border-accent"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-xs uppercase tracking-[0.3em] text-accent">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Share your question, intent, or preferred timing"
                  className="w-full rounded-2xl border border-accent/30 bg-primary/20 px-4 py-3 text-sm text-primaryText outline-none placeholder:text-secondaryText focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-darkText transition hover:scale-[1.02]"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-primaryText">WhatsApp</h2>
              <p className="mt-3 text-sm text-secondaryText">
                Placeholder number: +91 90000 00000
              </p>
              <a
                href="https://wa.me/919000000000"
                className="mt-4 inline-flex rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white"
              >
                Message on WhatsApp
              </a>
            </div>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-primaryText">Email</h2>
              <p className="mt-3 text-sm text-secondaryText">
                hello@anagha-tarot.com
              </p>
              <a
                href="mailto:hello@anagha-tarot.com"
                className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-darkText"
              >
                Send an email
              </a>
            </div>
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-primaryText">Location</h2>
              <p className="mt-3 text-sm text-secondaryText">Mumbai, India</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
