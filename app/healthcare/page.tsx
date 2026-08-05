import type { Metadata } from "next";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";
import TrustSection from "components/TrustSection";
import PilotSteps from "components/PilotSteps";

export const metadata: Metadata = {
  title: "Healthcare AI — Appointment Booking, Patient Intake & Reminders | Futurive",
  description:
    "AI voice agents for clinics and healthcare providers in the UAE. Appointment booking, patient intake triage, and no-show reduction — in English and Arabic. Early access.",
};

const useCases = [
  {
    title: "Appointment booking voice agent",
    description:
      "A voice agent that handles inbound appointment calls 24/7 — booking directly into your scheduling system, confirming details, and sending reminders. Handles rescheduling and cancellations without a receptionist.",
    outcomes: ["24/7 booking, zero missed calls", "Direct integration with your scheduling system", "English + Arabic"],
  },
  {
    title: "Patient intake triage",
    description:
      "Before the consultation, the system collects the patient's symptoms, medical history summary, and reason for visit — then structures it for the clinician. Less time on admin in the consultation room, more time on care.",
    outcomes: ["Clinician gets structured intake before appointment", "Faster consultations", "Patient data handled securely"],
  },
  {
    title: "No-show reduction reminder calls",
    description:
      "Automated reminder calls and messages to patients in the 24–48 hours before their appointment. Handles confirmations, reschedules, and cancellations — and fills cancelled slots from a waitlist if available.",
    outcomes: ["Measurable reduction in no-show rate", "Waitlist management automated", "No manual outbound calls needed"],
  },
];

export default function HealthcarePage() {
  return (
    <div style={{ backgroundColor: "var(--color-ink)" }}>
      <Header />
      <main>
        {/* Hero */}
        <section className="section">
          <div className="container-narrow text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="label" style={{ color: "var(--color-gold)" }}>Healthcare AI</span>
              <span
                className="label px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "rgba(200 168 75 / 0.15)", color: "var(--color-gold)", border: "1px solid rgba(200 168 75 / 0.3)" }}
              >
                Early access
              </span>
            </div>
            <h1 className="heading-1 mb-6" style={{ color: "var(--color-sand)" }}>
              Fewer missed appointments. Faster patient intake. Less admin overhead.
            </h1>
            <p className="body-large mb-10" style={{ color: "var(--color-text-muted)" }}>
              AI voice agents for clinics and healthcare providers in the UAE — handling booking, intake, and reminders in English and Arabic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg w-full sm:w-auto">Request early access</Link>
              <Link href="#use-cases" className="btn btn-ghost btn-lg w-full sm:w-auto">See use cases</Link>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="section-raised">
          <div className="container-content">
            <div className="section-header">
              <span className="section-label">Use cases</span>
              <h2 className="heading-2" style={{ color: "var(--color-sand)" }}>What we build for healthcare providers</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="card-padding rounded-2xl border flex flex-col"
                  style={{ backgroundColor: "var(--color-ink)", borderColor: "var(--color-border)" }}
                >
                  <h3 className="heading-5 mb-3" style={{ color: "var(--color-sand)" }}>{uc.title}</h3>
                  <p className="body-base mb-5 flex-1" style={{ color: "var(--color-text-muted)" }}>{uc.description}</p>
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
              Interested in early access?
            </h2>
            <p className="body-large mb-8" style={{ color: "var(--color-text-muted)" }}>
              We&apos;re onboarding a small number of pilot partners now. Tell us about your clinic and workflow.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">Request early access</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
