'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavItem {
  label: string
  href?: string
  submenu?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    label: 'About',
    submenu: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/about/services' },
    ],
  },
  {
    label: 'Community',
    submenu: [
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Events', href: '/events' },
      { label: 'Safety Resources', href: '/safety-resources' },
    ],
  },
  { href: '/donate', label: 'Donate' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-fire-dark shadow-lg' : 'bg-fire-dark/95 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 rounded"
            aria-label="TFS Volunteer Fire Department Home"
          >
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center relative">
              <Image
                src="/logo.svg"
                alt="TFS Volunteer Fire Department Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg">TFS Fire Department</div>
              <div className="text-fire-orange text-xs">Lincoln County, Montana</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                ref={(el) => {
                  if (item.submenu) {
                    dropdownRefs.current[item.label] = el
                  }
                }}
                onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
                onMouseLeave={(e) => {
                  // Only close if mouse is leaving to go outside this element
                  const relatedTarget = e.relatedTarget as Node
                  if (item.submenu && (!relatedTarget || !e.currentTarget.contains(relatedTarget))) {
                    setOpenDropdown(null)
                  }
                }}
              >
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center px-4 py-2 text-white hover:text-fire-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 rounded"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-fire-dark border border-fire-red/20 rounded-lg shadow-lg min-w-[200px] z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-white hover:bg-fire-red hover:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:ring-2 focus:ring-fire-red"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="px-4 py-2 text-white hover:text-fire-orange transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 rounded"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-fire-red focus:ring-offset-2 rounded"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10">
            <div className="pt-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-white hover:bg-white/10 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fire-red"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-6 space-y-1 mt-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => {
                                setIsOpen(false)
                                setOpenDropdown(null)
                              }}
                              className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fire-red"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-white hover:bg-white/10 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fire-red"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
