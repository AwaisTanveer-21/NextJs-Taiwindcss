'use client'
import Link from "next/link";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="text-8xl sm:text-9xl font-bold text-gray-200 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl sm:text-7xl">🔍</div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-6">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* Search Box */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full px-5 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition bg-white shadow-sm"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition hover:shadow-lg hover:shadow-blue-200"
          >
            <FiHome />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            <FiArrowLeft />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/courses" className="text-sm text-blue-600 hover:underline">
              Courses
            </Link>
            <Link href="/services" className="text-sm text-blue-600 hover:underline">
              Services
            </Link>
            <Link href="/schedule" className="text-sm text-blue-600 hover:underline">
              Schedule
            </Link>
            <Link href="/contact" className="text-sm text-blue-600 hover:underline">
              Contact
            </Link>
            <Link href="/fee" className="text-sm text-blue-600 hover:underline">
              Fee Structure
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}