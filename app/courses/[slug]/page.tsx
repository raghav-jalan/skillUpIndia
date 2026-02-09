import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from "next/link"
import { ArrowLeft, Clock, BarChart, Users, CheckCircle, Star } from "lucide-react"

// This is a placeholder. In a real application, you would fetch course data based on the slug
export default function CourseDetail({ params }: { params: { slug: string } }) {
  // For demo purposes, we'll create a mock course
  const course = {
    title: params.slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description:
      "This comprehensive course provides hands-on training to help you master essential skills and techniques. You'll learn from industry experts and gain practical experience through real-world projects.",
    rating: 4.8,
    students: 8500,
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    instructor: "Dr. Priya Sharma",
    lastUpdated: "March 2023",
    language: "Hindi & English",
    certification: true,
    syllabus: [
      {
        week: 1,
        title: "Introduction and Fundamentals",
        topics: ["Course overview", "Basic principles", "Safety guidelines", "Essential tools and equipment"],
      },
      {
        week: 2,
        title: "Core Techniques",
        topics: ["Fundamental techniques", "Practical applications", "Common challenges", "Best practices"],
      },
      {
        week: 3,
        title: "Advanced Methods",
        topics: ["Advanced techniques", "Problem-solving approaches", "Efficiency improvements", "Case studies"],
      },
      {
        week: 4,
        title: "Practical Applications",
        topics: ["Real-world scenarios", "Hands-on projects", "Troubleshooting", "Quality control"],
      },
      {
        week: 5,
        title: "Industry Standards",
        topics: ["Current industry practices", "Regulations and compliance", "Professional ethics", "Market trends"],
      },
      {
        week: 6,
        title: "Business Aspects",
        topics: ["Pricing your services", "Customer relations", "Marketing basics", "Business operations"],
      },
      {
        week: 7,
        title: "Advanced Projects",
        topics: ["Complex project planning", "Implementation strategies", "Resource management", "Project completion"],
      },
      {
        week: 8,
        title: "Career Development",
        topics: ["Portfolio building", "Job opportunities", "Interview preparation", "Continuing education and growth"],
      },
    ],
    outcomes: [
      "Proficiency in essential techniques and methodologies",
      "Ability to work independently on projects from start to finish",
      "Understanding of industry standards and best practices",
      "Knowledge of safety protocols and quality assurance",
      "Skills to troubleshoot common problems and implement solutions",
      "Business knowledge for self-employment or career advancement",
      "Confidence to pursue opportunities in the field",
    ],
    requirements: [
      "No prior experience required - suitable for complete beginners",
      "Basic literacy and numeracy skills",
      "Access to practice materials (list provided upon enrollment)",
      "Commitment to attend practical sessions and complete assignments",
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        {/* Course Header */}
        <div className="bg-gradient-to-r from-cyan-900 to-gray-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/courses"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{course.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-white">{course.rating}</span>
                <span className="text-gray-400 ml-1">({course.students.toLocaleString()} students)</span>
              </div>
              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 text-cyan-400 mr-1" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <BarChart className="h-4 w-4 text-cyan-400 mr-1" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                <Users className="h-4 w-4 text-cyan-400 mr-1" />
                <span>Instructor: {course.instructor}</span>
              </div>
            </div>

            <button className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Course Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Course Syllabus</h2>
                  <div className="space-y-4">
                    {course.syllabus.map((week, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                        <div className="bg-gray-700 p-4 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-white">
                            Week {week.week}: {week.title}
                          </h3>
                          <span className="text-cyan-400 text-sm">4 topics</span>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-2">
                            {week.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-white mb-4">Course Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Duration</h3>
                      <p className="text-white">{course.duration}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Level</h3>
                      <p className="text-white">{course.level}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Language</h3>
                      <p className="text-white">{course.language}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Last Updated</h3>
                      <p className="text-white">{course.lastUpdated}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Certification</h3>
                      <p className="text-white">{course.certification ? "Yes, upon completion" : "No"}</p>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mt-8 mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button className="w-full bg-cyan-500 text-gray-900 px-4 py-3 rounded-md font-semibold hover:bg-cyan-400 transition-colors mb-3">
                      Enroll Now
                    </button>
                    <button className="w-full bg-transparent border border-cyan-500 text-cyan-400 px-4 py-3 rounded-md font-semibold hover:bg-cyan-500/10 transition-colors">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
