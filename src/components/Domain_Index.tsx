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
    navigate('/search', { state: { query: searchQuery } })
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
    <div className="min-h-screen w-full fixed inset-0 bg-[#000B1E] px-[180px]">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-left-top bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Logo */}
      <div className="relative mt-[40px] group cursor-pointer">
        <img src={logo} alt="PKT Logo" className="w-[67px] h-[64px]" />
      </div>

      <div className="relative min-h-screen w-full">
        <div className="w-[100%] mt-[104px]">
          {/* Claim your PKT Domain */}
          <div className="text-white font-inter text-[96px] not-italic font-bold leading-[112px]">
            Claim your
            <br />
            PKT Domain
          </div>

          {/* Registrar Toggle */}
          <div className="flex pt-[24px]">
            <button
              onClick={() => setActiveRegistrar('domain')}
              className="rounded-full text-[16px] transition-all duration-300 bg-[#0D4AE7] text-white shadow-[0_0_20px_rgba(45,128,255,0.15)] py-[10px] px-[40px]"
            >
              Domain Registrar
            </button>
            <button
              onClick={() => setActiveRegistrar('web3')}
              className="rounded-full text-[16px] transition-all duration-300 text-white bg-transparent hover:border-[rgba(255,255,255,0.25)] ml-[8px] py-[10px] px-[40px] border-2 border-white backdrop-blur-[32px]"
            >
              Web3 Registrar
            </button>
          </div>

          {/* Search Form */}
          <div className="relative w-full h-[64px] flex items-center bg-white/[0.05] rounded-full backdrop-blur-[20px] mt-[36px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Register a domain name to start"
              className="w-full h-full bg-transparent bg-white text-black text-[16px] placeholder:text-white/40 pl-[24px] focus:outline-none rounded-full"
            />
            <button
              onClick={handleSearch}
              className="absolute right-[4px] px-[48px] py-[16px] text-[18px] text-white rounded-full bg-[#0D4AE7] font-normal"
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
