import Header from "../components/Header"
import Footer from "../components/Footer"
import HelpCenter from "../components/HelpCenter"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <HelpCenter />
      </main>
      <Footer />
    </div>
  )
}
