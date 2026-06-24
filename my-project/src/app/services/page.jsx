'use client'
import Link from "next/link";
import {
  FiCode,
  FiGlobe,
  FiTrendingUp,
  FiServer,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const services = [
  {
    id: 1,
    icon: <FiCode className="text-5xl" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs. From web apps to enterprise systems.",
    link: "/services/software",
    features: [
      "Custom Web Applications",
      "Enterprise Software Solutions",
      "API Development",
      "Legacy System Modernization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: <FiGlobe className="text-5xl" />,
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing services.",
    link: "/services/digital-marketing",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Campaigns",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: <FiTrendingUp className="text-5xl" />,
    title: "IT Consulting",
    description: "Expert IT consulting to optimize your business operations and technology infrastructure.",
    link: "/services/consulting",
    features: [
      "Technology Strategy",
      "Infrastructure Planning",
      "Digital Transformation",
      "IT Auditing",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    icon: <FiServer className="text-5xl" />,
    title: "Network Solutions",
    description: "Secure and scalable network solutions for your organization's connectivity needs.",
    link: "/services/network",
    features: [
      "Network Design & Implementation",
      "Cloud Networking",
      "Network Security",
      "24/7 Network Monitoring",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            What We <span className="text-blue-600">Offer</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive IT services to help your business grow and succeed in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-1">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <FiCheckCircle className="text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 mt-4 text-blue-600 font-medium hover:gap-3 transition-all"
                  >
                    Learn More
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}