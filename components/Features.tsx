import React from "react";
import Link from "next/link";
import { FaLightbulb, FaRobot, FaChartLine } from "react-icons/fa";

const Features = () => {
  const pillars = [
    {
      icon: FaLightbulb,
      title: "Core Services",
      description: "Strategic AI implementation and automation solutions that transform your business operations.",
      services: ["AI Strategy & Consulting", "AI Automation & Workflow Engineering", "Custom Integrations & MLOps"]
    },
    {
      icon: FaRobot,
      title: "Intelligent Systems",
      description: "Advanced AI agents and knowledge systems that enhance decision-making and customer experience.",
      services: ["AI Agents & Conversational Systems", "Document Intelligence", "RAG & Knowledge Systems"]
    },
    {
      icon: FaChartLine,
      title: "Business Acceleration",
      description: "Data-driven insights and AI-powered solutions that drive growth and competitive advantage.",
      services: ["Business Intelligence & Analytics", "Content & Creative Automation", "AI Training & Support"]
    },
  ];

  return (
    <section id="services" className="section-muted overflow-x-hidden">
      <div className="container-content">
        <div className="section-header">
          <h2 className="section-title px-4">
            Our Service Pillars
          </h2>
          <p className="section-description px-4">
            Comprehensive AI solutions organized into three strategic pillars to address every aspect of your AI transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 px-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="feature-card">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl inline-block mb-6">
                  <Icon className="text-4xl text-white" />
                </div>

                <h3 className="heading-4 mb-4">
                  {pillar.title}
                </h3>

                <p className="body-base text-gray-600 dark:text-gray-400 mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2 mb-6">
                  {pillar.services.map((service, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-purple-600 dark:text-purple-400 mr-2 mt-1">✓</span>
                      <span className="body-small text-gray-700 dark:text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 px-4">
          <Link href="#services-detailed" className="btn-primary btn-lg w-full sm:w-auto">
            Explore All Services in Detail →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
