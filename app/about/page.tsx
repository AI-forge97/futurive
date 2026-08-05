import type { Metadata } from "next";
import Link from "next/link";
import Header from "components/Header";
import Footer from "components/Footer";

export const metadata: Metadata = {
  title: "About Futurive — Dubai AI Studio",
  description:
    "Futurive is a Dubai-based AI studio building voice agents and triage systems for insurance, legal, and healthcare. Founded by an AI engineer with shipped legal and voice AI experience.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--color-ink)" }}>
      <Header />
      <main>
        <section className="section">
          <div className="container-narrow">
            <span className="label mb-4 block" style={{ color: "var(--color-gold)" }}>About</span>
            <h1 className="heading-1 mb-8" style={{ color: "var(--color-sand)" }}>
              An AI studio that ships.
            </h1>

            <div className="space-y-6 body-large" style={{ color: "var(--color-text-muted)" }}>
              <p>
                Futurive is a Dubai-based AI studio. We build voice agents and intelligent triage systems for insurance, legal, and healthcare teams — in English and Arabic.
              </p>
              <p>
                We don&apos;t sell AI magic. We build systems that handle real workflows: intake calls that go unanswered after hours, contracts that sit in inboxes waiting for review, patient data collected by hand before every appointment.
              </p>
              <p>
                Our approach: agree on one high-impact use case, ship a working prototype in two weeks, then expand from there. You see it working before you commit to anything.
              </p>
            </div>

            {/* Why us */}
            <div className="mt-16">
              <h2 className="heading-3 mb-8" style={{ color: "var(--color-sand)" }}>Why legal and insurance teams work with us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "We've shipped legal and voice AI before",
                    body: "RAG research systems, intake voice agents, and transcription pipelines — running in real workflows, not slide decks.",
                  },
                  {
                    title: "Security first",
                    body: "Legal and insurance data stays in your environment. We design for confidentiality and privilege from day one, not as an afterthought.",
                  },
                  {
                    title: "Weeks, not quarters",
                    body: "Focused scopes and working prototypes early. You see it working before you commit to a full build.",
                  },
                  {
                    title: "Built for the Gulf",
                    body: "UAE hosting, Arabic support, Dubai address, response in GST timezone. We understand the DIFC and ADGM legal market.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl border"
                    style={{ backgroundColor: "var(--color-ink-mid)", borderColor: "var(--color-border)" }}
                  >
                    <h3 className="heading-6 mb-2" style={{ color: "var(--color-sand)" }}>{item.title}</h3>
                    <p className="body-small" style={{ color: "var(--color-text-muted)" }}>{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder */}
            <div
              className="mt-16 p-8 rounded-2xl border"
              style={{ backgroundColor: "var(--color-ink-mid)", borderColor: "var(--color-border-gold)" }}
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div
                  className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "var(--color-ink-light)", border: "1px solid var(--color-border-gold)" }}
                  aria-label="Founder photo placeholder"
                >
                  👤
                </div>
                <div>
                  <blockquote className="body-large mb-4" style={{ color: "var(--color-sand)" }}>
                    &ldquo;I&apos;ve shipped voice agents, legal RAG systems, and triage pipelines that run in real workflows — not slide decks. Futurive exists to bring that to firms and teams in the UAE who need it to work, not just sound good.&rdquo;
                  </blockquote>
                  <p className="font-semibold" style={{ color: "var(--color-sand)" }}>Founder, Futurive</p>
                  <p className="body-small mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                    Dubai Silicon Oasis ·{" "}
                    <a href="mailto:contact@futurive.ai" className="hover:underline focus-ring rounded" style={{ color: "var(--color-gold)" }}>
                      contact@futurive.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book a 30-minute call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
