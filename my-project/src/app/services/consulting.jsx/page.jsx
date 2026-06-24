'use client'
import Link from "next/link";
import {
  FiArrowLeft,
  FiTrendingUp,
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiAward,
} from "react-icons/fi";

const serviceData = {
  title: "IT Consulting",
  icon: <FiTrendingUp className="text-6xl" />,
  description: "Expert IT consulting services to help your business leverage technology for growth and efficiency.",
  longDescription: "Our IT consulting services provide strategic guidance and technical expertise to help you navigate the complex world of technology. We work with you to understand your business goals and develop technology solutions that drive real results.",
  benefits: [
    "Reduce technology costs by up to 30%",
    "Improve operational efficiency",
    "Enhance security and compliance",
    "Accelerate digital transformation",
    "Gain competitive advantage",
  ],
  services: [
    "Technology Strategy & Planning",
    "IT Infrastructure Assessment",
    "Digital Transformation Consulting",
    "Cloud Migration Strategy",
    "IT Security Consulting",
    "Business Continuity Planning",
  ],
  process: [
    { step: "Discovery", description: "We understand your business goals and challenges." },
    { step: "Assessment", description: "We evaluate your current technology infrastructure." },
    { step: "Strategy", description: "We develop a customized technology roadmap." },
    { step: "Implementation", description: "We help you execute the strategy." },
    { step: "Optimization", description: "We continuously improve and optimize." },
  ],
};

export default function ConsultingService() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <FiArrowLeft /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
              {serviceData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold">{serviceData.title}</h1>
              <p className="text-green-100 mt-2 max-w-2xl">{serviceData.description}</p>
              <Link
                href="/contact"
                className="inline-block mt-4 bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">15+</div>
            <div className="text-sm text-gray-500">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">200+</div>
            <div className="text-sm text-gray-500">Clients Served</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">50+</div>
            <div className="text-sm text-gray-500">Expert Consultants</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{serviceData.longDescription}</p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Consulting Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceData.services.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Process</h2>
              <div className="space-y-4">
                {serviceData.process.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.step}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Schedule a free consultation with our experts.
              </p>
              <Link
                href="/contact"
                className="block bg-green-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}