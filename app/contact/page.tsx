import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
