const trustPoints = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "UAE & private hosting options",
    description: "Your data stays in the UAE or on your own infrastructure. No cross-border transfers without your sign-off.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Client data never trains public models",
    description: "Your documents and call transcripts are never sent to public model providers for training purposes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Full audit logs",
    description: "Every AI decision, call transcript, and document action is logged, reviewable, and exportable for compliance.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Human handoff on every agent",
    description: "Every voice agent and triage system has a defined escalation path. A human is always reachable when the AI can't handle it.",
  },
];

interface TrustSectionProps {
  /** Light sand background variant — use on vertical pages for contrast rhythm */
  sandBg?: boolean;
}

export default function TrustSection({ sandBg = false }: TrustSectionProps) {
  const bg = sandBg ? "section-sand" : "section";
  const headingColor = sandBg ? "var(--color-ink)" : "var(--color-sand)";
  const descColor = sandBg ? "var(--color-ink-mid)" : "var(--color-text-muted)";
  const cardBg = sandBg ? "var(--color-sand-mid)" : "var(--color-ink-mid)";
  const cardBorder = sandBg ? "var(--color-sand-dark)" : "var(--color-border)";
  const iconColor = sandBg ? "var(--color-teal)" : "var(--color-gold)";
  const titleColor = sandBg ? "var(--color-ink)" : "var(--color-sand)";

  return (
    <section className={bg}>
      <div className="container-content">
        <div className="section-header">
          <span className="section-label" style={{ color: sandBg ? "var(--color-teal)" : "var(--color-gold)" }}>
            Security & trust
          </span>
          <h2 className="heading-2 mb-4" style={{ color: headingColor }}>
            Your data. Your control.
          </h2>
          <p className="body-base" style={{ color: descColor, maxWidth: "34rem", margin: "0 auto" }}>
            Legal and insurance buyers have one primary objection: data security. Here&apos;s exactly how we address it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 p-6 rounded-2xl border"
              style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${iconColor}18`, color: iconColor }}
                aria-hidden="true"
              >
                {point.icon}
              </div>
              <div>
                <h3 className="heading-6 mb-1" style={{ color: titleColor }}>
                  {point.title}
                </h3>
                <p className="body-small leading-relaxed" style={{ color: descColor }}>
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
