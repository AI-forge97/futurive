"use client";

import React, { useState } from "react";
import {
  FaLightbulb,
  FaCog,
  FaRobot,
  FaComments,
  FaFileAlt,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaVideo,
  FaShieldAlt,
  FaGraduationCap,
  FaHeadset
} from "react-icons/fa";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  outcomes: string[];
}

interface ServicePillar {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

const servicePillars: ServicePillar[] = [
  {
    id: "core",
    title: "Core Services",
    description: "Strategic AI implementation and automation solutions that transform your business operations",
    services: [
      {
        icon: FaLightbulb,
        title: "AI Strategy & Consulting",
        description: "Comprehensive AI readiness assessment, adoption roadmap, and strategic planning to guide your AI transformation journey.",
        outcomes: [
          "AI readiness assessment & gap analysis",
          "Custom AI adoption roadmap & budgeting",
          "Use-case discovery workshops",
          "Feasibility analysis & PoC planning",
          "Clear direction and actionable implementation plan"
        ]
      },
      {
        icon: FaRobot,
        title: "AI Automation & Workflow Engineering",
        description: "Intelligent process automation that reduces manual workload and accelerates business operations.",
        outcomes: [
          "Intelligent process automation",
          "Email & document automation",
          "CRM, ERP, and workflow integrations",
          "AI agent orchestration for business tasks",
          "Reduce manual workload by up to 70%"
        ]
      },
      {
        icon: FaCloud,
        title: "Custom Integrations & MLOps",
        description: "Production-ready AI systems with seamless integration into your existing infrastructure.",
        outcomes: [
          "API development & legacy system integration",
          "Cloud deployment (AWS/GCP/Azure)",
          "Model monitoring & optimization",
          "Containerized microservice architecture",
          "Reliable, scalable production AI infrastructure"
        ]
      }
    ]
  },
  {
    id: "intelligent",
    title: "Intelligent Systems",
    description: "Advanced AI agents and knowledge systems that enhance decision-making and customer experience",
    services: [
      {
        icon: FaComments,
        title: "AI Agents & Conversational Systems",
        description: "Custom AI assistants that provide 24/7 intelligent support and automate customer interactions.",
        outcomes: [
          "Custom AI assistants for customer support",
          "Voice assistants for call/phone operations",
          "Lead qualification and sales assistants",
          "Internal knowledge assistants",
          "24/7 smart support with reduced response times"
        ]
      },
      {
        icon: FaFileAlt,
        title: "Document Intelligence",
        description: "AI-powered document processing for legal, HR, and finance teams to accelerate workflows.",
        outcomes: [
          "Contract & agreement summarization",
          "PDF data extraction & classification",
          "Automated intake & case processing",
          "Compliance-focused AI workflows",
          "Faster processing with 90% accuracy improvement"
        ]
      },
      {
        icon: FaDatabase,
        title: "RAG & Knowledge Systems",
        description: "Private AI search systems that unlock insights from your internal data and documents.",
        outcomes: [
          "Private AI search over documents/databases",
          "Knowledge graph & vector DB setups",
          "Enterprise AI chat on internal data",
          "LLM-based research agents",
          "Instant answers from internal knowledge, zero hallucinations"
        ]
      }
    ]
  },
  {
    id: "acceleration",
    title: "Business Acceleration",
    description: "Data-driven insights and AI-powered solutions that drive growth and competitive advantage",
    services: [
      {
        icon: FaChartLine,
        title: "AI for Business Intelligence & Analytics",
        description: "Predictive analytics and intelligent insights that power better business decisions.",
        outcomes: [
          "Predictive analytics & forecasting",
          "Customer segmentation & targeting",
          "AI-powered recommendation systems",
          "KPI dashboards with AI insights",
          "Better decisions, improved revenue outcomes"
        ]
      },
      {
        icon: FaVideo,
        title: "AI Content & Creative Automation",
        description: "Automated content generation and creative workflows that accelerate marketing output.",
        outcomes: [
          "AI visuals & image enhancement",
          "AI video/story generation",
          "Social content automation",
          "Brand-consistent content at scale",
          "Reduce content spend by 60%, accelerate output"
        ]
      },
      {
        icon: FaGraduationCap,
        title: "AI Training & Support",
        description: "Comprehensive training programs and ongoing support to maximize your AI investment.",
        outcomes: [
          "Team onboarding & skill enablement",
          "AI governance & compliance consulting",
          "Monthly support & SLA packages",
          "On-site enterprise consulting",
          "Sustained AI adoption and ROI growth"
        ]
      }
    ]
  }
];

const ServicesDetailed: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>("core");

  const currentPillar = servicePillars.find(p => p.id === activePillar) || servicePillars[0];

  return (
    <section id="services-detailed" className="section overflow-x-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <h2 className="heading-1 mb-6 px-4">
            Comprehensive AI Solutions
          </h2>
          <p className="body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            We build intelligent systems that automate workflows, enhance decision-making, and scale operations through practical AI solutions tailored to your business.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {servicePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillar(pillar.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus-ring flex-1 sm:flex-initial min-w-[160px] ${
                activePillar === pillar.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Active Pillar Description */}
        <div className="text-center mb-12 px-4">
          <p className="body-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {currentPillar.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container-content px-4">
          {currentPillar.services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <div className="card-interactive card-padding">
      <div className="flex items-start mb-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg">
          <Icon className="text-3xl text-white" />
        </div>
      </div>

      <h3 className="heading-5 mb-3">
        {service.title}
      </h3>

      <p className="body-base text-gray-600 dark:text-gray-400 mb-4">
        {service.description}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-purple-600 dark:text-purple-400 font-semibold hover:underline mb-3 focus-ring rounded"
      >
        {isExpanded ? "Hide Details" : "View Key Outcomes →"}
      </button>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Key Outcomes:
          </h4>
          <ul className="space-y-2">
            {service.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start body-small text-gray-600 dark:text-gray-400">
                <span className="text-purple-600 dark:text-purple-400 mr-2">✓</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesDetailed;
