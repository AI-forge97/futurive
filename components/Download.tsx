import Link from "next/link";
import { FaRocket, FaCalendarAlt } from "react-icons/fa";

const Download: React.FC = () => (
  <section className="section overflow-x-hidden">
    <div className="section-container">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="container-narrow px-4">
          <h2 className="heading-2 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="body-large text-gray-800 dark:text-gray-300 mb-8">
            Join leading companies leveraging AI to drive innovation, efficiency, and growth.
            Let's discuss how Futurive.ai can build custom AI solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-primary btn-lg w-full sm:w-auto">
              <FaRocket />
              Start Your AI Journey
            </Link>
            <Link href="#contact" className="btn-secondary btn-lg w-full sm:w-auto">
              <FaCalendarAlt />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Download;
