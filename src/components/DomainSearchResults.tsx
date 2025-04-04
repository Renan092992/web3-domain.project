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
    <div className="fixed w-full inset-0 bg-[#000B1E] px-[180px] overflow-auto">
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
        <div className="w-[100%] mt-[64px]  ">
          {/* Custody Type Toggle */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setCustodyType('custody')}
              className={`px-8 py-2 rounded-full transition-all duration-300 text-[16px] bg-gradient-to-r from-[#3CADEF] via-[#3CADEF] to-[#339DDB] text-white ${
                custodyType === 'custody' ? ' opacity-100 ' : ' opacity-70'
              }`}
            >
              Custody
            </button>
            <button
              onClick={() => setCustodyType('hosted')}
              className={`px-8 py-2 rounded-full transition-all duration-300 text-[16px] bg-gradient-to-r from-[#3CADEF] via-[#3CADEF] to-[#339DDB] text-white ${
                custodyType === 'hosted' ? ' opacity-100 ' : ' opacity-70'
              }`}
            >
              Hosted
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full h-[64px] flex items-center bg-white/[0.05] rounded-full backdrop-blur-[20px] mt-[36px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full bg-transparent bg-white text-black text-[16px] placeholder:text-white/40 pl-[24px] focus:outline-none rounded-full"
              placeholder="Search for a domain"
            />
            <button
              onClick={handleSearch}
              className="absolute right-[4px] px-[48px] py-[16px] text-[18px] text-white rounded-full bg-[#0D4AE7]   font-normal"
            >
              Search
            </button>
          </div>
          {/* Results List */}
          <div className="space-y-2">
            {domainResults.map((domain) => (
              <div
                key={domain.name}
                className={`flex items-center justify-between bg-white backdrop-blur-md rounded-[16px] px-[20px] py-[10px] ${
                  domain.name.includes(searchQuery)
                    ? 'text-green-400 mt-[16px] mb-[16px]'
                    : 'text-black mt-[8px]'
                }`}
              >
                <div className="flex items-center align-middle">
                  {domain.name.includes(searchQuery) && (
                    <img
                      src={circleCheck}
                      alt="circle check"
                      className="w-[24px] h-[24px]"
                    />
                  )}
                  <span className=" text-[18px] font-semibold">
                    {domain.name}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-right">
                    <div className="text-black text-[18px] font-bold">
                      ${domain.price}/yr
                    </div>
                    <div className="text-sm text-black text-[14px]">
                      Service charge ${domain.serviceCharge}
                    </div>
                  </div>
                  {domain.isAvailable ? (
                    domain.name.includes(searchQuery) ? (
                      <div
                        onClick={() => handleRegister(domain.name)}
                        className="relative flex items-center justify-center ml-[16px] px-[20px] py-[14px] text-[18px] text-white rounded-full bg-[#0D4AE7]   font-normal"
                      >
                        Register
                        <img
                          src={whiteArrow}
                          alt="white arrow"
                          className="w-[24px] h-[24px] to-white"
                          color="white"
                        />
                      </div>
                    ) : (
                      <button
                        // onClick={() => handleRegister(domain.name)}
                        className="px-8 py-2  text-black rounded-full flex items-center space-x-2"
                      >
                        <span className="border-l pl-[24px] py-[5px]">
                          Available
                        </span>
                        <img
                          src={circleCheck}
                          alt="circle check"
                          className="w-[24px] h-[24px] mr-[10px]"
                        />
                        <img
                          src={blueArrow}
                          alt="blue arrow"
                          className="w-[20px] h-[20px]"
                        />
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
          <div className="flex justify-center mt-8">
            <button className="text-white flex items-center space-x-2">
              <span>Show More Domains</span>
              <svg
                className="w-5 h-5"
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
