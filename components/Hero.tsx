import Link from "next/link";

export default function Hero() {
  return (
    <section className="section text-center overflow-x-hidden">
      <div className="container-content">
        <div className="mb-6">
          <span className="badge">
            AI-Powered Solutions
          </span>
        </div>
        <h1 className="heading-display text-gray-900 dark:text-white mb-6 px-4">
          Transform Your Business with{" "}
          <span className="gradient-text">
            Intelligent AI
          </span>
        </h1>
        <p className="body-large text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto px-4">
          Futurive.ai delivers cutting-edge artificial intelligence services and products.
          From custom ML models to enterprise AI solutions, we build the future of your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <Link href="#contact" className="btn-primary w-full sm:w-auto">
            Get Started
          </Link>
          <Link href="#services" className="btn-secondary w-full sm:w-auto">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
