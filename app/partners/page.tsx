import Header from "../components/Header"
import Footer from "../components/Footer"
import PartnersList from "../components/PartnersList"
import PartnerTestimonials from "../components/PartnerTestimonials"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <div className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Our <span className="text-cyan-400">Partners</span> & Collaborations
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading organizations across sectors to create meaningful impact and empower communities
                through skill development.
              </p>
            </div>
          </div>
        </div>
        <PartnersList />
        <PartnerTestimonials />
      </main>
      <Footer />
    </div>
  )
}
