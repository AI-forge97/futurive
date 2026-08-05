import type { Metadata } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import ContactForm from "components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Futurive — Book a Consultation",
  description:
    "Book a free 30-minute scoping call with Futurive. We'll look at one workflow in your firm or team and tell you honestly whether AI can improve it — and show you a demo.",
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "var(--color-ink)" }}>
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
