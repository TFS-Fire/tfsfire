import { Heart, DollarSign, Shield, Users, CheckCircle, ExternalLink, Lock } from 'lucide-react'

const STRIPE_DONATION_URL = 'https://donate.stripe.com/cNi8wRc4O31kc2Eg596AM00'

export default function DonatePage() {
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

      {/* Donation CTA */}
      <section className="section-padding bg-fire-dark/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
            <p className="text-fire-dark/70 mb-8">
              Donations are processed securely through Stripe. You&apos;ll be taken to
              our donation page where you can choose your amount and payment method.
            </p>

            <a
              href={STRIPE_DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-lg py-4 inline-flex items-center justify-center gap-2"
            >
              Donate
              <span className="sr-only">(opens in new tab)</span>
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>

            <p className="text-center text-sm text-fire-dark/70 mt-4 flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              Secure payment processing via Stripe
            </p>

            <div className="mt-8 p-4 bg-fire-red/5 border-l-4 border-fire-red rounded text-left">
              <p className="text-sm text-fire-dark/70">
                <strong>Note:</strong> TFS Volunteer Fire Department is a 501(c)(3)
                nonprofit organization. Your donation may be tax-deductible. Please
                consult with a tax professional for specific advice.
              </p>
            </div>
          </div>
        </div>
      </section>

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
