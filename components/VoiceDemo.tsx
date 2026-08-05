import Link from "next/link";

/**
 * VoiceDemo — signature section.
 * Replace the placeholder content with a real web-call widget or phone number
 * once the voice agent is live. The outer section structure stays the same.
 */
export default function VoiceDemo() {
  return (
    <section id="voice-demo" className="section-raised">
      <div className="container-content">
        <div className="section-header">
          <span className="section-label">Live demo</span>
          <h2 className="heading-2 mb-4" style={{ color: "var(--color-sand)" }}>
            Talk to our voice agent
          </h2>
          <p className="body-base" style={{ color: "var(--color-text-muted)", maxWidth: "36rem", margin: "0 auto" }}>
            Nothing sells a voice agent like experiencing one. Call in or use the widget below — our agent handles real intake conversations in English and Arabic.
          </p>
        </div>

        {/* Widget placeholder — swap this div for the actual embed */}
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl border p-10 flex flex-col items-center gap-6 text-center"
            style={{ backgroundColor: "var(--color-ink)", borderColor: "var(--color-border-gold)" }}
          >
            {/* Animated waveform — visual stand-in for active call */}
            <div className="waveform" style={{ height: "56px", gap: "5px" }} aria-hidden="true">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className="waveform-bar"
                  style={{
                    width: "4px",
                    animationName: "waveBar",
                    animationDuration: "1.3s",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: `${(i * 0.09) % 1.1}s`,
                  }}
                />
              ))}
            </div>

            <div>
              <p className="heading-6 mb-1" style={{ color: "var(--color-sand)" }}>
                Demo launching soon
              </p>
              <p className="body-small" style={{ color: "var(--color-text-muted)" }}>
                We&apos;re finalising the live widget. Book a walkthrough and we&apos;ll run the demo with you live.
              </p>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Book a live demo walkthrough
            </Link>
          </div>

          {/* What to expect */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Handles intake calls 24/7", icon: "📞" },
              { label: "English + Arabic, Gulf code-switching", icon: "🌐" },
              { label: "Pushes structured data to your CRM", icon: "📋" },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-xl border"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-ink)" }}
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="body-small" style={{ color: "var(--color-text-muted)" }}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
