const steps = [
  {
    number: "01",
    title: "Scope",
    description:
      "We map your workflow in a 30-minute call and agree on one high-impact use case — measurable success criteria upfront.",
  },
  {
    number: "02",
    title: "Prototype in 2 weeks",
    description:
      "You see a working system on your own documents or call flows within two weeks. Not a slide deck — a live demo you can test.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "We integrate with your existing systems (CRM, practice management, EHR), run team training, and go live.",
  },
  {
    number: "04",
    title: "Optimise",
    description:
      "We monitor, tune, and expand as you grow. Monthly reviews with clear metrics — containment rate, time saved, errors caught.",
  },
];

export default function PilotSteps() {
  return (
    <section id="how-it-works" className="section-raised">
      <div className="container-content">
        <div className="section-header">
          <span className="section-label">How it works</span>
          <h2 className="heading-2" style={{ color: "var(--color-sand)" }}>
            From first call to live system in weeks
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px -translate-x-6 z-0"
                  style={{ backgroundColor: "var(--color-border)" }}
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 flex flex-col gap-4">
                {/* Number badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                  style={{
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-gold)",
                    border: "1px solid var(--color-border-gold)",
                  }}
                >
                  {step.number}
                </div>

                <div>
                  <h3 className="heading-6 mb-2" style={{ color: "var(--color-sand)" }}>
                    {step.title}
                  </h3>
                  <p className="body-small leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
