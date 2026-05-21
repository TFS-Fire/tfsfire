'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail, VOLUNTEER_TEMPLATE_ID } from '@/lib/emailjs'
import { Users, Shield, Heart, CheckCircle, Send, AlertCircle } from 'lucide-react'

interface VolunteerFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  dateOfBirth: string
  emergencyContact: string
  emergencyPhone: string
  experience: string
  motivation: string
  availability: string
  backgroundCheck: boolean
}

export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<VolunteerFormData>()

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await sendEmail(VOLUNTEER_TEMPLATE_ID, {
        first_name: data.firstName,
        last_name: data.lastName,
        full_name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        reply_to: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip_code: data.zipCode,
        date_of_birth: data.dateOfBirth,
        emergency_contact: data.emergencyContact,
        emergency_phone: data.emergencyPhone,
        experience: data.experience || '(none provided)',
        motivation: data.motivation,
        availability: data.availability,
        background_check_consent: data.backgroundCheck ? 'Yes' : 'No',
        submitted_at: new Date().toLocaleString(),
      })

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom text-center">
          <Users className="w-16 h-16 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
          <h1 className="mb-4">Become a Volunteer</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our dedicated team and make a difference in your community
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Volunteer with TFS?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-fire-red/5 rounded-lg">
                <Shield className="w-12 h-12 mx-auto mb-4 text-fire-red" aria-hidden="true" />
                <h3 className="font-bold mb-2">Make a Difference</h3>
                <p className="text-sm text-fire-dark/70">
                  Protect lives and property in your community
                </p>
              </div>
              <div className="text-center p-6 bg-fire-orange/5 rounded-lg">
                <Users className="w-12 h-12 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
                <h3 className="font-bold mb-2">Join a Team</h3>
                <p className="text-sm text-fire-dark/70">
                  Work alongside dedicated, professional volunteers
                </p>
              </div>
              <div className="text-center p-6 bg-fire-yellow/5 rounded-lg">
                <Heart className="w-12 h-12 mx-auto mb-4 text-fire-yellow" aria-hidden="true" />
                <h3 className="font-bold mb-2">Give Back</h3>
                <p className="text-sm text-fire-dark/70">
                  Serve your community with pride and purpose
                </p>
              </div>
            </div>

            <div className="bg-fire-dark/5 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Comprehensive training in firefighting, rescue operations, and wildland fire management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Professional equipment and protective gear provided</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Flexible scheduling to accommodate work and family commitments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Opportunities for leadership and specialized training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-fire-red mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Strong sense of camaraderie and community connection</span>
                </li>
              </ul>
            </div>

            <div className="bg-fire-red/5 border-l-4 border-fire-red p-6 rounded">
              <h3 className="font-bold mb-2">Requirements</h3>
              <ul className="list-disc list-inside space-y-1 text-fire-dark/70">
                <li>Minimum age of 18 years</li>
                <li>Reside within the Fire Service area or a reasonable distance from the Fire Service area</li>
                <li>Pass background check</li>
                <li>Complete required training program</li>
                <li>Commit to regular training and response availability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Volunteer Application</h2>

            <div role="status" aria-live="polite" aria-atomic="true">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" aria-hidden="true" />
                  <p className="text-green-800">
                    Application submitted successfully! We&apos;ll review your application and contact you within 5-7 business days.
                  </p>
                </div>
              )}
            </div>

            {submitStatus === 'error' && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
              >
                <AlertCircle className="w-5 h-5 text-red-600 mr-2" aria-hidden="true" />
                <p className="text-red-800">There was an error submitting your application. Please try again or contact us directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                    First Name <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                    Last Name <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold mb-2">
                  Street Address <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                </label>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: 'Address is required' })}
                  className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                  aria-invalid={errors.address ? 'true' : 'false'}
                  aria-describedby={errors.address ? 'address-error' : undefined}
                />
                {errors.address && (
                  <p id="address-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.address.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold mb-2">
                    City <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.city ? 'true' : 'false'}
                    aria-describedby={errors.city ? 'city-error' : undefined}
                  />
                  {errors.city && (
                    <p id="city-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-semibold mb-2">
                    State <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    {...register('state', { required: 'State is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.state ? 'true' : 'false'}
                    aria-describedby={errors.state ? 'state-error' : undefined}
                  />
                  {errors.state && (
                    <p id="state-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.state.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="zipCode" className="block text-sm font-semibold mb-2">
                    ZIP Code <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    {...register('zipCode', { required: 'ZIP code is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.zipCode ? 'true' : 'false'}
                    aria-describedby={errors.zipCode ? 'zipCode-error' : undefined}
                  />
                  {errors.zipCode && (
                    <p id="zipCode-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-semibold mb-2">
                  Date of Birth <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  {...register('dateOfBirth', { required: 'Date of birth is required' })}
                  className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                  aria-invalid={errors.dateOfBirth ? 'true' : 'false'}
                  aria-describedby={errors.dateOfBirth ? 'dateOfBirth-error' : undefined}
                />
                {errors.dateOfBirth && (
                  <p id="dateOfBirth-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.dateOfBirth.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-semibold mb-2">
                    Emergency Contact Name <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    {...register('emergencyContact', { required: 'Emergency contact is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.emergencyContact ? 'true' : 'false'}
                    aria-describedby={errors.emergencyContact ? 'emergencyContact-error' : undefined}
                  />
                  {errors.emergencyContact && (
                    <p id="emergencyContact-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.emergencyContact.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="emergencyPhone" className="block text-sm font-semibold mb-2">
                    Emergency Contact Phone <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    {...register('emergencyPhone', { required: 'Emergency phone is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.emergencyPhone ? 'true' : 'false'}
                    aria-describedby={errors.emergencyPhone ? 'emergencyPhone-error' : undefined}
                  />
                  {errors.emergencyPhone && (
                    <p id="emergencyPhone-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.emergencyPhone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold mb-2">
                  Previous Experience (if any)
                </label>
                <textarea
                  id="experience"
                  rows={4}
                  {...register('experience')}
                  placeholder="Describe any previous firefighting, rescue, or emergency response experience..."
                  className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red resize-none"
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold mb-2">
                  Why do you want to volunteer? <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                </label>
                <textarea
                  id="motivation"
                  rows={4}
                  {...register('motivation', { required: 'Please tell us why you want to volunteer' })}
                  placeholder="Tell us about your motivation to serve as a volunteer firefighter..."
                  className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red resize-none"
                  aria-invalid={errors.motivation ? 'true' : 'false'}
                  aria-describedby={errors.motivation ? 'motivation-error' : undefined}
                />
                {errors.motivation && (
                  <p id="motivation-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.motivation.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-semibold mb-2">
                  Availability <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                </label>
                <textarea
                  id="availability"
                  rows={3}
                  {...register('availability', { required: 'Please describe your availability' })}
                  placeholder="Describe your availability for training and emergency response..."
                  className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red resize-none"
                  aria-invalid={errors.availability ? 'true' : 'false'}
                  aria-describedby={errors.availability ? 'availability-error' : undefined}
                />
                {errors.availability && (
                  <p id="availability-error" className="mt-1 text-sm text-fire-red" role="alert">{errors.availability.message}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="backgroundCheck"
                  {...register('backgroundCheck', {
                    required: 'You must agree to a background check',
                  })}
                  className="mt-1 mr-3 w-5 h-5 text-fire-red focus:ring-fire-red"
                  aria-invalid={errors.backgroundCheck ? 'true' : 'false'}
                  aria-describedby={errors.backgroundCheck ? 'backgroundCheck-error' : undefined}
                />
                <label htmlFor="backgroundCheck" className="text-sm text-fire-dark/70">
                  I understand that a background check may be required, 
                  and I consent to these checks. <span className="text-fire-red" aria-hidden="true">*</span><span className="sr-only"> (required)</span>
                </label>
              </div>
              {errors.backgroundCheck && (
                <p id="backgroundCheck-error" className="text-sm text-fire-red" role="alert">{errors.backgroundCheck.message}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
