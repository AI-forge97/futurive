import React from "react";
import { SiOpenai, SiTensorflow, SiMicrosoft, SiGoogle, SiAmazon, SiIbm, SiPython } from "react-icons/si";

const techLogos = [
  { Icon: SiOpenai },
  { Icon: SiTensorflow },
  { Icon: SiMicrosoft },
  { Icon: SiGoogle },
  { Icon: SiAmazon },
  { Icon: SiIbm },
  { Icon: SiPython },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-purple-900 to-blue-900 dark:from-purple-100 dark:to-blue-100 overflow-x-hidden">
      <div className="container-content">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row w-full gap-8">
            <h2 className="heading-3 mb-6 md:mb-0 text-white dark:text-gray-900 text-center md:text-left md:w-1/3 px-4">
              Powered by Industry-Leading AI Technologies
            </h2>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:w-2/3 items-center px-4">
              {techLogos.map(({ Icon }, index) => (
                <div key={index} className="flex flex-col items-center justify-center group">
                  <Icon className="text-4xl md:text-5xl text-white dark:text-gray-900 opacity-70 group-hover:opacity-100 transition-opacity" />
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
