export default function FounderNote() {
  return (
    <section className="section-raised">
      <div className="container-content">
        <div className="max-w-3xl mx-auto">
          <span className="section-label">Who we are</span>

          <div className="mt-6 flex flex-col sm:flex-row gap-8 items-start">
            {/* Photo placeholder */}
            <div
              className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: "var(--color-ink-light)", border: "1px solid var(--color-border-gold)" }}
              aria-label="Founder photo"
            >
              {/* Replace with: <Image src="/founder.jpg" alt="[Name], founder of Futurive" width={80} height={80} className="rounded-2xl object-cover" /> */}
              👤
            </div>

            <div>
              <blockquote>
                <p className="heading-5 leading-relaxed mb-6" style={{ color: "var(--color-sand)" }}>
                  &ldquo;I&apos;ve shipped voice agents, legal RAG systems, and triage pipelines that run in real workflows — not slide decks. Futurive exists to bring that to firms and teams in the UAE who need it to work, not just sound good.&rdquo;
                </p>
              </blockquote>

              <div>
                <p className="font-semibold" style={{ color: "var(--color-sand)" }}>
                  {/* Replace with your name */}
                  Founder, Futurive
                </p>
                <p className="body-small mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                  Dubai Silicon Oasis · contact@futurive.ai
                </p>
              </div>
            </div>
          </div>

          {/* Proof points */}
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: "2 weeks", label: "to a working prototype" },
              { stat: "English + Arabic", label: "Gulf code-switching supported" },
              { stat: "UAE-first", label: "local hosting, GST timezone response" },
            ].map((item) => (
              <li
                key={item.label}
                className="p-5 rounded-xl border text-center"
                style={{ backgroundColor: "var(--color-ink)", borderColor: "var(--color-border-gold)" }}
              >
                <p className="heading-5 font-bold mb-1" style={{ color: "var(--color-gold)" }}>
                  {item.stat}
                </p>
                <p className="body-small" style={{ color: "var(--color-text-muted)" }}>
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
