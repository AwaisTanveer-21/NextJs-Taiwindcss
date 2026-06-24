"use client";  // ✅ MUST HAVE AT TOP

import { useState } from "react";
import Link from "next/link";
import {
  FiDollarSign,
  FiCalendar,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiBookOpen,
  FiClock,
} from "react-icons/fi";

const feeData = {
  courses: [
    {
      id: 1,
      name: "Web Development Bootcamp",
      duration: "6 Months",
      totalFee: "PKR 45,000",
      installment: "PKR 7,500/month",
      discount: "10%",
      level: "Beginner to Advanced",
      features: [
        "Live Online Classes",
        "Recorded Lectures",
        "Project-Based Learning",
        "Career Support",
        "Certificate of Completion",
      ],
    },
    {
      id: 2,
      name: "Mobile App Development",
      duration: "5 Months",
      totalFee: "PKR 50,000",
      installment: "PKR 10,000/month",
      discount: "10%",
      level: "Intermediate",
      features: [
        "Cross-Platform Development",
        "Real-World Projects",
        "App Store Deployment",
        "Portfolio Building",
        "Certificate of Completion",
      ],
    },
    {
      id: 3,
      name: "Data Science & AI",
      duration: "8 Months",
      totalFee: "PKR 60,000",
      installment: "PKR 7,500/month",
      discount: "15%",
      level: "Advanced",
      features: [
        "Python & ML Libraries",
        "Real Datasets Projects",
        "Industry Case Studies",
        "Job Placement Support",
        "Certificate of Completion",
      ],
    },
    {
      id: 4,
      name: "Cloud Computing",
      duration: "4 Months",
      totalFee: "PKR 40,000",
      installment: "PKR 10,000/month",
      discount: "10%",
      level: "Intermediate",
      features: [
        "AWS & Azure Certification Prep",
        "Hands-on Labs",
        "DevOps Practices",
        "Cloud Security",
        "Certificate of Completion",
      ],
    },
    {
      id: 5,
      name: "Cyber Security",
      duration: "6 Months",
      totalFee: "PKR 55,000",
      installment: "PKR 9,000/month",
      discount: "10%",
      level: "Advanced",
      features: [
        "Ethical Hacking Labs",
        "Security Tools Training",
        "Penetration Testing",
        "Network Security",
        "Certificate of Completion",
      ],
    },
    {
      id: 6,
      name: "AI & Machine Learning",
      duration: "7 Months",
      totalFee: "PKR 65,000",
      installment: "PKR 9,000/month",
      discount: "15%",
      level: "Advanced",
      features: [
        "Deep Learning with TensorFlow",
        "Computer Vision",
        "NLP Projects",
        "Research Papers",
        "Certificate of Completion",
      ],
    },
  ],
  scholarships: [
    {
      name: "Merit Scholarship",
      description: "For students with exceptional academic records",
      discount: "25%",
      criteria: "90%+ in previous degree",
    },
    {
      name: "Need-Based Scholarship",
      description: "For students with financial constraints",
      discount: "30%",
      criteria: "Income proof required",
    },
    {
      name: "Early Bird Discount",
      description: "For students who enroll 30 days before batch start",
      discount: "15%",
      criteria: "Enrollment before deadline",
    },
    {
      name: "Group Discount",
      description: "For groups of 3 or more students",
      discount: "20%",
      criteria: "Group enrollment",
    },
  ],
  paymentMethods: [
    { name: "Bank Transfer", icon: "🏦" },
    { name: "EasyPaisa", icon: "📱" },
    { name: "JazzCash", icon: "💳" },
    { name: "Credit Card", icon: "💳" },
    { name: "Cash", icon: "💰" },
  ],
};

export default function FeePage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showScholarship, setShowScholarship] = useState(false);

  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Fee Structure
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            Affordable <span className="text-blue-600">Education</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Transparent and flexible fee structure designed to make quality
            education accessible to everyone.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">6</div>
            <div className="text-sm text-gray-500">Courses</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">4</div>
            <div className="text-sm text-gray-500">Scholarships</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-500">Payment Methods</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">30%</div>
            <div className="text-sm text-gray-500">Max Scholarship</div>
          </div>
        </div>

        {/* Fee Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Course</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Total Fee</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Installment</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Discount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeData.courses.map((course, index) => (
                  <tr
                    key={course.id}
                    className={`hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{course.name}</div>
                        <div className="text-xs text-gray-500">{course.level}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{course.duration}</td>
                    <td className="px-6 py-4 font-bold text-blue-600">
                      {course.totalFee}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{course.installment}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {course.discount} OFF
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                      >
                        Enroll Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Payment <span className="text-blue-600">Methods</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {feeData.paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="text-4xl mb-2">{method.icon}</div>
                <div className="text-sm font-medium text-gray-700">
                  {method.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Scholarships & <span className="text-blue-600">Discounts</span>
            </h2>
            <button
              onClick={() => setShowScholarship(!showScholarship)}
              className="text-blue-600 font-medium hover:text-blue-700 transition"
            >
              {showScholarship ? "Hide Details" : "View All"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {feeData.scholarships.map((scholarship, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {scholarship.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {scholarship.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Criteria: {scholarship.criteria}
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                    {scholarship.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fee <span className="text-blue-600">FAQs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                💰 Can I pay in installments?
              </h4>
              <p className="text-sm text-gray-600">
                Yes, we offer flexible installment plans for all our courses.
                You can pay monthly as per the installment schedule.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                🎓 Is there a scholarship for deserving students?
              </h4>
              <p className="text-sm text-gray-600">
                Yes, we offer multiple scholarships based on merit, need, and
                early enrollment. Contact us for more details.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                💳 What payment methods are accepted?
              </h4>
              <p className="text-sm text-gray-600">
                We accept bank transfers, EasyPaisa, JazzCash, credit cards,
                and cash payments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                🔄 Can I get a refund?
              </h4>
              <p className="text-sm text-gray-600">
                Yes, we have a refund policy. Please check our terms and
                conditions for details.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Choose your course and secure your seat today. Limited seats
            available for each batch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:shadow-lg"
            >
              Contact Admissions
            </Link>
            <Link
              href="/schedule"
              className="inline-block bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition border border-white/30"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}