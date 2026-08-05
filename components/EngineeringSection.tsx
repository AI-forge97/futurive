const capabilities = [
  { label: "RAG & semantic search", detail: "Hybrid retrieval with reranking over your documents" },
  { label: "Fine-tuned open models", detail: "Domain-specific models deployed privately" },
  { label: "Voice pipelines", detail: "STT → LLM → TTS with <500ms latency" },
  { label: "CRM & system integrations", detail: "Clio, Salesforce, custom APIs, webhooks" },
  { label: "MLOps & monitoring", detail: "Drift detection, logging, model versioning" },
  { label: "Arabic NLP", detail: "Gulf dialect support, code-switching, RTL" },
];

export default function EngineeringSection() {
  return (
    <section className="section">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/5 shrink-0">
              <span className="section-label">The engineering behind it</span>
              <h2 className="heading-3 mt-2 mb-4" style={{ color: "var(--color-sand)" }}>
                Capabilities, not magic
              </h2>
              <p className="body-base" style={{ color: "var(--color-text-muted)" }}>
                These are the building blocks behind every system we ship. We don&apos;t sell these as separate services — they&apos;re the infrastructure that makes our domain products work.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="p-4 rounded-xl border"
                  style={{ backgroundColor: "var(--color-ink-mid)", borderColor: "var(--color-border)" }}
                >
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-sand)" }}>
                    {cap.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {cap.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
