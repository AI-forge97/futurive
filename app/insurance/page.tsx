import type { Metadata } from "next";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";
import TrustSection from "components/TrustSection";
import PilotSteps from "components/PilotSteps";

export const metadata: Metadata = {
  title: "Insurance AI — Claims Intake, Triage & Reminders | Futurive",
  description:
    "AI voice agents and triage systems for insurance teams in the UAE. Claims intake 24/7, claim classification, policy extraction, and renewal reminders — in English and Arabic.",
};

const useCases = [
  {
    title: "Claims intake voice agent",
    description:
      "A voice agent that answers every inbound claims call 24/7 — in English and Arabic. It collects the claimant's details, incident description, and policy number, then pushes structured data directly into your claims management system. No missed calls after hours. No manual data entry.",
    outcomes: ["100% call answer rate", "Structured data in your CMS instantly", "English + Arabic, Gulf code-switching"],
  },
  {
    title: "Claim classification & routing",
    description:
      "Once a claim is logged, the system classifies it by type (motor, medical, property), severity, and the right handler — before a human touches it. Complex or high-value claims are flagged immediately. Routine claims are routed directly to the appropriate team.",
    outcomes: ["Faster first response times", "Fewer misrouted claims", "Priority escalation for high-value cases"],
  },
  {
    title: "Policy document extraction",
    description:
      "Upload policy documents and the system extracts key terms, coverage limits, exclusions, and renewal dates into structured data. Searchable across your entire portfolio. Integrates with your existing document management system.",
    outcomes: ["Policy data searchable in seconds", "Coverage gap detection", "Renewal pipeline automated"],
  },
  {
    title: "Renewal & payment reminder calls",
    description:
      "Automated outbound reminder calls at scale — polite, compliant, personalised with the customer's name and policy details. Handles objections, answers basic questions, and escalates to a human when needed.",
    outcomes: ["Lapse rates reduced", "No manual outbound dialling", "Compliant scripts, human escalation built in"],
  },
];

export default function InsurancePage() {
  return (
    <div style={{ backgroundColor: "var(--color-ink)" }}>
      <Header />
      <main>
        {/* Hero */}
        <section className="section">
          <div className="container-narrow text-center">
            <span className="label mb-4 block" style={{ color: "var(--color-gold)" }}>Insurance AI</span>
            <h1 className="heading-1 mb-6" style={{ color: "var(--color-sand)" }}>
              No missed claims call. Every lead qualified. Every renewal followed up.
            </h1>
            <p className="body-large mb-10" style={{ color: "var(--color-text-muted)" }}>
              AI voice agents and triage systems built for UAE insurance teams — handling intake, classification, extraction, and reminders in English and Arabic.
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
              <span className="section-label">Use cases</span>
              <h2 className="heading-2" style={{ color: "var(--color-sand)" }}>What we build for insurance teams</h2>
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
                      <li key={o} className="flex items-center gap-2 body-small" style={{ color: "var(--color-gold)" }}>
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
