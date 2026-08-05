import Link from "next/link";

export default function Hero() {
  return (
    <section className="section relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200 168 75 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200 168 75 / 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-narrow relative text-center">
        {/* Eyebrow */}
        <p className="label mb-6 animate-fade-up" style={{ color: "var(--color-gold)", animationDelay: "0ms" }}>
          AI for Insurance · Legal · Healthcare
        </p>

        {/* Headline */}
        <h1
          className="heading-display mb-6 animate-fade-up"
          style={{ color: "var(--color-sand)", animationDelay: "80ms", animationFillMode: "both" }}
        >
          AI that answers calls.{" "}
          <br className="hidden sm:block" />
          AI that reads documents.
        </h1>

        {/* Subhead */}
        <p
          className="body-large mb-10 mx-auto animate-fade-up"
          style={{
            color: "var(--color-text-muted)",
            maxWidth: "38rem",
            animationDelay: "160ms",
            animationFillMode: "both",
          }}
        >
          Futurive builds AI voice agents and triage systems for insurance, legal, and healthcare — in English and Arabic.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up"
          style={{ animationDelay: "240ms", animationFillMode: "both" }}
        >
          <Link href="#voice-demo" className="btn btn-primary btn-lg w-full sm:w-auto">
            Try the live voice demo
          </Link>
          <Link href="/contact" className="btn btn-ghost btn-lg w-full sm:w-auto">
            Book a consultation
          </Link>
        </div>

        {/* Waveform signature */}
        <div
          className="flex justify-center items-center gap-1 animate-fade-up"
          style={{ animationDelay: "320ms", animationFillMode: "both" }}
          aria-hidden="true"
        >
          <Waveform />
        </div>

        {/* Trust line */}
        <p
          className="mt-6 body-small animate-fade-up"
          style={{ color: "var(--color-text-faint)", animationDelay: "400ms", animationFillMode: "both" }}
        >
          Built in Dubai · UAE data hosting · English + Arabic · Working prototype in 2 weeks
        </p>
      </div>
    </section>
  );
}

function Waveform() {
  return (
    <div className="waveform" style={{ height: "48px", gap: "4px" }}>
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="waveform-bar"
          style={{
            animationName: "waveBar",
            animationDuration: "1.4s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${(i * 0.07) % 1.0}s`,
            opacity: i < 3 || i > 24 ? 0.3 : 1,
          }}
        />
      ))}
    </div>
  );
}
