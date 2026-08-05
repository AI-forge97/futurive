import Link from "next/link";

interface UseCase {
  text: string;
}

interface Vertical {
  label: string;
  href: string;
  outcome: string;
  useCases: UseCase[];
  accent: string;
}

const verticals: Vertical[] = [
  {
    label: "Insurance AI",
    href: "/insurance",
    outcome: "No missed claims call. Every lead qualified. Every renewal followed up.",
    useCases: [
      { text: "Claims intake voice agent — 24/7, English + Arabic" },
      { text: "Claim classification & routing (triage to right team)" },
      { text: "Policy document extraction & summarisation" },
      { text: "Renewal & payment reminder calls at scale" },
    ],
    accent: "#C8A84B",
  },
  {
    label: "Legal AI",
    href: "/legal",
    outcome: "Contract review in minutes. Firm knowledge searchable in seconds.",
    useCases: [
      { text: "Contract review & risk flagging against firm playbook" },
      { text: "Document drafting from templates and precedents" },
      { text: "Cited research over firm documents (RAG, no hallucinations)" },
      { text: "Matter intake triage — classify and route before a human touches it" },
    ],
    accent: "#2A7F7F",
  },
  {
    label: "Healthcare AI",
    href: "/healthcare",
    outcome: "Fewer missed appointments. Faster patient intake. Less admin overhead.",
    useCases: [
      { text: "Appointment booking voice agent — handles inbound and outbound" },
      { text: "Patient intake triage — collect history before the consultation" },
      { text: "No-show reduction reminder calls" },
    ],
    accent: "#C8A84B",
  },
];

export default function VerticalsSection() {
  return (
    <section id="solutions" className="section">
      <div className="container-content">
        <div className="section-header">
          <span className="section-label">What we build</span>
          <h2 className="heading-2" style={{ color: "var(--color-sand)" }}>
            Three verticals. Deep expertise in each.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {verticals.map((v) => (
            <VerticalCard key={v.href} vertical={v} />
          ))}
        </div>

        <p className="text-center mt-10 body-small" style={{ color: "var(--color-text-faint)" }}>
          Not sure which fits?{" "}
          <Link href="/contact" className="focus-ring rounded underline underline-offset-2 transition-colors" style={{ color: "var(--color-gold)" }}>
            Book a 30-minute scoping call
          </Link>
        </p>
      </div>
    </section>
  );
}

function VerticalCard({ vertical: v }: { vertical: Vertical }) {
  return (
    <Link
      href={v.href}
      className="card-interactive card-padding flex flex-col group focus-ring"
      style={{ textDecoration: "none" }}
    >
      {/* Label chip */}
      <span
        className="label inline-block mb-4 px-3 py-1 rounded-full"
        style={{
          color: v.accent,
          backgroundColor: `${v.accent}18`,
          border: `1px solid ${v.accent}30`,
        }}
      >
        {v.label}
      </span>

      {/* Outcome */}
      <p className="heading-6 mb-5 leading-snug" style={{ color: "var(--color-sand)" }}>
        {v.outcome}
      </p>

      {/* Use cases */}
      <ul className="space-y-2.5 flex-1">
        {v.useCases.map((uc) => (
          <li key={uc.text} className="flex items-start gap-2.5">
            <span className="mt-1 shrink-0 w-4 h-4" aria-hidden="true" style={{ color: v.accent }}>
              <svg viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
              </svg>
            </span>
            <span className="body-small" style={{ color: "var(--color-text-muted)" }}>{uc.text}</span>
          </li>
        ))}
      </ul>

      {/* Link affordance */}
      <p
        className="mt-6 body-small font-semibold flex items-center gap-1 transition-colors duration-150"
        style={{ color: v.accent }}
      >
        See {v.label.split(" ")[0]} solutions
        <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </p>
    </Link>
  );
}
