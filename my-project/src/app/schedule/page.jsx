"use client";  // ✅ YEH ADD KAREIN

import { useState } from "react";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  FiUsers,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiDownload,
} from "react-icons/fi";

const scheduleData = {
  batches: [
    {
      id: 1,
      name: "Morning Batch",
      icon: "🌅",
      timing: "9:00 AM - 12:00 PM",
      days: "Monday - Friday",
      duration: "6 Months",
      courses: [
        { name: "Web Development", status: "open", seats: 15 },
        { name: "Data Science", status: "open", seats: 10 },
        { name: "Cloud Computing", status: "limited", seats: 5 },
      ],
    },
    {
      id: 2,
      name: "Afternoon Batch",
      icon: "☀️",
      timing: "2:00 PM - 5:00 PM",
      days: "Monday - Friday",
      duration: "6 Months",
      courses: [
        { name: "Mobile App Development", status: "open", seats: 12 },
        { name: "Cyber Security", status: "open", seats: 8 },
        { name: "AI & Machine Learning", status: "limited", seats: 4 },
      ],
    },
    {
      id: 3,
      name: "Evening Batch",
      icon: "🌇",
      timing: "6:00 PM - 9:00 PM",
      days: "Monday - Friday",
      duration: "6 Months",
      courses: [
        { name: "Web Development", status: "limited", seats: 6 },
        { name: "Mobile App Development", status: "open", seats: 10 },
        { name: "Data Science", status: "open", seats: 8 },
      ],
    },
    {
      id: 4,
      name: "Weekend Batch",
      icon: "📅",
      timing: "10:00 AM - 4:00 PM",
      days: "Saturday & Sunday",
      duration: "8 Months",
      courses: [
        { name: "All Courses", status: "open", seats: 20 },
        { name: "Special Workshops", status: "open", seats: 15 },
        { name: "Bootcamps", status: "limited", seats: 10 },
      ],
    },
    {
      id: 5,
      name: "Online Batch",
      icon: "💻",
      timing: "Flexible Timing",
      days: "Monday - Saturday",
      duration: "Self-paced",
      courses: [
        { name: "Web Development", status: "open", seats: 25 },
        { name: "Data Science", status: "open", seats: 20 },
        { name: "Cloud Computing", status: "open", seats: 15 },
        { name: "Cyber Security", status: "open", seats: 18 },
      ],
    },
    {
      id: 6,
      name: "Corporate Batch",
      icon: "🏢",
      timing: "Custom Timing",
      days: "As per schedule",
      duration: "Custom Duration",
      courses: [
        { name: "Custom Programs", status: "open", seats: 30 },
        { name: "On-site Training", status: "open", seats: 25 },
      ],
    },
  ],
};

// Status badge component
function StatusBadge({ status }) {
  const colors = {
    open: "bg-green-100 text-green-700",
    limited: "bg-yellow-100 text-yellow-700",
    closed: "bg-red-100 text-red-700",
  };
  const labels = {
    open: "✅ Open",
    limited: "⚠️ Limited Seats",
    closed: "❌ Closed",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      {labels[status]}
    </span>
  );
}

// Batch Card Component
function BatchCard({ batch }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="text-4xl">{batch.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{batch.name}</h3>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <FiClock className="text-blue-500" />
                  {batch.timing}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <FiCalendar className="text-blue-500" />
                  {batch.days}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-600">
                  <FiBookOpen className="text-blue-500" />
                  {batch.duration}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 hover:text-blue-600 transition"
          >
            {expanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </button>
        </div>

        {/* Course List */}
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {batch.courses.map((course, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-700">
                  {course.name}
                </span>
                <StatusBadge status={course.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Content */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Total Seats</div>
                <div className="text-xl font-bold text-blue-600">
                  {batch.courses.reduce((sum, c) => sum + c.seats, 0)}
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Courses Offered</div>
                <div className="text-xl font-bold text-green-600">
                  {batch.courses.length}
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Status</div>
                <div className="text-xl font-bold text-purple-600">
                  {batch.courses.some(c => c.status === "open") ? "Accepting" : "Full"}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Enroll Now
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                View Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const [filter, setFilter] = useState("all");

  const filteredBatches = scheduleData.batches.filter((batch) => {
    if (filter === "all") return true;
    if (filter === "weekday") {
      return batch.days.includes("Monday - Friday");
    }
    if (filter === "weekend") {
      return batch.days.includes("Saturday");
    }
    if (filter === "online") {
      return batch.name === "Online Batch";
    }
    return true;
  });

  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Class Schedule
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            Find Your <span className="text-blue-600">Perfect Batch</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose from multiple batch timings and formats that fit your schedule.
            Start your learning journey today!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">6</div>
            <div className="text-sm text-gray-500">Batches Available</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-gray-500">Courses Offered</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">95%</div>
            <div className="text-sm text-gray-500">Batch Fill Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600">200+</div>
            <div className="text-sm text-gray-500">Students Per Batch</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            All Batches
          </button>
          <button
            onClick={() => setFilter("weekday")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === "weekday"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Weekday Batches
          </button>
          <button
            onClick={() => setFilter("weekend")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === "weekend"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Weekend Batches
          </button>
          <button
            onClick={() => setFilter("online")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === "online"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Online Batches
          </button>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-4">
          {filteredBatches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>

        {/* Download Schedule */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Download Full Schedule
                </h3>
                <p className="text-sm text-gray-600">
                  Get the complete class schedule in PDF format.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                <FiDownload />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">
            Ready to Enroll?
          </h3>
          <p className="text-blue-100 mb-4">
            Choose your batch and start your learning journey today!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </main>
  );
}