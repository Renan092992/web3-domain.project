import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import bgImage from '../assets/images/bg.jpg'
import circleCheck from '../assets/images/check_circle.png'
import blueArrow from '../assets/images/arrow-blue.svg'
import whiteArrow from '../assets/images/arrow-white.svg'
interface DomainResult {
  name: string
  price: number
  isAvailable: boolean
  serviceCharge: number
}

const DomainSearchResults: React.FC = () => {
  const [custodyType, setCustodyType] = useState<'custody' | 'hosted'>(
    'custody'
  )
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState(location.state?.query)
  const navigate = useNavigate()

  const domainResults: DomainResult[] = [
    { name: 'aero.pkt', price: 41.28, isAvailable: true, serviceCharge: 5.0 },
    { name: 'pkt.abb', price: 11.33, isAvailable: false, serviceCharge: 5.0 },
    { name: 'abbott.pkt', price: 4.56, isAvailable: true, serviceCharge: 5.0 },
    { name: 'abbvie.pkt', price: 8.89, isAvailable: false, serviceCharge: 5.0 },
    { name: 'abc.pkt', price: 6.24, isAvailable: false, serviceCharge: 5.0 },
    { name: 'able.pkt', price: 35.31, isAvailable: false, serviceCharge: 5.0 },
    {
      name: 'abogado.pkt',
      price: 1.27,
      isAvailable: false,
      serviceCharge: 5.0
    },
    {
      name: 'abudhabi.pkt',
      price: 17.98,
      isAvailable: false,
      serviceCharge: 5.0
    },
    { name: 'arpa.pkt', price: 820.5, isAvailable: false, serviceCharge: 5.0 }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here
  }

  const handleRegister = (domain: string) => {
    navigate('/register-domain', { state: { domain } })
  }

  return (
    <div className="fixed w-full inset-0 bg-[#000B1E] px-4 sm:px-6 md:px-8 lg:px-[180px] overflow-auto">
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
        <div className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-[64px]">
          {/* Custody Type Toggle */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6">
            <button
              onClick={() => setCustodyType('custody')}
              className={`px-4 sm:px-8 py-2 rounded-full transition-all duration-300 text-sm sm:text-base bg-gradient-to-r from-[#3CADEF] via-[#3CADEF] to-[#339DDB] text-white ${
                custodyType === 'custody' ? ' opacity-100 ' : ' opacity-70'
              }`}
            >
              Custody
            </button>
            <button
              onClick={() => setCustodyType('hosted')}
              className={`px-4 sm:px-8 py-2 rounded-full transition-all duration-300 text-sm sm:text-base bg-gradient-to-r from-[#3CADEF] via-[#3CADEF] to-[#339DDB] text-white ${
                custodyType === 'hosted' ? ' opacity-100 ' : ' opacity-70'
              }`}
            >
              Hosted
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full h-12 sm:h-14 md:h-16 lg:h-[64px] flex items-center bg-white rounded-full backdrop-blur-[20px] mt-4 sm:mt-6 md:mt-8 lg:mt-[36px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full bg-transparent text-black text-sm sm:text-base placeholder:text-white/40 pl-4 sm:pl-6 md:pl-[24px] focus:outline-none rounded-full"
              placeholder="Search for a domain"
            />
            <button
              onClick={handleSearch}
              className="absolute right-1 sm:right-[4px] px-4 sm:px-6 md:px-[48px] py-2 sm:py-3 md:py-[16px] text-sm sm:text-base md:text-[18px] text-white rounded-full bg-[#0D4AE7] font-normal"
            >
              Search
            </button>
          </div>
          {/* Results List */}
          <div className="space-y-2 mt-4 sm:mt-6">
            {domainResults.map((domain) => (
              <div
                key={domain.name}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white backdrop-blur-md rounded-[16px] px-4 sm:px-6 md:px-[20px] py-3 sm:py-[10px] ${
                  domain.name.includes(searchQuery)
                    ? 'text-green-400 mt-4 sm:mt-[16px] mb-4 sm:mb-[16px]'
                    : 'text-black mt-2 sm:mt-[8px]'
                }`}
              >
                <div className="flex items-center align-middle mb-2 sm:mb-0">
                  {domain.name.includes(searchQuery) && (
                    <img
                      src={circleCheck}
                      alt="circle check"
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]"
                    />
                  )}
                  <span className="text-base sm:text-lg md:text-[18px] font-semibold ml-2">
                    {domain.name}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto">
                  <div className="text-left sm:text-right mb-2 sm:mb-0">
                    <div className="text-black text-base sm:text-lg md:text-[18px] font-bold">
                      ${domain.price}/yr
                    </div>
                    <div className="text-xs sm:text-sm text-black">
                      Service charge ${domain.serviceCharge}
                    </div>
                  </div>
                  {domain.isAvailable ? (
                    domain.name.includes(searchQuery) ? (
                      <div
                        onClick={() => handleRegister(domain.name)}
                        className="relative flex items-center justify-center mt-2 sm:mt-0 sm:ml-[16px] px-4 sm:px-6 md:px-[20px] py-2 sm:py-3 md:py-[14px] text-sm sm:text-base md:text-[18px] text-white rounded-full bg-[#0D4AE7] font-normal w-full sm:w-auto"
                      >
                        Register
                        <img
                          src={whiteArrow}
                          alt="white arrow"
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] ml-2"
                          color="white"
                        />
                      </div>
                    ) : (
                      <button className="w-full sm:w-auto px-4 sm:px-8 py-2 text-black rounded-full flex items-center justify-between sm:justify-start space-x-2 mt-2 sm:mt-0">
                        <span className="border-l pl-4 sm:pl-[24px] py-[5px] text-sm sm:text-base">
                          Available
                        </span>
                        <div className="flex items-center">
                          <img
                            src={circleCheck}
                            alt="circle check"
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] mx-2"
                          />
                          <img
                            src={blueArrow}
                            alt="blue arrow"
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]"
                          />
                        </div>
                      </button>
                    )
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button className="text-white flex items-center space-x-2 text-sm sm:text-base">
              <span>Show More Domains</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DomainSearchResults
