import React from "react";
import Link from "next/link";
import {
  FaRocket,
  FaLightbulb,
  FaEye,
  FaBullseye,
  FaCheckCircle,
  FaArrowRight,
  FaCog,
  FaChartLine,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";

const About: React.FC = () => {
  const approach = [
    { step: "Discover", description: "Understand your needs and identify opportunities", icon: FaLightbulb },
    { step: "Design", description: "Blueprint your custom AI solution", icon: FaCog },
    { step: "Build", description: "Develop and train intelligent systems", icon: FaRocket },
    { step: "Integrate", description: "Seamlessly deploy into your workflows", icon: FaBolt },
    { step: "Optimize", description: "Monitor, improve, and scale", icon: FaChartLine }
  ];

  const whyChooseUs = [
    {
      title: "Deep Experience",
      description: "Proven expertise building legal, enterprise, and automation systems"
    },
    {
      title: "Hybrid Expertise",
      description: "AI engineering meets product thinking for holistic solutions"
    },
    {
      title: "Speed-Focused Delivery",
      description: "Cost-efficient deployment in weeks, not months"
    },
    {
      title: "Tailored Solutions",
      description: "Custom-built for your needs, not one-size-fits-all templates"
    },
    {
      title: "ROI-Driven",
      description: "Focus on measurable business outcomes, not buzzwords"
    },
    {
      title: "Long-Term Partnership",
      description: "We meet you where you are and take you where you need to go"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-black overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              About Futurive.ai
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            We Build AI That Works <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              in the Real World
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-4xl mx-auto">
            Future-driven solutions. Practical execution. Measurable impact.
          </p>
        </div>

        {/* Who We Are */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 font-light">
              <p>
                <strong className="font-semibold text-gray-900 dark:text-white">Futurive.ai</strong> is an AI consulting and product studio that builds intelligent solutions for the modern business world. We help companies adopt AI with clarity, confidence, and measurable impact, from strategy and automation to full-scale product development.
              </p>
              <p>
                We don't just prototype ideas. We turn them into systems that work in the real world.
              </p>
            </div>
          </div>
        </div>

        {/* What Futurive Means */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What "Futurive" Means
            </h2>
            <div className="inline-block bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-900 shadow-lg">
              <p className="text-5xl sm:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">Future</span>
                <span className="text-gray-400 dark:text-gray-600 mx-2">+</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Innovative</span>
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl">
                We believe the future belongs to those who design it, and we're here to engineer that future with AI, today.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-4xl mr-3" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg font-light opacity-95">
              To make AI accessible, actionable, and profitable for businesses by designing solutions that streamline operations, elevate decision-making, and unlock new growth opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-4">
              <FaEye className="text-4xl mr-3" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg font-light opacity-95">
              A world where every organization, from startups to enterprises, has the power to scale exponentially with AI-driven capabilities and intelligent digital systems.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What We Do
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-light mb-8 text-center max-w-3xl mx-auto">
            We partner with companies to design and deploy AI solutions such as:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Intelligent workflow automations",
              "Custom AI agents & assistants",
              "AI-powered document & data processing",
              "Knowledge systems (RAG / internal search)",
              "End-to-end AI product development and integrations"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <FaCheckCircle className="text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              No generic templates. No hype. Just practical AI that drives real business outcomes.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto font-light">
            We believe the best AI solutions are <strong className="font-semibold text-gray-900 dark:text-white">Practical</strong>, <strong className="font-semibold text-gray-900 dark:text-white">Lean</strong>, <strong className="font-semibold text-gray-900 dark:text-white">Scalable</strong>, and <strong className="font-semibold text-gray-900 dark:text-white">Responsible</strong>.
          </p>

          <div className="relative">
            {/* Timeline Line - More Subtle */}
            <div className="hidden md:block absolute top-[60px] left-0 right-0 h-0.5 opacity-30 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400" />

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {approach.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-2 border-purple-600 dark:border-purple-400 rounded-full p-6 mb-4 z-10 shadow-lg hover:shadow-xl transition-all duration-300">
                      <Icon className="text-3xl text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="heading-6 mb-2">
                      {item.step}
                    </h4>
                    <p className="body-small text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-3">
                  <FaShieldAlt className="text-purple-600 dark:text-purple-400 text-xl mr-3 mt-1 flex-shrink-0" />
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Promise */}
        <div className="container-narrow mb-20">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 dark:from-purple-950 dark:to-blue-950 rounded-2xl p-12 text-center text-white">
            <h2 className="heading-3 mb-6">Our Promise</h2>
            <p className="body-large mb-4 opacity-95">
              We don't sell "AI magic."
            </p>
            <p className="body-large opacity-95">
              We help you implement AI that actually works: efficiently, responsibly, and with long-term value.
            </p>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="heading-4">
                When you're ready to build the future, we're ready to build with you.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="heading-3 mb-6">
            Let's Build Together
          </h3>
          <p className="body-base text-gray-600 dark:text-gray-400 mb-8">
            Want to explore what AI can do for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-primary btn-lg">
              Book a Consultation
              <FaArrowRight />
            </Link>
            <Link href="#services" className="btn-secondary btn-lg">
              See Our Services
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
