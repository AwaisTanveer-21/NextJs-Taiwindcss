
import Image from "next/image";
import Link from "next/link";

// ✅ YEH DEFAULT EXPORT HONA CHAHIYE
export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            About <span className="text-blue-600">CORVIT+</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn about our journey, mission, and the team behind Pakistan's
            leading IT education institute.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Empowering Future Tech Leaders Since 2009
            </h2>
            <p className="text-gray-600 mb-4">
              CORVIT+ Institute of Technology has been at the forefront of IT
              education in Pakistan for over 15 years. We've trained over 10,000
              students who are now working at top companies worldwide.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to provide industry-relevant education that bridges
              the gap between academia and the professional world. We focus on
              practical skills, hands-on projects, and real-world experience.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">10,000+</div>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <p className="text-sm text-gray-600">Placement Rate</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <p className="text-sm text-gray-600">Courses Offered</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-8xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold">15+ Years of Excellence</h3>
              <p className="text-blue-100">Trusted by thousands of students</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide accessible, high-quality IT education that empowers
              individuals to build successful careers in technology.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become Pakistan's leading technology education institute,
              recognized globally for producing industry-ready professionals.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold">
                  {String.fromCharCode(64 + item)}
                </div>
                <h4 className="font-semibold text-gray-900 mt-4">Team Member</h4>
                <p className="text-sm text-gray-500">Instructor</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Start your journey with us and become part of Pakistan's leading
            IT education institute.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}