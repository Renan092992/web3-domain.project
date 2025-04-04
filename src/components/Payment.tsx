import React, { useState } from 'react'
import bitcoinIcon from '../assets/images/bitcoin.svg'
import ethereumIcon from '../assets/images/ethereum.svg'
import solanaIcon from '../assets/images/solana.svg'
import visaIcon from '../assets/images/visa.svg'
import checkIcon from '../assets/images/check.svg'

interface PaymentProps {
  onSubmit: () => void
  onBack: () => void
  defaultMethod?: 'crypto' | 'credit'
}

const Payment: React.FC<PaymentProps> = ({
  onSubmit,
  onBack,
  defaultMethod = 'crypto'
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'credit'>(
    defaultMethod
  )
  const [selectedCrypto, setSelectedCrypto] = useState<
    'bitcoin' | 'ethereum' | 'solana' | null
  >(null)
  const [cardData, setCardData] = useState({
    cardholderName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  const handlePaymentMethodChange = (method: 'crypto' | 'credit') => {
    setPaymentMethod(method)
    setSelectedCrypto(null)
  }

  const handleCryptoSelect = (crypto: 'bitcoin' | 'ethereum' | 'solana') => {
    setSelectedCrypto(crypto)
  }

  const isCardValid = () => {
    return (
      cardData.cardholderName.length > 0 &&
      cardData.cardNumber.length > 0 &&
      cardData.expiry.length > 0 &&
      cardData.cvc.length > 0
    )
  }

  const isPaymentValid = () => {
    if (paymentMethod === 'crypto') {
      return selectedCrypto !== null
    }
    return isCardValid()
  }

  const getInputClassName = (value: string) => {
    const baseClass =
      'w-full h-[56px] px-4 rounded-full border focus:outline-none transition-colors'
    return `${baseClass} border-[#E5E7EB] text-[#111827] bg-white`
  }

  return (
    <div className="w-full max-w-[480px] bg-white rounded-[24px] p-[32px]">
      <h2 className="text-[24px] font-bold text-[#111827] border-b border-[#0D4AE7] pb-[16px] mb-[24px]">
        Payment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-[24px]">
        {/* Payment Method Selection */}
        <div className="space-y-[12px]">
          <div className="flex items-center space-x-[12px]">
            <input
              type="radio"
              id="crypto"
              checked={paymentMethod === 'crypto'}
              onChange={() => handlePaymentMethodChange('crypto')}
              className="w-5 h-5 text-[#0D4AE7] border-2 border-gray-300 focus:ring-[#0D4AE7]"
            />
            <label htmlFor="crypto" className="text-[16px] text-[#111827]">
              Pay with Crypto
            </label>
          </div>
          <div className="flex items-center space-x-[12px]">
            <input
              type="radio"
              id="credit"
              checked={paymentMethod === 'credit'}
              onChange={() => handlePaymentMethodChange('credit')}
              className="w-5 h-5 text-[#0D4AE7] border-2 border-gray-300 focus:ring-[#0D4AE7]"
            />
            <label htmlFor="credit" className="text-[16px] text-[#111827]">
              Pay with Credit Card
            </label>
          </div>
        </div>

        {/* Crypto Payment Section */}
        {paymentMethod === 'crypto' && (
          <div className="flex justify-center items-center space-x-[32px] py-[32px]">
            <div
              onClick={() => handleCryptoSelect('bitcoin')}
              className={`cursor-pointer transition-all ${
                selectedCrypto === 'bitcoin'
                  ? 'scale-110 ring-4 ring-[#0D4AE7] rounded-full'
                  : 'hover:scale-110'
              }`}
            >
              <img
                src={bitcoinIcon}
                alt="Bitcoin"
                className="w-[48px] h-[48px]"
              />
            </div>
            <div
              onClick={() => handleCryptoSelect('ethereum')}
              className={`cursor-pointer transition-all ${
                selectedCrypto === 'ethereum'
                  ? 'scale-110 ring-4 ring-[#0D4AE7] rounded-full'
                  : 'hover:scale-110'
              }`}
            >
              <img
                src={ethereumIcon}
                alt="Ethereum"
                className="w-[48px] h-[48px]"
              />
            </div>
            <div
              onClick={() => handleCryptoSelect('solana')}
              className={`cursor-pointer transition-all ${
                selectedCrypto === 'solana'
                  ? 'scale-110 ring-4 ring-[#0D4AE7] rounded-full'
                  : 'hover:scale-110'
              }`}
            >
              <img
                src={solanaIcon}
                alt="Solana"
                className="w-[48px] h-[48px]"
              />
            </div>
          </div>
        )}

        {/* Credit Card Payment Section */}
        {paymentMethod === 'credit' && (
          <div className="space-y-[16px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Cardholder's name"
                value={cardData.cardholderName}
                onChange={(e) =>
                  setCardData({ ...cardData, cardholderName: e.target.value })
                }
                className={getInputClassName(cardData.cardholderName)}
              />
              {cardData.cardholderName && (
                <img
                  src={checkIcon}
                  alt="Valid"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                />
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Card number"
                value={cardData.cardNumber}
                onChange={(e) =>
                  setCardData({ ...cardData, cardNumber: e.target.value })
                }
                className={getInputClassName(cardData.cardNumber)}
              />
              {cardData.cardNumber && (
                <>
                  <img
                    src={visaIcon}
                    alt="Visa"
                    className="absolute right-12 top-1/2 -translate-y-1/2 h-4"
                  />
                  <img
                    src={checkIcon}
                    alt="Valid"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                </>
              )}
            </div>
            <div className="flex space-x-[16px]">
              <div className="relative w-1/2">
                <input
                  type="text"
                  placeholder="Expiry"
                  value={cardData.expiry}
                  onChange={(e) =>
                    setCardData({ ...cardData, expiry: e.target.value })
                  }
                  className={getInputClassName(cardData.expiry)}
                />
                {cardData.expiry && (
                  <img
                    src={checkIcon}
                    alt="Valid"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                )}
              </div>
              <div className="relative w-1/2">
                <input
                  type="text"
                  placeholder="CVC"
                  value={cardData.cvc}
                  onChange={(e) =>
                    setCardData({ ...cardData, cvc: e.target.value })
                  }
                  className={getInputClassName(cardData.cvc)}
                />
                {cardData.cvc && (
                  <img
                    src={checkIcon}
                    alt="Valid"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-[16px] pt-[8px]">
          <button
            type="submit"
            disabled={!isPaymentValid()}
            className={`w-full h-[56px] rounded-full font-medium transition-all ${
              isPaymentValid()
                ? 'bg-[#0D4AE7] text-white hover:bg-[#0D4AE7]/90'
                : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
            }`}
          >
            Pay
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full text-[#0D4AE7] text-center font-medium hover:text-[#0D4AE7]/80 transition-colors"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default Payment
