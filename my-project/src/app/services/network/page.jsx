'use client'
import Link from "next/link";
import {
  FiArrowLeft,
  FiServer,
  FiCheckCircle,
  FiShield,
  FiGlobe,
  FiClock,
} from "react-icons/fi";

const serviceData = {
  title: "Network Solutions",
  icon: <FiServer className="text-6xl" />,
  description: "Secure, scalable, and reliable network solutions for your organization.",
  longDescription: "We design and implement network solutions that ensure seamless connectivity, robust security, and optimal performance. Our team of network experts will help you build a network infrastructure that supports your business goals.",
  services: [
    "Network Design & Implementation",
    "Cloud Networking Solutions",
    "Network Security & Firewalls",
    "24/7 Network Monitoring",
    "Network Performance Optimization",
    "Disaster Recovery Planning",
  ],
  benefits: [
    "99.9% network uptime guarantee",
    "Enhanced security and compliance",
    "Scalable infrastructure",
    "Reduced operational costs",
    "Expert 24/7 support",
  ],
  stats: [
    { value: "500+", label: "Networks Deployed" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Support" },
    { value: "50+", label: "Network Experts" },
  ],
};

export default function NetworkService() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <FiArrowLeft /> Back to Services
        </Link>

        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
              {serviceData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold">{serviceData.title}</h1>
              <p className="text-orange-100 mt-2 max-w-2xl">{serviceData.description}</p>
              <Link href="/contact" className="inline-block mt-4 bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {serviceData.stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
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
                    <FiCheckCircle className="text-orange-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-orange-500 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Need Network Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Let our experts design the perfect network for you.
              </p>
              <Link href="/contact" className="block bg-orange-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-orange-700 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}