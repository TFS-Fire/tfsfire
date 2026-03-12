import Link from 'next/link'
import { Shield, Flame, Users, Calendar, CheckCircle, Phone } from 'lucide-react'

export const metadata = {
  title: 'Services',
  description: 'TFS Volunteer Fire Department services including emergency response, fire prevention, community outreach, and specialized wildfire response.',
}

export default function ServicesPage() {
  const preventionTips = [
    'Install and maintain smoke detectors on every level of your home',
    'Create and practice a home escape plan with your family',
    'Keep flammable materials away from heat sources',
    'Regularly clean chimneys and heating equipment',
    'Store gasoline and other flammable liquids properly',
    'Never leave cooking unattended',
    'Keep fire extinguishers accessible and know how to use them',
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="container-custom text-center">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive fire and emergency services for Fortine and surrounding communities
          </p>
        </div>
      </section>

      {/* Emergency Response */}
      <section id="emergency" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 text-fire-red mr-4" aria-hidden="true" />
              <h2 className="text-3xl">Emergency Response</h2>
            </div>
            <p className="text-lg mb-6">
              The TFS Volunteer Fire Department provides 24/7 emergency response services to Fortine and the surrounding area. Our highly trained volunteers are ready to respond to a wide range of emergencies.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-fire-red/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Fire Suppression</h3>
                <p>Structure fires, vehicle fires, and other fire emergencies with rapid response and professional firefighting techniques.</p>
              </div>
              <div className="bg-fire-yellow/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Rescue Operations</h3>
                <p>Vehicle extrication, water rescue, and technical rescue operations for various emergency situations.</p>
              </div>
              <div className="bg-fire-red/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Hazardous Materials</h3>
                <p>Response to hazardous material incidents with proper containment and mitigation procedures.</p>
              </div>
            </div>
            <div className="bg-fire-dark text-white p-6 rounded-lg">
              <p className="font-semibold mb-2">For Emergencies, Dial 9-1-1</p>
              <p className="text-white/80">Our dispatch center will immediately notify the appropriate TFS units for rapid response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wildfire Response */}
      <section id="wildfire" className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Flame className="w-12 h-12 text-fire-orange mr-4" aria-hidden="true" />
              <h2 className="text-3xl">Wildfire Response</h2>
            </div>
            <p className="text-lg mb-6">
              Given our location in a rural, forested area, TFS has developed specialized expertise in wildfire management and suppression. Our team receives advanced training in wildland firefighting techniques.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Capabilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Wildland fire suppression and containment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Structure protection during wildfires</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Fire line construction and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mutual aid support for regional incidents</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Equipment</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Wildland fire engines and tankers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Portable pumps and water supply systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Specialized wildland firefighting gear</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-orange mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Communication and GPS equipment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Prevention */}
      <section id="prevention" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Calendar className="w-12 h-12 text-fire-yellow mr-4" aria-hidden="true" />
              <h2 className="text-3xl">Fire Prevention</h2>
            </div>
            <p className="text-lg mb-6">
              Prevention is the best defense against fires. TFS offers comprehensive fire prevention services including safety education and community programs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* <div>
                <h3 className="text-xl font-bold mb-4">Fire Safety Inspections</h3>
                <p className="mb-4">
                  We offer free fire safety inspections for homes and businesses. Our trained personnel will identify potential hazards and provide recommendations for improvement.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Request an Inspection
                </Link>
              </div> */}
              <div>
                <h3 className="text-xl font-bold mb-4">Fire Safety Tips</h3>
                <ul className="space-y-2">
                  {preventionTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section id="outreach" className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 text-fire-red mr-4" aria-hidden="true" />
              <h2 className="text-3xl">Community Outreach</h2>
            </div>
            <p className="text-lg mb-6">
              TFS is committed to building strong community relationships through education, events, and public engagement programs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3">Educational Programs</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>School fire safety presentations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Community fire safety workshops</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Station tours and demonstrations</span>
                  </li>
                </ul>
                <Link href="/events" className="text-fire-red hover:underline font-semibold">
                  View Upcoming Events →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3">Community Events</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Open house events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Fire prevention week activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Community safety fairs</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-fire-red hover:underline font-semibold">
                  Request a Program →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-fire-red text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Need Our Services?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            For non-emergency inquiries about our services, inspections, or community programs, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-fire-red hover:bg-fire-orange hover:text-white">
              Contact Us
            </Link>
            <a href="tel:+14068824810" className="btn-outline border-white text-white hover:bg-white hover:text-fire-red flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" aria-hidden="true" />
              (406) 882-4810
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
