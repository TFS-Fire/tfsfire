'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  file?: FileList
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await addDoc(collection(db, 'contactSubmissions'), {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        createdAt: new Date().toISOString(),
      })

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="relative z-10 container-custom text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with TFS Volunteer Fire Department
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg mb-8 text-fire-dark/70">
                For non-emergency inquiries, please use the contact form or reach us directly. For emergencies, dial 9-1-1.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-fire-red/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-fire-red" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-fire-dark/70">
                      11020 HWY 93S<br />
                      Fortine, MT 59918
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-fire-orange/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-fire-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-fire-dark/70">
                      <a href="tel:+14068824810" className="hover:text-fire-red transition-colors">
                        (406) 882-4810
                      </a>
                    </p>
                    <p className="text-sm text-fire-dark/60 mt-1">Non-emergency line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-fire-yellow/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-fire-yellow" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-fire-dark/70">
                      <a href="mailto:info@tfsfire.org" className="hover:text-fire-red transition-colors">
                        info@tfsfire.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-fire-red/5 border-l-4 border-fire-red rounded">
                <h3 className="font-bold mb-2">Emergency Response</h3>
                <p className="text-fire-dark/70">
                  For emergencies, always dial <strong className="text-fire-red">9-1-1</strong>. Our dispatch center will immediately notify the appropriate TFS units.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" aria-hidden="true" />
                  <p className="text-green-800">Message sent successfully! We&apos;ll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" aria-hidden="true" />
                  <p className="text-red-800">There was an error sending your message. Please try again or call us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name <span className="text-fire-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-fire-red" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email <span className="text-fire-red">*</span>
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
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-fire-red" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject <span className="text-fire-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    aria-invalid={errors.subject ? 'true' : 'false'}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-fire-red" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message <span className="text-fire-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red resize-none"
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-fire-red" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-semibold mb-2">
                    Attach File (Optional)
                  </label>
                  <input
                    type="file"
                    id="file"
                    {...register('file')}
                    className="w-full px-4 py-3 border border-fire-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <p className="mt-1 text-sm text-fire-dark/60">
                    Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
