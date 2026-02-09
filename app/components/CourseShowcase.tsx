"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Clock, BarChart, ArrowRight, Search, Filter, ChevronDown, ChevronUp } from "lucide-react"

// Course categories and their respective courses
const courseCategories = [
  {
    id: "vocational",
    name: "Core Vocational Trades",
    courses: [
      {
        title: "Electrician Training",
        description: "Home wiring, safety, installation, and troubleshooting.",
        rating: 4.9,
        students: 12500,
        duration: "10 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Plumbing & Sanitation",
        description: "Pipe fitting, leak repair, water conservation techniques.",
        rating: 4.8,
        students: 9800,
        duration: "8 weeks",
        level: "Beginner",
      },
      {
        title: "Carpentry & Woodworking",
        description: "Furniture making, door/window fitting, polishing.",
        rating: 4.7,
        students: 11200,
        duration: "12 weeks",
        level: "Beginner to Advanced",
      },
      {
        title: "Welding & Metal Fabrication",
        description: "Basic and advanced welding techniques.",
        rating: 4.9,
        students: 8700,
        duration: "10 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Automobile Repair & Mechanic Training",
        description: "Two-wheeler and four-wheeler servicing.",
        rating: 4.8,
        students: 10500,
        duration: "14 weeks",
        level: "Beginner to Advanced",
      },
      {
        title: "Tailoring & Fashion Design",
        description: "Stitching, embroidery, and fashion alterations.",
        rating: 4.7,
        students: 7800,
        duration: "8 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Beauty & Wellness",
        description: "Hairdressing, makeup, skincare, spa therapy.",
        rating: 4.8,
        students: 9200,
        duration: "10 weeks",
        level: "Beginner to Advanced",
      },
      {
        title: "Handicrafts & Artisan Skills",
        description: "Pottery, textile weaving, bamboo/jute crafts.",
        rating: 4.8,
        students: 8900,
        duration: "8 weeks",
        level: "Beginner to Intermediate",
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Personal Care",
    courses: [
      {
        title: "Community Health Worker Training",
        description: "For basic public health support in villages.",
        rating: 4.9,
        students: 7500,
        duration: "8 weeks",
        level: "Beginner",
      },
      {
        title: "Pharmacy Assistant Course",
        description: "Basics of medicines and prescription handling.",
        rating: 4.7,
        students: 6800,
        duration: "10 weeks",
        level: "Intermediate",
      },
      {
        title: "Hospital Attendant Skills",
        description: "Hygiene, patient care, wheelchair support, etc.",
        rating: 4.8,
        students: 8200,
        duration: "6 weeks",
        level: "Beginner",
      },
      {
        title: "Maternal and Child Care Training",
        description: "Pre/post-natal care, infant health.",
        rating: 4.9,
        students: 5700,
        duration: "12 weeks",
        level: "Intermediate",
      },
      {
        title: "Yoga and Wellness Assistant",
        description: "Intro to yoga therapy and group sessions.",
        rating: 4.6,
        students: 9500,
        duration: "8 weeks",
        level: "All Levels",
      },
      {
        title: "Basic Physiotherapy Aide",
        description: "Assisting professionals in exercises and recovery.",
        rating: 4.7,
        students: 4800,
        duration: "10 weeks",
        level: "Intermediate",
      },
      {
        title: "Medical Equipment Handling",
        description: "Training for operating basic machines like BP monitors, thermometers, etc.",
        rating: 4.8,
        students: 5200,
        duration: "6 weeks",
        level: "Beginner",
      },
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture & Rural Livelihood",
    courses: [
      {
        title: "Vermicomposting & Organic Fertilizers",
        description: "Sustainable waste management.",
        rating: 4.8,
        students: 7200,
        duration: "6 weeks",
        level: "Beginner",
      },
      {
        title: "Mushroom Cultivation",
        description: "High-yield, low-investment farming.",
        rating: 4.9,
        students: 8500,
        duration: "8 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Goat & Sheep Rearing",
        description: "Livestock care for income generation.",
        rating: 4.7,
        students: 6300,
        duration: "10 weeks",
        level: "Beginner",
      },
      {
        title: "Spice & Medicinal Herb Cultivation",
        description: "Tulsi, aloe vera, lemongrass farming.",
        rating: 4.8,
        students: 5900,
        duration: "8 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Agroforestry & Tree Planting",
        description: "Eco-friendly income models.",
        rating: 4.6,
        students: 4800,
        duration: "12 weeks",
        level: "Intermediate",
      },
      {
        title: "Drip Irrigation & Water Conservation",
        description: "Efficient water management techniques for farming.",
        rating: 4.8,
        students: 7100,
        duration: "6 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Kitchen Gardening & Urban Farming",
        description: "Especially for peri-urban areas.",
        rating: 4.9,
        students: 9200,
        duration: "4 weeks",
        level: "All Levels",
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    courses: [
      {
        title: "Inventory & Stock Management",
        description: "For warehouses, stores, pharma shops.",
        rating: 4.7,
        students: 6800,
        duration: "8 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "E-commerce Delivery Training",
        description: "Special focus on Flipkart, Amazon, Meesho.",
        rating: 4.8,
        students: 8900,
        duration: "6 weeks",
        level: "Beginner",
      },
      {
        title: "Cold Chain Management Basics",
        description: "For transport of perishables and medicines.",
        rating: 4.6,
        students: 5200,
        duration: "10 weeks",
        level: "Intermediate",
      },
      {
        title: "Commercial Driver Soft Skills",
        description: "Handling clients, documentation, safety.",
        rating: 4.7,
        students: 7500,
        duration: "4 weeks",
        level: "All Levels",
      },
      {
        title: "Bike/Van Maintenance for Delivery Workers",
        description: "Basic maintenance and troubleshooting.",
        rating: 4.9,
        students: 8200,
        duration: "6 weeks",
        level: "Beginner",
      },
      {
        title: "Courier & Parcel Management",
        description: "Handling, tracking, and delivery of parcels.",
        rating: 4.7,
        students: 6100,
        duration: "6 weeks",
        level: "Beginner",
      },
      {
        title: "Basic GPS & Route Planning Skills",
        description: "Navigation and efficient route planning.",
        rating: 4.8,
        students: 7300,
        duration: "4 weeks",
        level: "Beginner",
      },
    ],
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship & Small Business Skills",
    courses: [
      {
        title: "Mobile Repair Shop Setup",
        description: "Business & marketing side of mobile repair.",
        rating: 4.9,
        students: 8700,
        duration: "10 weeks",
        level: "Intermediate",
      },
      {
        title: "Home-Based Food Business",
        description: "Pickle, papad, spice mix, tiffin services.",
        rating: 4.8,
        students: 9500,
        duration: "8 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Salon/Beauty Parlour Business Basics",
        description: "Budgeting, pricing, marketing.",
        rating: 4.7,
        students: 7200,
        duration: "10 weeks",
        level: "Intermediate",
      },
      {
        title: "Retail Shop Management",
        description: "Inventory, customer service, accounting.",
        rating: 4.8,
        students: 8100,
        duration: "12 weeks",
        level: "Intermediate",
      },
      {
        title: "Online Business Basics",
        description: "Selling via WhatsApp, Instagram, Facebook Marketplace.",
        rating: 4.9,
        students: 10200,
        duration: "8 weeks",
        level: "Beginner",
      },
      {
        title: "Handicraft Packaging & Branding",
        description: "Creating appealing packaging and brand identity.",
        rating: 4.7,
        students: 6300,
        duration: "6 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Government Schemes for Small Businesses",
        description: "PMEGP, MUDRA, etc.",
        rating: 4.8,
        students: 7800,
        duration: "4 weeks",
        level: "All Levels",
      },
    ],
  },
  {
    id: "softskills",
    name: "Soft Skills & Communication",
    courses: [
      {
        title: "Retail Sales Communication",
        description: "For shop jobs and malls.",
        rating: 4.8,
        students: 9200,
        duration: "4 weeks",
        level: "Beginner",
      },
      {
        title: "Call Center/Customer Service Training",
        description: "Handling customer inquiries and providing support.",
        rating: 4.7,
        students: 8500,
        duration: "6 weeks",
        level: "Beginner to Intermediate",
      },
      {
        title: "Basic Workplace Etiquette",
        description: "Punctuality, dress code, teamwork.",
        rating: 4.9,
        students: 11200,
        duration: "3 weeks",
        level: "All Levels",
      },
      {
        title: "Public Speaking & Presentation Skills",
        description: "Effective communication in group settings.",
        rating: 4.8,
        students: 7800,
        duration: "6 weeks",
        level: "Beginner to Advanced",
      },
      {
        title: "Time & Stress Management",
        description: "Techniques for productivity and well-being.",
        rating: 4.7,
        students: 8900,
        duration: "4 weeks",
        level: "All Levels",
      },
      {
        title: "Conflict Resolution & Team Handling",
        description: "Managing disagreements and leading teams.",
        rating: 4.6,
        students: 6700,
        duration: "6 weeks",
        level: "Intermediate",
      },
      {
        title: "Body Language & First Impressions",
        description: "Non-verbal communication for professional settings.",
        rating: 4.8,
        students: 9500,
        duration: "4 weeks",
        level: "All Levels",
      },
    ],
  },
]

// Color mapping for categories
const categoryColors = {
  vocational: "from-blue-900 to-blue-800",
  healthcare: "from-green-700 to-green-600",
  agriculture: "from-amber-700 to-amber-600",
  logistics: "from-slate-700 to-slate-600",
  entrepreneurship: "from-red-700 to-red-600",
  softskills: "from-slate-600 to-slate-500",
}

export default function CourseShowcase() {
  const [activeCategory, setActiveCategory] = useState("vocational")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState({
    level: "all",
    duration: "all",
  })

  // Filter courses based on search term and filters
  const filteredCourses = courseCategories
    .map((category) => {
      const filteredCategoryCourses = category.courses.filter((course) => {
        const matchesSearch =
          searchTerm === "" ||
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesLevel = filters.level === "all" || course.level.toLowerCase().includes(filters.level.toLowerCase())

        const matchesDuration =
          filters.duration === "all" ||
          (filters.duration === "short" && Number.parseInt(course.duration) <= 6) ||
          (filters.duration === "medium" &&
            Number.parseInt(course.duration) > 6 &&
            Number.parseInt(course.duration) <= 10) ||
          (filters.duration === "long" && Number.parseInt(course.duration) > 10)

        return matchesSearch && matchesLevel && matchesDuration
      })

      return {
        ...category,
        courses: filteredCategoryCourses,
      }
    })
    .filter((category) => category.courses.length > 0)

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Explore Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of practical skills to enhance your career prospects and improve your livelihood.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-gray-100 rounded-lg p-4 mb-8 shadow border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 pl-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-900 font-medium"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 p-4 border border-gray-200">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-900 mb-2">Level</label>
                    <select
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-gray-900"
                      value={filters.level}
                      onChange={(e) => handleFilterChange("level", e.target.value)}
                    >
                      <option value="all">All Levels</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Duration</label>
                    <select
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 text-gray-900"
                      value={filters.duration}
                      onChange={(e) => handleFilterChange("duration", e.target.value)}
                    >
                      <option value="all">Any Duration</option>
                      <option value="short">Short (≤ 6 weeks)</option>
                      <option value="medium">Medium (7-10 weeks)</option>
                      <option value="long">Long ({">"}10 weeks)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max pb-2">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${categoryColors[category.id as keyof typeof categoryColors]} text-white shadow`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Category Accordion (visible on smaller screens) */}
        <div className="md:hidden mb-8">
          {filteredCourses.map((category) => (
            <div key={category.id} className="mb-4">
              <button
                className={`w-full flex justify-between items-center p-4 rounded-lg bg-gradient-to-r ${
                  categoryColors[category.id as keyof typeof categoryColors]
                } text-white font-semibold`}
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.name}</span>
                {expandedCategory === category.id ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {expandedCategory === category.id && (
                <div className="mt-2 grid gap-4">
                  {category.courses.map((course, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-900"
                    >
                      <div className="p-6">
                        <div className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">
                          {category.name}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                        <div className="flex items-center mb-3">
                          <Star className="h-5 w-5 text-amber-500" />
                          <span className="ml-1 text-sm font-medium text-gray-700">{course.rating}</span>
                          <span className="ml-2 text-sm text-gray-600">
                            ({course.students.toLocaleString()} students)
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.duration}</span>
                          <BarChart className="h-4 w-4 ml-3 mr-1" />
                          <span>{course.level}</span>
                        </div>
                        <Link
                          href={`/courses/${encodeURIComponent(course.title.toLowerCase().replace(/ /g, "-"))}`}
                          className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block text-center"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Course Grid (hidden on mobile) */}
        <div className="hidden md:block">
          {filteredCourses.map((category) => (
            <div
              key={category.id}
              className={`transition-opacity duration-500 ${activeCategory === category.id ? "block" : "hidden"}`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {category.courses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-900"
                  >
                    <div className="h-2 bg-gradient-to-r w-full overflow-hidden">
                      <div
                        className={`h-full w-full bg-gradient-to-r ${
                          categoryColors[category.id as keyof typeof categoryColors]
                        }`}
                      ></div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">
                        {category.name}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                      <div className="flex items-center mb-3">
                        <Star className="h-5 w-5 text-amber-500" />
                        <span className="ml-1 text-sm font-medium text-gray-700">{course.rating}</span>
                        <span className="ml-2 text-sm text-gray-600">
                          ({course.students.toLocaleString()} students)
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                        <BarChart className="h-4 w-4 ml-3 mr-1" />
                        <span>{course.level}</span>
                      </div>
                      <Link
                        href={`/courses/${encodeURIComponent(course.title.toLowerCase().replace(/ /g, "-"))}`}
                        className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
            <p className="text-gray-300">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center justify-center"
          >
            Request a Course <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
