import Header from "../components/Header"
import Footer from "../components/Footer"
import JobListings from "../components/JobListings"
import JobPostingForm from "../components/JobPostingForm"
import ResumeSubmissionForm from "../components/ResumeSubmissionForm"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <div className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Job <span className="text-cyan-400">Opportunities</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the perfect job opportunity or post vacancies for skilled professionals from our training programs.
              </p>
            </div>
          </div>
        </div>
        <JobListings />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <JobPostingForm />
          <ResumeSubmissionForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
