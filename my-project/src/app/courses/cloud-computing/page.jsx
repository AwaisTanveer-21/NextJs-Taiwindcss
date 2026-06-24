import Link from "next/link";
import { 
  FiCloud, 
  FiClock, 
  FiUsers, 
  FiAward, 
  FiBookOpen,
  FiCheckCircle,
  FiArrowLeft,
  FiCalendar,
  FiServer
} from "react-icons/fi";

export default function CloudComputingCourse() {
  const courseData = {
    title: "Cloud Computing",
    duration: "4 Months",
    level: "Intermediate",
    price: "PKR 40,000",
    students: 900,
    rating: 4.7,
    category: "Cloud",
    description: "Master cloud computing with AWS, Azure, and Google Cloud. Learn cloud architecture, DevOps practices, and deployment strategies.",
    learningOutcomes: [
      "Understand cloud computing fundamentals",
      "Deploy applications on AWS, Azure, and GCP",
      "Master DevOps tools and practices",
      "Implement CI/CD pipelines",
      "Manage cloud security and compliance",
      "Design scalable cloud architecture",
    ],
    curriculum: [
      { week: "Week 1-2", topic: "Cloud Computing Fundamentals" },
      { week: "Week 3-4", topic: "AWS Services & EC2" },
      { week: "Week 5-6", topic: "Azure & GCP Basics" },
      { week: "Week 7-8", topic: "DevOps & CI/CD" },
      { week: "Week 9-10", topic: "Docker & Kubernetes" },
      { week: "Week 11-12", topic: "Cloud Security" },
      { week: "Week 13-14", topic: "Serverless Architecture" },
      { week: "Week 15-16", topic: "Capstone Project" },
    ],
    requirements: [
      "Basic networking knowledge",
      "Linux fundamentals",
      "Laptop with internet connection",
      "Understanding of IT infrastructure",
    ],
    careerOpportunities: [
      "Cloud Architect",
      "DevOps Engineer",
      "Cloud Security Specialist",
      "Systems Administrator",
      "SRE Engineer",
    ],
  };

  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/courses" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <FiArrowLeft /> Back to Courses
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
            <div className="flex flex-wrap items-start justify-between">
              <div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{courseData.category}</span>
                <h1 className="text-3xl font-bold mt-3">{courseData.title}</h1>
                <p className="text-blue-100 mt-2 max-w-2xl">{courseData.description}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl mt-4 lg:mt-0">
                <div className="text-2xl font-bold">{courseData.price}</div>
                <div className="text-sm text-blue-100">Full Course Fee</div>
                <Link href="/contact" className="block mt-3 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-center font-semibold hover:bg-yellow-300 transition">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border-b">
            <div className="flex items-center gap-3">
              <FiClock className="text-orange-600 text-xl" />
              <div><div className="font-semibold">{courseData.duration}</div><div className="text-sm text-gray-500">Duration</div></div>
            </div>
            <div className="flex items-center gap-3">
              <FiUsers className="text-orange-600 text-xl" />
              <div><div className="font-semibold">{courseData.students}+</div><div className="text-sm text-gray-500">Students</div></div>
            </div>
            <div className="flex items-center gap-3">
              <FiAward className="text-orange-600 text-xl" />
              <div><div className="font-semibold">{courseData.level}</div><div className="text-sm text-gray-500">Level</div></div>
            </div>
            <div className="flex items-center gap-3">
              <FiServer className="text-orange-600 text-xl" />
              <div><div className="font-semibold">{courseData.rating}⭐</div><div className="text-sm text-gray-500">Rating</div></div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiBookOpen className="text-orange-600" />
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courseData.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FiCalendar className="text-orange-600" />
                  Course Curriculum
                </h2>
                <div className="space-y-2">
                  {courseData.curriculum.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <span className="font-medium text-sm">{item.week}</span>
                      <span className="text-sm text-gray-600">{item.topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {courseData.requirements.map((req, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Career Opportunities</h3>
                <ul className="space-y-2">
                  {courseData.careerOpportunities.map((career, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      {career}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <Link href="/contact" className="block bg-orange-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-orange-700 transition">
                  Enroll Now
                </Link>
                <Link href="/schedule" className="block bg-gray-200 text-gray-700 text-center py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                  View Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}