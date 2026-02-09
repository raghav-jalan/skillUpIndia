import Header from "../components/Header"
import Footer from "../components/Footer"
import TermsOfService from "../components/TermsOfService"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <TermsOfService />
      </main>
      <Footer />
    </div>
  )
}
