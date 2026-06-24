"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  FiStar, 
  FiChevronLeft, 
  FiChevronRight, 
  FiMessageSquare  // FiQuote ki jagah FiMessageSquare use karein
} from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Raza",
    role: "Software Engineer at Systems Ltd",
    course: "Web Development Bootcamp",
    image: "/images/students/student1.jpg",
    rating: 5,
    review:
      "CORVIT+ completely transformed my career. The instructors are industry experts who genuinely care about student success. I went from zero coding knowledge to landing my dream job in just 6 months!",
    date: "2024",
  },
  {
    id: 2,
    name: "Fatima Khan",
    role: "Data Analyst at Telenor",
    course: "Data Science & AI",
    image: "/images/students/student2.jpg",
    rating: 5,
    review:
      "The Data Science program at CORVIT+ is exceptional. The curriculum is up-to-date with industry requirements, and the hands-on projects gave me real-world experience. Highly recommended!",
    date: "2023",
  },
  {
    id: 3,
    name: "Usman Ali",
    role: "Mobile App Developer",
    course: "Mobile App Development",
    image: "/images/students/student3.jpg",
    rating: 4,
    review:
      "I had zero experience in mobile development before joining CORVIT+. Now I have 3 apps published on the Play Store. The practical approach and mentorship made all the difference.",
    date: "2024",
  },
  {
    id: 4,
    name: "Ayesha Siddiqui",
    role: "Cloud Engineer at AWS",
    course: "Cloud Computing",
    image: "/images/students/student4.jpg",
    rating: 5,
    review:
      "The Cloud Computing course gave me the skills and confidence to pass AWS certification exams. The trainers are knowledgeable and always available to help.",
    date: "2023",
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    role: "Cybersecurity Specialist",
    course: "Cyber Security",
    image: "/images/students/student5.jpg",
    rating: 5,
    review:
      "CORVIT+'s Cyber Security program is world-class. The labs and real-world scenarios prepared me for actual security challenges. I'm now working as a security analyst.",
    date: "2024",
  },
];

// Star Rating Component
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <FiStar
          key={index}
          className={`${index < rating ? "fill-current" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

// Individual Testimonial Card
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Quote Icon - Using FiMessageSquare instead of FiQuote */}
      <div className="text-blue-100 text-4xl mb-4">
        <FiMessageSquare />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4">
        {testimonial.review}
      </p>

      {/* Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Student Info */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-blue-600">{testimonial.role}</p>
          <p className="text-xs text-gray-500">Course: {testimonial.course}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = 3;

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - itemsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Navigation handlers
  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - itemsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Real stories from real students who transformed their careers with CORVIT+
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-3">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl rounded-full p-3 text-gray-600 hover:text-blue-600 transition-all hover:scale-110"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl rounded-full p-3 text-gray-600 hover:text-blue-600 transition-all hover:scale-110"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(testimonials.length - itemsPerView + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white shadow-lg rounded-full p-2 hover:bg-blue-50 transition-colors"
            >
              <FiChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-white shadow-lg rounded-full p-2 hover:bg-blue-50 transition-colors"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}