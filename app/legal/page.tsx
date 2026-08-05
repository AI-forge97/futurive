import type { Metadata } from "next";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";
import TrustSection from "components/TrustSection";
import PilotSteps from "components/PilotSteps";

export const metadata: Metadata = {
  title: "Legal AI — Contract Review, Research & Matter Intake | Futurive",
  description:
    "AI systems for law firms and in-house legal teams in Dubai and the GCC. Contract review, firm knowledge search, document drafting, and matter intake triage. Private deployment, UAE hosting.",
};

const useCases = [
  {
    title: "Contract review & risk flagging",
    description:
      "Upload a contract and the system extracts key clauses, flags deviations from your firm's standard playbook, and surfaces high-risk provisions. Redline suggestions are grounded in your own precedents — not generic templates.",
    outcomes: ["Review time cut significantly", "Deviation alerts against your playbook", "Grounded in your own precedents"],
  },
  {
    title: "Document drafting from templates",
    description:
      "Generate first drafts of notices, agreements, and filings from your firm's own templates. The system uses your approved language, your clause library, and your formatting standards — not generic boilerplate.",
    outcomes: ["Drafts in minutes, not hours", "Consistent with firm standards", "Human review always in the loop"],
  },
  {
    title: "Firm knowledge search (RAG)",
    description:
      "A private AI search layer over your firm's briefs, memos, contracts, and past matters. Ask questions in plain English and get answers with source citations — so you can verify every answer. Your data never leaves your environment.",
    outcomes: ["Precedent found in seconds", "Answers with citations, not hallucinations", "Deployed in your environment"],
  },
  {
    title: "Matter intake triage",
    description:
      "Classify and route incoming matters before a human touches them. The system extracts the matter type, likely practice group, conflict check flags, and urgency — then pushes structured data into Clio, MyCase, or your existing system.",
    outcomes: ["Faster conflict checks", "Right matter to right team immediately", "Integrates with your PMS"],
  },
];

export default function LegalPage() {
  return (
    <div style={{ backgroundColor: "var(--color-ink)" }}>
      <Header />
      <main>
        {/* Hero */}
        <section className="section">
          <div className="container-narrow text-center">
            <span className="label mb-4 block" style={{ color: "var(--color-teal)" }}>Legal AI</span>
            <h1 className="heading-1 mb-6" style={{ color: "var(--color-sand)" }}>
              Contract review in minutes. Firm knowledge searchable in seconds.
            </h1>
            <p className="body-large mb-10" style={{ color: "var(--color-text-muted)" }}>
              AI systems for law firms and in-house legal teams in Dubai and the GCC — deployed privately, with your data never leaving your environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg w-full sm:w-auto">Book a pilot call</Link>
              <Link href="#use-cases" className="btn btn-ghost btn-lg w-full sm:w-auto">See use cases</Link>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="section-raised">
          <div className="container-content">
            <div className="section-header">
              <span className="section-label" style={{ color: "var(--color-teal-light)" }}>Use cases</span>
              <h2 className="heading-2" style={{ color: "var(--color-sand)" }}>What we build for legal teams</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="card-padding rounded-2xl border"
                  style={{ backgroundColor: "var(--color-ink)", borderColor: "var(--color-border)" }}
                >
                  <h3 className="heading-5 mb-3" style={{ color: "var(--color-sand)" }}>{uc.title}</h3>
                  <p className="body-base mb-5" style={{ color: "var(--color-text-muted)" }}>{uc.description}</p>
                  <ul className="space-y-2">
                    {uc.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2 body-small" style={{ color: "var(--color-teal-light)" }}>
                        <span aria-hidden="true">→</span> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PilotSteps />
        <TrustSection sandBg />

        {/* CTA */}
        <section className="section text-center">
          <div className="container-narrow">
            <h2 className="heading-2 mb-4" style={{ color: "var(--color-sand)" }}>
              Ready to run a pilot?
            </h2>
            <p className="body-large mb-8" style={{ color: "var(--color-text-muted)" }}>
              Fixed scope, agreed success metrics, working prototype in two weeks.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">Book a scoping call</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
