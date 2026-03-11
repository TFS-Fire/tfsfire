import Link from 'next/link'
import { Shield, AlertTriangle, FileText, Phone, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Safety Resources',
  description: 'Fire safety resources, tips, and educational materials from TFS Volunteer Fire Department.',
}

export default function SafetyResourcesPage() {
  const safetyTips = [
    {
      category: 'Home Fire Safety',
      icon: Shield,
      tips: [
        'Install smoke detectors on every level of your home and test them monthly',
        'Create and practice a home fire escape plan with your family',
        'Keep flammable materials at least 3 feet away from heat sources',
        'Never leave cooking unattended',
        'Keep fire extinguishers accessible on each level of your home',
        'Regularly clean chimneys and heating equipment',
      ],
    },
    {
      category: 'Wildfire Preparedness',
      icon: AlertTriangle,
      tips: [
        'Create a defensible space around your home by clearing vegetation',
        'Use fire-resistant building materials for your home',
        'Keep gutters and roofs clear of leaves and debris',
        'Have an evacuation plan and emergency supply kit ready',
        'Stay informed about fire weather conditions',
        'Know multiple evacuation routes from your area',
      ],
    },
    {
      category: 'Emergency Preparedness',
      icon: Phone,
      tips: [
        'Program emergency contacts in your phone',
        'Keep a well-stocked first aid kit at home',
        'Have an emergency supply kit with water, food, and medications',
        'Know your address and landmarks for emergency responders',
        'Stay informed about local emergency alerts',
        'Practice emergency drills with your family',
      ],
    },
  ]

  const resources = [
    {
      title: 'Firewise USA®',
      description: 'NFPA program to help you prepare your property for wildfire season and create defensible space.',
      type: 'External',
      href: 'https://www.nfpa.org/education-and-research/wildfire/firewise-usa',
    },
    {
      title: 'Emergency Contact Card Template',
      description: 'Printable card template for keeping emergency contacts handy.',
      type: 'PDF',
    },
    {
      title: 'Fire Escape Plan Worksheet',
      description: 'Worksheet to help families create and practice fire escape plans.',
      type: 'PDF',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white bg-fire-dark">
        <div className="relative z-10 container-custom text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-fire-orange" aria-hidden="true" />
          <h1 className="mb-4">Safety Resources</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fire safety tips, educational materials, and preparedness guides to keep you and your family safe
          </p>
        </div>
      </section>

      {/* Safety Tips by Category */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Fire Safety Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {safetyTips.map((section, index) => {
              const Icon = section.icon
              return (
                <div key={index} className="bg-fire-dark/5 p-6 rounded-lg border border-fire-red/20">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-fire-red mr-3" aria-hidden="true" />
                    <h3 className="text-xl font-bold">{section.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-fire-red mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-fire-dark/80">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <h2 className="text-center mb-12">Educational Resources</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-fire-red/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <FileText className="w-6 h-6 text-fire-red mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs bg-fire-orange/10 text-fire-orange px-2 py-1 rounded font-semibold">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-fire-dark">{resource.title}</h3>
                <p className="text-fire-dark/70 mb-4">{resource.description}</p>
                {'href' in resource ? (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fire-red hover:underline font-semibold flex items-center"
                  >
                    Visit Resource
                    <span className="ml-2">→</span>
                  </a>
                ) : (
                  <button className="text-fire-red hover:underline font-semibold flex items-center">
                    Download Resource
                    <span className="ml-2">→</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Reminders */}
      <section className="section-padding bg-fire-red text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Remember: If There&apos;s a Fire</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" aria-hidden="true" />
                  Get Out
                </h3>
                <p>Leave immediately. Don&apos;t stop for belongings. Close doors behind you as you leave.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Phone className="w-6 h-6 mr-2" aria-hidden="true" />
                  Call 9-1-1
                </h3>
                <p>Call from outside your home or a neighbor&apos;s house. Never go back inside a burning building.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Shield className="w-6 h-6 mr-2" aria-hidden="true" />
                  Stay Out
                </h3>
                <p>Once you&apos;re out, stay out. Wait for firefighters at your meeting place.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Stay Low</h3>
                <p>If you must escape through smoke, crawl low where the air is cleaner and cooler.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Need More Help?</h2>
            <p className="text-lg mb-6 text-fire-dark/70">
              For additional safety resources, fire inspections, or to schedule a safety presentation, contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/about/services#prevention" className="btn-outline">
                Learn About Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
