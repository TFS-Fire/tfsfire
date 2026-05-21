import Image from 'next/image'
import Link from 'next/link'
import { AlertTriangle, Users, Calendar, Shield, Flame, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'TFS Fire | Home',
  description: 'Protecting Fortine and Beyond. TFS Volunteer Fire Department serving the community with emergency response, fire prevention, and wildfire expertise.',
}

export default function HomePage() {
  const stats = {
    responses: 63,
    volunteers: 24,
    stations: 2,
    trainingHours: 100,
  }
    {/*
  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'High fire danger today. Please exercise caution with outdoor activities.',
      date: '2024-03-15',
    },
  ]
    */}
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left">
              <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-fire-dark">
                Protecting Our Rural Community
              </h1>
              <p className="text-lg md:text-xl mb-8 text-fire-dark/80 max-w-2xl md:max-w-none mx-auto md:mx-0">
                Dedicated volunteers serving our community 24/7 with courage, commitment, and compassion. When emergencies strike, we&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/volunteer" className="btn-primary">
                  Become a Volunteer
                </Link>
                <Link href="/donate" className="btn-secondary">
                  Support Our Mission
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/station1.jpg"
                alt="TFS Volunteer Fire Department firefighters and fire station"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

   {/* Alerts Section
      {alerts.length > 0 && (
        <section className="bg-fire-orange/10 border-b-4 border-fire-orange py-4">
          <div className="container-custom">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="text-fire-orange w-6 h-6 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <h2 className="text-lg font-bold text-fire-dark mb-1">Active Alert</h2>
                <p className="text-fire-dark">{alerts[0].message}</p>
                <p className="text-sm text-fire-dark/70 mt-1">Updated: {new Date(alerts[0].date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </section>
      )} */}

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Impact In 2025</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-fire-red/5 rounded-lg border border-fire-red/20">
              <div className="text-4xl md:text-5xl font-bold text-fire-red mb-2">{stats.responses}</div>
              <div className="text-fire-dark font-semibold">Incident Responses</div>
            </div>
            <div className="text-center p-6 bg-fire-orange/5 rounded-lg border border-fire-orange/20">
              <div className="text-4xl md:text-5xl font-bold text-fire-orange-dark mb-2">{stats.volunteers}</div>
              <div className="text-fire-dark font-semibold">Active Volunteers</div>
            </div>
            <div className="text-center p-6 bg-fire-yellow/5 rounded-lg border border-fire-yellow/20">
              <div className="text-4xl md:text-5xl font-bold text-fire-yellow-dark mb-2">{stats.stations}</div>
              <div className="text-fire-dark font-semibold">Fire Stations</div>
            </div>
            <div className="text-center p-6 bg-fire-red/5 rounded-lg border border-fire-red/20">
              <div className="text-4xl md:text-5xl font-bold text-fire-red mb-2">{stats.trainingHours}</div>
              <div className="text-fire-dark font-semibold">Training Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chief's Message */}
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">A Message from the Chief</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                Welcome to the TFS Volunteer Fire Department website. As Chief, I&apos;m proud to lead a dedicated team of volunteers who selflessly serve our community in Fortine and the surrounding areas.
              </p>
              <p className="mb-4">
                Our department specializes in emergency response, fire prevention education, and specialized wildfire response in our rural, forested region. Every member of our team is committed to protecting lives, property, and our beautiful Montana landscape.
              </p>
              <p className="mb-4">
                Whether you&apos;re a resident seeking safety information, a potential volunteer looking to serve, or a community member wanting to support our mission, we&apos;re here for you. Thank you for your continued support.
              </p>
              <p className="font-semibold">— Chief Isaiah Williams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-fire-dark text-white p-6 rounded-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 mb-4 text-fire-orange" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Emergency Response</h3>
              <p className="text-white/80 mb-4">24/7 emergency response for fires, rescue operations, and hazardous materials incidents.</p>
              <Link href="/about/services#emergency" className="text-fire-orange hover:underline flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-fire-dark text-white p-6 rounded-lg hover:shadow-xl transition-shadow">
              <Flame className="w-12 h-12 mb-4 text-fire-orange" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Wildfire Response</h3>
              <p className="text-white/80 mb-4">Specialized training and equipment for wildfire management in forested areas.</p>
              <Link href="/about/services#wildfire" className="text-fire-orange hover:underline flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-fire-dark text-white p-6 rounded-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 mb-4 text-fire-orange" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Community Outreach</h3>
              <p className="text-white/80 mb-4">Fire prevention education, safety programs, and community events.</p>
              <Link href="/about/services#outreach" className="text-fire-orange hover:underline flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-fire-dark text-white p-6 rounded-lg hover:shadow-xl transition-shadow">
              <Calendar className="w-12 h-12 mb-4 text-fire-orange" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Fire Prevention</h3>
              <p className="text-white/80 mb-4">Inspections, safety tips, and educational resources to prevent fires.</p>
              <Link href="/about/services#prevention" className="text-fire-orange hover:underline flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-fire-red text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Get Involved</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in protecting our community. Whether you want to volunteer, donate, or learn more about fire safety, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn-secondary bg-white text-fire-red hover:bg-fire-orange hover:text-white">
              Volunteer Today
            </Link>
            <Link href="/donate" className="btn-outline border-white text-white hover:bg-white hover:text-fire-red">
              Make a Donation
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-fire-red">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
