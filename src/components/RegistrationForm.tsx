import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface RegistrationFormProps {
  selectedDomain?: string
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedDomain = ''
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    domain: selectedDomain
  })
  const [isCustodyHosted, setIsCustodyHosted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    navigate('/payment', {
      state: { ...formData, custodyType: isCustodyHosted ? 'hosted' : 'self' }
    })
  }

  return (
    <div className="min-h-screen bg-[#000B1E] p-4 sm:p-6 md:p-8">
      <div className="max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-black mb-6">
          Fill out the form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Domain Input */}
          <div className="relative">
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
              placeholder="Domain"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly={!!selectedDomain}
              required
            />
            {selectedDomain && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Custody Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-gray-100 rounded-full p-1.5">
            <button
              type="button"
              onClick={() => setIsCustodyHosted(false)}
              className={`flex-1 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                !isCustodyHosted
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              Self custody
            </button>
            <button
              type="button"
              onClick={() => setIsCustodyHosted(true)}
              className={`flex-1 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                isCustodyHosted
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              Hosted custody
            </button>
          </div>

          {/* Web3 Wallet Connect Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#3CADEF] to-[#0D4AE7] text-white px-6 py-3 rounded-full text-sm relative group"
          >
            <span>Connect Web3 wallet</span>
            <div className="absolute right-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
              <span className="text-white text-xs">i</span>
            </div>
          </button>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-[#0D4AE7] text-white py-3 rounded-full text-base font-medium hover:bg-[#0D4AE7]/90 transition-colors duration-300"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
