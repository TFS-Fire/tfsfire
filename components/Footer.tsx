import Link from 'next/link'
import { Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-fire-dark text-white section-padding" role="contentinfo">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About TFS</h3>
            <p className="text-white/80 mb-4">
              Protecting Trego, Fortine and Stryker Montana with a volunteer-based fire service dedicated to emergency response, fire prevention, and community safety.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/TFSVolunteerFireDepartment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/services" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  Volunteer
                </Link>
              </li>
              {/*<li>
                <Link href="/donate" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  Gallery
                </Link>
              </li>*/}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-fire-orange mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/80">
                  11020 HWY 93S<br />
                  Fortine, MT 59918
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-fire-orange flex-shrink-0" aria-hidden="true" />
                <a href="tel:+14068824810" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  (406) 882-4810
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-fire-orange flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@tfsfire.org" className="text-white/80 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                  info@tfsfire.org
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h3 className="text-xl font-bold mb-4">Emergency</h3>
            <p className="text-white/80 mb-4">
              For emergencies, dial <strong className="text-fire-red">9-1-1</strong>
            </p>
            <p className="text-white/80 text-sm">
              For non-emergency inquiries, use our <Link href="/contact" className="text-fire-orange hover:underline focus:outline-none focus:ring-2 focus:ring-fire-red rounded">contact form</Link>.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} TFS Volunteer Fire Department. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-fire-orange transition-colors focus:outline-none focus:ring-2 focus:ring-fire-red rounded">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
