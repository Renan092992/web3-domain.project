import React, { useState } from 'react'
import circleCheck from '../assets/images/check_circle.png'
import circle1 from '../assets/images/circle-1.svg'
interface RegistrationFormProps {
  onSubmit: (data: {
    name: string
    phone: string
    email: string
    domainName: string
    custody: 'self' | 'hosted'
  }) => void
  initialData: {
    name: string
    phone: string
    email: string
    domainName: string
    custody: 'self' | 'hosted'
  }
  className?: string
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit,
  initialData,
  className = ''
}) => {
  const [formData, setFormData] = useState(initialData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* Name Input */}
      <div className="mb-4">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
          className="w-full h-[56px] px-4 rounded-full border border-[#E5E7EB] focus:border-[#2D80FF] focus:ring-1 focus:ring-[#2D80FF] outline-none text-[#111827]"
          required
        />
      </div>

      {/* Phone Input */}
      <div className="mb-4">
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Phone"
          className="w-full h-[56px] px-4 rounded-full border border-[#E5E7EB] focus:border-[#2D80FF] focus:ring-1 focus:ring-[#2D80FF] outline-none text-[#111827]"
          required
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="w-full h-[56px] px-4 rounded-full border border-[#E5E7EB] focus:border-[#2D80FF] focus:ring-1 focus:ring-[#2D80FF] outline-none text-[#111827]"
          required
        />
      </div>

      {/* Domain Name (Read-only) */}
      <div className="mb-6 relative">
        <input
          type="text"
          value={formData.domainName}
          readOnly
          className="w-full h-[56px] px-4 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] text-[#111827]"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <img src={circleCheck} alt="check" />
        </div>
      </div>

      {/* Custody Toggle */}
      <div className="flex items-center justify-start mb-6 px-2">
        <span className="text-[#4B5563] pr-[12px]">Self custody</span>
        <label className="relative inline-flex items-center cursor-pointer pr-[12px]">
          <input
            type="checkbox"
            checked={formData.custody === 'hosted'}
            onChange={(e) =>
              setFormData({
                ...formData,
                custody: e.target.checked ? 'hosted' : 'self'
              })
            }
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-[#E5E7EB] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2D80FF]"></div>
          <span className="ml-3 text-[#4B5563]">Hosted custody</span>
        </label>
      </div>

      {/* Connect Web3 Wallet Button */}
      {formData.custody === 'self' ? (
        <div className="w-[60%] px-[30px] py-[12px] mb-4 bg-gradient-to-r from-[#3CADEF] to-[#3365C2] border border-[#E5E7EB] text-[#111827] text-[16px] rounded-full flex items-center justify-center hover:bg-[#F9FAFB] transition-colors">
          <span className=" text-white pr-[5px]">Connect Web3 wallet</span>
          <img src={circle1} alt="wallet" />
        </div>
      ) : (
        <div></div>
      )}
      {/* Next Button */}
      <button
        type="submit"
        className="w-full h-[56px] bg-[#0D4AE7] text-white rounded-full font-medium"
      >
        Next
      </button>
    </form>
  )
}

export default RegistrationForm
