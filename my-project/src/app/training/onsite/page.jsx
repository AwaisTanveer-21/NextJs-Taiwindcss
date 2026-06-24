'use client'
import Link from "next/link";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCheckCircle,
  FiMapPin,
  FiUsers,
  FiClock,
  FiAward,
} from "react-icons/fi";

const trainingData = {
  title: "On-site Training",
  icon: <FiBriefcase className="text-6xl" />,
  description: "Custom training programs delivered at your location for maximum impact and team collaboration.",
  longDescription: "Our on-site training programs bring expert instructors directly to your workplace. We customize the curriculum to match your team's skill levels and business objectives, ensuring maximum relevance and engagement.",
  features: [
    "Customized curriculum based on your needs",
    "Expert instructors with industry experience",
    "Hands-on workshops and practical exercises",
    "Team building and collaboration",
    "Immediate application of skills",
    "Post-training support and resources",
  ],
  benefits: [
    "Team cohesion and alignment",
    "Reduced travel costs",
    "Immediate productivity gains",
    "Tailored learning experience",
    "Enhanced team communication",
  ],
  programs: [
    "Leadership Development",
    "Technical Skills Training",
    "Project Management",
    "Digital Transformation",
    "IT Infrastructure",
    "Cybersecurity Awareness",
  ],
};

export default function OnsiteTraining() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/training"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <FiArrowLeft /> Back to Trainings
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
              {trainingData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold">{trainingData.title}</h1>
              <p className="text-blue-100 mt-2 max-w-2xl">{trainingData.description}</p>
              <Link
                href="/contact"
                className="inline-block mt-4 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Request On-site Training
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">200+</div>
            <div className="text-sm text-gray-500">Companies Served</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-500">Trainings Delivered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-gray-500">Client Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-500">Expert Trainers</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{trainingData.longDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trainingData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Programs</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {trainingData.programs.map((program, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-sm text-gray-700">{program}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {trainingData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Why On-site Training?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <FiMapPin className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Training at your location</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiUsers className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Team-based learning</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiClock className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiAward className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Certified trainers</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}