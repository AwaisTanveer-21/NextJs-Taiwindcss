"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiBriefcase,
  FiClock,
  FiGlobe,
} from "react-icons/fi";

const features = [
  {
    icon: <FiUsers className="text-4xl" />,
    title: "Expert Trainers",
    description:
      "Learn from industry professionals with 10+ years of experience in their respective fields.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <FiBookOpen className="text-4xl" />,
    title: "Modern Curriculum",
    description:
      "Courses designed with latest industry trends and technologies to keep you ahead.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <FiBriefcase className="text-4xl" />,
    title: "Job Placement",
    description:
      "90% of our graduates get placed within 3 months of completing their training.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <FiAward className="text-4xl" />,
    title: "Certifications",
    description:
      "Get internationally recognized certifications that add value to your profile.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: <FiClock className="text-4xl" />,
    title: "Flexible Schedule",
    description:
      "Weekend and evening classes available for working professionals and students.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: <FiGlobe className="text-4xl" />,
    title: "Global Community",
    description:
      "Join a network of 10,000+ alumni working in top companies worldwide.",
    color: "from-indigo-500 to-indigo-600",
  },
];

// Counter Component for stats
function Counter({ target, label, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-blue-700">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Why CORVIT+
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Your Gateway to Tech Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We provide world-class IT education with a focus on practical skills
            and career development.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-gray-200">
          <Counter target={10000} label="Students Trained" />
          <Counter target={50} label="Courses Offered" />
          <Counter target={95} label="Placement Rate" suffix="%" />
          <Counter target={15} label="Years of Excellence" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon with Gradient Background */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}