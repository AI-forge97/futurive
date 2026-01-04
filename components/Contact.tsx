import { FaCalendarAlt, FaPaperPlane, FaLinkedin, FaEnvelope, FaTwitter, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {

  return (
    <section id="contact" className="section overflow-x-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="container-content">
        {/* Header */}
        <div className="section-header">
          <div className="mb-6">
            <span className="badge">Get in Touch</span>
          </div>
          <h2 className="heading-1 mb-6 px-4">
            Let's Build the Future Together
          </h2>
          <p className="body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Ready to transform your business with AI? Book a free consultation or send us a message.
            We typically respond within 24 hours.
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 px-4">
          {/* Left Column - Calendly Booking */}
          <div className="card card-padding">
            <div className="mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl inline-block mb-4">
                <FaCalendarAlt className="text-4xl text-white" />
              </div>
              <h3 className="heading-4 mb-3">
                Book a Free Consultation
              </h3>
              <p className="body-base text-gray-600 dark:text-gray-400 mb-6">
                Schedule a 30-minute discovery call to discuss your AI needs, challenges, and how we can help.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">✓</span>
                <span className="body-base text-gray-700 dark:text-gray-300">Free 30-minute consultation</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">✓</span>
                <span className="body-base text-gray-700 dark:text-gray-300">Discuss your AI strategy and goals</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">✓</span>
                <span className="body-base text-gray-700 dark:text-gray-300">Get expert recommendations</span>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 dark:text-purple-400 mr-3 mt-1">✓</span>
                <span className="body-base text-gray-700 dark:text-gray-300">No commitment required</span>
              </div>
            </div>

            {/* Calendly Button */}
            <a
              href="https://calendly.com/contact-futurive/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <FaCalendarAlt />
              Schedule a Meeting
            </a>

            {/* Optional: Calendly Embed - Uncomment and replace with your Calendly username */}
            {/* <div className="mt-6">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/your-username/30min"
                style={{ minWidth: "320px", height: "630px" }}
              />
            </div> */}
          </div>

          {/* Right Column - Contact Form */}
          <div className="card card-padding">
            <div className="mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl inline-block mb-4">
                <FaPaperPlane className="text-4xl text-white" />
              </div>
              <h3 className="heading-4 mb-3">
                Send Us a Message
              </h3>
              <p className="body-base text-gray-600 dark:text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Form - Web3Forms */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="7534a64a-3bd8-402a-9ed3-345be1be53fd" />

              {/* Optional: Redirect after submission */}
              <input type="hidden" name="redirect" value="https://futurive.ai/thank-you" />

              <div>
                <label htmlFor="name" className="block body-base font-semibold text-gray-900 dark:text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block body-base font-semibold text-gray-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block body-base font-semibold text-gray-900 dark:text-white mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block body-base font-semibold text-gray-900 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info & Social Links */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Direct Contact */}
            <div className="text-center md:text-left">
              <h4 className="heading-6 mb-4">Direct Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:contact@futurive.ai"
                  className="flex items-center justify-center md:justify-start body-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <FaEnvelope className="mr-2 flex-shrink-0" />
                  contact@futurive.ai
                </a>
                <div className="flex items-start justify-center md:justify-start body-base text-gray-600 dark:text-gray-400">
                  <FaMapMarkerAlt className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Building A1, Dubai Digital Park,<br />
                    Dubai Silicon Oasis, Dubai,<br />
                    United Arab Emirates
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="heading-6 mb-4">Connect With Us</h4>
              <div className="flex gap-4 justify-center md:justify-end">
                <a
                  href="https://linkedin.com/company/futurive-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://twitter.com/futurive_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="https://github.com/futurive-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="text-center mt-12 px-4">
          <p className="body-small text-gray-500 dark:text-gray-500">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
