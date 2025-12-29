import { AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-12 dark:border-t dark:border-gray-800">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="heading-6 gradient-text mb-3">
              Futurive.ai
            </h3>
            <p className="body-small text-gray-500 dark:text-gray-400">
              Building the future of business with intelligent AI solutions.
            </p>
          </div>
          <div>
            <h4 className="body-small font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 body-small">
              <li><a href="#services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-ring rounded">Services</a></li>
              <li><a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-ring rounded">About Us</a></li>
              <li><a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-ring rounded">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="body-small font-semibold text-gray-900 dark:text-white mb-3">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/futurive-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-ring rounded">
                <AiOutlineLinkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/futurive_ai" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-ring rounded">
                <AiOutlineX className="w-6 h-6" />
              </a>
              <a href="https://github.com/futurive-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-ring rounded">
                <AiOutlineGithub className="w-6 h-6" />
              </a>
              <a href="mailto:contact@futurive.ai" aria-label="Email" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus-ring rounded">
                <AiOutlineMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center">
          <p className="body-small">&copy; {currentYear} Futurive.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
