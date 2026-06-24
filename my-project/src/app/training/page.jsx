'use client'

import Link from "next/link";
import {
  FiBriefcase,
  FiArrowRight,
  FiCheckCircle,
  FiUsers,
  FiAward,
  FiClock,
} from "react-icons/fi";

const trainings = [
  {
    id: 1,
    icon: <FiBriefcase className="text-5xl" />,
    title: "On-site Training",
    description: "Custom training programs delivered at your location. Perfect for teams and organizations.",
    link: "/training/onsite",
    features: [
      "Customized curriculum",
      "On-site delivery",
      "Hands-on workshops",
      "Team collaboration",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: <FiUsers className="text-5xl" />,
    title: "Online Training",
    description: "Live virtual training sessions from anywhere in the world. Flexible and accessible.",
    link: "/training/online",
    features: [
      "Live interactive sessions",
      "Recorded lectures",
      "Global accessibility",
      "Flexible scheduling",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: <FiAward className="text-5xl" />,
    title: "Custom Programs",
    description: "Tailored training solutions designed specifically for your organization's needs.",
    link: "/training/custom",
    features: [
      "Bespoke curriculum",
      "Industry-specific content",
      "Flexible duration",
      "Measurable outcomes",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export default function TrainingPage() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Corporate Trainings
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            Empower Your <span className="text-blue-600">Team</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive training programs designed to upskill your workforce
            and drive organizational growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-500">Companies Trained</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">10,000+</div>
            <div className="text-sm text-gray-500">Professionals Trained</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-500">Training Programs</div>
          </div>
        </div>

        {/* Training Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainings.map((training) => (
            <div
              key={training.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${training.color} p-4 rounded-xl inline-block text-white group-hover:scale-110 transition-transform mb-4`}>
                {training.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {training.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {training.description}
              </p>
              <div className="space-y-1 mb-4">
                {training.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href={training.link}
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
              >
                Learn More
                <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's design a training program that meets your organization's
            specific needs and goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
}