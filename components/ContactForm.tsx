"use client";

import { useState } from "react";
import Link from "next/link";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!ENDPOINT) {
      // Graceful fallback — no endpoint configured
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — copy */}
            <div className="lg:col-span-2">
              <span className="section-label">Get in touch</span>
              <h2 className="heading-3 mt-2 mb-4" style={{ color: "var(--color-sand)" }}>
                Ready to put AI to work?
              </h2>
              <p className="body-base mb-6" style={{ color: "var(--color-text-muted)" }}>
                Book a free 30-minute scoping call. We&apos;ll look at one workflow and tell you honestly whether AI can improve it — and show you a demo.
              </p>

              <Link
                href="https://calendly.com/contact-futurive/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center mb-6"
              >
                Schedule a meeting →
              </Link>

              <div className="space-y-3">
                <p className="body-small" style={{ color: "var(--color-text-muted)" }}>
                  <span style={{ color: "var(--color-gold)" }}>✉</span>{" "}
                  <a href="mailto:contact@futurive.ai" className="hover:underline focus-ring rounded" style={{ color: "var(--color-text-muted)" }}>
                    contact@futurive.ai
                  </a>
                </p>
                <p className="body-small" style={{ color: "var(--color-text-muted)" }}>
                  <span style={{ color: "var(--color-gold)" }}>📍</span>{" "}
                  Dubai Digital Park, Dubai Silicon Oasis
                </p>
                <p className="body-small" style={{ color: "var(--color-text-muted)" }}>
                  <span style={{ color: "var(--color-gold)" }}>🕐</span>{" "}
                  Response within hours, GST timezone
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              {status === "sent" ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center gap-4 p-10 rounded-2xl border"
                  style={{ borderColor: "var(--color-border-gold)", backgroundColor: "var(--color-ink-mid)" }}
                >
                  <div className="text-3xl" aria-hidden="true">✓</div>
                  <h3 className="heading-5" style={{ color: "var(--color-sand)" }}>Message received</h3>
                  <p className="body-small" style={{ color: "var(--color-text-muted)" }}>
                    We&apos;ll be in touch within a few hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl border space-y-5"
                  style={{ backgroundColor: "var(--color-ink-mid)", borderColor: "var(--color-border)" }}
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} required />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <Field label="Company" name="company" type="text" value={form.company} onChange={handleChange} />
                  <div>
                    <label className="label mb-2 block" style={{ color: "var(--color-text-muted)" }} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your use case or workflow..."
                      className="w-full rounded-lg px-4 py-3 body-small resize-none focus-ring"
                      style={{
                        backgroundColor: "var(--color-ink)",
                        color: "var(--color-sand)",
                        border: "1px solid var(--color-border)",
                        outline: "none",
                      }}
                    />
                  </div>

                  {status === "error" && (
                    <p className="body-small" style={{ color: "#f87171" }}>
                      {ENDPOINT
                        ? "Something went wrong. Please email us directly at contact@futurive.ai"
                        : "Contact form not configured. Please email contact@futurive.ai"}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-primary w-full justify-center"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type, value, onChange, required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label mb-2 block" style={{ color: "var(--color-text-muted)" }} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg px-4 py-3 body-small focus-ring"
        style={{
          backgroundColor: "var(--color-ink)",
          color: "var(--color-sand)",
          border: "1px solid var(--color-border)",
          outline: "none",
        }}
      />
    </div>
  );
}
