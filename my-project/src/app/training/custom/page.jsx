'use client'
import Link from "next/link";
import {
  FiArrowLeft,
  FiAward,
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const trainingData = {
  title: "Custom Programs",
  icon: <FiAward className="text-6xl" />,
  description: "Tailored training solutions designed specifically for your organization's unique needs.",
  longDescription: "Every organization is unique. Our custom programs are designed from the ground up to address your specific challenges, goals, and industry requirements. We work closely with you to create a training solution that delivers measurable results.",
  features: [
    "Bespoke curriculum design",
    "Industry-specific content",
    "Flexible duration and format",
    "Measurable learning outcomes",
    "Progress tracking and reporting",
    "Post-training implementation support",
  ],
  benefits: [
    "Addresses specific business challenges",
    "Maximizes return on investment",
    "Aligns with organizational goals",
    "Flexible delivery options",
    "Scalable across teams",
  ],
  process: [
    { step: "Discovery", description: "We understand your goals and challenges." },
    { step: "Design", description: "We create a custom curriculum." },
    { step: "Development", description: "We develop course materials." },
    { step: "Delivery", description: "We deliver the training." },
    { step: "Evaluation", description: "We measure and optimize results." },
  ],
};

export default function CustomTraining() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/training" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <FiArrowLeft /> Back to Trainings
        </Link>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
              {trainingData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold">{trainingData.title}</h1>
              <p className="text-green-100 mt-2 max-w-2xl">{trainingData.description}</p>
              <Link href="/contact" className="inline-block mt-4 bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Request Custom Program
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-sm text-gray-500">Customized</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">300+</div>
            <div className="text-sm text-gray-500">Custom Programs</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">97%</div>
            <div className="text-sm text-gray-500">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600">40+</div>
            <div className="text-sm text-gray-500">Industries Served</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{trainingData.longDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Process</h2>
              <div className="space-y-4">
                {trainingData.process.map((item, index) => (
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

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trainingData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {trainingData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Why Custom Programs?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <FiTarget className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focused on your needs</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiUsers className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Team-specific content</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiClock className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Flexible timeline</span>
                </div>
                <div className="flex items-start gap-2">
                  <FiTrendingUp className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Measurable results</span>
                </div>
              </div>
              <Link href="/contact" className="block mt-4 bg-green-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}