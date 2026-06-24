'use client'

import Link from "next/link";
import {
  FiArrowLeft,
  FiUsers,
  FiCheckCircle,
  FiMonitor,
  FiGlobe,
  FiClock,
  FiAward,
  FiVideo,
} from "react-icons/fi";

const trainingData = {
  title: "Online Training",
  icon: <FiUsers className="text-6xl" />,
  description: "Live virtual training sessions accessible from anywhere in the world.",
  longDescription: "Our online training programs bring expert instruction directly to your screen. With live interactive sessions, recorded lectures, and comprehensive course materials, we provide a rich learning experience that fits your schedule.",
  features: [
    "Live interactive video sessions",
    "Expert instructors in real-time",
    "Recorded sessions for review",
    "Digital course materials",
    "Interactive Q&A sessions",
    "Global networking opportunities",
  ],
  benefits: [
    "Learn from anywhere",
    "Flexible scheduling",
    "Cost-effective training",
    "Access to global experts",
    "Self-paced learning options",
  ],
  technologies: [
    "Zoom Video Conferencing",
    "Microsoft Teams",
    "Virtual Labs",
    "Learning Management System",
    "Interactive Whiteboards",
    "Breakout Rooms",
  ],
};

export default function OnlineTraining() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/training" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <FiArrowLeft /> Back to Trainings
        </Link>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
              {trainingData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold">{trainingData.title}</h1>
              <p className="text-purple-100 mt-2 max-w-2xl">{trainingData.description}</p>
              <Link href="/contact" className="inline-block mt-4 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600">5,000+</div>
            <div className="text-sm text-gray-500">Online Students</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-500">Countries</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-sm text-gray-500">Access</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600">96%</div>
            <div className="text-sm text-gray-500">Completion Rate</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{trainingData.longDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trainingData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="text-purple-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {trainingData.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="text-sm text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {trainingData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-purple-500 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Why Online Training?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <FiMonitor className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Learn from anywhere</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiGlobe className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Global community</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiClock className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Flexible schedule</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiVideo className="text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Interactive sessions</span>
                </div>
              </div>
              <Link href="/contact" className="block mt-4 bg-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}