import React, { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import { useLocation } from 'react-router-dom'

import Payment from './Payment'
import RegistrationStatus from './RegistrationStatus'

import logo from '../assets/images/logo.svg'
import bgImage from '../assets/images/bg.jpg'
type RegistrationStep = 'form' | 'payment' | 'processing' | 'complete'

const DomainRegistration: React.FC = () => {
  const location = useLocation()
  const [step, setStep] = useState<RegistrationStep>('form')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    domainName: location.state?.domain || '',
    custody: 'self' as 'self' | 'hosted'
  })

  const handleFormSubmit = (data: typeof formData) => {
    setFormData(data)
    setStep('payment')
  }

  const handlePaymentSubmit = () => {
    setStep('processing')
    // Simulate processing
    setTimeout(() => setStep('complete'), 2000)
  }

  return (
    <div className="fixed w-full inset-0 bg-[#000B1E] md:px-[180px] px-[20px] overflow-auto">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-left-top bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Logo */}
      <div className="relative mt-[40px] group cursor-pointer">
        <img src={logo} alt="PKT Logo" className="w-[67px] h-[64px]" />
      </div>

      {/* Main content */}
      <div className="w-[100%] h-[calc(100%-104px)] flex justify-center items-center ">
        <div className="relative w-full max-w-[600px] min-w-[360px] h-[640px] ">
          {/* White card container */}
          <div className=" bg-slate-400/40 p-[10px] rounded-[30px]">
            <div className="w-full bg-white rounded-[24px] p-[32px] shadow-xl">
              {step === 'form' && (
                <div className="space-y-[24px]">
                  <h2 className="text-[24px] font-bold text-[#111827] border-b border-[#E5E7EB] pb-[16px]">
                    Fill out the form
                  </h2>
                  <RegistrationForm
                    onSubmit={handleFormSubmit}
                    initialData={formData}
                    className="space-y-[16px]"
                  />
                </div>
              )}
              {step === 'payment' && (
                <Payment
                  onSubmit={handlePaymentSubmit}
                  onBack={() => setStep('form')}
                />
              )}
              {(step === 'processing' || step === 'complete') && (
                <RegistrationStatus step={step} domainId="299" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DomainRegistration
