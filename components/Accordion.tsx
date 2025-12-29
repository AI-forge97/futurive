"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <div className={`card-interactive ${isOpen ? 'shadow-xl' : ''}`}>
        <button
          className="w-full text-left p-6 flex justify-between items-center focus-ring rounded-lg"
          onClick={toggleOpen}
        >
          <span className="heading-6 text-gray-900 dark:text-white">{title}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <FaChevronDown className="text-xl text-purple-600 dark:text-purple-400" />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6 pt-2 animate-fade-in">
            <p className="body-base text-gray-600 dark:text-gray-400">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultAccordionItems = [
  {
    title: "What AI services does Futurive.ai offer?",
    content: "We provide custom AI model development, intelligent automation, predictive analytics, AI consulting, seamless integration services, and cloud-based AI solutions tailored to your business needs.",
  },
  {
    title: "How does the AI implementation process work?",
    content:
      "We start with a comprehensive consultation to understand your needs, then develop a strategic roadmap, build and train custom models, integrate with your systems, and provide ongoing support and optimization.",
  },
  {
    title: "What industries do you serve?",
    content:
      "Futurive.ai serves diverse industries including finance, healthcare, retail, manufacturing, logistics, and technology. Our AI solutions are adaptable to any sector looking to leverage intelligent automation.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
