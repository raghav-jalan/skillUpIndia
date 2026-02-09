import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SkillItUp</h3>
            <p className="text-blue-100">Empowering careers through cutting-edge education.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-blue-100 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/learning-process" className="text-blue-100 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-blue-100 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-blue-100 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 bg-blue-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white border border-blue-700"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-blue-900 rounded-r-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} SkillItUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
