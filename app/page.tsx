import Header from "components/Header";
import Hero from "components/Hero";
import VoiceDemo from "components/VoiceDemo";
import VerticalsSection from "components/VerticalsSection";
import PilotSteps from "components/PilotSteps";
import TrustSection from "components/TrustSection";
import EngineeringSection from "components/EngineeringSection";
import FounderNote from "components/FounderNote";
import FAQ from "components/FAQ";
import CaseStudies from "components/CaseStudies";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--color-ink)" }}>
      <Header />
      <main>
        <Hero />
        <VoiceDemo />
        <VerticalsSection />
        <PilotSteps />
        <TrustSection />
        <CaseStudies visible={false} />
        <EngineeringSection />
        <FounderNote />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
