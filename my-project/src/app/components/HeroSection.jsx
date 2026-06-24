"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPlay, FiUsers, FiBookOpen, FiAward } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
              🚀 Empowering Future Tech Leaders
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Shape Your Future with
              <span className="text-yellow-400 block">CORVIT+</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 max-w-lg">
              Pakistan's leading institute for IT education. Learn from industry experts
              and launch your career in technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/courses"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2 group"
              >
                Explore Courses
                <FiArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/about"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition flex items-center gap-2 border border-white/30"
              >
                <FiPlay className="text-yellow-400" />
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-yellow-400">
                  <FiUsers className="text-white" />
                  10,000+
                </div>
                <p className="text-sm text-blue-200">Students Trained</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-yellow-400">
                  <FiBookOpen className="text-white" />
                  50+
                </div>
                <p className="text-sm text-blue-200">Courses Offered</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-yellow-400">
                  <FiAward className="text-white" />
                  15+
                </div>
                <p className="text-sm text-blue-200">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Content - Optional Animation/Video */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-blue-500/20 rounded-full blur-3xl absolute -z-10"></div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold">Why Choose CORVIT+?</h3>
                  <ul className="mt-4 space-y-2 text-sm text-blue-100">
                    <li>✓ Industry Expert Trainers</li>
                    <li>✓ Hands-on Projects</li>
                    <li>✓ Job Placement Support</li>
                    <li>✓ International Certifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}