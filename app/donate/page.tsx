'use client'

import { useState, useRef, useEffect } from 'react'
import { Heart, DollarSign, Shield, Users, CheckCircle, CreditCard, ArrowLeft, Lock, Check } from 'lucide-react'

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

const DONATION_DESTINATIONS = [
  { value: 'equipment', label: 'Equipment' },
  { value: 'operations', label: 'Operations' },
  { value: 'training', label: 'Training' },
  { value: 'firefighters-fund', label: "Firefighter's Fund" },
] as const

type PaymentStep = 'payment' | 'processing' | 'success'

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [designateDestination, setDesignateDestination] = useState(false)
  const [donationDestination, setDonationDestination] = useState<string>('equipment')

  const [showPaymentFlow, setShowPaymentFlow] = useState(false)
  const [paymentStep, setPaymentStep] = useState<PaymentStep>('payment')
  const [donationAmount, setDonationAmount] = useState<number>(0)
  const [donationDestinationFinal, setDonationDestinationFinal] = useState<string | undefined>(undefined)
  const [confirmationId, setConfirmationId] = useState('')

  const presetAmounts = [25, 50, 100, 250, 500]
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!showPaymentFlow) return
    previousFocusRef.current = document.activeElement as HTMLElement | null
    const timer = requestAnimationFrame(() => {
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      focusable?.[0]?.focus()
    })
    return () => cancelAnimationFrame(timer)
  }, [showPaymentFlow])

  useEffect(() => {
    if (!showPaymentFlow || !modalRef.current) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (paymentStep === 'payment') handleEditDonation()
        else if (paymentStep === 'success') handleClosePaymentFlow()
      }
      if (e.key !== 'Tab') return
      const focusable = Array.from(modalRef.current!.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first && last) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last && first) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showPaymentFlow, paymentStep])

  useEffect(() => {
    if (!showPaymentFlow && previousFocusRef.current) {
      previousFocusRef.current.focus()
    }
  }, [showPaymentFlow])

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount)
    if (!amount || amount <= 0) {
      alert('Please select or enter a donation amount')
      return
    }
    setDonationAmount(amount)
    setDonationDestinationFinal(designateDestination ? donationDestination : undefined)
    setShowPaymentFlow(true)
    setPaymentStep('payment')
  }

  const handleEditDonation = () => {
    setShowPaymentFlow(false)
  }

  const handleSubmitPayment = () => {
    setPaymentStep('processing')
    setTimeout(() => {
      setConfirmationId(`TFS-${Date.now().toString(36).toUpperCase()}`)
      setPaymentStep('success')
    }, 1500)
  }

  const handleClosePaymentFlow = () => {
    setShowPaymentFlow(false)
    setPaymentStep('payment')
    setConfirmationId('')
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
          <h1 className="mb-4">Support TFS Fire Department</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your donation helps us protect lives, property, and our community
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">How Your Donation Helps</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-fire-red/5 rounded-lg">
                <Shield className="w-12 h-12 mx-auto mb-4 text-fire-red" aria-hidden="true" />
                <h3 className="font-bold mb-2">Equipment</h3>
                <p className="text-sm text-fire-dark/70">
                  Modern firefighting equipment and protective gear
                </p>
              </div>
              <div className="text-center p-6 bg-fire-orange/5 rounded-lg">
                <Users className="w-12 h-12 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
                <h3 className="font-bold mb-2">Training</h3>
                <p className="text-sm text-fire-dark/70">
                  Professional training programs for volunteers
                </p>
              </div>
              <div className="text-center p-6 bg-fire-yellow/5 rounded-lg">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-fire-yellow" aria-hidden="true" />
                <h3 className="font-bold mb-2">Operations</h3>
                <p className="text-sm text-fire-dark/70">
                  Day-to-day operational costs and maintenance
                </p>
              </div>
              <div className="text-center p-6 bg-fire-red/5 rounded-lg">
                <Heart className="w-12 h-12 mx-auto mb-4 text-fire-red" aria-hidden="true" />
                <h3 className="font-bold mb-2">Firefighter&apos;s Fund</h3>
                <p className="text-sm text-fire-dark/70">
                  Supporting our volunteers
                </p>
              </div>
            </div>

            <div className="bg-fire-dark/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$50 keeps our gear stocked—hoses, nozzles, and basic supplies for emergency response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$100 sends one volunteer through fire academy certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$250 supports apparatus maintenance and keeps our rigs response-ready</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>$500 funds essential wildland gear for volunteers on the fire line</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Direct donations to the Firefighter&apos;s Fund help volunteers with uniforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Make a Donation</h2>

            <div className="mb-8">
              <label className="block text-sm font-semibold mb-4">
                Select Amount
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount('')
                    }}
                    className={`p-4 rounded-lg border-2 font-semibold transition-colors ${
                      selectedAmount === amount
                        ? 'border-fire-red bg-fire-red text-white'
                        : 'border-fire-dark/20 hover:border-fire-red'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label htmlFor="custom-amount" className="block text-sm font-semibold mb-2">
                  Or enter custom amount
                </label>
                <div className="flex items-center">
                  <span className="text-fire-dark/60 mr-2">$</span>
                  <input
                    type="number"
                    id="custom-amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
                    }}
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    className="flex-1 px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={designateDestination}
                  onChange={(e) => setDesignateDestination(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-fire-dark/30 text-fire-red focus:ring-fire-red"
                />
                <span className="text-sm font-semibold">
                  Choose your impact
                </span>
              </label>
              {designateDestination && (
                <div className="mt-4 pl-7 grid grid-cols-2 gap-3">
                  {DONATION_DESTINATIONS.map(({ value, label }) => (
                    <label
                      key={value}
                      className="flex items-center gap-2 p-3 rounded-lg border border-fire-dark/20 hover:bg-fire-dark/5 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="donation-destination"
                        value={value}
                        checked={donationDestination === value}
                        onChange={() => setDonationDestination(value)}
                        className="w-4 h-4 text-fire-red focus:ring-fire-red"
                      />
                      <span className="text-sm font-medium">{label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6 p-4 bg-fire-red/5 border-l-4 border-fire-red rounded">
              <p className="text-sm text-fire-dark/70">
                <strong>Note:</strong> TFS Volunteer Fire Department is a 501(c)(3) nonprofit organization. 
                Your donation may be tax-deductible. Please consult with a tax professional for specific advice.
              </p>
            </div>

            <button
              onClick={handleDonate}
              className="btn-primary w-full text-lg py-4"
            >
              Continue to Payment
            </button>

            <p className="text-center text-sm text-fire-dark/60 mt-4">
              Secure payment processing via Stripe. Your information is protected.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Flow Modal */}
      {showPaymentFlow && (
        <div
          className="fixed inset-0 z-50 bg-fire-dark/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Payment"
        >
          <div ref={modalRef} className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-xl shadow-2xl min-h-[20rem] max-h-[90vh] flex flex-col overflow-hidden" tabIndex={-1}>
            {/* Payment Step */}
            {paymentStep === 'payment' && (
              <>
                <div className="flex-shrink-0 p-6 border-b border-fire-dark/10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Payment Details</h2>
                    <button
                      onClick={handleEditDonation}
                      className="text-fire-dark/60 hover:text-fire-dark flex items-center gap-1 text-sm"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  </div>
                  <p className="text-sm text-fire-dark/60 mt-2">
                    Donation: <span className="font-semibold text-fire-red">${donationAmount.toFixed(2)}</span>
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmitPayment()
                  }}
                  className="flex flex-col flex-1 min-h-0 overflow-hidden"
                >
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-semibold mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-dark/40" />
                      <input
                        id="card-number"
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        className="w-full pl-10 pr-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                        maxLength={19}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-semibold mb-2">
                        Expiry
                      </label>
                      <input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-semibold mb-2">
                        CVC
                      </label>
                      <input
                        id="cvc"
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="card-name" className="block text-sm font-semibold mb-2">
                      Name on Card
                    </label>
                    <input
                      id="card-name"
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email (for receipt)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    />
                  </div>
                  <div>
                    <label htmlFor="billing-address" className="block text-sm font-semibold mb-2">
                      Billing Address
                    </label>
                    <input
                      id="billing-address"
                      type="text"
                      placeholder="123 Main St, City, State ZIP"
                      className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    />
                  </div>
                  </div>
                  <div className="flex-shrink-0 p-6 pt-0 border-t border-fire-dark/10 space-y-3">
                    <button type="submit" className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                      <Lock className="w-5 h-5" />
                      Complete Donation — ${donationAmount.toFixed(2)}
                    </button>
                    <p className="text-center text-xs text-fire-dark/60 flex items-center justify-center gap-1">
                      <Lock className="w-3.5 h-3.5" />
                      Secured by Stripe. No data is stored.
                    </p>
                  </div>
                </form>
              </>
            )}

            {/* Processing Step */}
            {paymentStep === 'processing' && (
              <div className="p-12 text-center">
                <div className="w-16 h-16 border-4 border-fire-red border-t-transparent rounded-full animate-spin mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2">Processing Your Donation</h3>
                <p className="text-fire-dark/60">Please wait...</p>
              </div>
            )}

            {/* Success Step */}
            {paymentStep === 'success' && (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-fire-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-fire-red" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-fire-dark/70 mb-6">
                  Your donation of <span className="font-semibold text-fire-red">${donationAmount.toFixed(2)}</span>
                  {donationDestinationFinal && (
                    <> to <span className="font-semibold">{DONATION_DESTINATIONS.find((d) => d.value === donationDestinationFinal)?.label}</span></>
                  )}{' '}
                  has been received.
                </p>
                <p className="text-sm text-fire-dark/60 mb-2">Confirmation number</p>
                <p className="font-mono font-semibold text-fire-dark mb-8">{confirmationId}</p>
                <button onClick={handleClosePaymentFlow} className="btn-primary w-full py-4">
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Other Ways to Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Other Ways to Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-fire-red/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-fire-dark/70 mb-4">
                  Join our team of dedicated volunteers and make a direct impact in your community.
                </p>
                <a href="/volunteer" className="text-fire-red hover:underline font-semibold">
                  Learn about volunteering →
                </a>
              </div>
              <div className="p-6 border border-fire-orange/20 rounded-lg">
                <h3 className="text-xl font-bold mb-3">In-Kind Donations</h3>
                <p className="text-fire-dark/70 mb-4">
                  We accept equipment, supplies, and other in-kind donations. Contact us to discuss.
                </p>
                <a href="/contact" className="text-fire-red hover:underline font-semibold">
                  Contact us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
