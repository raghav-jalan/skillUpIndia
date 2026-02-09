import Header from "../components/Header"
import Footer from "../components/Footer"
import PrivacyPolicy from "../components/PrivacyPolicy"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  )
}
