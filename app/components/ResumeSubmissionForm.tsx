"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Upload } from "lucide-react"

export default function ResumeSubmissionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobCategory: "",
    experience: "",
    education: "",
    coverLetter: "",
    resumeFile: null as File | null,
    resumeFileName: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData((prev) => ({
        ...prev,
        resumeFile: file,
        resumeFileName: file.name,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        jobCategory: "",
        experience: "",
        education: "",
        coverLetter: "",
        resumeFile: null,
        resumeFileName: "",
      })
    } catch (error) {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="resume-form" className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <FileText className="h-6 w-6 text-blue-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Submit Your Resume</h2>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
          <p className="text-green-400">
            Your resume has been submitted successfully! Employers will contact you if there's a match.
          </p>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
          <p className="text-red-400">There was an error submitting your resume. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="jobCategory" className="block text-sm font-medium text-gray-300 mb-1">
              Preferred Job Category*
            </label>
            <select
              id="jobCategory"
              name="jobCategory"
              value={formData.jobCategory}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            >
              <option value="">Select a category</option>
              <option value="Vocational Trades">Vocational Trades</option>
              <option value="Beauty & Wellness">Beauty & Wellness</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Logistics">Logistics</option>
              <option value="Electronics">Electronics</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Tailoring & Fashion">Tailoring & Fashion</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
              Work Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
              placeholder="e.g. 2 years as an electrician"
            />
          </div>
          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-300 mb-1">
              Education/Certification
            </label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
              placeholder="e.g. Certificate in Electrical Work"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-1">
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
            placeholder="Tell employers about yourself and why you're a good fit"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-1">Upload Resume*</label>
          <div className="flex items-center">
            <label className="flex-grow cursor-pointer bg-gray-800 border border-gray-600 rounded-md overflow-hidden">
              <div className="flex items-center">
                <div className="px-4 py-2 bg-white border border-gray-200 text-gray-900">Choose File</div>
                <div className="px-4 py-2 text-gray-300 truncate">{formData.resumeFileName || "No file chosen"}</div>
              </div>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="hidden"
              />
            </label>
            <div className="ml-2 p-2 bg-white border border-gray-200 rounded-md text-blue-900">
              <Upload className="h-5 w-5" />
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-400">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-cyan-500 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-cyan-400 transition-colors flex items-center justify-center disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Submit Resume"}
        </button>
      </form>
    </div>
  )
}
