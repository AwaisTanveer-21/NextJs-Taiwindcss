'use client'
import Link from "next/link";
import {
  FiArrowLeft,
  FiGlobe,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

const serviceData = {
  title: "Digital Marketing",
  icon: <FiGlobe className="text-6xl" />,
  description: "Comprehensive digital marketing services to boost your online presence and grow your business.",
  longDescription: "Our digital marketing services help you reach your target audience, build brand awareness, and drive conversions. We use data-driven strategies and the latest tools to deliver measurable results.",
  services: [
    "Search Engine Optimization (SEO)",
    "Social Media Marketing",
    "Content Marketing",
    "Pay-Per-Click Advertising",
    "Email Marketing",
    "Analytics & Reporting",
  ],
  benefits: [
    "Increase website traffic by up to 200%",
    "Boost conversion rates",
    "Build brand authority",
    "Target the right audience",
    "Maximize ROI on marketing spend",
  ],
  stats: [
    { value: "200+", label: "Campaigns Run" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "3x", label: "Average ROI" },
    { value: "50+", label: "Active Clients" },
  ],
};

export default function DigitalMarketingService() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <FiArrowLeft /> Back to Services
        </Link>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
              {serviceData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold">{serviceData.title}</h1>
              <p className="text-purple-100 mt-2 max-w-2xl">{serviceData.description}</p>
              <Link href="/contact" className="inline-block mt-4 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {serviceData.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{serviceData.longDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceData.services.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <FiCheckCircle className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-purple-500 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Ready to Grow?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Let's create a digital marketing strategy for your business.
              </p>
              <Link href="/contact" className="block bg-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}