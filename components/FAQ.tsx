"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can the voice agent speak Arabic?",
    a: "Yes. Our agents support English, Arabic, and Gulf code-switching — the way people in the UAE actually speak. Dialect tuning (Gulf, Levantine, Egyptian) is available depending on your audience.",
  },
  {
    q: "Where is our data hosted?",
    a: "UAE-based cloud by default. We also support private deployment on your own infrastructure, or a VPC in a region you specify. Client data is never sent to public model APIs for training.",
  },
  {
    q: "What happens when the AI can't handle a call or document?",
    a: "Every system has a defined escalation path. Voice agents can transfer to a human live, send a callback request, or log a structured summary for your team. Nothing falls silently through the cracks.",
  },
  {
    q: "How long until we're live?",
    a: "Most projects start with a working prototype in two weeks, scoped to one use case. Full deployment with integrations typically takes 4–8 weeks depending on your existing systems.",
  },
  {
    q: "How is pricing structured?",
    a: "We don't publish rates because scope varies. Most engagements start with a fixed-price pilot (agreed upfront), then move to a monthly retainer for support and optimisation. We'll give you a clear number in the scoping call.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container-content">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="heading-2" style={{ color: "var(--color-sand)" }}>
            Questions we always get
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="rounded-xl border overflow-hidden"
                style={{
                  backgroundColor: "var(--color-ink-mid)",
                  borderColor: isOpen ? "var(--color-border-gold)" : "var(--color-border)",
                  transition: "border-color 200ms",
                }}
              >
                <button
                  className="w-full text-start px-6 py-5 flex items-center justify-between gap-4 focus-ring rounded-xl"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold" style={{ color: "var(--color-sand)" }}>
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 shrink-0 transition-transform duration-200"
                    style={{
                      color: "var(--color-gold)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <p className="px-6 pb-5 body-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
