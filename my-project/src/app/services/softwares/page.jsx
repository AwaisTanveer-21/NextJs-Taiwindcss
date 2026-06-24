'use client'
import Link from "next/link";
import {
  FiArrowLeft,
  FiCode,
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiAward,
} from "react-icons/fi";

const serviceData = {
  title: "Software Development",
  icon: <FiCode className="text-6xl" />,
  description: "Custom software development services to build scalable, secure, and innovative solutions.",
  longDescription: "We build custom software solutions that solve real business problems. From web applications to enterprise systems, we use modern technologies and best practices to deliver high-quality software that drives business growth.",
  technologies: [
    "React.js & Next.js",
    "Node.js & Express",
    "Python & Django",
    "Java & Spring Boot",
    "React Native & Flutter",
    "MongoDB & PostgreSQL",
  ],
  services: [
    "Custom Web Application Development",
    "Enterprise Software Solutions",
    "API Development & Integration",
    "Mobile App Development",
    "Legacy System Modernization",
    "Cloud-Native Development",
  ],
  benefits: [
    "Scalable and secure solutions",
    "Modern technology stack",
    "Agile development process",
    "Continuous delivery",
    "Dedicated support team",
  ],
};

export default function SoftwareService() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <FiArrowLeft /> Back to Services
        </Link>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
              {serviceData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold">{serviceData.title}</h1>
              <p className="text-blue-100 mt-2 max-w-2xl">{serviceData.description}</p>
              <Link href="/contact" className="inline-block mt-4 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{serviceData.longDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceData.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <FiCheckCircle className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceData.services.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Let's Build Together</h3>
              <p className="text-sm text-gray-600 mb-4">
                Tell us about your project and get a free quote.
              </p>
              <Link href="/contact" className="block bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}