import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import ServicesDetailed from "components/ServicesDetailed";
import About from "components/About";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";
import Contact from "components/Contact";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <ServicesDetailed />
        <Section
          leftHalf={
            <>
              <h2 className="heading-2 text-gray-900 dark:text-white mb-6">
                AI-Powered Innovation for Every Industry
              </h2>
              <p className="body-large text-gray-700 dark:text-gray-300">
                From predictive analytics to intelligent automation, Futurive.ai builds AI solutions that drive measurable results.
                Our custom machine learning models adapt to your unique business challenges and scale with your growth.
              </p>
            </>
          }
          rightHalf={
            <div className="flex items-center justify-center">
              <div className="card-gradient">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="heading-4 mb-2">Smart AI Solutions</h3>
                  <p className="body-small opacity-90">Custom-built for your success</p>
                </div>
              </div>
            </div>
          }
        />
        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="heading-2 text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="body-large text-gray-700 dark:text-gray-300">
                Learn more about how Futurive.ai can help transform your business with cutting-edge artificial intelligence.
                Our team is ready to answer your questions and design the perfect AI solution for your needs.
              </p>
            </div>
          }
        />
        <About />
        <Reviews />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
