import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import EmergencyBanner from '@/components/EmergencyBanner'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://tfsfire.org'),
  title: {
    default: 'TFS Volunteer Fire Department',
    template: '%s | TFS Volunteer Fire Department',
  },
  description: 'Protecting Fortine and Beyond. Volunteer fire department serving the Fortine, Montana area with emergency response, fire prevention, and community outreach.',
  keywords: ['fire department', 'volunteer fire', 'Fortine Montana', 'emergency response', 'wildfire', 'fire safety', 'Trego Montana', 'Stryker Montana', 'Eureka Montana'],
  authors: [{ name: 'TFS Volunteer Fire Department' }],
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tfsfire.org',
    siteName: 'TFS Volunteer Fire Department',
    title: 'TFS Volunteer Fire Department',
    description: 'Protecting Fortine and Beyond. Volunteer fire department serving the Fortine, Montana area.',
    images: [{ url: '/og-image.gif', type: 'image/gif' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TFS Volunteer Fire Department',
    description: 'Protecting Fortine and Beyond.',
    images: ['/og-image.gif'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-fire-red focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navigation />
        <EmergencyBanner />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
