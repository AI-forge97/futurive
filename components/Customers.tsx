import React from "react";
import Image from "next/image";
import {
  SiOpenai,
  SiGoogle,
  SiMeta,
  SiPytorch,
  SiPython,
  SiAmazon,
  SiMicrosoft,
} from "react-icons/si";
import { FaLink, FaRobot } from "react-icons/fa";

// Custom SVG logo component with responsive sizing
const SvgLogo: React.FC<{ src: string; alt: string; width?: number; height?: number }> = ({
  src,
  alt,
  width = 50,
  height = 50
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="opacity-70 group-hover:opacity-100 transition-opacity w-auto h-8 md:h-10"
  />
);

const techLogos = [
  { Icon: () => <SvgLogo src="/Anthropic_Symbol_0.svg" alt="Anthropic" width={40} height={40} />, name: "Anthropic", type: "image" },
  { Icon: SiOpenai, name: "OpenAI", type: "icon" },
  { Icon: SiGoogle, name: "Google", type: "icon" },
  { Icon: SiMeta, name: "Meta", type: "icon" },
  { Icon: SiPytorch, name: "PyTorch", type: "icon" },
  { Icon: FaLink, name: "LangChain", type: "icon" },
  { Icon: FaRobot, name: "Hugging Face", type: "icon" },
  { Icon: SiPython, name: "Python", type: "icon" },
  { Icon: SiAmazon, name: "AWS", type: "icon" },
  { Icon: SiMicrosoft, name: "Azure", type: "icon" },
  { Icon: () => <SvgLogo src="/N8n.io_Logo_0.svg" alt="n8n" width={80} height={40} />, name: "n8n", type: "image" },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-12 md:py-16 bg-gradient-to-r from-purple-900 to-blue-900 dark:from-purple-100 dark:to-blue-100 overflow-x-hidden">
      <div className="container-content">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8 items-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-0 text-white dark:text-gray-900 text-center lg:text-left lg:w-1/4 px-4">
              Powered by Industry-Leading AI Technologies
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 md:gap-6 lg:gap-8 lg:w-3/4 items-center px-4">
              {techLogos.map(({ Icon, name, type }, index) => (
                <div key={index} className="flex items-center justify-center group" title={name}>
                  {type === "image" ? (
                    <Icon />
                  ) : (
                    <Icon className="text-2xl sm:text-3xl md:text-4xl text-white dark:text-gray-900 opacity-70 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
