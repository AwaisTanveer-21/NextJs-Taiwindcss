"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    category: "General",
    question: "What is CORVIT+ Institute of Technology?",
    answer:
      "CORVIT+ is Pakistan's leading IT education institute offering industry-relevant courses in Web Development, Mobile Apps, Data Science, Cloud Computing, Cyber Security, and more. We've been empowering tech professionals since 2009.",
  },
  {
    id: 2,
    category: "General",
    question: "Where is CORVIT+ located?",
    answer:
      "Our main campus is located in Rawalpindi, Pakistan. We also offer online courses for students worldwide.",
  },
  {
    id: 3,
    category: "Courses",
    question: "What courses do you offer?",
    answer:
      "We offer a wide range of courses including Web Development, Mobile App Development, Data Science & AI, Cloud Computing, Cyber Security, and many more. Each course is designed with industry needs in mind.",
  },
  {
    id: 4,
    category: "Courses",
    question: "What is the duration of courses?",
    answer:
      "Course durations vary from 3 to 8 months depending on the program. Web Development is typically 6 months, while specialized courses like Data Science can take 8 months.",
  },
  {
    id: 5,
    category: "Admissions",
    question: "What are the admission requirements?",
    answer:
      "For most courses, you need a basic understanding of computers and a passion for technology. Some advanced courses may require prior programming experience.",
  },
  {
    id: 6,
    category: "Admissions",
    question: "What is the fee structure?",
    answer:
      "Course fees vary by program. Web Development is PKR 45,000, Mobile App Development is PKR 50,000, and Data Science is PKR 60,000. We also offer installment plans.",
  },
  {
    id: 7,
    category: "Career",
    question: "Do you provide job placement assistance?",
    answer:
      "Yes! We have a dedicated career services team that helps students with resume building, interview preparation, and job placement. 95% of our graduates get placed within 3 months.",
  },
  {
    id: 8,
    category: "Career",
    question: "What career opportunities can I expect?",
    answer:
      "Our graduates work as Software Engineers, Data Scientists, Cloud Architects, Cybersecurity Specialists, and more at top companies including Systems Ltd, Telenor, AWS, and many others.",
  },
  {
    id: 9,
    category: "Classes",
    question: "What are the class timings?",
    answer:
      "We offer flexible schedules including morning, evening, and weekend classes. Weekdays: 9:00 AM - 8:00 PM, Saturdays: 9:00 AM - 5:00 PM.",
  },
  {
    id: 10,
    category: "Classes",
    question: "Do you offer online classes?",
    answer:
      "Yes! We offer both on-campus and online classes. Our online platform provides live sessions, recorded lectures, and interactive learning materials.",
  },
];

// Category filter buttons
const categories = ["All", "General", "Courses", "Admissions", "Career", "Classes"];

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 text-sm sm:text-base">
          {faq.question}
        </span>
        <span className="flex-shrink-0 ml-4 text-gray-500">
          {isOpen ? (
            <FiChevronUp className="text-blue-600" size={20} />
          ) : (
            <FiChevronDown size={20} />
          )}
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed bg-gray-50/50">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeId, setActiveId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  // Filter FAQs based on category and search
  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Find answers to the most commonly asked questions about our courses,
            admissions, and more.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search your question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-4 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white shadow-sm"
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={activeId === faq.id}
                toggle={() => toggleFAQ(faq.id)}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="text-blue-600 hover:underline mt-2 text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900">
            Still have questions?
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Can't find what you're looking for? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}