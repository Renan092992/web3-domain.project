import React from 'react'

interface RegistrationStatusProps {
  step: 'processing' | 'complete'
  domainId: string
}

const RegistrationStatus: React.FC<RegistrationStatusProps> = ({
  step,
  domainId
}) => {
  if (step === 'processing') {
    return (
      <div className="w-full max-w-[560px] backdrop-blur-[32px] rounded-[24px] p-[32px]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[48px] h-[48px] border-4 border-[#0D4AE7] border-t-transparent rounded-full animate-spin mb-[24px]" />
          <h2 className="text-[24px] font-bold text-black mb-[8px]">
            Processing your registration
          </h2>
          <p className="text-white/60 text-center">
            Please wait while we process your registration
          </p>

          <div className="w-full mt-[32px] space-y-[16px]">
            <div className="flex items-center justify-between text-white">
              <span>Pre-allocating stake</span>
              <span>1/4</span>
            </div>
            <div className="w-full h-[8px] bg-white/10 rounded-full overflow-hidden">
              <div className="w-1/4 h-full bg-[#0D4AE7] rounded-full" />
            </div>
            <div className="text-white/60 text-sm">
              <div>TXID:</div>
              <div className="font-mono break-all">
                02djf0dfjsdf203jf24ifj34fnc248n2487bryh23ej23cn2cvbjfdsjcx7r23r
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[560px] bg-[#0A1B3B]/30 backdrop-blur-[32px] rounded-[24px] p-[32px]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[64px] h-[64px] bg-[#0D4AE7] rounded-full flex items-center justify-center mb-[24px]">
          <svg
            className="w-[32px] h-[32px] text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-[24px] font-bold text-white mb-[8px]">
          Registration complete
        </h2>
        <p className="text-white/60 text-center mb-[32px]">
          Your Domain ID {domainId} is now available in your PKT dashboard
        </p>
        <button
          type="button"
          onClick={() => (window.location.href = '/dashboard')}
          className="h-[56px] px-[32px] bg-[#0D4AE7] text-white rounded-[12px] font-medium hover:bg-[#0D4AE7]/90 transition-colors flex items-center"
        >
          View Dashboard
          <svg
            className="w-[24px] h-[24px] ml-[8px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default RegistrationStatus
