"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiClock,
  FiUsers,
  FiStar,
  FiArrowRight,
  FiBookOpen,
  FiCode,
  FiDatabase,
  FiCloud,
  FiShield,
  FiCpu,
} from "react-icons/fi";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    category: "Development",
    description: "Master HTML, CSS, JavaScript, React, Next.js & Node.js",
    duration: "6 Months",
    students: 2500,
    rating: 4.9,
    level: "Beginner to Advanced",
    price: "PKR 45,000",
    image: "/images/courses/web-dev.jpg",
    icon: <FiCode className="text-3xl" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Mobile App Development",
    category: "Development",
    description: "Build iOS & Android apps with React Native & Flutter",
    duration: "5 Months",
    students: 1800,
    rating: 4.8,
    level: "Intermediate",
    price: "PKR 50,000",
    image: "/images/courses/mobile-app.jpg",
    icon: <FiCode className="text-3xl" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Data Science & AI",
    category: "Data Science",
    description: "Python, Machine Learning, Deep Learning & NLP",
    duration: "8 Months",
    students: 1200,
    rating: 4.9,
    level: "Advanced",
    price: "PKR 60,000",
    image: "/images/courses/data-science.jpg",
    icon: <FiDatabase className="text-3xl" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Cloud Computing",
    category: "Cloud",
    description: "AWS, Azure, Google Cloud & DevOps Practices",
    duration: "4 Months",
    students: 900,
    rating: 4.7,
    level: "Intermediate",
    price: "PKR 40,000",
    image: "/images/courses/cloud.jpg",
    icon: <FiCloud className="text-3xl" />,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Cyber Security",
    category: "Security",
    description: "Network Security, Ethical Hacking & Cryptography",
    duration: "6 Months",
    students: 1500,
    rating: 4.8,
    level: "Advanced",
    price: "PKR 55,000",
    image: "/images/courses/cyber-security.jpg",
    icon: <FiShield className="text-3xl" />,
    color: "from-red-500 to-rose-500",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    category: "AI",
    description: "Neural Networks, TensorFlow & Computer Vision",
    duration: "7 Months",
    students: 800,
    rating: 4.9,
    level: "Advanced",
    price: "PKR 65,000",
    image: "/images/courses/ai.jpg",
    icon: <FiCpu className="text-3xl" />,
    color: "from-indigo-500 to-purple-500",
  },
];

// Category Filter Component
function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => setActiveCategory("All")}
        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === "All"
            ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All Courses
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// Individual Course Card
function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
      {/* Course Image with Overlay */}
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
          {course.level}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <FiClock className="text-xs" /> {course.duration}
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <FiUsers className="text-xs" /> {course.students}
          </span>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="text-white/40 group-hover:scale-110 transition-all duration-500">
            {course.icon}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {course.category}
          </span>
          <div className="flex items-center gap-1 text-yellow-400">
            <FiStar className="fill-current" />
            <span className="text-sm font-semibold text-gray-700">
              {course.rating}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-blue-700">
            {course.price}
          </span>
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all group"
          >
            Enroll Now
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = [...new Set(courses.map((course) => course.category))];

  // Filter courses based on active category
  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Popular <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Choose from our wide range of industry-relevant courses designed to
            boost your career
          </p>
        </div>

        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200"
          >
            View All Courses
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}