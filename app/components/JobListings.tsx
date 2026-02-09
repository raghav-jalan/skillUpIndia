"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Briefcase, Clock, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

// Sample job listings data
const jobListings = [
  {
    id: 1,
    title: "Electrician",
    company: "BuildTech Solutions",
    location: "Delhi NCR",
    type: "Full-time",
    category: "Vocational Trades",
    salary: "₹18,000 - ₹25,000 per month",
    description:
      "Looking for certified electricians for residential and commercial projects. Experience in wiring, installation, and troubleshooting required.",
    requirements: [
      "Certificate in Electrical work",
      "1+ years of experience",
      "Knowledge of safety protocols",
      "Ability to read electrical blueprints",
    ],
    postedDate: "2023-04-10",
  },
  {
    id: 2,
    title: "Beauty Salon Assistant",
    company: "Glamour Studio",
    location: "Mumbai",
    type: "Full-time",
    category: "Beauty & Wellness",
    salary: "₹15,000 - ₹20,000 per month",
    description:
      "Join our team as a beauty salon assistant. Will be trained in various beauty treatments and customer service.",
    requirements: [
      "Certificate in Beauty & Wellness",
      "Good communication skills",
      "Customer-oriented attitude",
      "Willingness to learn",
    ],
    postedDate: "2023-04-12",
  },
  {
    id: 3,
    title: "Plumbing Technician",
    company: "Urban Facilities Management",
    location: "Bangalore",
    type: "Full-time",
    category: "Vocational Trades",
    salary: "₹20,000 - ₹28,000 per month",
    description:
      "Seeking skilled plumbing technicians for our maintenance team. Will handle installations, repairs, and preventive maintenance.",
    requirements: [
      "Certificate in Plumbing",
      "2+ years of experience",
      "Knowledge of modern plumbing systems",
      "Problem-solving skills",
    ],
    postedDate: "2023-04-08",
  },
  {
    id: 4,
    title: "Organic Farm Assistant",
    company: "Green Earth Organics",
    location: "Pune",
    type: "Full-time",
    category: "Agriculture",
    salary: "₹14,000 - ₹18,000 per month",
    description:
      "Join our organic farming team. Will assist in cultivation, harvesting, and processing of organic produce.",
    requirements: [
      "Knowledge of organic farming practices",
      "Physical fitness",
      "Ability to work outdoors",
      "Basic understanding of crop cycles",
    ],
    postedDate: "2023-04-15",
  },
  {
    id: 5,
    title: "E-commerce Delivery Associate",
    company: "QuickShip Logistics",
    location: "Multiple Locations",
    type: "Full-time",
    category: "Logistics",
    salary: "₹15,000 - ₹22,000 per month",
    description: "Looking for delivery associates for e-commerce packages. Must have own two-wheeler and smartphone.",
    requirements: [
      "Valid driving license",
      "Own two-wheeler",
      "Smartphone with internet",
      "Good knowledge of local geography",
    ],
    postedDate: "2023-04-14",
  },
  {
    id: 6,
    title: "Mobile Repair Technician",
    company: "PhoneFix Solutions",
    location: "Hyderabad",
    type: "Full-time",
    category: "Electronics",
    salary: "₹18,000 - ₹25,000 per month",
    description:
      "Seeking technicians for mobile phone repairs. Will handle hardware and software issues for various smartphone brands.",
    requirements: [
      "Certificate in Mobile Repair",
      "Experience with different smartphone models",
      "Diagnostic skills",
      "Customer service orientation",
    ],
    postedDate: "2023-04-11",
  },
  {
    id: 7,
    title: "Community Health Worker",
    company: "Rural Health Foundation",
    location: "Various Rural Districts",
    type: "Full-time",
    category: "Healthcare",
    salary: "₹12,000 - ₹15,000 per month",
    description:
      "Join our community health initiative. Will provide basic healthcare support and awareness in rural communities.",
    requirements: [
      "Certificate in Community Health",
      "Good communication skills",
      "Willingness to work in rural areas",
      "Basic knowledge of preventive healthcare",
    ],
    postedDate: "2023-04-13",
  },
  {
    id: 8,
    title: "Tailoring Assistant",
    company: "Fashion Creations",
    location: "Jaipur",
    type: "Full-time",
    category: "Tailoring & Fashion",
    salary: "₹14,000 - ₹20,000 per month",
    description:
      "Looking for tailoring assistants for our boutique. Will help with cutting, stitching, and alterations.",
    requirements: [
      "Certificate in Tailoring",
      "Basic knowledge of fabrics",
      "Attention to detail",
      "Ability to work in a team",
    ],
    postedDate: "2023-04-09",
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Vocational Trades",
  "Beauty & Wellness",
  "Agriculture",
  "Logistics",
  "Electronics",
  "Healthcare",
  "Tailoring & Fashion",
]

// Locations for filtering
const locations = [
  "All Locations",
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Jaipur",
  "Multiple Locations",
  "Various Rural Districts",
]

export default function JobListings() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  // Filter jobs based on search term, category, and location
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory

    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation

    return matchesSearch && matchesCategory && matchesLocation
  })

  // Calculate days ago for posted date
  const calculateDaysAgo = (dateString: string) => {
    const postedDate = new Date(dateString)
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate.getTime() - postedDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Bar */}
        <div className="bg-gray-100 rounded-xl p-4 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full px-4 py-2 pl-10 bg-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                className="px-4 py-2 bg-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-2 bg-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-600 rounded-md hover:bg-gray-600 transition-colors text-gray-900 md:hidden"
              >
                <Filter className="h-5 w-5" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-400/20"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="mt-2 md:mt-0 flex items-center">
                      <span className="text-blue-900 text-sm font-medium">
                        Posted {calculateDaysAgo(job.postedDate)} days ago
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Briefcase className="h-4 w-4 mr-2 text-blue-900" />
                      {job.company}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-blue-900" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-4 w-4 mr-2 text-blue-900" />
                      {job.type}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-blue-900/20 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                      {job.category}
                    </span>
                    <span className="inline-block ml-2 bg-gray-600 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {job.salary}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className="flex items-center text-blue-900 hover:text-cyan-300 transition-colors"
                    >
                      {expandedJob === job.id ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span>Show More</span>
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </button>
                    <Link
                      href={`#apply-${job.id}`}
                      className="mt-4 sm:mt-0 bg-blue-900 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-cyan-400 transition-colors inline-block text-center"
                      onClick={() => document.getElementById("resume-form")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Apply Now
                    </Link>
                  </div>

                  {expandedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-700">Try adjusting your search filters to find more opportunities.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
