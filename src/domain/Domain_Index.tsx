import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import bgImage from '../assets/images/bg.jpg'

interface LocationState {
  custody?: 'self' | 'hosted'
}

const Register: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeRegistrar, setActiveRegistrar] = useState<'domain' | 'web3'>(
    'domain'
  )
  const [isCustodyHosted, setIsCustodyHosted] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'credit'>(
    'crypto'
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.length > 0) {
      navigate('/search', { state: { query: searchQuery } })
    }
  }

  const handlePaymentMethodChange = (method: 'crypto' | 'credit') => {
    if (
      (method === 'crypto' && !isCustodyHosted) ||
      (method === 'credit' && isCustodyHosted)
    ) {
      setPaymentMethod(method)
    }
  }

  useEffect(() => {
    const state = location.state as LocationState | null
    const custodyType = state?.custody || 'self'
    const isHosted = custodyType === 'hosted'
    setIsCustodyHosted(isHosted)
    setPaymentMethod(isHosted ? 'credit' : 'crypto')
  }, [location])

  return (
    <div className="min-h-screen w-full fixed inset-0 bg-[#000B1E] px-4 sm:px-6 md:px-8 lg:px-[180px]">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Logo */}
      <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-[40px] group cursor-pointer">
        <img
          src={logo}
          alt="PKT Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-[67px] md:h-[64px]"
        />
      </div>

      <div className="relative min-h-screen w-full">
        <div className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-[104px]">
          {/* Claim your PKT Domain */}
          <div className="text-white font-inter text-4xl sm:text-5xl md:text-6xl lg:text-[96px] not-italic font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-[112px]">
            Claim your
            <br />
            PKT Domain
          </div>

          {/* Registrar Toggle */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 pt-4 sm:pt-6 md:pt-8 lg:pt-[24px]">
            <button
              onClick={() => setActiveRegistrar('domain')}
              className="rounded-full text-sm sm:text-base transition-all duration-300 bg-[#0D4AE7] text-white shadow-[0_0_20px_rgba(45,128,255,0.15)] py-2 sm:py-[10px] px-4 sm:px-[40px] w-full sm:w-auto"
            >
              Domain Registrar
            </button>
            <button
              onClick={() => setActiveRegistrar('web3')}
              className="rounded-full text-sm sm:text-base transition-all duration-300 text-white bg-transparent hover:border-[rgba(255,255,255,0.25)] sm:ml-[8px] py-2 sm:py-[10px] px-4 sm:px-[40px] border-2 border-white backdrop-blur-[32px] w-full sm:w-auto"
            >
              Web3 Registrar
            </button>
          </div>

          {/* Search Form */}
          <div className="relative w-full h-12 sm:h-14 md:h-16 lg:h-[64px] flex items-center bg-white rounded-full backdrop-blur-[20px] mt-4 sm:mt-6 md:mt-8 lg:mt-[36px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Register a domain name to start"
              className="w-full h-full bg-transparent text-black text-sm sm:text-base placeholder:text-white/40 pl-4 sm:pl-6 md:pl-[24px] focus:outline-none rounded-full"
            />
            <button
              onClick={handleSearch}
              className="absolute right-1 sm:right-[4px] px-4 sm:px-6 md:px-[48px] py-2 sm:py-3 md:py-[16px] text-sm sm:text-base md:text-[18px] text-white rounded-full bg-[#0D4AE7] font-normal"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add animation keyframes
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.7s ease-out forwards;
  }

  .animate-fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.7s ease-out forwards;
  }

  .delay-200 {
    animation-delay: 0.2s;
  }
`
document.head.appendChild(style)

export default Register
